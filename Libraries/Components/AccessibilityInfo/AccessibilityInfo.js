/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict-local
 * @format
 */

import RCTDeviceEventEmitter from '../../EventEmitter/RCTDeviceEventEmitter';
import {sendAccessibilityEvent} from '../../Renderer/shims/ReactNative';
import type {HostComponent} from '../../Renderer/shims/ReactNativeTypes';
import Platform from '../../Utilities/Platform';
import type EventEmitter from '../../vendor/emitter/EventEmitter';
import type {EventSubscription} from '../../vendor/emitter/EventEmitter';
import NativeAccessibilityInfoAndroid from './NativeAccessibilityInfo';
import NativeAccessibilityManagerApple from './NativeAccessibilityManager';
import legacySendAccessibilityEvent from './legacySendAccessibilityEvent';
import type {ElementRef} from 'react';

// Events that are only supported on iOS.
type AccessibilityEventDefinitionsIOS = {
  announcementFinished: [{announcement: string, success: boolean}],
  boldTextChanged: [boolean],
  grayscaleChanged: [boolean],
  invertColorsChanged: [boolean],
  reduceTransparencyChanged: [boolean],
};

type AccessibilityEventDefinitions = {
  ...AccessibilityEventDefinitionsIOS,
  highContrastChanged: [boolean], // TODO(macOS GH#774) - highContrastChanged is used on macOS
  change: [boolean], // screenReaderChanged
  reduceMotionChanged: [boolean],
  screenReaderChanged: [boolean],
};

type AccessibilityEventTypes = 'click' | 'focus';

// Mapping of public event names to platform-specific event names.
const EventNames: Map<$Keys<AccessibilityEventDefinitions>, string> =
  Platform.OS === 'android'
    ? new Map([
        ['change', 'touchExplorationDidChange'],
        ['reduceMotionChanged', 'reduceMotionDidChange'],
        ['screenReaderChanged', 'touchExplorationDidChange'],
      ])
    : new Map([
        ['announcementFinished', 'announcementFinished'],
        ['boldTextChanged', 'boldTextChanged'],
        ['change', 'screenReaderChanged'],
        ['grayscaleChanged', 'grayscaleChanged'],
        ['highContrastChanged', 'highContrastChanged'],
        ['invertColorsChanged', 'invertColorsChanged'],
        ['reduceMotionChanged', 'reduceMotionChanged'],
        ['reduceTransparencyChanged', 'reduceTransparencyChanged'],
        ['screenReaderChanged', 'screenReaderChanged'],
      ]);

/**
 * Sometimes it's useful to know whether or not the device has a screen reader
 * that is currently active. The `AccessibilityInfo` API is designed for this
 * purpose. You can use it to query the current state of the screen reader as
 * well as to register to be notified when the state of the screen reader
 * changes.
 *
 * See https://reactnative.dev/docs/accessibilityinfo.html
 */
const AccessibilityInfo = {
  /**
   * Query whether bold text is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when bold text is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isBoldTextEnabled
   */
  isBoldTextEnabled(): Promise<boolean> {
    // [TODO(macOS GH#774) - rework logic to return Promise.resolve(false) on macOS
    if (Platform.OS === 'ios') {
      return new Promise((resolve, reject) => {
        if (NativeAccessibilityManagerApple != null) {
          NativeAccessibilityManagerApple.getCurrentBoldTextState(
            resolve,
            reject,
          );
        } else {
          reject(null);
        }
      });
    } else {
      return Promise.resolve(false);
    }
    // ]TODO(macOS GH#774)
  },

  /**
   * Query whether grayscale is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when grayscale is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isGrayscaleEnabled
   */
  isGrayscaleEnabled(): Promise<boolean> {
    // [TODO(macOS GH#774) - rework logic to return Promise.resolve(false) on macOS
    if (Platform.OS === 'ios') {
      return new Promise((resolve, reject) => {
        if (NativeAccessibilityManagerApple != null) {
          NativeAccessibilityManagerApple.getCurrentGrayscaleState(
            resolve,
            reject,
          );
        } else {
          reject(null);
        }
      });
    } else {
      return Promise.resolve(false);
    }
    // ]TODO(macOS GH#774)
  },

  /**
   * macOS only
   */
  isHighContrastEnabled: function(): Promise<boolean> {
    if (Platform.OS === 'macos') {
      return new Promise((resolve, reject) => {
        if (NativeAccessibilityManagerApple) {
          NativeAccessibilityManagerApple.getCurrentHighContrastState(
            resolve,
            reject,
          );
        } else {
          reject(reject);
        }
      });
    } else {
      return Promise.resolve(false);
    }
  },

  /**
   * Query whether inverted colors are currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when invert color is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isInvertColorsEnabled
   */
  isInvertColorsEnabled(): Promise<boolean> {
    // [TODO(macOS GH#774) - rework logic to return Promise.resolve(false) on macOS
    if (Platform.OS === 'ios') {
      return new Promise((resolve, reject) => {
        if (NativeAccessibilityManagerApple != null) {
          NativeAccessibilityManagerApple.getCurrentInvertColorsState(
            resolve,
            reject,
          );
        } else {
          reject(null);
        }
      });
    } else {
      return Promise.resolve(false);
    }
    // ]TODO(macOS GH#774)
  },

  /**
   * Query whether reduced motion is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when a reduce motion is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isReduceMotionEnabled
   */
  isReduceMotionEnabled(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'android') {
        if (NativeAccessibilityInfoAndroid != null) {
          NativeAccessibilityInfoAndroid.isReduceMotionEnabled(resolve);
        } else {
          reject(null);
        }
      } else {
        if (NativeAccessibilityManagerApple != null) {
          NativeAccessibilityManagerApple.getCurrentReduceMotionState(
            resolve,
            reject,
          );
        } else {
          reject(null);
        }
      }
    });
  },

  /**
   * Query whether reduced transparency is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when a reduce transparency is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isReduceTransparencyEnabled
   */
  isReduceTransparencyEnabled(): Promise<boolean> {
    // [TODO(macOS GH#774) - rework logic to return Promise.resolve(false) on macOS
    if (Platform.OS === 'ios') {
      return new Promise((resolve, reject) => {
        if (NativeAccessibilityManagerApple != null) {
          NativeAccessibilityManagerApple.getCurrentReduceTransparencyState(
            resolve,
            reject,
          );
        } else {
          reject(null);
        }
      });
    } else {
      return Promise.resolve(false);
    }
    // ]TODO(macOS GH#774)
  },

  /**
   * Query whether a screen reader is currently enabled.
   *
   * Returns a promise which resolves to a boolean.
   * The result is `true` when a screen reader is enabled and `false` otherwise.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#isScreenReaderEnabled
   */
  isScreenReaderEnabled(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      if (Platform.OS === 'android') {
        if (NativeAccessibilityInfoAndroid != null) {
          NativeAccessibilityInfoAndroid.isTouchExplorationEnabled(resolve);
        } else {
          reject(null);
        }
      } else {
        if (NativeAccessibilityManagerApple != null) {
          NativeAccessibilityManagerApple.getCurrentVoiceOverState(
            resolve,
            reject,
          );
        } else {
          reject(null);
        }
      }
    });
  },

  /**
   * Add an event handler. Supported events:
   *
   * - `reduceMotionChanged`: Fires when the state of the reduce motion toggle changes.
   *   The argument to the event handler is a boolean. The boolean is `true` when a reduce
   *   motion is enabled (or when "Transition Animation Scale" in "Developer options" is
   *   "Animation off") and `false` otherwise.
   * - `screenReaderChanged`: Fires when the state of the screen reader changes. The argument
   *   to the event handler is a boolean. The boolean is `true` when a screen
   *   reader is enabled and `false` otherwise.
   *
   * These events are only supported on iOS:
   *
   * - `boldTextChanged`: iOS-only event. Fires when the state of the bold text toggle changes.
   *   The argument to the event handler is a boolean. The boolean is `true` when a bold text
   *   is enabled and `false` otherwise.
   * - `grayscaleChanged`: iOS-only event. Fires when the state of the gray scale toggle changes.
   *   The argument to the event handler is a boolean. The boolean is `true` when a gray scale
   *   is enabled and `false` otherwise.
   * - `invertColorsChanged`: iOS-only event. Fires when the state of the invert colors toggle
   *   changes. The argument to the event handler is a boolean. The boolean is `true` when a invert
   *   colors is enabled and `false` otherwise.
   * - `reduceTransparencyChanged`: iOS-only event. Fires when the state of the reduce transparency
   *   toggle changes.  The argument to the event handler is a boolean. The boolean is `true`
   *   when a reduce transparency is enabled and `false` otherwise.
   * - `announcementFinished`: iOS-only event. Fires when the screen reader has
   *   finished making an announcement. The argument to the event handler is a
   *   dictionary with these keys:
   *     - `announcement`: The string announced by the screen reader.
   *     - `success`: A boolean indicating whether the announcement was
   *       successfully made.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#addeventlistener
   */
  addEventListener<K: $Keys<AccessibilityEventDefinitions>>(
    eventName: K,
    handler: (...$ElementType<AccessibilityEventDefinitions, K>) => void,
  ): EventSubscription {
    const deviceEventName = EventNames.get(eventName);
    return deviceEventName == null
      ? {remove(): void {}}
      : RCTDeviceEventEmitter.addListener(deviceEventName, handler);
  },

  /**
   * Set accessibility focus to a React component.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#setaccessibilityfocus
   */
  setAccessibilityFocus(reactTag: number): void {
    legacySendAccessibilityEvent(reactTag, 'focus');
  },

  /**
   * Send a named accessibility event to a HostComponent.
   */
  sendAccessibilityEvent_unstable(
    handle: ElementRef<HostComponent<mixed>>,
    eventType: AccessibilityEventTypes,
  ) {
    // iOS only supports 'focus' event types
    if (Platform.OS === 'ios' && eventType === 'click') {
      return;
    }
    // route through React renderer to distinguish between Fabric and non-Fabric handles
    sendAccessibilityEvent(handle, eventType);
  },

  /**
   * Post a string to be announced by the screen reader.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#announceforaccessibility
   */
  announceForAccessibility(announcement: string): void {
    if (Platform.OS === 'android') {
      NativeAccessibilityInfoAndroid?.announceForAccessibility(announcement);
    } else {
      NativeAccessibilityManagerApple?.announceForAccessibility(announcement);
    }
  },

  /**
   * @deprecated Use `remove` on the EventSubscription from `addEventListener`.
   */
  removeEventListener<K: $Keys<AccessibilityEventDefinitions>>(
    eventName: K,
    handler: (...$ElementType<AccessibilityEventDefinitions, K>) => void,
  ): void {
    // NOTE: This will report a deprecation notice via `console.error`.
    const deviceEventName = EventNames.get(eventName);
    if (deviceEventName != null) {
      // $FlowIgnore[incompatible-cast]
      (RCTDeviceEventEmitter: EventEmitter<$FlowFixMe>).removeListener(
        'deviceEventName',
        // $FlowFixMe[invalid-tuple-arity]
        handler,
      );
    }
  },

  /**
   * Get the recommended timeout for changes to the UI needed by this user.
   *
   * See https://reactnative.dev/docs/accessibilityinfo.html#getrecommendedtimeoutmillis
   */
  getRecommendedTimeoutMillis(originalTimeout: number): Promise<number> {
    if (Platform.OS === 'android') {
      return new Promise((resolve, reject) => {
        if (NativeAccessibilityInfoAndroid?.getRecommendedTimeoutMillis) {
          NativeAccessibilityInfoAndroid.getRecommendedTimeoutMillis(
            originalTimeout,
            resolve,
          );
        } else {
          resolve(originalTimeout);
        }
      });
    } else {
      return Promise.resolve(originalTimeout);
    }
  },
};

export default AccessibilityInfo;

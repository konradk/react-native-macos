/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

'use strict';

const {getDefaultConfig} = require('@react-native/metro-config');
const {mergeConfig} = require('metro-config');
const path = require('path');

/**
 * This cli config is needed for development purposes, e.g. for running
 * integration tests during local development or on CI services.
 */
const config = {
  // Make Metro able to resolve required packages that might be imported from /packages/react-native
  watchFolders: [
    path.resolve(__dirname, '../../node_modules'),
    path.resolve(__dirname, '../assets'),
    path.resolve(__dirname, '../normalize-color'),
    path.resolve(__dirname, '../polyfills'),
    path.resolve(__dirname, '../virtualized-lists'),
  ],
  resolver: {
    // $FlowFixMe[signature-verification-failure] Can't infer RegExp type.
    blockList: [/buck-out/, /sdks\/hermes/],
    extraNodeModules: {
      'react-native': __dirname,
    },
    platforms: ['ios', 'macos', 'android'],
  },
};

// [macOS Github#1728: Investigate removing this diff
// In scripts/run-ci-e2e-tests.js this file gets copied to a new app, in which
// case these settings do not apply.
if (!process.env.REACT_NATIVE_RUNNING_E2E_TESTS) {
  const InitializeCore = require.resolve('./Libraries/Core/InitializeCore');
  const AssetRegistry = require.resolve('./Libraries/Image/AssetRegistry');
  config.serializer.getModulesRunBeforeMainModule = () => [InitializeCore];
  config.transformer.assetRegistryPath = AssetRegistry;
}
// macOS]

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

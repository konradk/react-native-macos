import*as e from"../common/common.js";import*as t from"../i18n/i18n.js";const i={preserveLogUponNavigation:"Preserve log upon navigation",doNotPreserveLogUponNavigation:"Do not preserve log upon navigation",pauseOnExceptions:"Pause on exceptions",doNotPauseOnExceptions:"Do not pause on exceptions",disableJavascript:"Disable JavaScript",enableJavascript:"Enable JavaScript",disableAsyncStackTraces:"Disable async stack traces",doNotCaptureAsyncStackTraces:"Do not capture async stack traces",captureAsyncStackTraces:"Capture async stack traces",showRulersOnHover:"Show rulers on hover",doNotShowRulersOnHover:"Do not show rulers on hover",showAreaNames:"Show area names",showGridNamedAreas:"Show grid named areas",doNotShowGridNamedAreas:"Do not show grid named areas",showTrackSizes:"Show track sizes",showGridTrackSizes:"Show grid track sizes",doNotShowGridTrackSizes:"Do not show grid track sizes",extendGridLines:"Extend grid lines",doNotExtendGridLines:"Do not extend grid lines",showLineLabels:"Show line labels",hideLineLabels:"Hide line labels",showLineNumbers:"Show line numbers",showLineNames:"Show line names",showPaintFlashingRectangles:"Show paint flashing rectangles",hidePaintFlashingRectangles:"Hide paint flashing rectangles",showLayoutShiftRegions:"Show layout shift regions",hideLayoutShiftRegions:"Hide layout shift regions",highlightAdFrames:"Highlight ad frames",doNotHighlightAdFrames:"Do not highlight ad frames",showLayerBorders:"Show layer borders",hideLayerBorders:"Hide layer borders",showCoreWebVitalsOverlay:"Show Core Web Vitals overlay",hideCoreWebVitalsOverlay:"Hide Core Web Vitals overlay",showFramesPerSecondFpsMeter:"Show frames per second (FPS) meter",hideFramesPerSecondFpsMeter:"Hide frames per second (FPS) meter",showScrollPerformanceBottlenecks:"Show scroll performance bottlenecks",hideScrollPerformanceBottlenecks:"Hide scroll performance bottlenecks",emulateAFocusedPage:"Emulate a focused page",doNotEmulateAFocusedPage:"Do not emulate a focused page",doNotEmulateCssMediaType:"Do not emulate CSS media type",noEmulation:"No emulation",emulateCssPrintMediaType:"Emulate CSS print media type",print:"print",emulateCssScreenMediaType:"Emulate CSS screen media type",screen:"screen",query:"query",emulateCssMediaType:"Emulate CSS media type",doNotEmulateCss:"Do not emulate CSS {PH1}",emulateCss:"Emulate CSS {PH1}",emulateCssMediaFeature:"Emulate CSS media feature {PH1}",doNotEmulateAnyVisionDeficiency:"Do not emulate any vision deficiency",emulateBlurredVision:"Emulate blurred vision",emulateReducedContrast:"Emulate reduced contrast",blurredVision:"Blurred vision",reducedContrast:"Reduced contrast",emulateProtanopia:"Emulate protanopia (no red)",protanopia:"Protanopia (no red)",emulateDeuteranopia:"Emulate deuteranopia (no green)",deuteranopia:"Deuteranopia (no green)",emulateTritanopia:"Emulate tritanopia (no blue)",tritanopia:"Tritanopia (no blue)",emulateAchromatopsia:"Emulate achromatopsia (no color)",achromatopsia:"Achromatopsia (no color)",emulateVisionDeficiencies:"Emulate vision deficiencies",disableLocalFonts:"Disable local fonts",enableLocalFonts:"Enable local fonts",disableAvifFormat:"Disable `AVIF` format",enableAvifFormat:"Enable `AVIF` format",disableWebpFormat:"Disable `WebP` format",enableWebpFormat:"Enable `WebP` format",enableCustomFormatters:"Enable custom formatters",enableNetworkRequestBlocking:"Enable network request blocking",disableNetworkRequestBlocking:"Disable network request blocking",enableCache:"Enable cache",disableCache:"Disable cache (while DevTools is open)",emulateAutoDarkMode:"Emulate auto dark mode",enableRemoteFileLoading:"Allow `DevTools` to load resources, such as source maps, from remote file paths. Disabled by default for security reasons."},s=t.i18n.registerUIStrings("core/sdk/sdk-meta.ts",i),a=t.i18n.getLazilyComputedLocalizedString.bind(void 0,s);e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"skipStackFramesPattern",settingType:e.Settings.SettingType.REGEX,defaultValue:""}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"skipContentScripts",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!0}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"automaticallyIgnoreListKnownThirdPartyScripts",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!0}),e.Settings.registerSettingExtension({storageType:e.Settings.SettingStorageType.Synced,settingName:"enableIgnoreListing",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!0}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.CONSOLE,storageType:e.Settings.SettingStorageType.Synced,title:a(i.preserveLogUponNavigation),settingName:"preserveConsoleLog",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:a(i.preserveLogUponNavigation)},{value:!1,title:a(i.doNotPreserveLogUponNavigation)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.DEBUGGER,settingName:"pauseOnExceptionEnabled",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,options:[{value:!0,title:a(i.pauseOnExceptions)},{value:!1,title:a(i.doNotPauseOnExceptions)}]}),e.Settings.registerSettingExtension({settingName:"pauseOnCaughtException",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1}),e.Settings.registerSettingExtension({settingName:"pauseOnUncaughtException",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.DEBUGGER,title:a(i.disableJavascript),settingName:"javaScriptDisabled",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,order:1,defaultValue:!1,options:[{value:!0,title:a(i.disableJavascript)},{value:!1,title:a(i.enableJavascript)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.DEBUGGER,title:a(i.disableAsyncStackTraces),settingName:"disableAsyncStackTraces",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1,order:2,options:[{value:!0,title:a(i.doNotCaptureAsyncStackTraces)},{value:!1,title:a(i.captureAsyncStackTraces)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.DEBUGGER,settingName:"breakpointsActive",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,defaultValue:!0}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.ELEMENTS,storageType:e.Settings.SettingStorageType.Synced,title:a(i.showRulersOnHover),settingName:"showMetricsRulers",settingType:e.Settings.SettingType.BOOLEAN,options:[{value:!0,title:a(i.showRulersOnHover)},{value:!1,title:a(i.doNotShowRulersOnHover)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.GRID,storageType:e.Settings.SettingStorageType.Synced,title:a(i.showAreaNames),settingName:"showGridAreas",settingType:e.Settings.SettingType.BOOLEAN,options:[{value:!0,title:a(i.showGridNamedAreas)},{value:!1,title:a(i.doNotShowGridNamedAreas)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.GRID,storageType:e.Settings.SettingStorageType.Synced,title:a(i.showTrackSizes),settingName:"showGridTrackSizes",settingType:e.Settings.SettingType.BOOLEAN,options:[{value:!0,title:a(i.showGridTrackSizes)},{value:!1,title:a(i.doNotShowGridTrackSizes)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.GRID,storageType:e.Settings.SettingStorageType.Synced,title:a(i.extendGridLines),settingName:"extendGridLines",settingType:e.Settings.SettingType.BOOLEAN,options:[{value:!0,title:a(i.extendGridLines)},{value:!1,title:a(i.doNotExtendGridLines)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.GRID,storageType:e.Settings.SettingStorageType.Synced,title:a(i.showLineLabels),settingName:"showGridLineLabels",settingType:e.Settings.SettingType.ENUM,options:[{title:a(i.hideLineLabels),text:a(i.hideLineLabels),value:"none"},{title:a(i.showLineNumbers),text:a(i.showLineNumbers),value:"lineNumbers"},{title:a(i.showLineNames),text:a(i.showLineNames),value:"lineNames"}],defaultValue:"lineNumbers"}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"showPaintRects",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.showPaintFlashingRectangles)},{value:!1,title:a(i.hidePaintFlashingRectangles)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"showLayoutShiftRegions",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.showLayoutShiftRegions)},{value:!1,title:a(i.hideLayoutShiftRegions)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"showAdHighlights",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.highlightAdFrames)},{value:!1,title:a(i.doNotHighlightAdFrames)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"showDebugBorders",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.showLayerBorders)},{value:!1,title:a(i.hideLayerBorders)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"showWebVitals",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.showCoreWebVitalsOverlay)},{value:!1,title:a(i.hideCoreWebVitalsOverlay)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"showFPSCounter",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.showFramesPerSecondFpsMeter)},{value:!1,title:a(i.hideFramesPerSecondFpsMeter)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"showScrollBottleneckRects",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.showScrollPerformanceBottlenecks)},{value:!1,title:a(i.hideScrollPerformanceBottlenecks)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,title:a(i.emulateAFocusedPage),settingName:"emulatePageFocus",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,defaultValue:!1,options:[{value:!0,title:a(i.emulateAFocusedPage)},{value:!1,title:a(i.doNotEmulateAFocusedPage)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"emulatedCSSMedia",settingType:e.Settings.SettingType.ENUM,storageType:e.Settings.SettingStorageType.Session,defaultValue:"",options:[{title:a(i.doNotEmulateCssMediaType),text:a(i.noEmulation),value:""},{title:a(i.emulateCssPrintMediaType),text:a(i.print),value:"print"},{title:a(i.emulateCssScreenMediaType),text:a(i.screen),value:"screen"}],tags:[a(i.query)],title:a(i.emulateCssMediaType)}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"emulatedCSSMediaFeaturePrefersColorScheme",settingType:e.Settings.SettingType.ENUM,storageType:e.Settings.SettingStorageType.Session,defaultValue:"",options:[{title:a(i.doNotEmulateCss,{PH1:"prefers-color-scheme"}),text:a(i.noEmulation),value:""},{title:a(i.emulateCss,{PH1:"prefers-color-scheme: light"}),text:t.i18n.lockedLazyString("prefers-color-scheme: light"),value:"light"},{title:a(i.emulateCss,{PH1:"prefers-color-scheme: dark"}),text:t.i18n.lockedLazyString("prefers-color-scheme: dark"),value:"dark"}],tags:[a(i.query)],title:a(i.emulateCssMediaFeature,{PH1:"prefers-color-scheme"})}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"emulatedCSSMediaFeatureForcedColors",settingType:e.Settings.SettingType.ENUM,storageType:e.Settings.SettingStorageType.Session,defaultValue:"",options:[{title:a(i.doNotEmulateCss,{PH1:"forced-colors"}),text:a(i.noEmulation),value:""},{title:a(i.emulateCss,{PH1:"forced-colors: active"}),text:t.i18n.lockedLazyString("forced-colors: active"),value:"active"},{title:a(i.emulateCss,{PH1:"forced-colors: none"}),text:t.i18n.lockedLazyString("forced-colors: none"),value:"none"}],tags:[a(i.query)],title:a(i.emulateCssMediaFeature,{PH1:"forced-colors"})}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"emulatedCSSMediaFeaturePrefersReducedMotion",settingType:e.Settings.SettingType.ENUM,storageType:e.Settings.SettingStorageType.Session,defaultValue:"",options:[{title:a(i.doNotEmulateCss,{PH1:"prefers-reduced-motion"}),text:a(i.noEmulation),value:""},{title:a(i.emulateCss,{PH1:"prefers-reduced-motion: reduce"}),text:t.i18n.lockedLazyString("prefers-reduced-motion: reduce"),value:"reduce"}],tags:[a(i.query)],title:a(i.emulateCssMediaFeature,{PH1:"prefers-reduced-motion"})}),e.Settings.registerSettingExtension({settingName:"emulatedCSSMediaFeaturePrefersContrast",settingType:e.Settings.SettingType.ENUM,storageType:e.Settings.SettingStorageType.Session,defaultValue:"",options:[{title:a(i.doNotEmulateCss,{PH1:"prefers-contrast"}),text:a(i.noEmulation),value:""},{title:a(i.emulateCss,{PH1:"prefers-contrast: more"}),text:t.i18n.lockedLazyString("prefers-contrast: more"),value:"more"},{title:a(i.emulateCss,{PH1:"prefers-contrast: less"}),text:t.i18n.lockedLazyString("prefers-contrast: less"),value:"less"},{title:a(i.emulateCss,{PH1:"prefers-contrast: custom"}),text:t.i18n.lockedLazyString("prefers-contrast: custom"),value:"custom"}],tags:[a(i.query)],title:a(i.emulateCssMediaFeature,{PH1:"prefers-contrast"})}),e.Settings.registerSettingExtension({settingName:"emulatedCSSMediaFeaturePrefersReducedData",settingType:e.Settings.SettingType.ENUM,storageType:e.Settings.SettingStorageType.Session,defaultValue:"",options:[{title:a(i.doNotEmulateCss,{PH1:"prefers-reduced-data"}),text:a(i.noEmulation),value:""},{title:a(i.emulateCss,{PH1:"prefers-reduced-data: reduce"}),text:t.i18n.lockedLazyString("prefers-reduced-data: reduce"),value:"reduce"}],title:a(i.emulateCssMediaFeature,{PH1:"prefers-reduced-data"})}),e.Settings.registerSettingExtension({settingName:"emulatedCSSMediaFeatureColorGamut",settingType:e.Settings.SettingType.ENUM,storageType:e.Settings.SettingStorageType.Session,defaultValue:"",options:[{title:a(i.doNotEmulateCss,{PH1:"color-gamut"}),text:a(i.noEmulation),value:""},{title:a(i.emulateCss,{PH1:"color-gamut: srgb"}),text:t.i18n.lockedLazyString("color-gamut: srgb"),value:"srgb"},{title:a(i.emulateCss,{PH1:"color-gamut: p3"}),text:t.i18n.lockedLazyString("color-gamut: p3"),value:"p3"},{title:a(i.emulateCss,{PH1:"color-gamut: rec2020"}),text:t.i18n.lockedLazyString("color-gamut: rec2020"),value:"rec2020"}],title:a(i.emulateCssMediaFeature,{PH1:"color-gamut"})}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"emulatedVisionDeficiency",settingType:e.Settings.SettingType.ENUM,storageType:e.Settings.SettingStorageType.Session,defaultValue:"none",options:[{title:a(i.doNotEmulateAnyVisionDeficiency),text:a(i.noEmulation),value:"none"},{title:a(i.emulateBlurredVision),text:a(i.blurredVision),value:"blurredVision"},{title:a(i.emulateReducedContrast),text:a(i.reducedContrast),value:"reducedContrast"},{title:a(i.emulateProtanopia),text:a(i.protanopia),value:"protanopia"},{title:a(i.emulateDeuteranopia),text:a(i.deuteranopia),value:"deuteranopia"},{title:a(i.emulateTritanopia),text:a(i.tritanopia),value:"tritanopia"},{title:a(i.emulateAchromatopsia),text:a(i.achromatopsia),value:"achromatopsia"}],tags:[a(i.query)],title:a(i.emulateVisionDeficiencies)}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"localFontsDisabled",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.disableLocalFonts)},{value:!1,title:a(i.enableLocalFonts)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"avifFormatDisabled",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.disableAvifFormat)},{value:!1,title:a(i.enableAvifFormat)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,settingName:"webpFormatDisabled",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,options:[{value:!0,title:a(i.disableWebpFormat)},{value:!1,title:a(i.enableWebpFormat)}],defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.CONSOLE,title:a(i.enableCustomFormatters),settingName:"customFormatters",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,title:a(i.enableNetworkRequestBlocking),settingName:"requestBlockingEnabled",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,defaultValue:!1,options:[{value:!0,title:a(i.enableNetworkRequestBlocking)},{value:!1,title:a(i.disableNetworkRequestBlocking)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.NETWORK,title:a(i.disableCache),settingName:"cacheDisabled",settingType:e.Settings.SettingType.BOOLEAN,order:0,defaultValue:!1,userActionCondition:"hasOtherClients",options:[{value:!0,title:a(i.disableCache)},{value:!1,title:a(i.enableCache)}]}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.RENDERING,title:a(i.emulateAutoDarkMode),settingName:"emulateAutoDarkMode",settingType:e.Settings.SettingType.BOOLEAN,storageType:e.Settings.SettingStorageType.Session,defaultValue:!1}),e.Settings.registerSettingExtension({category:e.Settings.SettingCategory.SOURCES,storageType:e.Settings.SettingStorageType.Synced,title:a(i.enableRemoteFileLoading),settingName:"network.enable-remote-file-loading",settingType:e.Settings.SettingType.BOOLEAN,defaultValue:!1});

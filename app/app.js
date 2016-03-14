/// <reference path="app-typings.d.ts" />
var appModuleName = 'txtToProApp';
var appModule = angular.module(appModuleName, []);
/// <reference path="app-typings.d.ts" />
/// <reference path="app-typings.d.ts" />
var TxtToPp;
(function (TxtToPp) {
    var Controllers;
    (function (Controllers) {
        var MainController = (function () {
            function MainController(proPresenterDocService) {
                var _this = this;
                this.proPresenterDocService = proPresenterDocService;
                //Start with an empty slide showing
                this.slides = [
                    {
                        content: "2 Samuel 13-18",
                        title: "Lessons in Suffering: David and Absalom"
                    },
                    {
                        content: "",
                        title: "I. David in the Palace"
                    },
                    {
                        content: "",
                        title: "II. David in the Wilderness"
                    },
                    {
                        content: "A. Humility\n    1. He had to face the truth about himself\n    2. He had to face the truth that\u00A0his basic identity was not king but sinner\nB. Prayer\n\u00A0\u00A0\u00A0\u00A0\u00A0 Psalm 55:12-14, 20-21; Psalm 3\nC. Compassion",
                        title: "In the wilderness David recovered:"
                    }
                ];
                this.addSlide = function () {
                    _this.slides.push({
                        title: "",
                        content: ""
                    });
                };
                this.removeSlide = function (slide) {
                    _this.slides.splice(_this.slides.indexOf(slide), 1);
                };
                this.getFile = function () {
                    //TODO: Download the file instead of log it out
                    console.info(_this.proPresenterDocService.makeFile(_this.fileConfig, _this.slides));
                };
                //TODO: Expose this in the UI
                this.fileConfig = {
                    category: "Speaker Notes",
                    height: 720,
                    title: "test",
                    width: 1280
                };
            }
            MainController.$inject = ["proPresenterDocService"];
            return MainController;
        }());
        Controllers.MainController = MainController;
        angular
            .module(appModuleName)
            .controller("mainController", MainController);
    })(Controllers = TxtToPp.Controllers || (TxtToPp.Controllers = {}));
})(TxtToPp || (TxtToPp = {}));
/// <reference path="app-typings.d.ts" />
var TxtToPp;
(function (TxtToPp) {
    var Services;
    (function (Services) {
        var creatorCode = "TxtToProPresenter";
        var ProPresenterDocService = (function () {
            function ProPresenterDocService() {
                var _this = this;
                this.makeFile = function (config, slides) {
                    var today = new Date();
                    return "<RVPresentationDocument height=\"" + config.height + "\" width=\"" + config.width + "\" versionNumber=\"500\" docType=\"0\" creatorCode=\"" + creatorCode + "\" lastDateUsed=\"" + today.toISOString() + "\" usedCount=\"0\" category=\"" + config.category + "\" resourcesDirectory=\"\" backgroundColor=\"0 0 0 1\" drawingBackgroundColor=\"0\" notes=\"\" artist=\"\" author=\"\" album=\"\" CCLIDisplay=\"0\" CCLIArtistCredits=\"\" CCLISongTitle=\"" + config.title + "\" CCLIPublisher=\"\" CCLICopyrightInfo=\"" + today.getFullYear() + "\" CCLILicenseNumber=\"\" chordChartPath=\"\">\n    <timeline timeOffSet=\"0\" selectedMediaTrackIndex=\"0\" unitOfMeasure=\"60\" duration=\"0\" loop=\"0\">\n        <timeCues containerClass=\"NSMutableArray\" />\n        <mediaTracks containerClass=\"NSMutableArray\" />\n    </timeline>\n    <bibleReference containerClass=\"NSMutableDictionary\" />\n    <arrangements containerClass=\"NSMutableArray\" />\n    <_-RVProTransitionObject-_transitionObject transitionType=\"-1\" transitionDuration=\"1\" motionEnabled=\"0\" motionDuration=\"20\" motionSpeed=\"100\" />\n    <groups containerClass=\"NSMutableArray\">\n        " + _this.getSlidesXmlString(config, slides) + "\n    </groups>\n</RVPresentationDocument>";
                };
                this.getSlidesXmlString = function (config, slides) {
                    //TODO: Create real slides
                    return "<RVSlideGrouping name=\"\" uuid=\"9D3CEF62-7065-49F2-A498-0953BD1FB5FE\" color=\"0 1 1 1\" serialization-array-index=\"2\">\n            <slides containerClass=\"NSMutableArray\">\n                <RVDisplaySlide backgroundColor=\"0.0313725508749485 0.2274509817361832 0.4666666686534882 1\" enabled=\"1\" highlightColor=\"0 0 0 0\" hotKey=\"\" label=\"\" notes=\"\" slideType=\"1\" sort_index=\"2\" UUID=\"C0F66050-7F02-41A2-A039-221F00562823\" drawingBackgroundColor=\"1\" chordChartPath=\"\" serialization-array-index=\"0\">\n                    <cues containerClass=\"NSMutableArray\">\n                        <RVMediaCue displayName=\"Sermon Background (720p).jpg\" delayTime=\"0\" timeStamp=\"0\" enabled=\"1\" UUID=\"BCF46A08-EB86-4726-884B-6E9158CCB92A\" parentUUID=\"2CC7F3C9-8477-497B-AECF-01645F0E2412\" elementClassName=\"RVImageElement\" behavior=\"1\" alignment=\"4\" serialization-array-index=\"0\">\n                            <element displayDelay=\"0\" displayName=\"Sermon Background (720p).jpg\" locked=\"0\" persistent=\"0\" typeID=\"0\" fromTemplate=\"0\" bezelRadius=\"0\" drawingFill=\"0\" drawingShadow=\"0\" drawingStroke=\"0\" fillColor=\"1 1 1 1\" rotation=\"0\" source=\"file://localhost/Users/chrisbarr/Documents/Projects/Calvary/new%20logos/Pixel%20Reveal/Sermon%20Background%20(720p).jpg\" flippedHorizontally=\"0\" flippedVertically=\"0\" scaleFactor=\"1\" serializedImageOffset=\"0.000000@0.000000\" serializedFilters=\"YnBsaXN0MDDUAQIDBAUIFhdUJHRvcFgkb2JqZWN0c1gkdmVyc2lvblkkYXJjaGl2ZXLRBgdUcm9vdIABowkKD1UkbnVsbNILDA0OViRjbGFzc1pOUy5vYmplY3RzgAKg0hAREhNYJGNsYXNzZXNaJGNsYXNzbmFtZaMTFBVeTlNNdXRhYmxlQXJyYXlXTlNBcnJheVhOU09iamVjdBIAAYagXxAPTlNLZXllZEFyY2hpdmVyCBEWHygyNTo8QEZLUl1fYGVueX2MlJ2iAAAAAAAAAQEAAAAAAAAAGAAAAAAAAAAAAAAAAAAAALQ=\" scaleBehavior=\"3\" brightness=\"0\" contrast=\"1\" saturation=\"1\" hue=\"0\" manufactureURL=\"\" manufactureName=\"\" format=\"JPEG image\" enableColorFilter=\"0\" colorFilter=\"1 0 0 1\" enableBlur=\"0\" blurRadius=\"0\" enableEdgeBlur=\"0\" edgeBlurRadius=\"0\" edgeBlurArea=\"0\" enableSepia=\"0\" enableColorInvert=\"0\" enableGrayInvert=\"0\" enableHeatSignature=\"0\">\n                                <_-RVRect3D-_position x=\"0\" y=\"0\" z=\"0\" width=\"1680\" height=\"1050\" />\n                                <_-D-_serializedShadow containerClass=\"NSMutableDictionary\">\n                                    <NSMutableString serialization-native-value=\"{5, -5}\" serialization-dictionary-key=\"shadowOffset\" />\n                                    <NSNumber serialization-native-value=\"0\" serialization-dictionary-key=\"shadowBlurRadius\" />\n                                    <NSColor serialization-native-value=\"0 0 0 0.3333333432674408\" serialization-dictionary-key=\"shadowColor\" />\n                                </_-D-_serializedShadow>\n                                <stroke containerClass=\"NSMutableDictionary\">\n                                    <NSColor serialization-native-value=\"0 0 0 1\" serialization-dictionary-key=\"RVShapeElementStrokeColorKey\" />\n                                    <NSNumber serialization-native-value=\"1\" serialization-dictionary-key=\"RVShapeElementStrokeWidthKey\" />\n                                </stroke>\n                            </element>\n                            <_-RVProTransitionObject-_transitionObject />\n                        </RVMediaCue>\n                    </cues>\n                    <displayElements containerClass=\"NSMutableArray\">\n                        <RVTextElement displayDelay=\"0\" displayName=\"\" locked=\"0\" persistent=\"0\" typeID=\"0\" fromTemplate=\"0\" bezelRadius=\"0\" drawingFill=\"0\" drawingShadow=\"0\" drawingStroke=\"0\" fillColor=\"0 0 0 0\" rotation=\"0\" source=\"\" adjustsHeightToFit=\"1\" verticalAlignment=\"1\" RTFData=\"e1xydGYxXGFuc2lcYW5zaWNwZzEyNTJcY29jb2FydGYxNDA0XGNvY29hc3VicnRmMzQwClxjb2NvYXNjcmVlbmZvbnRzMXtcZm9udHRibFxmMFxmbmlsXGZjaGFyc2V0MCBGdXR1cmEtTWVkaXVtO30Ke1xjb2xvcnRibDtccmVkMjU1XGdyZWVuMjU1XGJsdWUyNTU7fQpccGFyZFx0eDU2MFx0eDExMjBcdHgxNjgwXHR4MjI0MFx0eDI4MDBcdHgzMzYwXHR4MzkyMFx0eDQ0ODBcdHg1MDQwXHR4NTYwMFx0eDYxNjBcdHg2NzIwXHBhcmRpcm5hdHVyYWwKClxmMFxmczE4MCBcY2YxIDEuIERhdmlkIEluIFRoZSBQYWxhY2V9\" revealType=\"0\" serialization-array-index=\"0\">\n                            <_-RVRect3D-_position x=\"29.04599\" y=\"2\" z=\"0\" width=\"1221.908\" height=\"118.6807\" />\n                            <_-D-_serializedShadow containerClass=\"NSMutableDictionary\">\n                                <NSMutableString serialization-native-value=\"{5, -5}\" serialization-dictionary-key=\"shadowOffset\" />\n                                <NSNumber serialization-native-value=\"0\" serialization-dictionary-key=\"shadowBlurRadius\" />\n                                <NSColor serialization-native-value=\"0 0 0 0.3333333432674408\" serialization-dictionary-key=\"shadowColor\" />\n                            </_-D-_serializedShadow>\n                            <stroke containerClass=\"NSMutableDictionary\">\n                                <NSColor serialization-native-value=\"0 0 0 1\" serialization-dictionary-key=\"RVShapeElementStrokeColorKey\" />\n                                <NSNumber serialization-native-value=\"1\" serialization-dictionary-key=\"RVShapeElementStrokeWidthKey\" />\n                            </stroke>\n                        </RVTextElement>\n                    </displayElements>\n                    <_-RVProTransitionObject-_transitionObject transitionType=\"-1\" transitionDuration=\"1\" motionEnabled=\"0\" motionDuration=\"20\" motionSpeed=\"100\" />\n                </RVDisplaySlide>\n            </slides>\n        </RVSlideGrouping>";
                };
            }
            return ProPresenterDocService;
        }());
        Services.ProPresenterDocService = ProPresenterDocService;
        angular
            .module(appModuleName)
            .service("proPresenterDocService", ProPresenterDocService);
    })(Services = TxtToPp.Services || (TxtToPp.Services = {}));
})(TxtToPp || (TxtToPp = {}));
webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/ConfigurationService.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigurationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ConfigurationService = (function () {
    function ConfigurationService(http) {
        var _this = this;
        this.http = http;
        this.getLayoutData = function (filePath) {
            return _this.http.get(filePath)
                .map(function (res) { return res.json(); });
        };
    }
    return ConfigurationService;
}());
ConfigurationService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]) === "function" && _a || Object])
], ConfigurationService);

var _a;
//# sourceMappingURL=ConfigurationService.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "body{\n  background: url(//subtlepatterns.com/patterns/scribble_light.png);\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\ni{\n  cursor: pointer ;\n}\ni span{\n  color: black;\n}\n\n\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<app-menu-bar></app-menu-bar>\n\n<div class=\"container\">\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__ = __webpack_require__("../../../../../src/app/ConfigurationService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(_ConfigurationService) {
        this._ConfigurationService = _ConfigurationService;
        this.title = 'app';
        this.layout = {};
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__["a" /* ConfigurationService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_material__ = __webpack_require__("../../../material/@angular/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ConfigurationService__ = __webpack_require__("../../../../../src/app/ConfigurationService.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__menu_bar_menu_bar_component__ = __webpack_require__("../../../../../src/app/menu-bar/menu-bar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__porfolio_card_porfolio_card_component__ = __webpack_require__("../../../../../src/app/porfolio-card/porfolio-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__timeline_card_timeline_card_component__ = __webpack_require__("../../../../../src/app/timeline-card/timeline-card.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__porfolio_holder_porfolio_holder_component__ = __webpack_require__("../../../../../src/app/porfolio-holder/porfolio-holder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__timeline_holder_timeline_holder_component__ = __webpack_require__("../../../../../src/app/timeline-holder/timeline-holder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__welcome_welcome_component__ = __webpack_require__("../../../../../src/app/welcome/welcome.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__gallery_holder_gallery_holder_component__ = __webpack_require__("../../../../../src/app/gallery-holder/gallery-holder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__contact_holder_contact_holder_component__ = __webpack_require__("../../../../../src/app/contact-holder/contact-holder.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__image_card_image_card_component__ = __webpack_require__("../../../../../src/app/image-card/image-card.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var appRoutes = [
    { path: 'portfolio', component: __WEBPACK_IMPORTED_MODULE_14__porfolio_holder_porfolio_holder_component__["a" /* PorfolioHolderComponent */] },
    { path: 'timeline', component: __WEBPACK_IMPORTED_MODULE_15__timeline_holder_timeline_holder_component__["a" /* TimelineHolderComponent */] },
    { path: 'gallery', component: __WEBPACK_IMPORTED_MODULE_17__gallery_holder_gallery_holder_component__["a" /* GalleryHolderComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_18__contact_holder_contact_holder_component__["a" /* ContactHolderComponent */] },
    { path: '', component: __WEBPACK_IMPORTED_MODULE_16__welcome_welcome_component__["a" /* WelcomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__settings_settings_component__["a" /* SettingsComponent */],
            __WEBPACK_IMPORTED_MODULE_11__menu_bar_menu_bar_component__["a" /* MenuBarComponent */],
            __WEBPACK_IMPORTED_MODULE_12__porfolio_card_porfolio_card_component__["a" /* PorfolioCardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__timeline_card_timeline_card_component__["a" /* TimelineCardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__porfolio_holder_porfolio_holder_component__["a" /* PorfolioHolderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__timeline_holder_timeline_holder_component__["a" /* TimelineHolderComponent */],
            __WEBPACK_IMPORTED_MODULE_16__welcome_welcome_component__["a" /* WelcomeComponent */],
            __WEBPACK_IMPORTED_MODULE_17__gallery_holder_gallery_holder_component__["a" /* GalleryHolderComponent */],
            __WEBPACK_IMPORTED_MODULE_18__contact_holder_contact_holder_component__["a" /* ContactHolderComponent */],
            __WEBPACK_IMPORTED_MODULE_19__image_card_image_card_component__["a" /* ImageCardComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["a" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["b" /* MdMenuModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["c" /* MdCardModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["d" /* MdToolbarModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_material__["e" /* MdIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* RouterModule */].forRoot(appRoutes, { enableTracing: true })
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_9__ConfigurationService__["a" /* ConfigurationService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/contact-holder/contact-holder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact-holder/contact-holder.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  contact-holder works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/contact-holder/contact-holder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactHolderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactHolderComponent = (function () {
    function ContactHolderComponent() {
    }
    ContactHolderComponent.prototype.ngOnInit = function () {
    };
    return ContactHolderComponent;
}());
ContactHolderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-contact-holder',
        template: __webpack_require__("../../../../../src/app/contact-holder/contact-holder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/contact-holder/contact-holder.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactHolderComponent);

//# sourceMappingURL=contact-holder.component.js.map

/***/ }),

/***/ "../../../../../src/app/gallery-holder/gallery-holder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:'Calluna';\n  src:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/callunasansregular-webfont.woff') format('woff');\n}\n.columns {\n  -webkit-column-width: 200px;\n          column-width: 200px;\n  -webkit-column-gap: 15px;\n          column-gap: 15px;\n  width: 90%;\n  max-width: 1100px;\n  margin: 50px auto;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/gallery-holder/gallery-holder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"columns\">\n  <app-image-card *ngFor = \"let data of gallery \" dataPath=\"{{ data.dataPath }}\" text=\"{{ data.text }}\"></app-image-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/gallery-holder/gallery-holder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__ = __webpack_require__("../../../../../src/app/ConfigurationService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GalleryHolderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GalleryHolderComponent = (function () {
    function GalleryHolderComponent(_ConfigurationService) {
        this._ConfigurationService = _ConfigurationService;
    }
    GalleryHolderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ConfigurationService.getLayoutData('/assets/data/gallery.json').subscribe(function (res) {
            _this.gallery = res;
        });
    };
    return GalleryHolderComponent;
}());
GalleryHolderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-gallery-holder',
        template: __webpack_require__("../../../../../src/app/gallery-holder/gallery-holder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/gallery-holder/gallery-holder.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__["a" /* ConfigurationService */]) === "function" && _a || Object])
], GalleryHolderComponent);

var _a;
//# sourceMappingURL=gallery-holder.component.js.map

/***/ }),

/***/ "../../../../../src/app/image-card/image-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "@font-face{font-family:'Calluna';\n  src:url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/callunasansregular-webfont.woff') format('woff');\n}\n\n figure {\n  background: #fefefe;\n  border: 2px solid #fcfcfc;\n  box-shadow: 0 1px 2px rgba(34, 25, 25, 0.4);\n  margin: 0 2px 15px;\n  padding: 15px;\n  padding-bottom: 10px;\n  transition: opacity .4s ease-in-out;\n  display: inline-block;\n  column-break-inside: avoid;\n   border-radius: 3px;\n}\n\n figure img {\n  width: 100%; height: auto;\n  border-bottom: 1px solid #ccc;\n  padding-bottom: 15px;\n  margin-bottom: 5px;\n   border-radius: 3px;\n}\n\n figure figcaption {\n  font-size: .9rem;\n  color: #444;\n  line-height: 1.5;\n}\n\n small {\n  font-size: 1rem;\n  float: right;\n  text-transform: uppercase;\n  color: #aaa;\n}\n\n small a {\n  color: #666;\n  text-decoration: none;\n  transition: .4s color;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/image-card/image-card.component.html":
/***/ (function(module, exports) {

module.exports = "\n  <figure>\n    <img src=\"{{dataPath}}\">\n    <figcaption>{{ text }}</figcaption>\n  </figure>\n"

/***/ }),

/***/ "../../../../../src/app/image-card/image-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageCardComponent = (function () {
    function ImageCardComponent() {
    }
    ImageCardComponent.prototype.ngOnInit = function () {
    };
    return ImageCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ImageCardComponent.prototype, "dataPath", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ImageCardComponent.prototype, "text", void 0);
ImageCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-image-card',
        template: __webpack_require__("../../../../../src/app/image-card/image-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/image-card/image-card.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ImageCardComponent);

//# sourceMappingURL=image-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/menu-bar/menu-bar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n*, *::after, *::before {\n  box-sizing: border-box;\n}\n\na {\n  color: steelblue;\n  text-decoration: none;\n}\n\nimg {\n  max-width: 100%;\n}\n\n.cd-stretchy-nav {\n  position: fixed;\n  z-index: 2;\n  top: 30px;\n  right: 2%;\n  pointer-events: none;\n}\n.cd-stretchy-nav .stretchy-nav-bg {\n  /* this is the stretching navigation background */\n  position: absolute;\n  z-index: 1;\n  top: 0;\n  right: 0;\n  width: 60px;\n  height: 60px;\n  border-radius: 30px;\n  background: #9acd91;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);\n  transition: height 0.2s, box-shadow 0.2s;\n}\n.cd-stretchy-nav.nav-is-visible {\n  pointer-events: auto;\n}\n.cd-stretchy-nav.nav-is-visible .stretchy-nav-bg {\n  height: 100%;\n  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);\n}\n\n.cd-nav-trigger {\n  position: absolute;\n  z-index: 3;\n  top: 0;\n  right: 0;\n  height: 60px;\n  width: 60px;\n  border-radius: 50%;\n  /* replace text with image */\n  overflow: hidden;\n  white-space: nowrap;\n  color: transparent;\n  pointer-events: auto;\n}\n.cd-nav-trigger span, .cd-nav-trigger span::after, .cd-nav-trigger span::before {\n  /* this is the hamburger icon */\n  position: absolute;\n  width: 16px;\n  height: 2px;\n  background-color: #ffffff;\n}\n.cd-nav-trigger span {\n  /* middle line of the hamburger icon */\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  right: auto;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  transition: background-color 0.2s;\n}\n.cd-nav-trigger span::after, .cd-nav-trigger span::before {\n  /* top and bottom lines of the hamburger icon */\n  content: '';\n  top: 0;\n  left: 0;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.cd-nav-trigger span::before {\n  -webkit-transform: translateY(-6px);\n  transform: translateY(-6px);\n}\n.cd-nav-trigger span::after {\n  -webkit-transform: translateY(6px);\n  transform: translateY(6px);\n}\n.no-touch .cd-nav-trigger:hover ~ .stretchy-nav-bg {\n  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);\n}\n.nav-is-visible .cd-nav-trigger span {\n  background-color: transparent;\n}\n.nav-is-visible .cd-nav-trigger span::before {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.nav-is-visible .cd-nav-trigger span::after {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n\n.cd-stretchy-nav ul {\n  position: relative;\n  z-index: 2;\n  padding: 60px 0 0;\n  visibility: hidden;\n  transition: visibility 0.3s;\n  text-align: right;\n}\n.cd-stretchy-nav ul a {\n  position: relative;\n  display: block;\n  height: 50px;\n  line-height: 50px;\n  padding: 0 calc(1em + 60px) 0 1em;\n  color: rgba(255, 255, 255, 0.7);\n  font-size: 1.4rem;\n  transition: color 0.2s;\n}\n.cd-stretchy-nav ul a::after {\n  /* navigation item icons */\n  content: '';\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  right: 22px;\n  top: 50%;\n  -webkit-transform: translateY(-50%) scale(0);\n  transform: translateY(-50%) scale(0);\n  opacity: .6;\n  background: url(/assets/img/cd-sprite-1.svg) no-repeat 0 0;\n}\n.cd-stretchy-nav ul a::before {\n  /* line visible next to the active navigation item */\n  content: '';\n  position: absolute;\n  width: 3px;\n  height: 16px;\n  top: 50%;\n  right: 60px;\n  -webkit-transform: translateX(3px) translateY(-50%) scaleY(0);\n  transform: translateX(3px) translateY(-50%) scaleY(0);\n  background-color: #9acd91;\n}\n.cd-stretchy-nav ul li:first-of-type a::after {\n  /* change custom icon using image sprites */\n  background-position: -32px 0;\n}\n.cd-stretchy-nav ul li:nth-of-type(2) a::after {\n  background-position: -64px 0;\n}\n.cd-stretchy-nav ul li:nth-of-type(3) a::after {\n  background-position: -48px 0;\n}\n.cd-stretchy-nav ul li:nth-of-type(4) a::after {\n  background-position: 0 0;\n}\n.cd-stretchy-nav ul li:nth-of-type(5) a::after {\n  background-position: -16px 0;\n}\n.cd-stretchy-nav ul span {\n  /* navigation item labels */\n  display: block;\n  opacity: 0;\n  -webkit-transform: translateX(-25px);\n  transform: translateX(-25px);\n}\n\n.cd-stretchy-nav.nav-is-visible ul {\n  visibility: visible;\n}\n.cd-stretchy-nav.nav-is-visible ul a::after {\n  /* navigation item icons */\n  -webkit-transform: translateY(-50%) scale(1);\n  transform: translateY(-50%) scale(1);\n  -webkit-animation: scaleIn 0.15s backwards;\n  animation: scaleIn 0.15s backwards;\n  transition: opacity 0.2s;\n}\n.cd-stretchy-nav.nav-is-visible ul a.active {\n  color: #ffffff;\n}\n.cd-stretchy-nav.nav-is-visible ul a.active::after {\n  opacity: 1;\n}\n.cd-stretchy-nav.nav-is-visible ul a.active::before {\n  -webkit-transform: translateX(3px) translateY(-50%) scaleY(1);\n  transform: translateX(3px) translateY(-50%) scaleY(1);\n  transition: -webkit-transform 0.15s 0.3s;\n  transition: transform 0.15s 0.3s;\n  transition: transform 0.15s 0.3s, -webkit-transform 0.15s 0.3s;\n}\n.cd-stretchy-nav.nav-is-visible ul span {\n  opacity: 1;\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n  -webkit-animation: slideIn 0.15s backwards;\n  animation: slideIn 0.15s backwards;\n  transition: -webkit-transform 0.2s;\n  transition: transform 0.2s;\n  transition: transform 0.2s, -webkit-transform 0.2s;\n}\n.no-touch .cd-stretchy-nav.nav-is-visible ul a:hover {\n  color: #ffffff;\n}\n.no-touch .cd-stretchy-nav.nav-is-visible ul a:hover::after {\n  opacity: 1;\n}\n.no-touch .cd-stretchy-nav.nav-is-visible ul a:hover span {\n  -webkit-transform: translateX(-5px);\n  transform: translateX(-5px);\n}\n.cd-stretchy-nav.nav-is-visible ul li:first-of-type a::after,\n.cd-stretchy-nav.nav-is-visible ul li:first-of-type span {\n  -webkit-animation-delay: 0.05s;\n  animation-delay: 0.05s;\n}\n.cd-stretchy-nav.nav-is-visible ul li:nth-of-type(2) a::after,\n.cd-stretchy-nav.nav-is-visible ul li:nth-of-type(2) span {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n.cd-stretchy-nav.nav-is-visible ul li:nth-of-type(3) a::after,\n.cd-stretchy-nav.nav-is-visible ul li:nth-of-type(3) span {\n  -webkit-animation-delay: 0.15s;\n  animation-delay: 0.15s;\n}\n.cd-stretchy-nav.nav-is-visible ul li:nth-of-type(4) a::after,\n.cd-stretchy-nav.nav-is-visible ul li:nth-of-type(4) span {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.cd-stretchy-nav.nav-is-visible ul li:nth-of-type(5) a::after,\n.cd-stretchy-nav.nav-is-visible ul li:nth-of-type(5) span {\n  -webkit-animation-delay: 0.25s;\n  animation-delay: 0.25s;\n}\n\n/* --------------------------------\n\nadd-content navigation style\n\n-------------------------------- */\n.cd-stretchy-nav.add-content {\n  bottom: 50px;\n  top: auto;\n  left: 50%;\n  right: auto;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  width: 300px;\n}\n.cd-stretchy-nav.add-content .stretchy-nav-bg {\n  left: 50%;\n  right: auto;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  background-color: steelblue;\n  transition: width 0.2s, box-shadow 0.2s;\n}\n.cd-stretchy-nav.add-content.nav-is-visible .stretchy-nav-bg {\n  width: 100%;\n  box-shadow: 0 6px 30px rgba(0, 0, 0, 0.2);\n}\n\n.cd-stretchy-nav.add-content .cd-nav-trigger {\n  left: 50%;\n  right: auto;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  background-color: steelblue;\n}\n.cd-stretchy-nav.add-content .cd-nav-trigger span {\n  background-color: transparent;\n}\n.cd-stretchy-nav.add-content .cd-nav-trigger span::before {\n  /* used to create the plus icon */\n  -webkit-transform: rotate(90deg);\n  transform: rotate(90deg);\n}\n.cd-stretchy-nav.add-content .cd-nav-trigger span::after {\n  /* used to create the plus icon */\n  -webkit-transform: rotate(0deg);\n  transform: rotate(0deg);\n}\n\n.cd-stretchy-nav.add-content.nav-is-visible .cd-nav-trigger {\n  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.2);\n}\n.cd-stretchy-nav.add-content.nav-is-visible .cd-nav-trigger span::before {\n  -webkit-transform: rotate(-135deg);\n  transform: rotate(-135deg);\n}\n.cd-stretchy-nav.add-content.nav-is-visible .cd-nav-trigger span::after {\n  -webkit-transform: rotate(-225deg);\n  transform: rotate(-225deg);\n}\n\n.cd-stretchy-nav.add-content ul {\n  padding-top: 0;\n}\n.cd-stretchy-nav.add-content ul::after {\n  clear: both;\n  content: \"\";\n  display: table;\n}\n.cd-stretchy-nav.add-content ul li {\n  display: inline-block;\n  float: left;\n  width: 60px;\n}\n.cd-stretchy-nav.add-content ul li:nth-of-type(2) {\n  /* space occupied by the navigation trigger */\n  margin-right: 60px;\n}\n.cd-stretchy-nav.add-content ul a {\n  padding: 0;\n  height: 60px;\n  width: 100%;\n}\n.cd-stretchy-nav.add-content ul a::after {\n  top: 50%;\n  left: 22px;\n  right: auto;\n  -webkit-transform: translateY(-50%) scale(0);\n  transform: translateY(-50%) scale(0);\n  background-image: url(/assets/img/cd-sprite-2.svg);\n}\n.cd-stretchy-nav.add-content ul li:first-of-type a::after {\n  background-position: -16px 0px;\n}\n.cd-stretchy-nav.add-content ul li:nth-of-type(2) a::after {\n  background-position: 0px 0px;\n}\n.cd-stretchy-nav.add-content ul li:nth-of-type(3) a::after {\n  background-position: -48px 0px;\n}\n.cd-stretchy-nav.add-content ul li:nth-of-type(4) a::after {\n  background-position: -32px 0px;\n}\n.cd-stretchy-nav.add-content ul li:first-of-type a::after,\n.cd-stretchy-nav.add-content ul li:nth-of-type(4) a::after {\n  -webkit-animation-delay: 0.2s;\n  animation-delay: 0.2s;\n}\n.cd-stretchy-nav.add-content ul li:nth-of-type(2) a::after,\n.cd-stretchy-nav.add-content ul li:nth-of-type(3) a::after {\n  -webkit-animation-delay: 0.1s;\n  animation-delay: 0.1s;\n}\n\n.cd-stretchy-nav.add-content.nav-is-visible ul a::after {\n  -webkit-animation-name: scaleIn;\n  animation-name: scaleIn;\n  -webkit-transform: translateY(-50%) scale(1);\n  transform: translateY(-50%) scale(1);\n}\n\n.cd-stretchy-nav.add-content ul span {\n  position: absolute;\n  left: 0;\n  top: -20px;\n  width: 100%;\n  padding: 0.6em 0;\n  opacity: 0;\n  visibility: hidden;\n  background-color: rgba(0, 0, 0, 0.8);\n  border-radius: 2px;\n  font-size: 1.2rem;\n  line-height: 1;\n  white-space: nowrap;\n  text-align: center;\n  transition: opacity 0.2s, visibility 0.2s;\n  /* reset default style */\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n.cd-stretchy-nav.add-content ul span::after {\n  /* triangle below the tooltip */\n  content: '';\n  position: absolute;\n  top: 100%;\n  left: 50%;\n  right: auto;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  height: 0;\n  width: 0;\n  border: 4px solid transparent;\n  border-top-color: rgba(0, 0, 0, 0.8);\n}\n\n.cd-stretchy-nav.add-content.nav-is-visible ul span {\n  /* reset default style */\n  -webkit-animation: none;\n  animation: none;\n}\n\n.no-touch .cd-stretchy-nav.add-content.nav-is-visible ul a:hover span {\n  opacity: 1;\n  visibility: visible;\n  /* reset default style */\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n/* --------------------------------\n\nedit content\n\n-------------------------------- */\n.cd-editable-content {\n  /* used to wrap the image and the navigation */\n  position: relative;\n  width: 90%;\n  max-width: 400px;\n  margin: 4em auto;\n}\n.cd-editable-content img {\n  display: block;\n  border-radius: .25em;\n}\n\n.cd-stretchy-nav.edit-content {\n  position: absolute;\n  top: 15px;\n  right: 15px;\n}\n.cd-stretchy-nav.edit-content .stretchy-nav-bg {\n  height: 30px;\n  width: 30px;\n  background-color: rgba(0, 0, 0, 0.4);\n  box-shadow: none;\n  transition: background 0.2s, height 0.2s;\n}\n.cd-stretchy-nav.edit-content.nav-is-visible .stretchy-nav-bg {\n  height: 100%;\n  background-color: rgba(0, 0, 0, 0.8);\n  /* reset default style */\n  box-shadow: none;\n}\n\n.cd-stretchy-nav.edit-content .cd-nav-trigger {\n  height: 30px;\n  width: 30px;\n}\n.cd-stretchy-nav.edit-content .cd-nav-trigger span {\n  opacity: 0;\n  background-color: transparent;\n}\n.cd-stretchy-nav.edit-content .cd-nav-trigger span::before {\n  -webkit-transform: rotate(-45deg);\n  transform: rotate(-45deg);\n}\n.cd-stretchy-nav.edit-content .cd-nav-trigger span::after {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.cd-stretchy-nav.edit-content .cd-nav-trigger span, .cd-stretchy-nav.edit-content .cd-nav-trigger span::before, .cd-stretchy-nav.edit-content .cd-nav-trigger span::after {\n  /* used to create the 'X' icon when the navigation is open */\n  width: 12px;\n}\n.cd-stretchy-nav.edit-content .cd-nav-trigger::after {\n  /* edit icon */\n  content: '';\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  right: auto;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  background: url(/assets/img/cd-sprite-3.svg) no-repeat 0 0;\n}\n.cd-stretchy-nav.edit-content .cd-nav-trigger span, .cd-stretchy-nav.edit-content .cd-nav-trigger::after {\n  transition: opacity 0.2s;\n}\n.no-touch .cd-stretchy-nav.edit-content .cd-nav-trigger:hover ~ .stretchy-nav-bg {\n  box-shadow: none;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.cd-stretchy-nav.edit-content.nav-is-visible .cd-nav-trigger span {\n  opacity: 1;\n}\n.cd-stretchy-nav.edit-content.nav-is-visible .cd-nav-trigger span::before {\n  -webkit-transform: rotate(45deg);\n  transform: rotate(45deg);\n}\n.cd-stretchy-nav.edit-content.nav-is-visible .cd-nav-trigger span::after {\n  -webkit-transform: rotate(135deg);\n  transform: rotate(135deg);\n}\n\n.cd-stretchy-nav.edit-content.nav-is-visible .cd-nav-trigger::after {\n  /* hide edit icon */\n  opacity: 0;\n}\n\n.cd-stretchy-nav.edit-content ul {\n  padding-top: 30px;\n}\n\n.cd-stretchy-nav.edit-content ul a {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0;\n}\n.cd-stretchy-nav.edit-content ul a::after {\n  right: 7px;\n  background-image: url(/assets/img/cd-sprite-3.svg);\n}\n\n.cd-stretchy-nav.edit-content ul li:first-of-type a::after {\n  background-position: -16px 0;\n}\n\n.cd-stretchy-nav.edit-content ul li:nth-of-type(2) a::after {\n  background-position: -32px 0;\n}\n\n.cd-stretchy-nav.edit-content ul li:nth-of-type(3) a::after {\n  background-position: -48px 0;\n}\n\n.cd-stretchy-nav.edit-content ul li:nth-of-type(4) a::after {\n  background-position: -64px 0;\n}\n\n.cd-stretchy-nav.edit-content ul span {\n  position: absolute;\n  top: 0;\n  right: 35px;\n  height: 30px;\n  line-height: 30px;\n  padding: 0 1em;\n  opacity: 0;\n  visibility: hidden;\n  background-color: rgba(0, 0, 0, 0.55);\n  border-radius: 2px;\n  text-align: center;\n  transition: opacity 0.2s, visibility 0.2s;\n}\n.cd-stretchy-nav.edit-content ul span::after {\n  /* triangle below the tooltip */\n  content: '';\n  position: absolute;\n  left: 100%;\n  top: 50%;\n  bottom: auto;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  height: 0;\n  width: 0;\n  border: 4px solid transparent;\n  border-left-color: rgba(0, 0, 0, 0.55);\n}\n\n.cd-stretchy-nav.edit-content.nav-is-visible ul span {\n  /* reset default style */\n  -webkit-animation: none;\n  animation: none;\n}\n.no-touch .cd-stretchy-nav.edit-content.nav-is-visible ul a:hover span {\n  opacity: 1;\n  visibility: visible;\n  /* reset default style */\n  -webkit-transform: translateX(0);\n  transform: translateX(0);\n}\n\n/* --------------------------------\n\nmain content basic style\n\n-------------------------------- */\n.cd-main-content {\n  position: relative;\n  z-index: 1;\n  min-height: 100vh;\n  padding: 100px 0;\n  background-color: #003c5d;\n}\n\n/* --------------------------------\n\nkeyframes\n\n-------------------------------- */\n@-webkit-keyframes scaleIn {\n  from {\n    -webkit-transform: translateY(-50%) scale(0);\n  }\n  to {\n    -webkit-transform: translateY(-50%) scale(1);\n  }\n}\n@keyframes scaleIn {\n  from {\n    -webkit-transform: translateY(-50%) scale(0);\n    transform: translateY(-50%) scale(0);\n  }\n  to {\n    -webkit-transform: translateY(-50%) scale(1);\n    transform: translateY(-50%) scale(1);\n  }\n}\n@-webkit-keyframes slideIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(-25px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n  }\n}\n@keyframes slideIn {\n  from {\n    opacity: 0;\n    -webkit-transform: translateX(-25px);\n    transform: translateX(-25px);\n  }\n  to {\n    opacity: 1;\n    -webkit-transform: translateX(0);\n    transform: translateX(0);\n  }\n}\n\n\n.cd-stretchy-nav span{\n\n  font-weight: 100;\n  font-size: medium;\n\n}\n\n.menu-text{\n  color: #0a9581;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu-bar/menu-bar.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <nav class=\"cd-stretchy-nav \" [ngClass]=\"{'nav-is-visible': menuExtended}\">\n    <a class=\"cd-nav-trigger\"  (click)=\"toggleMenu()\">\n      Menu\n      <span aria-hidden=\"true\"></span>\n    </a>\n\n    <ul>\n      <li><a href=\"#0\" routerLink=\"/\" class=\"active\"><span class=\"menu-text hidden-xs\">Home</span></a></li>\n      <li><a href=\"#0\" routerLink=\"portfolio\"><span class=\"menu-text hidden-xs\">Portfolio</span></a></li>\n      <li><a href=\"#0\" routerLink=\"timeline\"><span class=\"menu-text hidden-xs\">Timeline</span></a></li>\n      <li><a href=\"#0\" routerLink=\"gallery\"><span class=\"menu-text hidden-xs\">Gallery</span></a></li>\n      <li><a href=\"#0\" routerLink=\"contact\"><span class=\"menu-text hidden-xs\">Contact</span></a></li>\n\n    </ul>\n\n    <span aria-hidden=\"true\" class=\"stretchy-nav-bg\"></span>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/menu-bar/menu-bar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuBarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuBarComponent = (function () {
    function MenuBarComponent() {
        this.menuExtended = true;
    }
    MenuBarComponent.prototype.ngOnInit = function () {
    };
    MenuBarComponent.prototype.toggleMenu = function () {
        this.menuExtended = !this.menuExtended;
    };
    return MenuBarComponent;
}());
MenuBarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-menu-bar',
        template: __webpack_require__("../../../../../src/app/menu-bar/menu-bar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu-bar/menu-bar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], MenuBarComponent);

//# sourceMappingURL=menu-bar.component.js.map

/***/ }),

/***/ "../../../../../src/app/porfolio-card/porfolio-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "md-card-footer i:hover{\n\n  background-color: lightgrey;\n  border-radius: 3px;\n}\n\nmd-card{\n  margin: 4px 7px 4px 1px;\n  min-height: 500px;\n  max-height: 700px;\n}\nmd-card-title{\n  font-weight: bold;\n}\nmd-card-footer i{\n  margin-right: 2px;\n  margin-left: 7px;\n}\n\nmd-card-footer i:active{\n\n  background-color: grey;\n  border-radius: 3px;\n}\n\n.female{\n  background-color: pink;\n\n}\n.md-card-image{\n\n  height: 300px;\n}\n\n.male {\n  background-color: steelblue;\n}\n\n.both{\n\n  background: #8C29FF; /* For browsers that do not support gradients */ /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\n  background: linear-gradient(to right, pink , steelblue); /* Standard syntax */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-card/porfolio-card.component.html":
/***/ (function(module, exports) {

module.exports = "<md-card [ngClass]=\"[data.color , data.large_col, data.small_col, data.extra_small]\">\n  <md-card-header>\n    <img md-card-avatar src=\"{{ data.avatar}}\">\n    <md-card-title>{{data.title }}</md-card-title>\n    <md-card-subtitle>{{ data.description }}</md-card-subtitle>\n  </md-card-header>\n  <img md-card-image src=\"{{ data.image}}\" class=\"md-card-image\">\n  <md-card-content>\n    <p>{{ data.content }} </p>\n  </md-card-content>\n  <md-card-footer >\n    <i *ngFor=\" let action of data.actions\" class=\"material-icons\">{{action}}</i>\n  </md-card-footer>\n</md-card>\n"

/***/ }),

/***/ "../../../../../src/app/porfolio-card/porfolio-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__ = __webpack_require__("../../../../../src/app/ConfigurationService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorfolioCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PorfolioCardComponent = (function () {
    function PorfolioCardComponent(_ConfigurationService) {
        this._ConfigurationService = _ConfigurationService;
    }
    PorfolioCardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._ConfigurationService.getLayoutData(this.dataPath).subscribe(function (res) {
            _this.data = res;
        });
    };
    return PorfolioCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], PorfolioCardComponent.prototype, "dataPath", void 0);
PorfolioCardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-porfolio-card',
        template: __webpack_require__("../../../../../src/app/porfolio-card/porfolio-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/porfolio-card/porfolio-card.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__["a" /* ConfigurationService */]) === "function" && _a || Object])
], PorfolioCardComponent);

var _a;
//# sourceMappingURL=porfolio-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/porfolio-holder/porfolio-holder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/porfolio-holder/porfolio-holder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n\n  <app-porfolio-card dataPath=\"/assets/data/antarika-portfolio.json\"></app-porfolio-card>\n  <app-porfolio-card dataPath=\"/assets/data/amit-portfolio.json\"></app-porfolio-card>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/porfolio-holder/porfolio-holder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PorfolioHolderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PorfolioHolderComponent = (function () {
    function PorfolioHolderComponent() {
    }
    PorfolioHolderComponent.prototype.ngOnInit = function () {
    };
    return PorfolioHolderComponent;
}());
PorfolioHolderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-porfolio-holder',
        template: __webpack_require__("../../../../../src/app/porfolio-holder/porfolio-holder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/porfolio-holder/porfolio-holder.component.css")]
    }),
    __metadata("design:paramtypes", [])
], PorfolioHolderComponent);

//# sourceMappingURL=porfolio-holder.component.js.map

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  settings works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
    }
    SettingsComponent.prototype.ngOnInit = function () {
    };
    return SettingsComponent;
}());
SettingsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-settings',
        template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
        styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SettingsComponent);

//# sourceMappingURL=settings.component.js.map

/***/ }),

/***/ "../../../../../src/app/timeline-card/timeline-card.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ol, ul {\n  list-style: none;\n}\n\n.cd-horizontal-timeline {\n  opacity: 0;\n  margin: 1em auto;\n  transition: opacity 0.2s;\n}\n\n.cd-horizontal-timeline::before {\n  /* never visible - this is used in jQuery to check the current MQ */\n  content: 'mobile';\n  display: none;\n}\n\n.cd-horizontal-timeline.loaded {\n  /* show the timeline after events position has been set (using JavaScript) */\n  opacity: 1;\n}\n\n.cd-horizontal-timeline .timeline {\n  position: relative;\n  height: 100px;\n  width: 90%;\n  max-width: 600px;\n  margin: 0 auto;\n}\n\n.cd-horizontal-timeline .events-wrapper {\n  position: relative;\n  height: 100%;\n  margin: 0 40px;\n  overflow: hidden;\n}\n\n.cd-horizontal-timeline .events-wrapper::after, .cd-horizontal-timeline .events-wrapper::before {\n  /* these are used to create a shadow effect at the sides of the timeline */\n  content: '';\n  position: absolute;\n  z-index: 2;\n  top: 0;\n  height: 100%;\n  width: 60px;\n}\n\n.cd-horizontal-timeline .events-wrapper::before {\n  left: 0;\n  background-image: linear-gradient(to right, #fff, rgba(248, 248, 248, 0));\n}\n\n.cd-horizontal-timeline .events-wrapper::after {\n  right: 0;\n  background-image: linear-gradient(to left, #fff, rgba(248, 248, 248, 0));\n}\n\n.cd-horizontal-timeline .events {\n  /* this is the grey line/timeline */\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 49px;\n  height: 2px;\n  /* width will be set using JavaScript */\n  background: #dfdfdf;\n  transition: -webkit-transform 0.4s;\n  transition: transform 0.4s;\n  transition: transform 0.4s, -webkit-transform 0.4s;\n}\n\n.cd-horizontal-timeline .filling-line {\n  /* this is used to create the green line filling the timeline */\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  height: 100%;\n  width: 100%;\n  background-color: #7b9d6f;\n  -webkit-transform: scaleX(0);\n  transform: scaleX(0);\n  -webkit-transform-origin: left center;\n  transform-origin: left center;\n  transition: -webkit-transform 0.3s;\n  transition: transform 0.3s;\n  transition: transform 0.3s, -webkit-transform 0.3s;\n}\n\n.cd-horizontal-timeline .events a {\n  position: absolute;\n  bottom: 0;\n  z-index: 2;\n  text-align: center;\n  font-size: 12px;\n  text-decoration: none;\n  padding-bottom: 15px;\n  color: #383838;\n  /* fix bug on Safari - text flickering while timeline translates */\n  -webkit-transform: translateZ(0);\n  transform: translateZ(0);\n}\n\n.cd-horizontal-timeline .events a::after {\n  /* this is used to create the event spot */\n  content: '';\n  position: absolute;\n  left: 50%;\n  right: auto;\n  -webkit-transform: translateX(-50%);\n  transform: translateX(-50%);\n  bottom: -5px;\n  height: 8px;\n  width: 8px;\n  border-radius: 50%;\n  border: 2px solid #dfdfdf;\n  background-color: #f8f8f8;\n  transition: background-color 0.3s, border-color 0.3s;\n}\n\n.cd-horizontal-timeline .events a:hover::after {\n  background-color: #7b9d6f;\n  border-color: #7b9d6f;\n}\n\n.cd-horizontal-timeline .events a.selected {\n  pointer-events: none;\n}\n\n.cd-horizontal-timeline .events a.selected::after {\n  background-color: #7b9d6f;\n  border-color: #7b9d6f;\n}\n\n.cd-horizontal-timeline .events a.older-event::after {\n  border-color: #7b9d6f;\n}\n\n@media only screen and (min-width: 1100px) {\n  .cd-horizontal-timeline {\n    margin: 2em auto;\n  }\n\n  .cd-horizontal-timeline::before {\n    /* never visible - this is used in jQuery to check the current MQ */\n    content: 'desktop';\n  }\n}\n\n.cd-horizontal-timeline li span {\n  position: absolute;\n  left: 1700px;\n  bottom: -30px;\n  font-size: 12px;\n}\n\n.cd-timeline-navigation a {\n  /* these are the left/right arrows to navigate the timeline */\n  position: absolute;\n  z-index: 1;\n  top: 50%;\n  bottom: auto;\n  -webkit-transform: translateY(-50%);\n  transform: translateY(-50%);\n  height: 34px;\n  width: 34px;\n  border-radius: 50%;\n  border: 2px solid #dfdfdf;\n  /* replace text with an icon */\n  overflow: hidden;\n  color: transparent;\n  text-indent: 100%;\n  white-space: nowrap;\n  transition: border-color 0.3s;\n}\n\n.cd-timeline-navigation a::after {\n  /* arrow icon */\n  content: '';\n  position: absolute;\n  height: 16px;\n  width: 16px;\n  left: 50%;\n  top: 50%;\n  bottom: auto;\n  right: auto;\n  -webkit-transform: translateX(-50%) translateY(-50%);\n  transform: translateX(-50%) translateY(-50%);\n  background: url(/assets/img/cd-arrow.svg) no-repeat 0 0;\n}\n\n.cd-timeline-navigation a.prev {\n  left: 0;\n  -webkit-transform: translateY(-50%) rotate(180deg);\n  transform: translateY(-50%) rotate(180deg);\n}\n\n.cd-timeline-navigation a.next {\n  right: 0;\n}\n\n.cd-timeline-navigation a:hover {\n  border-color: #7b9d6f;\n}\n\n.cd-timeline-navigation a.inactive {\n  cursor: not-allowed;\n}\n\n.cd-timeline-navigation a.inactive::after {\n  background-position: 0 -16px;\n}\n\n.cd-timeline-navigation a.inactive:hover {\n  border-color: #dfdfdf;\n}\n\n.cd-horizontal-timeline .events-content {\n  position: relative;\n  width: 100%;\n  margin: 2em 0;\n  overflow: hidden;\n  transition: height 0.4s;\n}\n\n.cd-horizontal-timeline .events-content li {\n  position: absolute;\n  z-index: 1;\n  width: 100%;\n  left: 0;\n  top: 0;\n  padding: 0 5%;\n  opacity: 0;\n}\n\n.cd-horizontal-timeline .events-content li > * {\n  max-width: 800px;\n  margin: 0 auto;\n}\n\n.cd-horizontal-timeline .events-content h2 {\n  font-weight: bold;\n  font-size: 2.6rem;\n  line-height: 1.2;\n}\n\n.cd-horizontal-timeline .events-content em {\n  display: block;\n  font-style: italic;\n  margin: 10px auto;\n}\n\n.cd-horizontal-timeline .events-content em::before {\n  content: '- ';\n}\n\n.cd-horizontal-timeline .events-content p {\n  font-size: 1.4rem;\n  color: #959595;\n}\n\n.cd-horizontal-timeline .events-content em, .cd-horizontal-timeline .events-content p {\n  line-height: 1.6;\n}\n\n@media only screen and (min-width: 768px) {\n  .cd-horizontal-timeline .events-content h2 {\n    font-size: 7rem;\n  }\n\n  .cd-horizontal-timeline .events-content em {\n    font-size: 2rem;\n  }\n\n  .cd-horizontal-timeline .events-content p {\n    font-size: 1.8rem;\n  }\n}\n\n.events-content li{\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.events-content li md-card{\n  width: 70%;\n}\n\nmd-card-footer i:hover{\n\n  background-color: lightgrey;\n  border-radius: 3px;\n}\n\nmd-card{\n  margin: 4px 7px 4px 1px;\n  min-height: 200px;\n  max-height: 400px;\n}\nmd-card-title{\n  font-weight: bold;\n  font-size: large;\n  font-family: Arial;\n}\nmd-card-subtitle{\n\n  display: block;\n  text-align: center;\n  font-size: 10px;\n  margin-top: 0em;\n  opacity: 0.8;\n\n\n}\nmd-card-footer i{\n  margin-right: 2px;\n  margin-left: 7px;\n}\n\nmd-card-footer i:active{\n\n  background-color: grey;\n  border-radius: 3px;\n}\n\n.female{\n  background-color: pink;\n\n}\n.md-card-image{\n\n  height: 200px;\n}\n\n.male {\n  background-color: steelblue;\n}\n\nmd-card-content p{\n\n  font-size: 10px;\n  font-family: \"Al Nile\";\n}\n\n.both{\n\n  background: #8C29FF; /* For browsers that do not support gradients */ /* For Safari 5.1 to 6.0 */ /* For Opera 11.1 to 12.0 */ /* For Firefox 3.6 to 15 */\n  background: linear-gradient(to right, pink , steelblue); /* Standard syntax */\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline-card/timeline-card.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"cd-horizontal-timeline\" [ngClass]=\"{'loaded': loaded}\">\n  <div class=\"timeline\">\n    <div class=\"events-wrapper\" #timelineWrapper>\n      <div class=\"events\" #eventsWrapper>\n        <ol>\n          <li *ngFor=\"let item of timelineElements; let index = index\">\n            <a #timelineEvents href=\"#\" [attr.data-date]=\"item.date | date:dateFormat\"\n               [ngClass]=\"{'selected': item.selected, 'older-event': index < selectedIndex}\"\n               (click)=\"onEventClick($event, item)\">{{item.date | date:dateFormat}}</a>\n            <span>{{item.caption}}</span>\n          </li>\n        </ol>\n        <span class=\"filling-line\" aria-hidden=\"true\" #fillingLine></span>\n      </div>\n    </div>\n\n    <ul class=\"cd-timeline-navigation\">\n      <li>\n        <a href=\"#\" (click)=\"onPrevClick($event)\" class=\"prev\" [ngClass]=\"{'inactive':prevLinkInactive}\">Prev</a>\n      </li>\n      <li>\n        <a href=\"#\" (click)=\"onNextClick($event)\" class=\"next\" [ngClass]=\"{'inactive':nextLinkInactive}\">Next</a>\n      </li>\n    </ul>\n  </div>\n\n  <div class=\"events-content\" #eventsContent *ngIf=\"showContent\">\n    <ol>\n      <li *ngFor=\"let item of timelineElements; let index = index\" [attr.data-date]=\"item.date | date:dateFormat\"\n          [attr.data-state]=\"item.selected ? 'active' : (index < selectedIndex ? 'left' : 'right')\"\n          [@contentState]=\"item.selected ? 'active' : (index < selectedIndex ? 'left' : 'right')\">\n        <md-card >\n          <md-card-header>\n            <!--<img md-card-avatar src=\"{{ data.avatar}}\">-->\n            <md-card-title>{{item.title}}</md-card-title>\n            <md-card-subtitle>{{item.date | date:dateFormat}}</md-card-subtitle>\n          </md-card-header>\n          <img *ngIf=\"item.imagePresent\" md-card-image src=\"{{ item.image}}\" class=\"md-card-image\">\n          <md-card-content>\n            <p>{{item.content}}</p>\n          </md-card-content>\n          <!--&lt;!&ndash;<md-card-footer >&ndash;&gt;-->\n            <!--&lt;!&ndash;<i *ngFor=\" let action of data.actions\" class=\"material-icons\">{{action}}</i>&ndash;&gt;-->\n          <!--&lt;!&ndash;</md-card-footer>&ndash;&gt;-->\n        </md-card>\n\n\n        <!--<h2>{{item.title}}</h2>-->\n        <!--<em>{{item.date | date:dateFormat}}</em>-->\n        <!--<p>{{item.content}}</p>-->\n      </li>\n    </ol>\n  </div>\n</section>\n"

/***/ }),

/***/ "../../../../../src/app/timeline-card/timeline-card.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineCardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TimelineCardComponent = TimelineCardComponent_1 = (function () {
    function TimelineCardComponent() {
        this.prevLinkInactive = true;
        this.nextLinkInactive = false;
        this.loaded = true;
        this.selectedIndex = 0;
        this.timelineTotWidth = 60;
        this.eventsMinDistance = 80;
        this.dateFormat = 'd MMM yy';
        this.disabled = false;
        this.showContent = false;
    }
    TimelineCardComponent.prototype.ngOnInit = function () {
    };
    TimelineCardComponent.prototype.ngAfterViewChecked = function () {
        console.log('step1');
        if (this.timelineElements && this.timelineElements.length) {
            console.log('step1.1');
            for (var i = 0; i < this.timelineElements.length; i++) {
                if (this.timelineElements[i].selected) {
                    this.selectedIndex = i;
                    break;
                }
            }
            console.log('step2');
            this.initTimeline(this.timelineElements);
        }
    };
    TimelineCardComponent.prototype.ngOnChanges = function () {
    };
    TimelineCardComponent.prototype.ngAfterViewInit = function () {
        console.log('step1');
        if (this.timelineElements && this.timelineElements.length) {
            console.log('step1.1');
            for (var i = 0; i < this.timelineElements.length; i++) {
                if (this.timelineElements[i].selected) {
                    this.selectedIndex = i;
                    break;
                }
            }
            console.log('step2');
            this.initTimeline(this.timelineElements);
        }
    };
    TimelineCardComponent.prototype.onPrevClick = function (event) {
        event.preventDefault();
        this.updateSlide(this.timelineTotWidth, 'prev');
    };
    TimelineCardComponent.prototype.onNextClick = function (event) {
        event.preventDefault();
        this.updateSlide(this.timelineTotWidth, 'next');
    };
    TimelineCardComponent.prototype.onEventClick = function (event, selectedItem) {
        event.preventDefault();
        if (this.disabled) {
            return;
        }
        var element = event.target;
        // detect click on the a single event - show new event content
        var visibleItem = this.timelineElements[0];
        this.timelineElements.forEach(function (item) {
            if (item.selected && item != selectedItem) {
                visibleItem = item;
                item.selected = false;
            }
        });
        this.selectedIndex = this.timelineElements.indexOf(selectedItem);
        selectedItem.selected = true;
        TimelineCardComponent_1.updateFilling(element, this.fillingLine, this.timelineTotWidth);
    };
    TimelineCardComponent.prototype.initTimeline = function (timeLines) {
        console.log('step3');
        var eventsMinLapse = TimelineCardComponent_1.minLapse(timeLines);
        // assign a left position to the single events along the timeline
        this.setDatePosition(timeLines, this.eventsMinDistance, eventsMinLapse);
        // assign a width to the timeline
        console.log('step4');
        this.timelineTotWidth = this.setTimelineWidth(timeLines, this.eventsMinDistance, eventsMinLapse);
        // the timeline has been initialize - show it
        this.loaded = true;
    };
    TimelineCardComponent.prototype.updateSlide = function (timelineTotWidth, string) {
        // retrieve translateX value of eventsWrapper
        var translateValue = TimelineCardComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        var wrapperWidth = Number(window.getComputedStyle(this.timelineWrapper.nativeElement).width.replace('px', ''));
        // translate the timeline to the left('next')/right('prev')
        if (string == 'next') {
            this.translateTimeline(translateValue - wrapperWidth + this.eventsMinDistance, wrapperWidth - timelineTotWidth);
        }
        else {
            this.translateTimeline(translateValue + wrapperWidth - this.eventsMinDistance, null);
        }
    };
    TimelineCardComponent.prototype.updateTimelinePosition = function (string, element) {
        // translate timeline to the left/right according to the position of the selected event
        var eventStyle = window.getComputedStyle(element, null);
        var eventLeft = Number(eventStyle.getPropertyValue('left').replace('px', ''));
        var timelineWidth = Number(window.getComputedStyle(this.timelineWrapper.nativeElement).width.replace('px', ''));
        var timelineTotWidth = Number(window.getComputedStyle(this.eventsWrapper.nativeElement).width.replace('px', ''));
        var timelineTranslate = TimelineCardComponent_1.getTranslateValue(this.eventsWrapper.nativeElement);
        if ((string == 'next' && eventLeft > timelineWidth - timelineTranslate) || (string == 'prev' && eventLeft < -timelineTranslate)) {
            this.translateTimeline(-eventLeft + timelineWidth / 2, timelineWidth - timelineTotWidth);
        }
    };
    TimelineCardComponent.prototype.translateTimeline = function (value, totWidth) {
        // only negative translate value
        value = (value > 0) ? 0 : value;
        // do not translate more than timeline width
        value = (!(totWidth == null) && value < totWidth) ? totWidth : value;
        TimelineCardComponent_1.setTransformValue(this.eventsWrapper.nativeElement, 'translateX', value + 'px');
        // update navigation arrows visibility
        this.prevLinkInactive = value == 0;
        this.nextLinkInactive = value == totWidth;
    };
    TimelineCardComponent.updateFilling = function (selectedEvent, filling, totWidth) {
        // change .filling-line length according to the selected event
        console.log(selectedEvent);
        var eventStyle = window.getComputedStyle(selectedEvent, null);
        var eventLeft = eventStyle.getPropertyValue("left");
        var eventWidth = eventStyle.getPropertyValue("width");
        var eventLeftNum = Number(eventLeft.replace('px', '')) + Number(eventWidth.replace('px', '')) / 2;
        var scaleValue = eventLeftNum / totWidth;
        TimelineCardComponent_1.setTransformValue(filling.nativeElement, 'scaleX', scaleValue);
    };
    TimelineCardComponent.prototype.setDatePosition = function (elements, min, eventsMinLapse) {
        var timelineEventsArray = this.timelineEvents.toArray();
        console.log('date position');
        console.log(timelineEventsArray);
        var i = 0;
        for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
            var component = elements_1[_i];
            var distance = TimelineCardComponent_1.dayDiff(elements[0].date, component.date);
            var distanceNorm = Math.round(distance / eventsMinLapse) + 2;
            timelineEventsArray[i].nativeElement.style.left = distanceNorm * min + 'px';
            // span
            var span = timelineEventsArray[i].nativeElement.parentElement.children[1];
            var aWidth = TimelineCardComponent_1.getElementWidth(timelineEventsArray[i].nativeElement);
            var spanWidth = TimelineCardComponent_1.getElementWidth(span);
            span.style.left = distanceNorm * min + (aWidth - spanWidth) / 2 + 'px';
            i++;
        }
    };
    TimelineCardComponent.prototype.setTimelineWidth = function (elements, width, eventsMinLapse) {
        var timeSpan = TimelineCardComponent_1.dayDiff(elements[0].date, elements[elements.length - 1].date);
        var timeSpanNorm = timeSpan / eventsMinLapse;
        timeSpanNorm = Math.round(timeSpanNorm) + 4;
        var totalWidth = timeSpanNorm * width;
        this.eventsWrapper.nativeElement.style.width = totalWidth + 'px';
        var aHref = this.eventsWrapper.nativeElement.querySelectorAll('a.selected')[0];
        console.log(this.eventsWrapper.nativeElement);
        TimelineCardComponent_1.updateFilling(aHref, this.fillingLine, totalWidth);
        this.updateTimelinePosition('next', aHref);
        return totalWidth;
    };
    TimelineCardComponent.getElementWidth = function (element) {
        return Number(window.getComputedStyle(element, null).width.replace('px', ''));
    };
    TimelineCardComponent.parentElement = function (element, tagName) {
        if (!element || !element.parentNode) {
            return null;
        }
        var parent = element.parentNode;
        while (true) {
            if (parent.tagName.toLowerCase() == tagName) {
                return parent;
            }
            parent = parent.parentNode;
            if (!parent) {
                return null;
            }
        }
    };
    TimelineCardComponent.getTranslateValue = function (timeline) {
        var timelineStyle = window.getComputedStyle(timeline, null);
        var timelineTranslate = timelineStyle.getPropertyValue("-webkit-transform") ||
            timelineStyle.getPropertyValue("-moz-transform") ||
            timelineStyle.getPropertyValue("-ms-transform") ||
            timelineStyle.getPropertyValue("-o-transform") ||
            timelineStyle.getPropertyValue("transform");
        var translateValue = 0;
        if (timelineTranslate.indexOf('(') >= 0) {
            var timelineTranslateStr = timelineTranslate
                .split('(')[1]
                .split(')')[0]
                .split(',')[4];
            translateValue = Number(timelineTranslateStr);
        }
        return translateValue;
    };
    TimelineCardComponent.setTransformValue = function (element, property, value) {
        element.style["-webkit-transform"] = property + "(" + value + ")";
        element.style["-moz-transform"] = property + "(" + value + ")";
        element.style["-ms-transform"] = property + "(" + value + ")";
        element.style["-o-transform"] = property + "(" + value + ")";
        element.style["transform"] = property + "(" + value + ")";
    };
    TimelineCardComponent.dayDiff = function (first, second) {
        return Math.round(second - first);
    };
    TimelineCardComponent.minLapse = function (elements) {
        var result;
        for (var i = 1; i < elements.length; i++) {
            var distance = TimelineCardComponent_1.dayDiff(elements[i - 1].date, elements[i].date);
            result = result ? Math.min(result, distance) : distance;
        }
        return result;
    };
    return TimelineCardComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Number)
], TimelineCardComponent.prototype, "eventsMinDistance", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Array)
], TimelineCardComponent.prototype, "timelineElements", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], TimelineCardComponent.prototype, "dateFormat", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], TimelineCardComponent.prototype, "disabled", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", Boolean)
], TimelineCardComponent.prototype, "showContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('timelineWrapper'),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _a || Object)
], TimelineCardComponent.prototype, "timelineWrapper", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('eventsWrapper'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _b || Object)
], TimelineCardComponent.prototype, "eventsWrapper", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('fillingLine'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _c || Object)
], TimelineCardComponent.prototype, "fillingLine", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_15" /* ViewChild */])('eventsContent'),
    __metadata("design:type", typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* ElementRef */]) === "function" && _d || Object)
], TimelineCardComponent.prototype, "eventsContent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_18" /* ViewChildren */])('timelineEvents'),
    __metadata("design:type", typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* QueryList */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* QueryList */]) === "function" && _e || Object)
], TimelineCardComponent.prototype, "timelineEvents", void 0);
TimelineCardComponent = TimelineCardComponent_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-timeline-card',
        template: __webpack_require__("../../../../../src/app/timeline-card/timeline-card.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timeline-card/timeline-card.component.css")],
        animations: [
            __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_20" /* trigger */])('contentState', [
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* state */])('active', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                    position: 'relative', 'z-index': 2, opacity: 1,
                })),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('right => active', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translateX(100%)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* animate */])('400ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('active => right', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translateX(-100%)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* animate */])('400ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateX(100%)', offset: 1.0 })
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('active => left', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translateX(-100%)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* animate */])('400ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateX(0%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 1.0 })
                    ]))
                ]),
                __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* transition */])('left => active', [
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({
                        transform: 'translateX(100%)'
                    }),
                    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* animate */])('400ms ease-in-out', __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_25" /* keyframes */])([
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 0, transform: 'translateX(-100%)', offset: 0 }),
                        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_22" /* style */])({ opacity: 1, transform: 'translateX(0%)', offset: 1.0 })
                    ]))
                ]),
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], TimelineCardComponent);

var TimelineCardComponent_1, _a, _b, _c, _d, _e;
//# sourceMappingURL=timeline-card.component.js.map

/***/ }),

/***/ "../../../../../src/app/timeline-holder/timeline-holder.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/timeline-holder/timeline-holder.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Antarika </div>\n  <div class=\"panel-body\">\n    <app-timeline-card [timelineElements]=\"timeline\" [showContent]=\"showTimeLine\"></app-timeline-card>\n  </div>\n</div>\n<div class=\"panel panel-default\">\n  <div class=\"panel-heading\">Amit</div>\n  <div class=\"panel-body\">\n    <app-timeline-card [timelineElements]=\"timeline_2\" [showContent]=\"showTimeLine\"></app-timeline-card>\n  </div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/timeline-holder/timeline-holder.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__ = __webpack_require__("../../../../../src/app/ConfigurationService.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimelineHolderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TimelineHolderComponent = (function () {
    function TimelineHolderComponent(_ConfigurationService) {
        var _this = this;
        this._ConfigurationService = _ConfigurationService;
        this.showTimeLine = true;
        console.log('constructor');
        this._ConfigurationService.getLayoutData('/assets/data/antarika-timeline.json').subscribe(function (res) {
            res.forEach(function (value, index, array) {
                array[index]['date'] = new Date(value['date']);
            });
            _this.timeline = res;
        });
        this._ConfigurationService.getLayoutData('/assets/data/amit-timeline.json').subscribe(function (res) {
            res.forEach(function (value, index, array) {
                array[index]['date'] = new Date(value['date']);
            });
            _this.timeline_2 = res;
        });
    }
    TimelineHolderComponent.prototype.ngOnInit = function () {
        console.log('on init');
    };
    return TimelineHolderComponent;
}());
TimelineHolderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-timeline-holder',
        template: __webpack_require__("../../../../../src/app/timeline-holder/timeline-holder.component.html"),
        styles: [__webpack_require__("../../../../../src/app/timeline-holder/timeline-holder.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__["a" /* ConfigurationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ConfigurationService__["a" /* ConfigurationService */]) === "function" && _a || Object])
], TimelineHolderComponent);

var _a;
//# sourceMappingURL=timeline-holder.component.js.map

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  welcome works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/welcome/welcome.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var WelcomeComponent = (function () {
    function WelcomeComponent() {
    }
    WelcomeComponent.prototype.ngOnInit = function () {
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-welcome',
        template: __webpack_require__("../../../../../src/app/welcome/welcome.component.html"),
        styles: [__webpack_require__("../../../../../src/app/welcome/welcome.component.css")]
    }),
    __metadata("design:paramtypes", [])
], WelcomeComponent);

//# sourceMappingURL=welcome.component.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
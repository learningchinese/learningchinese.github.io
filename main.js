(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _components_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/app.component */ "./src/app/components/app.component.ts");
/* harmony import */ var _components_common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/common/navigation/navigation.component */ "./src/app/components/common/navigation/navigation.component.ts");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_character_character_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/character/character.component */ "./src/app/components/character/character.component.ts");
/* harmony import */ var _components_common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/common/pagination/pagination.component */ "./src/app/components/common/pagination/pagination.component.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _directives_permission_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./directives/permission.directive */ "./src/app/directives/permission.directive.ts");
/* harmony import */ var _components_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/common/popup/popup.component */ "./src/app/components/common/popup/popup.component.ts");
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/popup.service */ "./src/app/services/popup.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_single_character_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./services/single-character.service */ "./src/app/services/single-character.service.ts");
/* harmony import */ var _utils_string_util__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./utils/string.util */ "./src/app/utils/string.util.ts");
/* harmony import */ var _utils_store_util__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./utils/store.util */ "./src/app/utils/store.util.ts");
/* harmony import */ var _pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pipes/sanitize-html.pipe */ "./src/app/pipes/sanitize-html.pipe.ts");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/pub-sub.service */ "./src/app/services/pub-sub.service.ts");
/* harmony import */ var app_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! app/pipes/i18n.pipe */ "./src/app/pipes/i18n.pipe.ts");
/* harmony import */ var app_services_i18n_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! app/services/i18n.service */ "./src/app/services/i18n.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_4__["routing"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"]
            ],
            declarations: [
                _components_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_common_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"],
                _directives_permission_directive__WEBPACK_IMPORTED_MODULE_12__["PermissionDirective"],
                _components_common_popup_popup_component__WEBPACK_IMPORTED_MODULE_13__["PopupComponent"],
                _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashBoardComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_8__["AboutComponent"],
                _components_character_character_component__WEBPACK_IMPORTED_MODULE_9__["CharacterComponent"],
                _components_common_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_10__["PaginationComponent"],
                _pipes_sanitize_html_pipe__WEBPACK_IMPORTED_MODULE_20__["SanitizeHtmlPipe"],
                app_pipes_i18n_pipe__WEBPACK_IMPORTED_MODULE_22__["I18nPipe"]
            ],
            providers: [
                _configs_app_config__WEBPACK_IMPORTED_MODULE_11__["AppConfig"],
                _services_auth_service__WEBPACK_IMPORTED_MODULE_16__["AuthService"],
                _utils_string_util__WEBPACK_IMPORTED_MODULE_18__["StringUtil"],
                _services_popup_service__WEBPACK_IMPORTED_MODULE_14__["PopupService"],
                _services_user_service__WEBPACK_IMPORTED_MODULE_15__["UserService"],
                _utils_store_util__WEBPACK_IMPORTED_MODULE_19__["StoreUtil"],
                _services_single_character_service__WEBPACK_IMPORTED_MODULE_17__["SingleCharacterService"],
                _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_21__["PubSubService"],
                app_services_i18n_service__WEBPACK_IMPORTED_MODULE_23__["I18nService"]
            ],
            bootstrap: [_components_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: routing */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dashboard/dashboard.component */ "./src/app/components/dashboard/dashboard.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_character_character_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/character/character.component */ "./src/app/components/character/character.component.ts");




var appRoutes = [
    {
        path: "",
        //redirectTo: "/dashboard",
        //pathMatch: "full"
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashBoardComponent"]
    },
    {
        path: "home",
        component: _components_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashBoardComponent"]
    },
    {
        path: "character",
        component: _components_character_character_component__WEBPACK_IMPORTED_MODULE_3__["CharacterComponent"]
    },
    {
        path: "character/:char",
        component: _components_character_character_component__WEBPACK_IMPORTED_MODULE_3__["CharacterComponent"]
    },
    {
        path: "about",
        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_2__["AboutComponent"]
    }
];
var routing = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, { useHash: true }); // url path /#/path


/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/pub-sub.service */ "./src/app/services/pub-sub.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = /** @class */ (function () {
    function AboutComponent(pubSubService) {
        this.pubSubService = pubSubService;
    }
    AboutComponent.prototype.ngOnInit = function () {
        this.pubSubService.publish(_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__["PubSubService"].TOPICS.NAVIGAION_TAB_CHANGE, 'menu.items.about');
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "about-page",
            template: "\n    {{'menu.items.about' | i18n}}\n    ",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_1__["PubSubService"]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/app.component.css":
/*!**********************************************!*\
  !*** ./src/app/components/app.component.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app.component.html":
/*!***********************************************!*\
  !*** ./src/app/components/app.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\r\n<div class=\"container\">\r\n  <router-outlet></router-outlet>\r\n  <popup></popup>\r\n</div>"

/***/ }),

/***/ "./src/app/components/app.component.ts":
/*!*********************************************!*\
  !*** ./src/app/components/app.component.ts ***!
  \*********************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/character/character.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/character/character.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4 mt-3\">\r\n        <div class=\"input-group\">\r\n            <input type=\"text\" maxlength=\"8\" class=\"form-control\" [(ngModel)]=\"term\" name=\"term\" placeholder=\"Input Character\" (keypress)=\"enterSearch($event.keyCode)\"\r\n            />\r\n            <div class=\"input-group-append\">\r\n                <button class=\"btn btn-outline-success\" (click)=\"searchCharacter()\">{{'lbl.btn.search' | i18n}}</button>\r\n            </div>\r\n        </div>\r\n        <br>\r\n        <div class=\"embed-responsive embed-responsive-1by1\">\r\n            <img #gifImg class=\"embed-responsive-item\" [src]=\"gifUrl ? gifUrl : ''\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-8 mt-3\">\r\n        <h3>{{'lbl.fields.definition' | i18n }}</h3>\r\n        <div [innerHtml]=\"prettyDefinition(char.definition) | sanitizeHtml\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/character/character.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/character/character.component.ts ***!
  \*************************************************************/
/*! exports provided: CharacterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CharacterComponent", function() { return CharacterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _utils_store_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/store.util */ "./src/app/utils/store.util.ts");
/* harmony import */ var _utils_string_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/string.util */ "./src/app/utils/string.util.ts");
/* harmony import */ var _services_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/popup.service */ "./src/app/services/popup.service.ts");
/* harmony import */ var _models_single_character_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../models/single-character.model */ "./src/app/models/single-character.model.ts");
/* harmony import */ var _services_single_character_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/single-character.service */ "./src/app/services/single-character.service.ts");
/* harmony import */ var _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/pub-sub.service */ "./src/app/services/pub-sub.service.ts");
/* harmony import */ var app_services_i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/i18n.service */ "./src/app/services/i18n.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(stringUtil, popupService, renderer, singleCharacterService, storeUtil, route, pubSubService, i18nService) {
        this.stringUtil = stringUtil;
        this.popupService = popupService;
        this.renderer = renderer;
        this.singleCharacterService = singleCharacterService;
        this.storeUtil = storeUtil;
        this.route = route;
        this.pubSubService = pubSubService;
        this.i18nService = i18nService;
        this.flagLockImg = false;
        this.char = new _models_single_character_model__WEBPACK_IMPORTED_MODULE_5__["SingleCharacter"]();
    }
    CharacterComponent_1 = CharacterComponent;
    Object.defineProperty(CharacterComponent, "LAST_TERM_STORE_KEY", {
        get: function () { return 'LAST_TERM_STORE_KEY'; },
        enumerable: true,
        configurable: true
    });
    ;
    CharacterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pubSubService.publish(_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_7__["PubSubService"].TOPICS.NAVIGAION_TAB_CHANGE, 'menu.items.character');
        this.sub = this.route.params.subscribe(function (params) {
            var c = params['char'];
            if (!!c) {
                _this.term = c;
            }
            else {
                _this.term = _this.storeUtil.cache.has(CharacterComponent_1.LAST_TERM_STORE_KEY) ? _this.storeUtil.cache.get(CharacterComponent_1.LAST_TERM_STORE_KEY) : '好';
            }
            _this.searchCharacter();
        });
        this.renderer.listen(this.viewGifImg.nativeElement, "load", function (event) {
            _this.flagLockImg = true;
            if (_this.viewGifImg.nativeElement.complete) {
                _this.flagLockImg = false;
            }
        });
        this.renderer.listen(this.viewGifImg.nativeElement, "click", function (event) {
            if (!_this.flagLockImg) {
                var c = document.createElement('canvas');
                var w = c.width = _this.viewGifImg.nativeElement.width;
                var h = c.height = _this.viewGifImg.nativeElement.height;
                c.getContext('2d').drawImage(_this.viewGifImg.nativeElement, 0, 0, w, h);
                _this.gifUrl = c.toDataURL("image/gif");
                _this.flagLockImg = true;
                setTimeout(function () {
                    _this.loadGifImg();
                    _this.flagLockImg = false;
                }, 500);
            }
        });
    };
    CharacterComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CharacterComponent.prototype.loadGifImg = function () {
        this.gifUrl = !!this.term ? '/assets/gif/char/' + this.term.charAt(0) : '';
    };
    CharacterComponent.prototype.searchCharacter = function () {
        var _this = this;
        if (this.term != null && this.term.trim() != '') {
            this.singleCharacterService.findByCharacter(this.term)
                .then(function (entity) {
                _this.char = entity;
                _this.loadGifImg();
                _this.storeUtil.cache.set(CharacterComponent_1.LAST_TERM_STORE_KEY, _this.term);
            })
                .catch(function (err) {
                _this.popupService.showPopup(_this.i18nService.translate("msg.title.search_character"), _this.i18nService.translate("msg.err.search_character_fail") + " " + err);
            });
        }
    };
    CharacterComponent.prototype.enterSearch = function (keyCode) {
        if (keyCode == 13) {
            this.searchCharacter();
        }
    };
    CharacterComponent.prototype.prettyDefinition = function (s) {
        var _this = this;
        var html = '';
        if (s) {
            var ulOpen = false;
            var lines = s.split('\n')
                .filter(function (t) { return !!t && t.length > 0; })
                .map(function (t) {
                //add link for each Chinese character
                var r = '';
                for (var i = 0, n = t.length; i < n; i++) {
                    if (_this.stringUtil.checkChineseCharacter(t.charAt(i))) {
                        r += "<a href=\"#/character/" + t.charAt(i) + "\">" + t.charAt(i) + "</a>";
                    }
                    else {
                        r += t.charAt(i);
                    }
                }
                return r;
            });
            for (var i = 0, n = lines.length; i < n; i++) {
                if (/^\s+/.test(lines[i])) {
                    if (!ulOpen) {
                        html += '<ul>';
                        ulOpen = true;
                    }
                    html += "<li>" + lines[i] + "</li>";
                }
                else {
                    if (ulOpen) {
                        html += '</ul>';
                        ulOpen = false;
                    }
                    html += "<p>" + lines[i] + "</p>";
                }
            }
        }
        return html;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])("gifImg"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CharacterComponent.prototype, "viewGifImg", void 0);
    CharacterComponent = CharacterComponent_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "character-page",
            template: __webpack_require__(/*! ./character.component.html */ "./src/app/components/character/character.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [_utils_string_util__WEBPACK_IMPORTED_MODULE_3__["StringUtil"],
            _services_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _services_single_character_service__WEBPACK_IMPORTED_MODULE_6__["SingleCharacterService"],
            _utils_store_util__WEBPACK_IMPORTED_MODULE_2__["StoreUtil"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_pub_sub_service__WEBPACK_IMPORTED_MODULE_7__["PubSubService"],
            app_services_i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18nService"]])
    ], CharacterComponent);
    return CharacterComponent;
    var CharacterComponent_1;
}());



/***/ }),

/***/ "./src/app/components/common/navigation/navigation.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/common/navigation/navigation.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n\t<div class=\"container\">\r\n\t\t<a class=\"navbar-brand\" href=\"/\" ng-click=\"brandClicked()\">Learning Chinese</a>\r\n\t\t<button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\r\n\t\t aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n\t\t\t<span class=\"navbar-toggler-icon\"></span>\r\n\t\t</button>\r\n\t\t<div class=\"collapse navbar-collapse mt-1\" id=\"navbarSupportedContent\">\r\n\t\t\t<ul class=\"navbar-nav mr-auto\">\r\n\t\t\t\t<li class=\"nav-item\" *ngFor=\"let item of menuItems\" permission=\"{{item.permission}}\" [ngClass]=\"{'active': item === currentTab}\"\r\n\t\t\t\t (click)=\"changeCurrentTab(item)\">\r\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"{{item.path}}\">\r\n\t\t\t\t\t\t{{item.title | i18n}}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<ul class=\"navbar-nav\">\r\n\t\t\t\t<li class=\"nav-item\" *ngIf=\"!authService.isAuthenticated()\" permission=\"{{menuRightItems[0].permission}}\" [ngClass]=\"{'active': menuRightItems[0] === currentTab}\" (click)=\"changeCurrentTab(menuRightItems[0])\">\r\n\t\t\t\t\t<a class=\"nav-link\" routerLink=\"{{menuRightItems[0].path}}\">\r\n\t\t\t\t\t\t{{menuRightItems[0].title | i18n}}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"nav-item dropdown\" *ngIf=\"authService.isAuthenticated()\" [ngClass]=\"{'active': menuRightItems[1] === currentTab}\">\r\n\t\t\t\t\t<a class=\"nav-link dropdown-toggle\" href=\"javascript:void(0);\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\"\r\n\t\t\t\t\t aria-expanded=\"false\">\r\n\t\t\t\t\t\t{{authService.getUsername()}}\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" routerLink=\"{{menuRightItems[1].path}}\" (click)=\"changeCurrentTab(menuRightItems[1])\">Change Password</a>\r\n\t\t\t\t\t\t<a class=\"dropdown-item\" href=\"javascript:void(0);\" (click)=\"logout()\">\r\n\t\t\t\t\t\t\t{{'menu.items.logout' | i18n}}\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t</div>\r\n\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div>\r\n\t</div>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/common/navigation/navigation.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/navigation/navigation.component.ts ***!
  \**********************************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var app_services_popup_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/services/popup.service */ "./src/app/services/popup.service.ts");
/* harmony import */ var app_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/pub-sub.service */ "./src/app/services/pub-sub.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(appConfig, authService, router, popupService, pubSubService) {
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.popupService = popupService;
        this.pubSubService = pubSubService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuItems = [
            {
                id: "menu.items.home",
                title: "menu.items.home",
                path: "/",
                permission: this.appConfig.permissions.LOGIN
            },
            {
                id: "menu.items.character",
                title: "menu.items.character",
                path: "/character",
                permission: this.appConfig.permissions.LOGIN
            },
            {
                id: "menu.items.about",
                title: "menu.items.about",
                path: "/about",
                permission: this.appConfig.permissions.LOGIN
            }
        ];
        this.menuRightItems = [
            {
                id: "menu.items.login",
                title: "menu.items.login",
                path: "/login",
                permission: "Not-Support-Yet" //this.appConfig.permissions.LOGIN
            },
            {
                id: "menu.items.change_password",
                title: "menu.items.change_password",
                path: "/profile/change-password",
                permission: this.appConfig.permissions.LOGIN
            }
        ];
        this.currentTab = this.menuItems[0];
        this.onChangeMenuTab = function (args) {
            var tab;
            if (args && args.length > 0) {
                tab = args[0];
            }
            if (typeof tab === 'number') {
                if (tab < _this.menuItems.length) {
                    _this.currentTab = _this.menuItems[tab];
                }
            }
            if (typeof tab === 'string') {
                var cur = _this.menuItems.find(function (t) { return t['title'] === tab || t['path'] === tab; });
                if (!!cur) {
                    _this.currentTab = cur;
                }
            }
            else {
                console.warn("Can't set tab navigation to " + tab);
            }
        };
        this.pubSubService.subcribe(app_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_5__["PubSubService"].TOPICS.NAVIGAION_TAB_CHANGE, this.onChangeMenuTab);
    };
    NavigationComponent.prototype.changeCurrentTab = function (menuItem) {
        this.currentTab = menuItem;
    };
    NavigationComponent.prototype.isRightMenuEnable = function () {
        return false;
    };
    NavigationComponent.prototype.isLoggedIn = function () {
        return !this.authService.isAuthenticated();
    };
    NavigationComponent.prototype.logout = function () {
        var _this = this;
        this.popupService.showPopup("Log Out", "Do you want to log out ?", function () {
            _this.authService.logout().then(function (data) { return _this.router.navigate(['/']); }).catch(function (err) {
                console.log(err);
            });
            _this.popupService.hide();
        }, function () { return _this.popupService.hide(); });
    };
    NavigationComponent.prototype.ngOnDestroy = function () {
        this.pubSubService.unsubcribe(app_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_5__["PubSubService"].TOPICS.NAVIGAION_TAB_CHANGE, this.onChangeMenuTab);
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "navigation",
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/components/common/navigation/navigation.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__["AppConfig"],
            app_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            app_services_popup_service__WEBPACK_IMPORTED_MODULE_4__["PopupService"],
            app_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_5__["PubSubService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/components/common/pagination/pagination.component.html":
/*!************************************************************************!*\
  !*** ./src/app/components/common/pagination/pagination.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Page navigation\">\r\n\t<ul class=\"pagination\">\r\n\t\t<li *ngIf=\"pagination.startPage > 0\" class=\"page-item\">\r\n\t\t\t<a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Previous\" (click)=\"invokePrePagination()\">\r\n\t\t\t\t<span aria-hidden=\"true\">&laquo;</span>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t\t<li *ngFor=\"let i of pagination.generatePageIds()\" class=\"page-item\" [ngClass]=\"{'active': pagination.currentPage === i}\">\r\n\t\t\t<a class=\"page-link\" href=\"javascript:void(0)\" (click)=\"invokeSelectPage(i)\">{{i+1}}</a>\r\n\t\t</li>\r\n\t\t<li *ngIf=\"pagination.endPage < pagination.numOfPages - 1\" class=\"page-item\">\r\n\t\t\t<a class=\"page-link\" href=\"javascript:void(0)\" aria-label=\"Next\" (click)=\"invokeNextPagination()\">\r\n\t\t\t\t<span aria-hidden=\"true\">&raquo;</span>\r\n\t\t\t</a>\r\n\t\t</li>\r\n\t</ul>\r\n</nav>"

/***/ }),

/***/ "./src/app/components/common/pagination/pagination.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/common/pagination/pagination.component.ts ***!
  \**********************************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_models_pagination_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/models/pagination.model */ "./src/app/models/pagination.model.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.onSelectPage = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onPrePagination = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.onNextPagination = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    PaginationComponent.prototype.invokeSelectPage = function (e) {
        this.onSelectPage.next(e);
    };
    PaginationComponent.prototype.invokePrePagination = function (e) {
        this.onPrePagination.next(e);
    };
    PaginationComponent.prototype.invokeNextPagination = function (e) {
        this.onNextPagination.next(e);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("pagination"),
        __metadata("design:type", app_models_pagination_model__WEBPACK_IMPORTED_MODULE_1__["Pagination"])
    ], PaginationComponent.prototype, "pagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onSelectPage"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "onSelectPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onPrePagination"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "onPrePagination", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])("onNextPagination"),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], PaginationComponent.prototype, "onNextPagination", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "pagination",
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/components/common/pagination/pagination.component.html")
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/components/common/popup/popup.component.html":
/*!**************************************************************!*\
  !*** ./src/app/components/common/popup/popup.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal fade\" [ngClass]=\"{'hidden': !popupService.isOn,'in': popupService.isOn, 'show': popupService.isOn}\" tabindex=\"-1\"\r\n    role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\r\n    <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">\r\n                    {{popupService.title}}\r\n                </h5>\r\n                <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"popupService.reset()\">\r\n                    <span aria-hidden=\"true\">&times;</span>\r\n                </button>\r\n            </div>\r\n            <div class=\"modal-body\" [innerHtml]=\"popupService.content\">\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button [hidden]=\"!popupService.isEnableCancel()\" type=\"button\" class=\"btn btn-outline-secondary\" (click)=\"popupService.invokeCancel()\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-outline-primary\" (click)=\"popupService.invokeSubmit()\">OK</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/components/common/popup/popup.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/common/popup/popup.component.ts ***!
  \************************************************************/
/*! exports provided: PopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupComponent", function() { return PopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/popup.service */ "./src/app/services/popup.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupComponent = /** @class */ (function () {
    function PopupComponent(popupService) {
        this.popupService = popupService;
    }
    PopupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "popup",
            styles: ['.show { display: block !important; }', '.modal { background-color: #000a;}'],
            template: __webpack_require__(/*! ./popup.component.html */ "./src/app/components/common/popup/popup.component.html")
        }),
        __metadata("design:paramtypes", [app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3 class=\"mt-3\">{{'lbl.home.title' | i18n}}</h3>\r\n\r\n<pagination class=\"nav justify-content-end mt-2\" [pagination]=\"pagination\" (onSelectPage)=\"loadPage($event)\" (onPrePagination)=\"detectPrePagination($event)\"\r\n    (onNextPagination)=\"detectNextPagination($event)\"></pagination>\r\n\r\n<table class=\"table\">\r\n    <thead class=\"thead-light\">\r\n        <tr>\r\n            <th scope=\"col\" class=\"text-center\">#</th>\r\n            <th scope=\"col\" class=\"text-center\">{{'lbl.fields.character' | i18n}}</th>\r\n            <th scope=\"col\" class=\"text-center\">{{'lbl.fields.pronunciations_explanations' | i18n}}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let item of characters\">\r\n            <td scope=\"row\" class=\"text-center\">{{item._id}}</td>\r\n            <td>\r\n                <div class=\"text-center char-box\">\r\n                    <a routerLink=\"/character/{{item.sc}}\">{{item.sc}}</a>\r\n                    <span *ngIf=\"!!item.tc\">\r\n                        (F<a routerLink=\"/character/{{item.tc}}\"> {{item.tc}}</a>)\r\n                    </span>\r\n                </div>\r\n            </td>\r\n            <td>\r\n                <div [innerHTML]=\"prettyDefinition(item.definition) | sanitizeHtml\"></div>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n<pagination class=\"nav justify-content-end mt-2\" [pagination]=\"pagination\" (onSelectPage)=\"loadPage($event)\" (onPrePagination)=\"detectPrePagination($event)\"\r\n    (onNextPagination)=\"detectNextPagination($event)\"></pagination>"

/***/ }),

/***/ "./src/app/components/dashboard/dashboard.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/dashboard/dashboard.component.ts ***!
  \*************************************************************/
/*! exports provided: DashBoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashBoardComponent", function() { return DashBoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/popup.service */ "./src/app/services/popup.service.ts");
/* harmony import */ var app_services_single_character_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services/single-character.service */ "./src/app/services/single-character.service.ts");
/* harmony import */ var app_models_pagination_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/models/pagination.model */ "./src/app/models/pagination.model.ts");
/* harmony import */ var app_utils_store_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! app/utils/store.util */ "./src/app/utils/store.util.ts");
/* harmony import */ var app_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! app/services/pub-sub.service */ "./src/app/services/pub-sub.service.ts");
/* harmony import */ var app_utils_string_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! app/utils/string.util */ "./src/app/utils/string.util.ts");
/* harmony import */ var app_services_i18n_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/services/i18n.service */ "./src/app/services/i18n.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent(popupService, singleCharacterService, storeUtil, stringUtil, pubSubService, i18nService) {
        this.popupService = popupService;
        this.singleCharacterService = singleCharacterService;
        this.storeUtil = storeUtil;
        this.stringUtil = stringUtil;
        this.pubSubService = pubSubService;
        this.i18nService = i18nService;
        this.characters = [];
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var page = this.storeUtil.cache.get('dash-board:page');
        this.page = page ? +page : 0;
        this.pagination = new app_models_pagination_model__WEBPACK_IMPORTED_MODULE_3__["Pagination"]();
        this.pagination.pageSize = 20;
        this.pagination.currentPage = -1;
        this.pagination.maxNumOfPages = 7;
        this.pagination.endPage = this.pagination.maxNumOfPages - 1;
        this.loadPage(this.page);
        this.pubSubService.publish(app_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_5__["PubSubService"].TOPICS.NAVIGAION_TAB_CHANGE, 'menu.items.home');
    };
    DashBoardComponent.prototype.loadPage = function (page, forceLoad) {
        var _this = this;
        if (forceLoad === void 0) { forceLoad = false; }
        if (this.isPending) {
            return;
        }
        this.isPending = true;
        if (forceLoad === true || this.pagination.currentPage !== page) {
            this.singleCharacterService.findCommonCharacters(page, this.pagination.pageSize).then(function (hitList) {
                _this.page = page;
                _this.total = hitList.total;
                _this.characters = hitList.hits;
                _this.pagination.numOfPages = Math.floor(hitList.total / _this.pagination.pageSize) + 1;
                if (_this.pagination.numOfPages < _this.pagination.maxNumOfPages) {
                    _this.pagination.endPage = _this.pagination.numOfPages - 1;
                }
                _this.pagination.currentPage = page;
                _this.storeUtil.cache.set('dash-board:page', page);
            }).catch(function (err) {
                console.log("Load common characters fail");
                _this.popupService.showPopup(_this.i18nService.translate("msg.title.load_data"), _this.i18nService.translate("msg.err.load_data_fail"));
            }).then(function () { return _this.isPending = false; });
        }
    };
    DashBoardComponent.prototype.detectPrePagination = function (e) {
        var p = this.pagination.detectPrePagination();
        if (p !== this.pagination) {
            this.pagination = p;
            this.loadPage(this.pagination.currentPage, true);
        }
    };
    DashBoardComponent.prototype.detectNextPagination = function (e) {
        var p = this.pagination.detectNextPagination();
        if (p !== this.pagination) {
            this.pagination = p;
            this.loadPage(this.pagination.currentPage, true);
        }
    };
    DashBoardComponent.prototype.prettyDefinition = function (s) {
        var _this = this;
        var html = '';
        if (s) {
            var ulOpen = false;
            var lines = s.split('\n')
                .filter(function (t) { return !!t && t.length > 0; })
                .map(function (t) {
                //add link for each Chinese character
                var r = '';
                for (var i = 0, n = t.length; i < n; i++) {
                    if (_this.stringUtil.checkChineseCharacter(t.charAt(i))) {
                        r += "<a href=\"#/character/" + t.charAt(i) + "\">" + t.charAt(i) + "</a>";
                    }
                    else {
                        r += t.charAt(i);
                    }
                }
                return r;
            });
            for (var i = 0, n = lines.length; i < n; i++) {
                if (/^\s+/.test(lines[i])) {
                    if (!ulOpen) {
                        html += '<ul>';
                        ulOpen = true;
                    }
                    html += "<li>" + lines[i] + "</li>";
                }
                else {
                    if (ulOpen) {
                        html += '</ul>';
                        ulOpen = false;
                    }
                    html += "<p>" + lines[i] + "</p>";
                }
            }
        }
        return html;
    };
    DashBoardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "dashboard",
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/components/dashboard/dashboard.component.html"),
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [app_services_popup_service__WEBPACK_IMPORTED_MODULE_1__["PopupService"],
            app_services_single_character_service__WEBPACK_IMPORTED_MODULE_2__["SingleCharacterService"],
            app_utils_store_util__WEBPACK_IMPORTED_MODULE_4__["StoreUtil"],
            app_utils_string_util__WEBPACK_IMPORTED_MODULE_6__["StringUtil"],
            app_services_pub_sub_service__WEBPACK_IMPORTED_MODULE_5__["PubSubService"],
            app_services_i18n_service__WEBPACK_IMPORTED_MODULE_7__["I18nService"]])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "./src/app/configs/app.config.ts":
/*!***************************************!*\
  !*** ./src/app/configs/app.config.ts ***!
  \***************************************/
/*! exports provided: AppConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppConfig", function() { return AppConfig; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//Use AppConfig as a service

var AppConfig = /** @class */ (function () {
    function AppConfig() {
        this.serverApiUrl = "";
        this.authApiUrl = "";
        this.appId = "";
        this.permissions = {
            LOGIN: "login"
        };
    }
    AppConfig = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "./src/app/directives/permission.directive.ts":
/*!****************************************************!*\
  !*** ./src/app/directives/permission.directive.ts ***!
  \****************************************************/
/*! exports provided: PermissionDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionDirective", function() { return PermissionDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PermissionDirective = /** @class */ (function () {
    function PermissionDirective(el, renderer, authService) {
        this.el = el;
        this.renderer = renderer;
        this.authService = authService;
    }
    PermissionDirective.prototype.ngOnInit = function () {
        if (this.authService.checkPermission(this.permission) === false) {
            // this.renderer.setElementStyle(this.el.nativeElement, "display", "none");
            var elem = this.el.nativeElement;
            elem.parentNode.removeChild(elem);
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])("permission"),
        __metadata("design:type", String)
    ], PermissionDirective.prototype, "permission", void 0);
    PermissionDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: "[permission]"
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"], _services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], PermissionDirective);
    return PermissionDirective;
}());



/***/ }),

/***/ "./src/app/models/entity.model.ts":
/*!****************************************!*\
  !*** ./src/app/models/entity.model.ts ***!
  \****************************************/
/*! exports provided: Entity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entity", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());



/***/ }),

/***/ "./src/app/models/hit-list.model.ts":
/*!******************************************!*\
  !*** ./src/app/models/hit-list.model.ts ***!
  \******************************************/
/*! exports provided: HitList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HitList", function() { return HitList; });
var HitList = /** @class */ (function () {
    function HitList(data) {
        this.total = 0;
        this.count = 0;
        this.hits = [];
        if (typeof data === "object" && data !== null) {
            this.total = data["total"];
            this.count = data["count"];
            for (var i = 0; i < this.count; i++) {
                var item = data["hits"][i];
                this.hits.push(item);
            }
        }
    }
    return HitList;
}());



/***/ }),

/***/ "./src/app/models/pagination.model.ts":
/*!********************************************!*\
  !*** ./src/app/models/pagination.model.ts ***!
  \********************************************/
/*! exports provided: Pagination */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return Pagination; });
var Pagination = /** @class */ (function () {
    function Pagination() {
        this.pageSize = 20;
        this.maxNumOfPages = 10;
        this.numOfPages = 1;
        this.startPage = 0;
        this.endPage = 0;
        this.currentPage = 0;
    }
    Pagination.prototype.generatePageIds = function () {
        var pageIds = [];
        for (var i = this.startPage; i <= this.endPage; i++) {
            pageIds.push(i);
        }
        return pageIds;
    };
    Pagination.prototype.detectNextPagination = function () {
        if (this.numOfPages > this.maxNumOfPages) {
            var curr = this.endPage + 1;
            if (curr < this.numOfPages) {
                var end = curr + Math.floor(this.maxNumOfPages / 2);
                while (end >= this.numOfPages) {
                    end--;
                }
                var start = curr - Math.floor(this.maxNumOfPages / 2);
                while (start < 0) {
                    start++;
                }
                var newPagination = new Pagination();
                newPagination.pageSize = this.pageSize;
                newPagination.maxNumOfPages = this.maxNumOfPages;
                newPagination.numOfPages = this.numOfPages;
                newPagination.startPage = start;
                newPagination.endPage = end;
                newPagination.currentPage = curr;
                return newPagination;
            }
        }
        return this;
    };
    Pagination.prototype.detectPrePagination = function () {
        if (this.numOfPages > this.maxNumOfPages) {
            var curr = this.startPage - 1;
            if (curr >= 0) {
                var end = curr + Math.floor(this.maxNumOfPages / 2);
                while (end >= this.numOfPages) {
                    end--;
                }
                var start = curr - Math.floor(this.maxNumOfPages / 2);
                while (start < 0) {
                    start++;
                }
                var newPagination = new Pagination();
                newPagination.pageSize = this.pageSize;
                newPagination.maxNumOfPages = this.maxNumOfPages;
                newPagination.numOfPages = this.numOfPages;
                newPagination.startPage = start;
                newPagination.endPage = end;
                newPagination.currentPage = curr;
                return newPagination;
            }
        }
        return this;
    };
    return Pagination;
}());



/***/ }),

/***/ "./src/app/models/single-character.model.ts":
/*!**************************************************!*\
  !*** ./src/app/models/single-character.model.ts ***!
  \**************************************************/
/*! exports provided: SingleCharacter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCharacter", function() { return SingleCharacter; });
/* harmony import */ var _entity_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./entity.model */ "./src/app/models/entity.model.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var SingleCharacter = /** @class */ (function (_super) {
    __extends(SingleCharacter, _super);
    function SingleCharacter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return SingleCharacter;
}(_entity_model__WEBPACK_IMPORTED_MODULE_0__["Entity"]));



/***/ }),

/***/ "./src/app/pipes/i18n.pipe.ts":
/*!************************************!*\
  !*** ./src/app/pipes/i18n.pipe.ts ***!
  \************************************/
/*! exports provided: I18nPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nPipe", function() { return I18nPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var app_services_i18n_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/services/i18n.service */ "./src/app/services/i18n.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18nPipe = /** @class */ (function () {
    function I18nPipe(i18n) {
        this.i18n = i18n;
    }
    I18nPipe.prototype.transform = function (key) {
        return this.i18n.translate(key);
    };
    I18nPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: "i18n",
            pure: false
        }),
        __metadata("design:paramtypes", [app_services_i18n_service__WEBPACK_IMPORTED_MODULE_1__["I18nService"]])
    ], I18nPipe);
    return I18nPipe;
}());



/***/ }),

/***/ "./src/app/pipes/sanitize-html.pipe.ts":
/*!*********************************************!*\
  !*** ./src/app/pipes/sanitize-html.pipe.ts ***!
  \*********************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SanitizeHtmlPipe = /** @class */ (function () {
    function SanitizeHtmlPipe(_sanitizer) {
        this._sanitizer = _sanitizer;
    }
    SanitizeHtmlPipe.prototype.transform = function (v) {
        return this._sanitizer.bypassSecurityTrustHtml(v);
    };
    SanitizeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/app.config */ "./src/app/configs/app.config.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(router, userService, appConfig) {
        this.router = router;
        this.userService = userService;
        this.appConfig = appConfig;
        this.init();
    }
    AuthService.prototype.init = function () {
        var p = localStorage.getItem("permission");
        if (p !== null || p === undefined) {
            this.permissions = p.split(",");
        }
        else {
            this.permissions = [];
        }
        this.permissions.push("login");
    };
    AuthService.prototype.reset = function () {
        this.auth = null;
        this.permissions = ["login"];
        localStorage.removeItem("token");
        localStorage.removeItem("permission");
    };
    AuthService.prototype.logout = function () {
        this.reset();
        return this.userService.rejectToken(this.getRefreshToken());
    };
    AuthService.prototype.login = function (user) {
        return this.userService.authenticate(user);
    };
    AuthService.prototype.storeToken = function (data) {
        this.permissions = data["permissions"];
        localStorage.setItem("permission", this.permissions.toString());
        localStorage.setItem("token", data["token"]);
        localStorage.setItem("refreshToken", data["refreshToken"]);
        return true;
    };
    AuthService.prototype.getToken = function () {
        return localStorage.getItem("token");
    };
    AuthService.prototype.getRefreshToken = function () {
        return localStorage.getItem("refreshToken");
    };
    AuthService.prototype.checkPermission = function (permisson) {
        var i;
        var n = this.permissions.length;
        for (i = 0; i < n; i++) {
            if (this.permissions[i] === permisson) {
                return true;
            }
        }
        return false;
    };
    AuthService.prototype.parseJwt = function (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
    };
    AuthService.prototype.isAuthenticated = function () {
        if (this.auth == null) {
            var token = this.getToken();
            if (token) {
                this.auth = this.parseJwt(token);
            }
        }
        return this.auth != null;
    };
    AuthService.prototype.isTokenExpired = function () {
        if (this.isAuthenticated()) {
            return (this.auth["exp"] - Date.now()) > 3000000;
        }
        return true;
    };
    AuthService.prototype.getUsername = function () {
        if (this.isAuthenticated()) {
            return this.auth["username"];
        }
        return null;
    };
    AuthService.prototype.refreshToken = function () {
        var _this = this;
        if (this.isAuthenticated()) {
            if (this.isTokenExpired()) {
                this.userService.refreshToken(this.getRefreshToken()).then(function (data) { return _this.storeToken(data); });
            }
        }
    };
    AuthService.prototype.checkCredentials = function () {
        if (localStorage.getItem("token") === null) {
            this.router.navigate(["/login"]);
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _configs_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/i18n.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/i18n.service.ts ***!
  \******************************************/
/*! exports provided: I18nService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18nService", function() { return I18nService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18nService = /** @class */ (function () {
    function I18nService(http) {
        this.http = http;
        this.mapLang = new Map();
        this.setUserLang("en_US");
        //this.setUserLang("vi_VN");
        this.loadUserLang();
    }
    I18nService.prototype.loadLang = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var url = "/assets/lang/messages_" + this.userLang + ".json?t=" + Date.now();
        return this.http
            .get(url)
            .toPromise()
            .then(function (res) { return res.json(); })
            .catch(function (err) { return err; });
    };
    I18nService.prototype.loadUserLang = function () {
        var _this = this;
        this.loadLang().then(function (data) {
            for (var k in data) {
                _this.mapLang.set(k, data[k]);
            }
        }).catch(function (err) { return console.log(err); });
    };
    I18nService.prototype.setUserLang = function (lang) {
        this.userLang = lang;
    };
    I18nService.prototype.translate = function (key) {
        if (this.mapLang.has(key)) {
            return this.mapLang.get(key);
        }
        return key;
    };
    I18nService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], I18nService);
    return I18nService;
}());



/***/ }),

/***/ "./src/app/services/popup.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/popup.service.ts ***!
  \*******************************************/
/*! exports provided: PopupService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopupService", function() { return PopupService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PopupService = /** @class */ (function () {
    function PopupService() {
        this.reset();
    }
    PopupService.prototype.reset = function () {
        this.title = "Alert";
        this.content = "";
        this.isOn = false;
        this.doSubmit = null;
        this.doCancel = null;
        this.flagBtnCancel = true;
    };
    PopupService.prototype.setTitle = function (title) {
        this.title = title;
    };
    PopupService.prototype.setContent = function (content) {
        this.content = content;
    };
    PopupService.prototype.show = function () {
        this.isOn = true;
    };
    PopupService.prototype.hide = function () {
        this.isOn = false;
        this.reset(); //to prepare for next popup
    };
    PopupService.prototype.onSubmit = function (cb) {
        this.doSubmit = cb;
    };
    ;
    PopupService.prototype.onCancel = function (cb) {
        this.doCancel = cb;
        this.enableCancel();
    };
    ;
    PopupService.prototype.invokeSubmit = function (e) {
        if (this.doSubmit != null) {
            this.doSubmit();
        }
    };
    PopupService.prototype.invokeCancel = function (e) {
        if (this.doCancel != null) {
            this.doCancel();
        }
    };
    PopupService.prototype.isEnableCancel = function () {
        return this.flagBtnCancel;
    };
    PopupService.prototype.enableCancel = function () {
        this.flagBtnCancel = true;
    };
    PopupService.prototype.disableCancel = function () {
        this.flagBtnCancel = false;
    };
    PopupService.prototype.showPopup = function (title, content, onAccepted, onDenied) {
        var _this = this;
        if (onAccepted === void 0) { onAccepted = null; }
        if (onDenied === void 0) { onDenied = null; }
        this.setTitle(title);
        this.setContent(content);
        if (onAccepted != null) {
            this.onSubmit(onAccepted);
        }
        else {
            this.onSubmit(function () { return _this.hide(); });
        }
        if (onDenied != null) {
            this.onCancel(onDenied);
        }
        else {
            this.disableCancel();
        }
        this.show();
    };
    PopupService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "./src/app/services/pub-sub.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/pub-sub.service.ts ***!
  \*********************************************/
/*! exports provided: PubSubService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PubSubService", function() { return PubSubService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/**
 * PubSubService - Allow subcribe function on a topic, all functions subcribe will be invoked when the topic published
 */
var PubSubService = /** @class */ (function () {
    function PubSubService() {
        this.topics = new Map();
    }
    Object.defineProperty(PubSubService, "TOPICS", {
        get: function () {
            return {
                NAVIGAION_TAB_CHANGE: "NAVIGAION_TAB_CHANGE"
            };
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Subcribe a fuction event on topic
     * @param topic {string} - topic name
     * @param func {Fucntion} - event
     * @param oneMore {boolean} - allow more than one
     */
    PubSubService.prototype.subcribe = function (topic, func, oneMore) {
        if (!topic) {
            throw Error('Invalid param: `topic` is required');
        }
        if (typeof func !== 'function') {
            throw Error('Invalid param: `func` is required');
        }
        if (!this.topics.has(topic)) {
            this.topics.set(topic, []);
        }
        var existFunctions = this.topics.get(topic);
        if (existFunctions.indexOf(func) < 0) {
            existFunctions.push(func);
        }
        else if (oneMore) {
            existFunctions.push(func);
        }
        else {
            console.warn("Fuction is subcribed topic " + topic + ". One more ?");
        }
    };
    /**
     * Publishing will invoke all subcribed function event with the parameters
     * @param topic - topic
     * @param args - parameters for function event
     */
    PubSubService.prototype.publish = function (topic) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        if (!topic || !this.topics.has(topic)) {
            console.warn("Topic " + topic + " doesn't exist");
            return;
        }
        this.topics.get(topic).forEach(function (t) { return t(args); });
    };
    /**
     * Unsubcribe a fuction event on topic
     * @param topic {string} - topic name
     * @param func {Fucntion} - event
     */
    PubSubService.prototype.unsubcribe = function (topic, func) {
        if (!topic) {
            throw Error('Invalid param: `topic` is required');
        }
        if (typeof func !== 'function') {
            throw Error('Invalid param: `func` is required');
        }
        if (this.topics.has(topic)) {
            var filteredFunctions = this.topics.get(topic).filter(function (t) { return t !== func; });
            this.topics.set(topic, filteredFunctions);
        }
    };
    PubSubService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], PubSubService);
    return PubSubService;
}());



/***/ }),

/***/ "./src/app/services/service.ts":
/*!*************************************!*\
  !*** ./src/app/services/service.ts ***!
  \*************************************/
/*! exports provided: Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Service", function() { return Service; });
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");

var Service = /** @class */ (function () {
    function Service(http, apiUrl) {
        this.http = http;
        this.apiUrl = apiUrl;
    }
    Service.prototype.getAll = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return JSON.parse(response["_body"]); })
            .catch(this.handleError);
    };
    Service.prototype.getMany = function () {
        return this.http.get(this.apiUrl)
            .toPromise()
            .then(function (response) { return JSON.parse(response["_body"]); })
            .catch(this.handleError);
    };
    Service.prototype.getOne = function (id) {
        return this.http.get(this.apiUrl + id)
            .toPromise()
            .then(function (response) { return JSON.parse(response["_body"]); })
            .catch(this.handleError);
    };
    Service.prototype.save = function (entity) {
        if (entity._id || entity.id) {
            return this.put(entity);
        }
        return this.post(entity);
    };
    Service.prototype.delete = function (entity) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append("Content-Type", "application/json");
        var url = this.apiUrl + "/" + entity._id;
        return this.http
            .delete(url, {})
            .toPromise()
            .catch(this.handleError);
    };
    // Add new entity
    Service.prototype.post = function (entity) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]({ "Content-Type": "application/json" });
        headers.append("XToken", localStorage.getItem("token"));
        return this.http
            .post(this.apiUrl, JSON.stringify(entity), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing entity
    Service.prototype.put = function (entity) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_0__["Headers"]();
        headers.append("Content-Type", "application/json");
        headers.append("XToken", localStorage.getItem("token"));
        var url = this.apiUrl + (entity._id || entity.id);
        return this.http
            .put(url, JSON.stringify(entity), { headers: headers })
            .toPromise()
            .then(function () { return entity; })
            .catch(this.handleError);
    };
    Service.prototype.handleError = function (error) {
        console.error("An error occurred", error);
        return Promise.reject(error.message || error);
    };
    return Service;
}());



/***/ }),

/***/ "./src/app/services/single-character.service.ts":
/*!******************************************************!*\
  !*** ./src/app/services/single-character.service.ts ***!
  \******************************************************/
/*! exports provided: SingleCharacterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SingleCharacterService", function() { return SingleCharacterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _models_single_character_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/single-character.model */ "./src/app/models/single-character.model.ts");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service */ "./src/app/services/service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../configs/app.config */ "./src/app/configs/app.config.ts");
/* harmony import */ var _models_hit_list_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../models/hit-list.model */ "./src/app/models/hit-list.model.ts");
/* harmony import */ var _utils_string_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/string.util */ "./src/app/utils/string.util.ts");
/* harmony import */ var _utils_store_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/store.util */ "./src/app/utils/store.util.ts");
/* harmony import */ var app_services_i18n_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! app/services/i18n.service */ "./src/app/services/i18n.service.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SingleCharacterService = /** @class */ (function (_super) {
    __extends(SingleCharacterService, _super);
    function SingleCharacterService(http, appConfig, stringUtil, storeUtil, i18nService) {
        var _this = _super.call(this, http, appConfig.serverApiUrl + "/api/v1/character") || this;
        _this.appConfig = appConfig;
        _this.stringUtil = stringUtil;
        _this.storeUtil = storeUtil;
        _this.i18nService = i18nService;
        return _this;
    }
    SingleCharacterService_1 = SingleCharacterService;
    Object.defineProperty(SingleCharacterService, "CHAR_MAP_IDX", {
        get: function () { return 'CHAR_MAP_IDX'; },
        enumerable: true,
        configurable: true
    });
    ;
    /**
     * Get by character
     * @param {string} c - a character
     */
    SingleCharacterService.prototype.findByCharacter = function (c) {
        var _this = this;
        if (!c) {
            return Promise.reject(this.i18nService.translate("msg.err.character_empty"));
        }
        c = c.trim();
        if (!this.stringUtil.checkChineseCharacter(c)) {
            return Promise.reject(this.i18nService.translate("msg.err.is_not_chinese_character").replace("{0}", "\"" + c + "\""));
        }
        if (c.length > 1) {
            c = c.charAt(0);
        }
        //dummy check
        return this.checkImage('/assets/gif/char/' + c)
            .then(function (response) {
            return _this.findSingleCharacter(c);
        })
            .catch(function (err) {
            return Promise.reject(_this.i18nService.translate("msg.err.character_not_found"));
        });
    };
    SingleCharacterService.prototype.checkImage = function (imageSrc) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.onload = function (e) {
                resolve(true);
            };
            img.onerror = function (e) {
                reject(e);
            };
            img.src = imageSrc;
        });
    };
    SingleCharacterService.prototype.findSingleCharacter = function (c) {
        var _this = this;
        return this.findCharacterIndexPage(c)
            .then(function (idx) {
            if (idx >= 0) {
                return _this.findCommonCharacters(idx, 20).then(function (hitList) {
                    var char = hitList.hits.find(function (t) { return t.sc === c || t.tc === c; });
                    if (!char) {
                        throw Error("Not found character \"" + c + "\"");
                    }
                    return char;
                }).catch(function (err) { return err; });
            }
            else {
                // git image maybe OK
                var char = new _models_single_character_model__WEBPACK_IMPORTED_MODULE_2__["SingleCharacter"]();
                char.sc = c;
                char.definition = _this.i18nService.translate("msg.info.not_found_definition");
                return Promise.resolve(char);
            }
        }).catch(function (err) { return err; });
    };
    SingleCharacterService.prototype.findCharacterIndexPage = function (c) {
        var _this = this;
        if (this.storeUtil.cache.has(SingleCharacterService_1.CHAR_MAP_IDX)) {
            var charMapIdx = this.storeUtil.cache.get(SingleCharacterService_1.CHAR_MAP_IDX);
            return Promise.resolve(+charMapIdx[c]);
        }
        else {
            return this.http.get('/assets/json/common-characters/index.json')
                .toPromise()
                .then(function (res) {
                var charMapIdx = res.json();
                _this.storeUtil.cache.set(SingleCharacterService_1.CHAR_MAP_IDX, charMapIdx);
                return +charMapIdx[c];
            }).catch(function (err) { return err; });
        }
    };
    /**
     * Find common characters
     * @param page {number} - page index
     * @param size {number} - page size
     */
    SingleCharacterService.prototype.findCommonCharacters = function (page, size) {
        if (page === void 0) { page = 0; }
        var url = "/assets/json/common-characters/" + page + ".json";
        return this.http.get(url)
            .toPromise()
            .then(function (response) {
            var data = response.json();
            ;
            return new _models_hit_list_model__WEBPACK_IMPORTED_MODULE_5__["HitList"](data);
        })
            .catch(this.handleError);
    };
    SingleCharacterService = SingleCharacterService_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _configs_app_config__WEBPACK_IMPORTED_MODULE_4__["AppConfig"],
            _utils_string_util__WEBPACK_IMPORTED_MODULE_6__["StringUtil"],
            _utils_store_util__WEBPACK_IMPORTED_MODULE_7__["StoreUtil"],
            app_services_i18n_service__WEBPACK_IMPORTED_MODULE_8__["I18nService"]])
    ], SingleCharacterService);
    return SingleCharacterService;
    var SingleCharacterService_1;
}(_service__WEBPACK_IMPORTED_MODULE_3__["Service"]));



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service */ "./src/app/services/service.ts");
/* harmony import */ var _configs_app_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../configs/app.config */ "./src/app/configs/app.config.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function (_super) {
    __extends(UserService, _super);
    function UserService(http, appConfig) {
        var _this = _super.call(this, http, appConfig.serverApiUrl + '/api/v1/accounts') || this;
        _this.appConfig = appConfig;
        return _this;
    }
    UserService.prototype.authenticate = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        user.app = this.appConfig.appId;
        return this.http
            .post(this.appConfig.authApiUrl, JSON.stringify(user), { "headers": headers })
            .toPromise()
            .then(function (res) { return JSON.parse(res["_body"]); })
            .catch(this.handleError);
    };
    UserService.prototype.rejectToken = function (refreshToken) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.appConfig.authApiUrl + "/token/reject", JSON.stringify({ "refreshToken": refreshToken }))
            .toPromise()
            .then(function (res) { return JSON.parse(res["_body"]); })
            .catch(this.handleError);
    };
    UserService.prototype.refreshToken = function (refreshToken) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        return this.http.post(this.appConfig.authApiUrl + "/token", JSON.stringify({ "refreshToken": refreshToken }))
            .toPromise()
            .then(function (res) { return JSON.parse(res["_body"]); })
            .catch(this.handleError);
    };
    UserService.prototype.changePassword = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Content-Type': 'application/json' });
        user.app = this.appConfig.appId;
        return this.http
            .post(this.appConfig.authApiUrl + "/change-password", JSON.stringify(user), { "headers": headers })
            .toPromise()
            .then(function (res) { return JSON.parse(res["_body"]); })
            .catch(this.handleError);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _configs_app_config__WEBPACK_IMPORTED_MODULE_3__["AppConfig"]])
    ], UserService);
    return UserService;
}(_service__WEBPACK_IMPORTED_MODULE_2__["Service"]));



/***/ }),

/***/ "./src/app/utils/store.util.ts":
/*!*************************************!*\
  !*** ./src/app/utils/store.util.ts ***!
  \*************************************/
/*! exports provided: StoreUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoreUtil", function() { return StoreUtil; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StoreUtil = /** @class */ (function () {
    function StoreUtil() {
        this.cache = new Map();
    }
    StoreUtil = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StoreUtil);
    return StoreUtil;
}());



/***/ }),

/***/ "./src/app/utils/string.util.ts":
/*!**************************************!*\
  !*** ./src/app/utils/string.util.ts ***!
  \**************************************/
/*! exports provided: StringUtil */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StringUtil", function() { return StringUtil; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StringUtil = /** @class */ (function () {
    function StringUtil() {
    }
    StringUtil_1 = StringUtil;
    StringUtil.prototype.convertoUnsignKeepSpace = function (text) {
        if (typeof (text) !== "string") {
            return "";
        }
        var i = 0, n = text.length, rs = "";
        for (i = 0; i < n; i++) {
            if (text[i] === " ") {
                rs += " ";
            }
            else if (StringUtil_1.UNSIGN_CHAR_MAP.hasOwnProperty(text[i])) {
                rs += StringUtil_1.UNSIGN_CHAR_MAP[text[i]];
            }
            else {
                rs += text[i];
            }
        }
        return rs;
    };
    StringUtil.prototype.convertoUnsign = function (text) {
        if (text == undefined || text == null || typeof (text) !== "string") {
            return "";
        }
        var i = 0, n = text.length, rs = "";
        for (var i = 0; i < n; i++) {
            if (StringUtil_1.UNSIGN_CHAR_MAP.hasOwnProperty(text[i])) {
                rs += StringUtil_1.UNSIGN_CHAR_MAP[text[i]];
            }
            else {
                rs += text[i];
            }
        }
        return rs;
    };
    StringUtil.prototype.convertTime = function (seconds, hasUnit) {
        if (hasUnit === void 0) { hasUnit = false; }
        if (seconds < 60) {
            if (seconds < 10) {
                return hasUnit ? "00 min 0" + seconds + " s" : "00:0" + seconds;
            }
            return hasUnit ? "00 min " + seconds + " s" : "00:" + seconds;
        }
        var min = Math.floor(seconds / 60);
        var sec = seconds % 60;
        var s = "";
        if (min < 60) {
            if (min < 10) {
                s += "0" + min + (hasUnit ? " min " : ":");
            }
            else {
                s += min + (hasUnit ? " min " : ":");
            }
            if (sec < 10) {
                s += "0" + sec + (hasUnit ? " s" : "");
            }
            else {
                s += sec + (hasUnit ? " s" : "");
            }
            return s;
        }
        var h = Math.floor(min / 60);
        min = min % 60;
        s = h + (hasUnit ? " h " : ":");
        if (min < 10) {
            s += "0" + min + (hasUnit ? " min " : ":");
        }
        else {
            s += min + (hasUnit ? " min " : ":");
        }
        if (sec < 10) {
            s += "0" + sec + (hasUnit ? " sec" : "");
        }
        else {
            s += sec + (hasUnit ? " sec" : "");
        }
        return s;
    };
    StringUtil.prototype.toUTF8Array = function (str) {
        var utf8 = [];
        for (var i = 0; i < str.length; i++) {
            var charcode = str.charCodeAt(i);
            if (charcode < 0x80)
                utf8.push(charcode);
            else if (charcode < 0x800) {
                utf8.push(0xc0 | (charcode >> 6), 0x80 | (charcode & 0x3f));
            }
            else if (charcode < 0xd800 || charcode >= 0xe000) {
                utf8.push(0xe0 | (charcode >> 12), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
            else {
                i++;
                // UTF-16 encodes 0x10000-0x10FFFF by
                // subtracting 0x10000 and splitting the
                // 20 bits of 0x0-0xFFFFF into two halves
                charcode = 0x10000 + (((charcode & 0x3ff) << 10)
                    | (str.charCodeAt(i) & 0x3ff));
                utf8.push(0xf0 | (charcode >> 18), 0x80 | ((charcode >> 12) & 0x3f), 0x80 | ((charcode >> 6) & 0x3f), 0x80 | (charcode & 0x3f));
            }
        }
        return utf8;
    };
    StringUtil.prototype.fromUTF8Array = function (data) {
        var str = "", i;
        for (i = 0; i < data.length; i++) {
            var value = data[i];
            if (value < 0x80) {
                str += String.fromCharCode(value);
            }
            else if (value > 0xBF && value < 0xE0) {
                str += String.fromCharCode((value & 0x1F) << 6 | data[i + 1] & 0x3F);
                i += 1;
            }
            else if (value > 0xDF && value < 0xF0) {
                str += String.fromCharCode((value & 0x0F) << 12 | (data[i + 1] & 0x3F) << 6 | data[i + 2] & 0x3F);
                i += 2;
            }
            else {
                // surrogate pair
                var charCode = ((value & 0x07) << 18 | (data[i + 1] & 0x3F) << 12 | (data[i + 2] & 0x3F) << 6 | data[i + 3] & 0x3F) - 0x010000;
                str += String.fromCharCode(charCode >> 10 | 0xD800, charCode & 0x03FF | 0xDC00);
                i += 3;
            }
        }
        return str;
    };
    StringUtil.prototype.checkChineseCharacter = function (str) {
        if (!str) {
            return false;
        }
        var regexChineseChar = new RegExp("^[\u4E00-\uFA29]*$");
        var regexNonChineseChar = new RegExp("^[\uE7C7-\uE7F3]*$");
        str = str.replace(/\s/g, '');
        if (!regexChineseChar.test(str) || regexNonChineseChar.test(str)) {
            return false;
        }
        return true;
    };
    StringUtil.UNSIGN_CHAR_MAP = {
        "Á": "A",
        "À": "A",
        "Ả": "A",
        "Ã": "A",
        "Ạ": "A",
        "Ă": "A",
        "Ắ": "A",
        "Ằ": "A",
        "Ẳ": "A",
        "Ẵ": "A",
        "Ặ": "A",
        "Â": "A",
        "Ấ": "A",
        "Ầ": "A",
        "Ẩ": "A",
        "Ẫ": "A",
        "Ậ": "A",
        "á": "a",
        "à": "a",
        "ả": "a",
        "ã": "a",
        "ạ": "a",
        "ă": "a",
        "ắ": "a",
        "ằ": "a",
        "ẳ": "a",
        "ẵ": "a",
        "ặ": "a",
        "â": "a",
        "ấ": "a",
        "ầ": "a",
        "ẩ": "a",
        "ẫ": "a",
        "ậ": "a",
        "Đ": "D",
        "đ": "d",
        "É": "E",
        "È": "E",
        "Ẻ": "E",
        "Ẽ": "E",
        "Ẹ": "E",
        "Ê": "E",
        "Ế": "E",
        "Ề": "E",
        "Ể": "E",
        "Ễ": "E",
        "Ệ": "E",
        "é": "e",
        "è": "e",
        "ẻ": "e",
        "ẽ": "e",
        "ẹ": "e",
        "ê": "e",
        "ế": "e",
        "ề": "e",
        "ể": "e",
        "ễ": "e",
        "ệ": "e",
        "Í": "I",
        "Ì": "I",
        "Ỉ": "I",
        "Ĩ": "I",
        "Ị": "I",
        "í": "i",
        "ì": "i",
        "ĩ": "i",
        "ị": "i",
        "Ó": "O",
        "Ò": "O",
        "Ỏ": "O",
        "Õ": "O",
        "Ọ": "O",
        "Ô": "O",
        "Ố": "O",
        "Ồ": "O",
        "Ổ": "O",
        "Ỗ": "O",
        "Ộ": "O",
        "Ơ": "O",
        "Ớ": "O",
        "Ờ": "O",
        "Ở": "O",
        "Ỡ": "O",
        "Ợ": "O",
        "ó": "o",
        "ò": "o",
        "ỏ": "o",
        "õ": "o",
        "ọ": "o",
        "ô": "o",
        "ố": "o",
        "ồ": "o",
        "ổ": "o",
        "ỗ": "o",
        "ộ": "o",
        "ơ": "o",
        "ớ": "o",
        "ờ": "o",
        "ở": "o",
        "ỡ": "o",
        "ợ": "o",
        "Ú": "U",
        "Ù": "U",
        "Ủ": "U",
        "Ũ": "U",
        "Ụ": "U",
        "Ư": "U",
        "Ứ": "U",
        "Ừ": "U",
        "Ử": "U",
        "Ữ": "U",
        "Ự": "U",
        "ú": "u",
        "ù": "u",
        "ủ": "u",
        "ũ": "u",
        "ụ": "u",
        "ư": "u",
        "ứ": "u",
        "ừ": "u",
        "ử": "u",
        "ữ": "u",
        "ự": "u",
        "Ý": "Y",
        "Ỳ": "Y",
        "Ỷ": "Y",
        "Ỹ": "Y",
        "Ỵ": "Y",
        "ý": "y",
        "ỳ": "y",
        "ỷ": "y",
        "ỹ": "y",
        "ỵ": "y",
        " ": "-",
        "\t": "-",
        "<": "-",
        ">": "-",
        "*": "-",
        "%": "-",
        "&": "-",
        ":": "-",
        "\\": "-",
        "/": "-"
    };
    StringUtil = StringUtil_1 = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], StringUtil);
    return StringUtil;
    var StringUtil_1;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (window.location.hostname !== 'localhost' || _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MyProjects\learningchinese\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
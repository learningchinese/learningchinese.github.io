webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routes__ = __webpack_require__("../../../../../src/app/app.routes.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_app_component__ = __webpack_require__("../../../../../src/app/components/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_common_navigation_component__ = __webpack_require__("../../../../../src/app/components/common/navigation.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_common_dash_board_component__ = __webpack_require__("../../../../../src/app/components/common/dash-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_character_character_component__ = __webpack_require__("../../../../../src/app/components/character/character.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_common_pagination_component__ = __webpack_require__("../../../../../src/app/components/common/pagination.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__directives_permission_directive__ = __webpack_require__("../../../../../src/app/directives/permission.directive.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_common_popup_component__ = __webpack_require__("../../../../../src/app/components/common/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_popup_service__ = __webpack_require__("../../../../../src/app/services/popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_single_character_service__ = __webpack_require__("../../../../../src/app/services/single-character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__utils_string_util__ = __webpack_require__("../../../../../src/app/utils/string.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__utils_store_util__ = __webpack_require__("../../../../../src/app/utils/store.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_sanitize_html_pipe__ = __webpack_require__("../../../../../src/app/pipes/sanitize-html.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_routes__["a" /* routing */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__components_common_navigation_component__["a" /* NavigationComponent */],
                __WEBPACK_IMPORTED_MODULE_12__directives_permission_directive__["a" /* PermissionDirective */],
                __WEBPACK_IMPORTED_MODULE_13__components_common_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_7__components_common_dash_board_component__["a" /* DashBoardComponent */],
                __WEBPACK_IMPORTED_MODULE_8__components_about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_9__components_character_character_component__["a" /* CharacterComponent */],
                __WEBPACK_IMPORTED_MODULE_10__components_common_pagination_component__["a" /* PaginationComponent */],
                __WEBPACK_IMPORTED_MODULE_20__pipes_sanitize_html_pipe__["a" /* SanitizeHtmlPipe */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_11__configs_app_config__["a" /* AppConfig */],
                __WEBPACK_IMPORTED_MODULE_16__services_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_18__utils_string_util__["a" /* StringUtil */],
                __WEBPACK_IMPORTED_MODULE_14__services_popup_service__["a" /* PopupService */],
                __WEBPACK_IMPORTED_MODULE_15__services_user_service__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_19__utils_store_util__["a" /* StoreUtil */],
                __WEBPACK_IMPORTED_MODULE_17__services_single_character_service__["a" /* SingleCharacterService */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__components_app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.routes.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_common_dash_board_component__ = __webpack_require__("../../../../../src/app/components/common/dash-board.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__ = __webpack_require__("../../../../../src/app/components/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_character_character_component__ = __webpack_require__("../../../../../src/app/components/character/character.component.ts");




var appRoutes = [
    {
        path: "",
        //redirectTo: "/dashboard",
        //pathMatch: "full"
        component: __WEBPACK_IMPORTED_MODULE_1__components_common_dash_board_component__["a" /* DashBoardComponent */]
    },
    {
        path: "home",
        component: __WEBPACK_IMPORTED_MODULE_1__components_common_dash_board_component__["a" /* DashBoardComponent */]
    },
    {
        path: "character",
        component: __WEBPACK_IMPORTED_MODULE_3__components_character_character_component__["a" /* CharacterComponent */]
    },
    {
        path: "character/:char",
        component: __WEBPACK_IMPORTED_MODULE_3__components_character_character_component__["a" /* CharacterComponent */]
    },
    {
        path: "about",
        component: __WEBPACK_IMPORTED_MODULE_2__components_about_about_component__["a" /* AboutComponent */]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes);


/***/ }),

/***/ "../../../../../src/app/components/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "about-page",
            template: "\n    About\n    ",
            styleUrls: []
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app.component.html":
/***/ (function(module, exports) {

module.exports = "<navigation></navigation>\n<div class=\"container\">\n  <router-outlet></router-outlet>\n  <popup></popup>\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/components/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/components/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/character/character.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n        <div class=\"input-group\">\r\n            <input type=\"text\" maxlength=\"8\" class=\"form-control\" [(ngModel)]=\"term\" name=\"term\" placeholder=\"Input Character\" (keypress)=\"enterSearch($event.keyCode)\"\r\n            />\r\n            <div class=\"input-group-btn\">\r\n                <button class=\"btn btn-success\" (click)=\"searchCharacter()\">Search</button>\r\n            </div>\r\n        </div>\r\n        <h4>{{char.sc}}</h4>\r\n        <div class=\"embed-responsive embed-responsive-1by1\">\r\n            <img #gifImg class=\"embed-responsive-item\" [src]=\"gifUrl ? gifUrl : ''\" />\r\n        </div>\r\n    </div>\r\n    <div class=\"col-sm-8\">\r\n        <h4>Definition</h4>\r\n        <div [innerHtml]=\"prettyDefinition(char.definition) | sanitizeHtml\"></div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/character/character.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CharacterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_store_util__ = __webpack_require__("../../../../../src/app/utils/store.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_string_util__ = __webpack_require__("../../../../../src/app/utils/string.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_popup_service__ = __webpack_require__("../../../../../src/app/services/popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_single_character_model__ = __webpack_require__("../../../../../src/app/models/single-character.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_single_character_service__ = __webpack_require__("../../../../../src/app/services/single-character.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CharacterComponent = /** @class */ (function () {
    function CharacterComponent(stringUtil, popupService, renderer, singleCharacterService, storeUtil, route) {
        this.stringUtil = stringUtil;
        this.popupService = popupService;
        this.renderer = renderer;
        this.singleCharacterService = singleCharacterService;
        this.storeUtil = storeUtil;
        this.route = route;
        this.flagLockImg = false;
        this.flagCustomImg = false;
        this.char = new __WEBPACK_IMPORTED_MODULE_5__models_single_character_model__["a" /* SingleCharacter */]();
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
        this.sub = this.route.params.subscribe(function (params) {
            _this.term = params['char'];
            if (!_this.term) {
                _this.term = _this.storeUtil.cache.has(CharacterComponent_1.LAST_TERM_STORE_KEY) ? _this.storeUtil.cache.get(CharacterComponent_1.LAST_TERM_STORE_KEY) : '好';
            }
            _this.searchCharacter;
        });
        this.renderer.listen(this.viewGifImg.nativeElement, "load", function (event) {
            _this.flagLockImg = true;
            if (_this.viewGifImg.nativeElement.complete) {
                if (!_this.flagCustomImg) {
                    setTimeout(function () {
                        var c = document.createElement('canvas');
                        var w = c.width = _this.viewGifImg.nativeElement.width;
                        var h = c.height = _this.viewGifImg.nativeElement.height;
                        c.getContext('2d').drawImage(_this.viewGifImg.nativeElement, 0, 0, w, h);
                        _this.gifUrl = c.toDataURL("image/gif");
                        _this.flagCustomImg = true;
                        _this.flagLockImg = false;
                    }, 4950);
                }
                else {
                    _this.flagLockImg = false;
                }
            }
        });
        this.renderer.listen(this.viewGifImg.nativeElement, "click", function (event) {
            if (!_this.flagLockImg) {
                _this.loadGifImg();
            }
            else {
                _this.popupService.showPopup('Locked', 'Locked');
            }
        });
    };
    CharacterComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    CharacterComponent.prototype.loadGifImg = function () {
        this.gifUrl = this.char.sc ? '/assets/gif/char/' + this.char.sc : '';
        this.flagCustomImg = false;
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
                _this.popupService.showPopup("Search Character", err);
            });
        }
    };
    CharacterComponent.prototype.enterSearch = function (keyCode) {
        if (keyCode == 13) {
            this.searchCharacter();
        }
    };
    CharacterComponent.prototype.prettyDefinition = function (s) {
        var html = '';
        if (s) {
            var ulOpen = false;
            var lines = s.split('\n').filter(function (t) { return !!t && t.length > 0; });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])("gifImg"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], CharacterComponent.prototype, "viewGifImg", void 0);
    CharacterComponent = CharacterComponent_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "character-page",
            template: __webpack_require__("../../../../../src/app/components/character/character.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__utils_string_util__["a" /* StringUtil */],
            __WEBPACK_IMPORTED_MODULE_4__services_popup_service__["a" /* PopupService */],
            __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */],
            __WEBPACK_IMPORTED_MODULE_6__services_single_character_service__["a" /* SingleCharacterService */],
            __WEBPACK_IMPORTED_MODULE_2__utils_store_util__["a" /* StoreUtil */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]])
    ], CharacterComponent);
    return CharacterComponent;
    var CharacterComponent_1;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/dash-board.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>The most common Chinese characters in order of frequency</h3>\r\n\r\n<pagination [pagination]=\"pagination\" (onSelectPage)=\"loadPage($event)\" (onPrePagination)=\"detectPrePagination($event)\" (onNextPagination)=\"detectNextPagination($event)\"></pagination>\r\n<div class=\"row\">\r\n    <table class=\"table\">\r\n        <thead>\r\n            <th class=\"col-sm-1 text-center\">#</th>\r\n            <th class=\"col-sm-3 text-center\">Character</th>\r\n            <th class=\"col-sm-8 text-center\">Pronunciations and explanations</th>\r\n        </thead>\r\n        <tbody>\r\n            <tr *ngFor=\"let item of characters\">\r\n                <td class=\"text-center\">{{item._id}}</td>\r\n                <td>\r\n                    <div class=\"text-center char-box\">\r\n                        <a routerLink=\"/character/{{item.sc}}\">{{item.sc}}</a>\r\n                        <span *ngIf=\"!!item.tc\">\r\n                            (F\r\n                            <a routerLink=\"/character/{{item.tc}}\">{{item.tc}}</a>)\r\n                        </span>\r\n                    </div>\r\n                </td>\r\n                <td>\r\n                    <div [innerHTML]=\"prettyDefinition(item.definition) | sanitizeHtml\"></div>\r\n                </td>\r\n            </tr>\r\n        </tbody>\r\n    </table>\r\n</div>\r\n<pagination [pagination]=\"pagination\" (onSelectPage)=\"loadPage($event)\" (onPrePagination)=\"detectPrePagination($event)\" (onNextPagination)=\"detectNextPagination($event)\"></pagination>"

/***/ }),

/***/ "../../../../../src/app/components/common/dash-board.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashBoardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_popup_service__ = __webpack_require__("../../../../../src/app/services/popup.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_single_character_service__ = __webpack_require__("../../../../../src/app/services/single-character.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_pagination_model__ = __webpack_require__("../../../../../src/app/models/pagination.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_store_util__ = __webpack_require__("../../../../../src/app/utils/store.util.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashBoardComponent = /** @class */ (function () {
    function DashBoardComponent(popupService, singleCharacterService, storeUtil) {
        this.popupService = popupService;
        this.singleCharacterService = singleCharacterService;
        this.storeUtil = storeUtil;
        this.characters = [];
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        var page = this.storeUtil.cache.get('dash-board:page');
        this.page = page ? +page : 0;
        this.pagination = new __WEBPACK_IMPORTED_MODULE_3__models_pagination_model__["a" /* Pagination */]();
        this.pagination.pageSize = 20;
        this.pagination.currentPage = -1;
        this.pagination.maxNumOfPages = 7;
        this.pagination.endPage = this.pagination.maxNumOfPages - 1;
        this.loadPage(this.page);
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
            }).catch(function (err) {
                console.log("Load common characters failed", err);
                _this.popupService.showPopup('Load Data', 'Fail to load common characters.');
            }).then(function () { return _this.isPending = false; });
        }
    };
    DashBoardComponent.prototype.detectPrePagination = function () {
        var p = this.pagination.detectPrePagination();
        if (p !== this.pagination) {
            this.pagination = p;
            this.loadPage(this.pagination.currentPage, true);
        }
    };
    DashBoardComponent.prototype.detectNextPagination = function () {
        var p = this.pagination.detectNextPagination();
        if (p !== this.pagination) {
            this.pagination = p;
            this.loadPage(this.pagination.currentPage, true);
        }
    };
    DashBoardComponent.prototype.prettyDefinition = function (s) {
        var html = '';
        if (s) {
            var ulOpen = false;
            var lines = s.split('\n').filter(function (t) { return !!t && t.length > 0; });
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "dashboard",
            template: __webpack_require__("../../../../../src/app/components/common/dash-board.component.html"),
            styleUrls: [],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_popup_service__["a" /* PopupService */],
            __WEBPACK_IMPORTED_MODULE_2__services_single_character_service__["a" /* SingleCharacterService */],
            __WEBPACK_IMPORTED_MODULE_4__utils_store_util__["a" /* StoreUtil */]])
    ], DashBoardComponent);
    return DashBoardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/navigation.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\">\r\n    <div class=\"container\">\r\n        <div class=\"navbar-header\">\r\n            <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#navbar\" aria-expanded=\"false\"\r\n                aria-controls=\"navbar\">\r\n                <span class=\"sr-only\">Toggle navigation</span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n                <span class=\"icon-bar\"></span>\r\n            </button>\r\n            <a class=\"navbar-brand\" href=\"/\" ng-click=\"brandClicked()\">Learning Chinese</a>\r\n        </div>\r\n        <div id=\"navbar\" class=\"collapse navbar-collapse\">\r\n            <ul class=\"nav navbar-nav\">\r\n                <li *ngFor=\"let item of menuItems\" permission=\"{{item.permission}}\" [ngClass]=\"{'active': item === currentTab}\" (click)=\"changeCurrentTab(item)\">\r\n                    <a routerLink=\"{{item.path}}\" routerLinkActive=\"active\">{{item.title}}</a>\r\n                </li>\r\n            </ul>\r\n            <ul *ngIf=\"isRightMenuEnable()\" class=\"nav navbar-nav navbar-right\">\r\n                <li *ngIf=\"isLogedIn()\" [ngClass]=\"{'active': menuRightItems[0] === currentTab}\" (click)=\"changeCurrentTab(menuRightItems[0])\">\r\n                    <a routerLink=\"{{menuRightItems[0].path}}\">{{menuRightItems[0].title}}</a>\r\n                </li>\r\n                <li class=\"dropdown\" *ngIf=\"!isLogedIn()\" [ngClass]=\"{'active': menuRightItems[1] === currentTab}\">\r\n                    <a href=\"javascript:void(0);\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">{{authService.getUsername()}}\r\n                        <span class=\"caret\"></span>\r\n                    </a>\r\n                    <ul class=\"dropdown-menu\">\r\n                        <li>\r\n                            <a routerLink=\"{{menuRightItems[1].path}}\" (click)=\"changeCurrentTab(menuRightItems[1])\">Change Password</a>\r\n                        </li>\r\n                        <li>\r\n                            <a href=\"javascript:void(0);\" (click)=\"logout()\">Log Out</a>\r\n                        </li>\r\n                    </ul>\r\n                </li>\r\n            </ul>\r\n        </div>\r\n    </div>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/common/navigation.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavigationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_popup_service__ = __webpack_require__("../../../../../src/app/services/popup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(appConfig, authService, router, popupService) {
        this.appConfig = appConfig;
        this.authService = authService;
        this.router = router;
        this.popupService = popupService;
    }
    NavigationComponent.prototype.ngOnInit = function () {
        this.menuItems = [
            {
                title: "Home",
                path: "/",
                permission: this.appConfig.permissions.LOGIN
            },
            {
                title: "Character",
                path: "/character",
                permission: this.appConfig.permissions.LOGIN
            },
            {
                title: "About",
                path: "/about",
                permission: this.appConfig.permissions.LOGIN
            }
        ];
        this.menuRightItems = [
            {
                title: "Login",
                path: "/login",
                permission: this.appConfig.permissions.LOGIN
            },
            {
                title: "Change Password",
                path: "/profile/change-password",
                permission: this.appConfig.permissions.LOGIN
            }
        ];
        this.currentTab = this.menuItems[0];
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
    NavigationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "navigation",
            template: __webpack_require__("../../../../../src/app/components/common/navigation.component.html"),
            styleUrls: []
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__configs_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_4__services_popup_service__["a" /* PopupService */]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/pagination.component.html":
/***/ (function(module, exports) {

module.exports = "<nav aria-label=\"Page navigation\">\r\n    <ul class=\"pagination\">\r\n        <li *ngIf=\"pagination.startPage > 0\">\r\n            <a href=\"javascript:void(0)\" aria-label=\"Previous\" (click)=\"invokePrePagination()\">\r\n                <span aria-hidden=\"true\">&laquo;</span>\r\n            </a>\r\n        </li>\r\n        <li *ngFor=\"let i of pagination.generatePageIds()\" [ngClass]=\"{'active': pagination.currentPage === i}\">\r\n            <a href=\"javascript:void(0)\" (click)=\"invokeSelectPage(i)\">{{i+1}}</a>\r\n        </li>\r\n        <li *ngIf=\"pagination.endPage < pagination.numOfPages - 1\">\r\n            <a href=\"javascript:void(0)\" aria-label=\"Next\" (click)=\"invokeNextPagination()\">\r\n                <span aria-hidden=\"true\">&raquo;</span>\r\n            </a>\r\n        </li>\r\n    </ul>\r\n</nav>"

/***/ }),

/***/ "../../../../../src/app/components/common/pagination.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaginationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_pagination_model__ = __webpack_require__("../../../../../src/app/models/pagination.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PaginationComponent = /** @class */ (function () {
    function PaginationComponent() {
        this.onSelectPage = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onPrePagination = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.onNextPagination = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("pagination"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1__models_pagination_model__["a" /* Pagination */])
    ], PaginationComponent.prototype, "pagination", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])("onSelectPage"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PaginationComponent.prototype, "onSelectPage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])("onPrePagination"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PaginationComponent.prototype, "onPrePagination", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])("onNextPagination"),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */])
    ], PaginationComponent.prototype, "onNextPagination", void 0);
    PaginationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "pagination",
            template: __webpack_require__("../../../../../src/app/components/common/pagination.component.html")
        })
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "../../../../../src/app/components/common/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"{'modal fade': true, 'hidden': !popupService.isOn,'in': popupService.isOn, 'show': popupService.isOn}\" tabindex=\"-1\"\r\n    role=\"dialog\">\r\n    <div class=\"modal-dialog\" role=\"document\">\r\n        <div class=\"modal-content\">\r\n            <div class=\"modal-header\">\r\n                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"popupService.reset()\">\r\n                    <span aria-hidden=\"true\" (click)=\"popupService.reset()\">&times;</span>\r\n                </button>\r\n                <h4 class=\"modal-title\">{{popupService.title}}</h4>\r\n            </div>\r\n            <div class=\"modal-body\" [innerHtml]=\"popupService.content\">\r\n            </div>\r\n            <div class=\"modal-footer\">\r\n                <button [hidden]=\"!popupService.isEnableCancel()\" type=\"button\" class=\"btn btn-default\" (click)=\"popupService.invokeCancel()\">Cancel</button>\r\n                <button type=\"button\" class=\"btn btn-primary\" (click)=\"popupService.invokeSubmit()\">OK</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/components/common/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_popup_service__ = __webpack_require__("../../../../../src/app/services/popup.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PopupComponent = /** @class */ (function () {
    function PopupComponent(popupService) {
        this.popupService = popupService;
    }
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: "popup",
            styles: ['show { display: block !important; }'],
            template: __webpack_require__("../../../../../src/app/components/common/popup.component.html")
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_popup_service__["a" /* PopupService */]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/configs/app.config.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppConfig; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], AppConfig);
    return AppConfig;
}());



/***/ }),

/***/ "../../../../../src/app/directives/permission.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PermissionDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__("../../../../../src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])("permission"),
        __metadata("design:type", String)
    ], PermissionDirective.prototype, "permission", void 0);
    PermissionDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["s" /* Directive */])({
            selector: "[permission]"
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Renderer */], __WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
    ], PermissionDirective);
    return PermissionDirective;
}());



/***/ }),

/***/ "../../../../../src/app/models/entity.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Entity; });
var Entity = /** @class */ (function () {
    function Entity() {
    }
    return Entity;
}());



/***/ }),

/***/ "../../../../../src/app/models/hit-list.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HitList; });
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

/***/ "../../../../../src/app/models/pagination.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Pagination; });
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

/***/ "../../../../../src/app/models/single-character.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleCharacter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__entity_model__ = __webpack_require__("../../../../../src/app/models/entity.model.ts");
var __extends = (this && this.__extends) || (function () {
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
}(__WEBPACK_IMPORTED_MODULE_0__entity_model__["a" /* Entity */]));



/***/ }),

/***/ "../../../../../src/app/pipes/sanitize-html.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SanitizeHtmlPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sanitizeHtml'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* DomSanitizer */]])
    ], SanitizeHtmlPipe);
    return SanitizeHtmlPipe;
}());



/***/ }),

/***/ "../../../../../src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/services/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app.config.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_4__configs_app_config__["a" /* AppConfig */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "../../../../../src/app/services/popup.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], PopupService);
    return PopupService;
}());



/***/ }),

/***/ "../../../../../src/app/services/service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Service; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_toPromise__);


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
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append("Content-Type", "application/json");
        var url = this.apiUrl + "/" + entity._id;
        return this.http
            .delete(url, {})
            .toPromise()
            .catch(this.handleError);
    };
    // Add new entity
    Service.prototype.post = function (entity) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]({ "Content-Type": "application/json" });
        headers.append("XToken", localStorage.getItem("token"));
        return this.http
            .post(this.apiUrl, JSON.stringify(entity), { headers: headers })
            .toPromise()
            .then(function (res) { return res.json().data; })
            .catch(this.handleError);
    };
    // Update existing entity
    Service.prototype.put = function (entity) {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
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

/***/ "../../../../../src/app/services/single-character.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SingleCharacterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__service__ = __webpack_require__("../../../../../src/app/services/service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app.config.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_hit_list_model__ = __webpack_require__("../../../../../src/app/models/hit-list.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_string_util__ = __webpack_require__("../../../../../src/app/utils/string.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_store_util__ = __webpack_require__("../../../../../src/app/utils/store.util.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SingleCharacterService = /** @class */ (function (_super) {
    __extends(SingleCharacterService, _super);
    function SingleCharacterService(http, appConfig, stringUtil, storeUtil) {
        var _this = _super.call(this, http, appConfig.serverApiUrl + "/api/v1/character") || this;
        _this.appConfig = appConfig;
        _this.stringUtil = stringUtil;
        _this.storeUtil = storeUtil;
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
            return Promise.reject('A character is required.');
        }
        c = c.trim();
        if (!this.stringUtil.checkChineseCharacter(c)) {
            return Promise.reject("\"" + c + "\" is not Chinese character.");
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
            return Promise.reject('Character is not found.');
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
            return _this.findCommonCharacters(idx, 20).then(function (hitList) {
                var char = hitList.hits.find(function (t) { return t.sc === c || t.tc === c; });
                if (!char) {
                    throw Error("Not found character \"" + c + "\"");
                }
                return char;
            });
        }).catch(function (err) { return err; });
    };
    SingleCharacterService.prototype.findCharacterIndexPage = function (c) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            if (_this.storeUtil.cache.has(SingleCharacterService_1.CHAR_MAP_IDX)) {
                var charMapIdx = _this.storeUtil.cache.get(SingleCharacterService_1.CHAR_MAP_IDX);
                resolve(+charMapIdx[c]);
            }
            else {
                return _this.http.get('/assets/json/common-characters/index.json')
                    .toPromise()
                    .then(function (res) {
                    var charMapIdx = res.json();
                    _this.storeUtil.cache.set(SingleCharacterService_1.CHAR_MAP_IDX, charMapIdx);
                    return +charMapIdx[c];
                }).catch(function (err) { return reject(err); });
            }
        });
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
            return new __WEBPACK_IMPORTED_MODULE_4__models_hit_list_model__["a" /* HitList */](data);
        })
            .catch(this.handleError);
    };
    SingleCharacterService = SingleCharacterService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__configs_app_config__["a" /* AppConfig */], __WEBPACK_IMPORTED_MODULE_5__utils_string_util__["a" /* StringUtil */], __WEBPACK_IMPORTED_MODULE_6__utils_store_util__["a" /* StoreUtil */]])
    ], SingleCharacterService);
    return SingleCharacterService;
    var SingleCharacterService_1;
}(__WEBPACK_IMPORTED_MODULE_2__service__["a" /* Service */]));



/***/ }),

/***/ "../../../../../src/app/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/toPromise.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__service__ = __webpack_require__("../../../../../src/app/services/service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configs_app_config__ = __webpack_require__("../../../../../src/app/configs/app.config.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        user.app = this.appConfig.appId;
        return this.http
            .post(this.appConfig.authApiUrl, JSON.stringify(user), { "headers": headers })
            .toPromise()
            .then(function (res) { return JSON.parse(res["_body"]); })
            .catch(this.handleError);
    };
    UserService.prototype.rejectToken = function (refreshToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.appConfig.authApiUrl + "/token/reject", JSON.stringify({ "refreshToken": refreshToken }))
            .toPromise()
            .then(function (res) { return JSON.parse(res["_body"]); })
            .catch(this.handleError);
    };
    UserService.prototype.refreshToken = function (refreshToken) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        return this.http.post(this.appConfig.authApiUrl + "/token", JSON.stringify({ "refreshToken": refreshToken }))
            .toPromise()
            .then(function (res) { return JSON.parse(res["_body"]); })
            .catch(this.handleError);
    };
    UserService.prototype.changePassword = function (user) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        user.app = this.appConfig.appId;
        return this.http
            .post(this.appConfig.authApiUrl + "/change-password", JSON.stringify(user), { "headers": headers })
            .toPromise()
            .then(function (res) { return JSON.parse(res["_body"]); })
            .catch(this.handleError);
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__configs_app_config__["a" /* AppConfig */]])
    ], UserService);
    return UserService;
}(__WEBPACK_IMPORTED_MODULE_3__service__["a" /* Service */]));



/***/ }),

/***/ "../../../../../src/app/utils/store.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StoreUtil);
    return StoreUtil;
}());



/***/ }),

/***/ "../../../../../src/app/utils/string.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StringUtil; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
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
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], StringUtil);
    return StringUtil;
    var StringUtil_1;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
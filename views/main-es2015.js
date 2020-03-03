(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _layout_members_members_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout/members/members.component */ "./src/app/layout/members/members.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
/* harmony import */ var _pages_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/auth/sign-in/sign-in.component */ "./src/app/pages/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _pages_alien_dashboard_alien_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/alien-dashboard/alien-dashboard.component */ "./src/app/pages/alien-dashboard/alien-dashboard.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guards/auth.guard */ "./src/app/guards/auth.guard.ts");
/* harmony import */ var _pages_create_alien_create_alien_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/create-alien/create-alien.component */ "./src/app/pages/create-alien/create-alien.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_readme_readme_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/readme/readme.component */ "./src/app/pages/readme/readme.component.ts");
/* harmony import */ var _pages_alien_portal_alien_portal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/alien-portal/alien-portal.component */ "./src/app/pages/alien-portal/alien-portal.component.ts");













const routes = [
    {
        path: "",
        component: _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"],
        data: { title: "Authentication" },
        children: [
            {
                path: "",
                component: _pages_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_4__["SignInComponent"],
                data: { title: "Sign In" }
            }
        ]
    },
    {
        path: "members",
        component: _layout_members_members_component__WEBPACK_IMPORTED_MODULE_2__["MembersComponent"],
        canActivateChild: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]],
        data: { title: "Member Area" },
        children: [
            {
                path: "",
                component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"],
                data: { title: "Home" }
            },
            {
                path: "aliens/:id",
                component: _pages_alien_portal_alien_portal_component__WEBPACK_IMPORTED_MODULE_10__["AlienPortalComponent"],
                data: { title: "Alien Closer Look" }
            },
            {
                path: "dashboard",
                component: _pages_alien_dashboard_alien_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["AlienDashboardComponent"],
                data: { title: "Dashboard" }
            },
            {
                path: "create",
                component: _pages_create_alien_create_alien_component__WEBPACK_IMPORTED_MODULE_7__["CreateAlienComponent"],
                data: { title: "Create Alien" }
            },
            {
                path: "readme",
                component: _pages_readme_readme_component__WEBPACK_IMPORTED_MODULE_9__["ReadmeComponent"],
                data: { title: "Readme" }
            }
        ]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [
        {
            provide: _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
        }
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [
                    {
                        provide: _guards_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"],
                    }
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");






class AppComponent {
    constructor(router, titleService, route) {
        this.router = router;
        this.titleService = titleService;
        this.route = route;
        this.theme = "light";
    }
    ;
    ngOnInit() {
        //This code is subscribed to all route events
        this.router.events
            .pipe(
        //only interested in end of navigation
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(() => this.route), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((route) => {
            while (route.firstChild)
                route = route.firstChild;
            return route;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(route => route.outlet == 'primary'), 
        //data specified in app-routing module
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(route => route.data))
            .subscribe((event) => {
            //pushing router event to google analytics
            //sets title!
            this.titleService.setTitle(`${event.title} - Alien Invasion`);
            //checks for token expiry!
            //  if (event.tokenized) {
            //    this.auth.expireToken(this.storage.token);
            //  }
        });
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 2, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["Title"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _layout_members_members_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/members/members.component */ "./src/app/layout/members/members.component.ts");
/* harmony import */ var _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/auth/auth.component */ "./src/app/layout/auth/auth.component.ts");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _sidebar_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/nav-menu/nav-menu.component */ "./src/app/sidebar/nav-menu/nav-menu.component.ts");
/* harmony import */ var _pages_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/auth/sign-in/sign-in.component */ "./src/app/pages/auth/sign-in/sign-in.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _pages_alien_dashboard_alien_list_alien_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./pages/alien-dashboard/alien-list/alien-list.component */ "./src/app/pages/alien-dashboard/alien-list/alien-list.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _services_alien_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./services/alien.service */ "./src/app/services/alien.service.ts");
/* harmony import */ var _pages_alien_dashboard_alien_dashboard_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./pages/alien-dashboard/alien-dashboard.component */ "./src/app/pages/alien-dashboard/alien-dashboard.component.ts");
/* harmony import */ var _pipes_titlecase_pipe__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pipes/titlecase.pipe */ "./src/app/pipes/titlecase.pipe.ts");
/* harmony import */ var _pages_create_alien_create_alien_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/create-alien/create-alien.component */ "./src/app/pages/create-alien/create-alien.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_readme_readme_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/readme/readme.component */ "./src/app/pages/readme/readme.component.ts");
/* harmony import */ var _pages_alien_portal_alien_portal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/alien-portal/alien-portal.component */ "./src/app/pages/alien-portal/alien-portal.component.ts");































class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_alien_service__WEBPACK_IMPORTED_MODULE_22__["AlienService"], { provide: Window, useValue: window }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
            _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
            _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
        _layout_members_members_component__WEBPACK_IMPORTED_MODULE_9__["MembersComponent"],
        _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
        _sidebar_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__["NavMenuComponent"],
        _pages_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__["SignInComponent"],
        _pages_alien_dashboard_alien_list_alien_list_component__WEBPACK_IMPORTED_MODULE_16__["AlienListComponent"],
        _pages_alien_dashboard_alien_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["AlienDashboardComponent"],
        _pipes_titlecase_pipe__WEBPACK_IMPORTED_MODULE_24__["TitlecasePipe"],
        _pages_create_alien_create_alien_component__WEBPACK_IMPORTED_MODULE_25__["CreateAlienComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
        _pages_readme_readme_component__WEBPACK_IMPORTED_MODULE_27__["ReadmeComponent"],
        _pages_alien_portal_alien_portal_component__WEBPACK_IMPORTED_MODULE_28__["AlienPortalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
        _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
        _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                    _layout_members_members_component__WEBPACK_IMPORTED_MODULE_9__["MembersComponent"],
                    _layout_auth_auth_component__WEBPACK_IMPORTED_MODULE_10__["AuthComponent"],
                    _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"],
                    _sidebar_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_13__["NavMenuComponent"],
                    _pages_auth_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_14__["SignInComponent"],
                    _pages_alien_dashboard_alien_list_alien_list_component__WEBPACK_IMPORTED_MODULE_16__["AlienListComponent"],
                    _pages_alien_dashboard_alien_dashboard_component__WEBPACK_IMPORTED_MODULE_23__["AlienDashboardComponent"],
                    _pipes_titlecase_pipe__WEBPACK_IMPORTED_MODULE_24__["TitlecasePipe"],
                    _pages_create_alien_create_alien_component__WEBPACK_IMPORTED_MODULE_25__["CreateAlienComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_26__["HomeComponent"],
                    _pages_readme_readme_component__WEBPACK_IMPORTED_MODULE_27__["ReadmeComponent"],
                    _pages_alien_portal_alien_portal_component__WEBPACK_IMPORTED_MODULE_28__["AlienPortalComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                    _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"],
                    _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_18__["AngularFireModule"].initializeApp(src_environments_environment__WEBPACK_IMPORTED_MODULE_20__["environment"].firebase),
                    _angular_fire_auth__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                ],
                providers: [_services_user_service__WEBPACK_IMPORTED_MODULE_21__["UserService"], _services_alien_service__WEBPACK_IMPORTED_MODULE_22__["AlienService"], { provide: Window, useValue: window }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/guards/auth.guard.ts":
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");





class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivateChild(childRoute, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return true;
            // return await this.validateAuth();
        });
    }
    canActivate(next, state) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return yield this.validateAuth();
        });
    }
    validateAuth() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let user = yield this.userService.getUser();
            if (!user) {
                return this.router.parseUrl('');
            }
            return true;
        });
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/layout/auth/auth.component.ts":
/*!***********************************************!*\
  !*** ./src/app/layout/auth/auth.component.ts ***!
  \***********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AuthComponent {
    ngOnInit() {
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 2, vars: 0, consts: [[1, "auth"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".auth[_ngcontent-%COMP%] {\n  margin: 15% auto;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2F1dGgvRDpcXGNvZGVcXGFsaWVuLWludmFzaW9uXFxhbGllbi1pbnZhc2lvbl9vY1xcYWxpZW4taW52YXNpb24tZmUvc3JjXFxhcHBcXGxheW91dFxcYXV0aFxcYXV0aC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbGF5b3V0L2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGdCQUFBO0VBQ0Esa0JBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9hdXRoL2F1dGguY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYXV0aCB7XHJcbiAgICBcclxuICAgIG1hcmdpbjogMTUlIGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG59IiwiLmF1dGgge1xuICBtYXJnaW46IDE1JSBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/layout/members/members.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/members/members.component.ts ***!
  \*****************************************************/
/*! exports provided: MembersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MembersComponent", function() { return MembersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sidebar/sidebar.component */ "./src/app/layout/sidebar/sidebar.component.ts");



class MembersComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
MembersComponent.ɵfac = function MembersComponent_Factory(t) { return new (t || MembersComponent)(); };
MembersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MembersComponent, selectors: [["app-members"]], decls: 1, vars: 0, template: function MembersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "sidebar");
    } }, directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_1__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9tZW1iZXJzL21lbWJlcnMuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MembersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-members',
                templateUrl: './members.component.html',
                styleUrls: ['./members.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/layout/sidebar/sidebar.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/sidenav.js");
/* harmony import */ var _sidebar_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../sidebar/nav-menu/nav-menu.component */ "./src/app/sidebar/nav-menu/nav-menu.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");








function SidebarComponent_button_9_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarComponent_button_9_Template_button_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3); return _r26.toggle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "mat-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class SidebarComponent {
    constructor(window, registry, sanitizer) {
        this.window = window;
        registry.addSvgIcon("hamburger", sanitizer.bypassSecurityTrustResourceUrl('../../../assets/hamburger.svg'));
    }
    isMobile() {
        return this.window.innerWidth <= 767;
    }
    ngOnInit() {
    }
}
SidebarComponent.ɵfac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](Window), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"])); };
SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SidebarComponent, selectors: [["sidebar"]], decls: 11, vars: 3, consts: [["autosize", "", 1, "sidebar", 3, "hasBackdrop"], ["sidenav", ""], ["mode", "side", 1, "sidebar__drawer", "mat-elevation-z8", 3, "opened"], ["drawer", ""], ["src", "../../../assets/logo.png", "alt", "", "srcset", "", 1, "sidebar__drawer__logo", "logo"], [1, "mt-5"], [1, "alien-light", "sidebar__content"], ["class", "button--icon icon", 3, "click", 4, "ngIf"], [1, "button--icon", "icon", 3, "click"], ["svgIcon", "hamburger"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-drawer-container", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-drawer", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "nav-menu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-drawer-content", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, SidebarComponent_button_9_Template, 2, 0, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", ctx.isMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("opened", !ctx.isMobile());
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobile());
    } }, directives: [_angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawer"], _sidebar_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_4__["NavMenuComponent"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_3__["MatDrawerContent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIcon"]], styles: [".sidebar__content[_ngcontent-%COMP%] {\n  background-color: #a0d29e;\n}\n.sidebar__drawer[_ngcontent-%COMP%] {\n  border-right: 2px #fff solid;\n  text-align: center;\n  padding-top: 3rem;\n  color: #fff;\n  position: fixed;\n  height: 100vh;\n  width: 30rem;\n  background-color: #0b1b18;\n}\n.sidebar__drawer__logo[_ngcontent-%COMP%] {\n  margin-bottom: 20rem;\n  width: 100px;\n  display: block;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3NpZGViYXIvRDpcXGNvZGVcXGFsaWVuLWludmFzaW9uXFxhbGllbi1pbnZhc2lvbl9vY1xcYWxpZW4taW52YXNpb24tZmUvc3JjXFxzY3NzXFxfZ2xvYmFsLXZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2lkZWJhci9EOlxcY29kZVxcYWxpZW4taW52YXNpb25cXGFsaWVuLWludmFzaW9uX29jXFxhbGllbi1pbnZhc2lvbi1mZS9zcmNcXGFwcFxcbGF5b3V0XFxzaWRlYmFyXFxzaWRlYmFyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sYXlvdXQvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBOzs7O0NBQUE7QUFZQTs7O0NBQUE7QUNaSTtFQUNJLHlCREpPO0FFV2Y7QURMSTtFQUNJLDRCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdEYU07RUNaTixlQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkRMZTtBRVl2QjtBRE5RO0VBQ0ksb0JBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNRWiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItcHJpbWFyeTojYTBkMjllO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrOiM5MWIwOWQ7XHJcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxNSk7XHJcbi8qXHJcbiRjb2xvci1zZWNvbmRhcnk6ICNmZmI5MDA7XHJcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDE1KTtcclxuJGNvbG9yLXNlY29uZGFyeS1saWdodDogI2ZmNzczMDtcclxuKi9cclxuJGNvbG9yLXNlY29uZGFyeTojMjI1MTQ5O1xyXG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxNSk7XHJcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6XHQjNDg3NDYzO1xyXG5cclxuJGNvbG9yLXRlcnRpYXJ5OiAjNTVjNTdhO1xyXG4kY29sb3ItdGVydGlhcnktbGlnaHQ6ICM3ZWQ1NmY7XHJcblxyXG4vKlxyXG4kY29sb3ItdGVydGlhcnk6ICMyOTk4ZmY7XHJcbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzU2MzJmYTtcclxuKi9cclxuXHJcblxyXG4kY29sb3ItZ3JleS1kYXJrOiAjNzc3O1xyXG4kY29sb3ItZ3JleS1kYXJrLTI6ICMzMzM7XHJcbiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWJsYWNrOiAjMDAwO1xyXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjdmN2Y3O1xyXG4kY29sb3ItZ3JleS1saWdodC0yOiAjZWVlO1xyXG4vL2dyaWRcclxuJGdyaWQtd2lkdGg6IDExNHJlbTtcclxuJGd1dHRlci12ZXJ0aWNhbDogOHJlbTtcclxuJGd1dHRlci1ob3Jpem9udGFsOiA2cmVtO1xyXG5cclxuJGJvcmRlci1yYWRpdXMtZGVmYXVsdDogM3B4O1xyXG5cclxuLy9mb250XHJcbiRkZWZhdWx0LWZvbnQtc2l6ZTogMS42cmVtO1xyXG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vc2Nzcy9nbG9iYWwtdmFyaWFibGVzXCI7XHJcbi5zaWRlYmFyIHtcclxuXHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItcHJpbWFyeTtcclxuICAgIH1cclxuICAgICZfX2RyYXdlciB7XHJcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAycHggJGNvbG9yLXdoaXRlIHNvbGlkO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogM3JlbTtcclxuICAgICAgICBjb2xvcjogJGNvbG9yLXdoaXRlO1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIHdpZHRoOiAzMHJlbTtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3Itc2Vjb25kYXJ5LWRhcms7XHJcbiAgICAgICAgJl9fbG9nbyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIwcmVtO1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iLCIvKlxuJGNvbG9yLXNlY29uZGFyeTogI2ZmYjkwMDtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDE1KTtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICNmZjc3MzA7XG4qL1xuLypcbiRjb2xvci10ZXJ0aWFyeTogIzI5OThmZjtcbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzU2MzJmYTtcbiovXG4uc2lkZWJhcl9fY29udGVudCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNhMGQyOWU7XG59XG4uc2lkZWJhcl9fZHJhd2VyIHtcbiAgYm9yZGVyLXJpZ2h0OiAycHggI2ZmZiBzb2xpZDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgY29sb3I6ICNmZmY7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgd2lkdGg6IDMwcmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMGIxYjE4O1xufVxuLnNpZGViYXJfX2RyYXdlcl9fbG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDIwcmVtO1xuICB3aWR0aDogMTAwcHg7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.scss']
            }]
    }], function () { return [{ type: Window }, { type: _angular_material_icon__WEBPACK_IMPORTED_MODULE_1__["MatIconRegistry"] }, { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/alien-dashboard/alien-dashboard.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/pages/alien-dashboard/alien-dashboard.component.ts ***!
  \********************************************************************/
/*! exports provided: AlienDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlienDashboardComponent", function() { return AlienDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alien.service */ "./src/app/services/alien.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _alien_list_alien_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./alien-list/alien-list.component */ "./src/app/pages/alien-dashboard/alien-list/alien-list.component.ts");





function AlienDashboardComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "alien-list", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "alien-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "alien-list", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.aliens["Commander Chief"])("columns", ctx_r0.getCol("chief commander"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.aliens.Commander)("columns", ctx_r0.getCol("commander"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx_r0.aliens.Warrior)("columns", ctx_r0.getCol("warrior"));
} }
class AlienDashboardComponent {
    constructor(alienService) {
        this.alienService = alienService;
    }
    ngOnInit() {
        this.alienService.getAliens().subscribe(res => {
            this.aliens = res;
            console.log(this.aliens);
        });
    }
    getCol(type) {
        return this.alienService.getListColumns(type);
    }
}
AlienDashboardComponent.ɵfac = function AlienDashboardComponent_Factory(t) { return new (t || AlienDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_1__["AlienService"])); };
AlienDashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlienDashboardComponent, selectors: [["app-alien-dashboard"]], decls: 1, vars: 1, consts: [[4, "ngIf"], [1, "mb-5", "mt-5", "text-center"], ["l-title", "Alien Chief Commanders", 3, "items", "columns"], [1, "mb-5", "mt-5"], ["l-title", "Alien Commanders", 3, "items", "columns"], [1, "mt-5"], ["l-title", "Alien Warriors", 3, "items", "columns"]], template: function AlienDashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlienDashboardComponent_section_0_Template, 7, 6, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aliens);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _alien_list_alien_list_component__WEBPACK_IMPORTED_MODULE_3__["AlienListComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsaWVuLWRhc2hib2FyZC9hbGllbi1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlienDashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alien-dashboard',
                templateUrl: './alien-dashboard.component.html',
                styleUrls: ['./alien-dashboard.component.scss']
            }]
    }], function () { return [{ type: src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_1__["AlienService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/alien-dashboard/alien-list/alien-list.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/pages/alien-dashboard/alien-list/alien-list.component.ts ***!
  \**************************************************************************/
/*! exports provided: AlienListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlienListComponent", function() { return AlienListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/table.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _pipes_titlecase_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../pipes/titlecase.pipe */ "./src/app/pipes/titlecase.pipe.ts");






function AlienListComponent_ng_container_4_th_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "custom_titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const col_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, col_r35), " ");
} }
function AlienListComponent_ng_container_4_td_2_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AlienListComponent_ng_container_4_td_2_Template_a_click_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const data_r39 = ctx.$implicit; const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r40.navigateTo(data_r39); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const data_r39 = ctx.$implicit;
    const col_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", data_r39[col_r35], " ");
} }
function AlienListComponent_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AlienListComponent_ng_container_4_th_1_Template, 3, 3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AlienListComponent_ng_container_4_td_2_Template, 3, 1, "td", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const col_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matColumnDef", col_r35);
} }
function AlienListComponent_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 12);
} }
function AlienListComponent_tr_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 13);
} }
class AlienListComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    navigateTo(alien) {
        this.router.navigate(["members", "aliens", alien._id], { state: { data: alien } });
    }
}
AlienListComponent.ɵfac = function AlienListComponent_Factory(t) { return new (t || AlienListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
AlienListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlienListComponent, selectors: [["alien-list"]], inputs: { items: "items", title: ["l-title", "title"], columns: "columns" }, decls: 7, vars: 5, consts: [[1, "alien-list__wrapper"], [1, "heading-secondary", "alien-list__title"], ["mat-table", "", 1, "alien-list", "mat-elevation-z8", 3, "dataSource"], ["class", "alien-list__row", 3, "matColumnDef", 4, "ngFor", "ngForOf"], ["mat-header-row", "", 4, "matHeaderRowDef"], ["mat-row", "", 4, "matRowDef", "matRowDefColumns"], [1, "alien-list__row", 3, "matColumnDef"], ["class", "alien-list__header", "mat-header-cell", "", 4, "matHeaderCellDef"], ["class", "alien-list__cell", "mat-cell", "", 4, "matCellDef"], ["mat-header-cell", "", 1, "alien-list__header"], ["mat-cell", "", 1, "alien-list__cell"], [3, "click"], ["mat-header-row", ""], ["mat-row", ""]], template: function AlienListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "table", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlienListComponent_ng_container_4_Template, 3, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlienListComponent_tr_5_Template, 1, 0, "tr", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AlienListComponent_tr_6_Template, 1, 0, "tr", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.columns);
    } }, directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTable"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatHeaderRow"], _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatRow"]], pipes: [_pipes_titlecase_pipe__WEBPACK_IMPORTED_MODULE_4__["TitlecasePipe"]], styles: [".alien-list[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.alien-list__wrapper[_ngcontent-%COMP%] {\n  padding-bottom: 2rem;\n  margin-left: 10%;\n  width: 70%;\n}\n.alien-list__title[_ngcontent-%COMP%] {\n  display: block;\n  text-align: center;\n}\n.alien-list__cell[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 1.5rem;\n}\n.alien-list__header[_ngcontent-%COMP%] {\n  color: #91b09d;\n  text-align: center;\n  font-weight: 700;\n  font-size: 2rem;\n}\na[_ngcontent-%COMP%] {\n  color: #225149;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxpZW4tZGFzaGJvYXJkL2FsaWVuLWxpc3QvRDpcXGNvZGVcXGFsaWVuLWludmFzaW9uXFxhbGllbi1pbnZhc2lvbl9vY1xcYWxpZW4taW52YXNpb24tZmUvc3JjXFxzY3NzXFxfZ2xvYmFsLXZhcmlhYmxlcy5zY3NzIiwic3JjL2FwcC9wYWdlcy9hbGllbi1kYXNoYm9hcmQvYWxpZW4tbGlzdC9EOlxcY29kZVxcYWxpZW4taW52YXNpb25cXGFsaWVuLWludmFzaW9uX29jXFxhbGllbi1pbnZhc2lvbi1mZS9zcmNcXGFwcFxccGFnZXNcXGFsaWVuLWRhc2hib2FyZFxcYWxpZW4tbGlzdFxcYWxpZW4tbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYWxpZW4tZGFzaGJvYXJkL2FsaWVuLWxpc3QvYWxpZW4tbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7OztDQUFBO0FBWUE7OztDQUFBO0FDZEE7RUFDSSxXQUFBO0FDU0o7QURSSTtFQUNJLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0FDVVI7QURSSTtFQUNJLGNBQUE7RUFDQSxrQkFBQTtBQ1VSO0FETkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0FDUVI7QUROSTtFQUNJLGNEbEJZO0VDbUJaLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FDUVI7QURMQTtFQUNJLGNEbEJhO0VDbUJiLGVBQUE7QUNRSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2FsaWVuLWRhc2hib2FyZC9hbGllbi1saXN0L2FsaWVuLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkY29sb3ItcHJpbWFyeTojYTBkMjllO1xyXG4kY29sb3ItcHJpbWFyeS1kYXJrOiM5MWIwOWQ7XHJcbiRjb2xvci1wcmltYXJ5LWxpZ2h0OiBsaWdodGVuKCRjb2xvci1wcmltYXJ5LCAxNSk7XHJcbi8qXHJcbiRjb2xvci1zZWNvbmRhcnk6ICNmZmI5MDA7XHJcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDE1KTtcclxuJGNvbG9yLXNlY29uZGFyeS1saWdodDogI2ZmNzczMDtcclxuKi9cclxuJGNvbG9yLXNlY29uZGFyeTojMjI1MTQ5O1xyXG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxNSk7XHJcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6XHQjNDg3NDYzO1xyXG5cclxuJGNvbG9yLXRlcnRpYXJ5OiAjNTVjNTdhO1xyXG4kY29sb3ItdGVydGlhcnktbGlnaHQ6ICM3ZWQ1NmY7XHJcblxyXG4vKlxyXG4kY29sb3ItdGVydGlhcnk6ICMyOTk4ZmY7XHJcbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzU2MzJmYTtcclxuKi9cclxuXHJcblxyXG4kY29sb3ItZ3JleS1kYXJrOiAjNzc3O1xyXG4kY29sb3ItZ3JleS1kYXJrLTI6ICMzMzM7XHJcbiRjb2xvci13aGl0ZTogI2ZmZjtcclxuJGNvbG9yLWJsYWNrOiAjMDAwO1xyXG4kY29sb3ItZ3JleS1saWdodC0xOiAjZjdmN2Y3O1xyXG4kY29sb3ItZ3JleS1saWdodC0yOiAjZWVlO1xyXG4vL2dyaWRcclxuJGdyaWQtd2lkdGg6IDExNHJlbTtcclxuJGd1dHRlci12ZXJ0aWNhbDogOHJlbTtcclxuJGd1dHRlci1ob3Jpem9udGFsOiA2cmVtO1xyXG5cclxuJGJvcmRlci1yYWRpdXMtZGVmYXVsdDogM3B4O1xyXG5cclxuLy9mb250XHJcbiRkZWZhdWx0LWZvbnQtc2l6ZTogMS42cmVtO1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi8uLi9zY3NzL2dsb2JhbC12YXJpYWJsZXMnO1xyXG4uYWxpZW4tbGlzdCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgICZfX3dyYXBwZXIgeyBcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICB9XHJcbiAgICAmX190aXRsZSB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9fcm93IHtcclxuICAgIH1cclxuICAgICZfX2NlbGwge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgICZfX2hlYWRlciB7XHJcbiAgICAgICAgY29sb3I6ICRjb2xvci1wcmltYXJ5LWRhcms7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgfVxyXG59XHJcbmEge1xyXG4gICAgY29sb3I6ICRjb2xvci1zZWNvbmRhcnk7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iLCIvKlxuJGNvbG9yLXNlY29uZGFyeTogI2ZmYjkwMDtcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDE1KTtcbiRjb2xvci1zZWNvbmRhcnktbGlnaHQ6ICNmZjc3MzA7XG4qL1xuLypcbiRjb2xvci10ZXJ0aWFyeTogIzI5OThmZjtcbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzU2MzJmYTtcbiovXG4uYWxpZW4tbGlzdCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmFsaWVuLWxpc3RfX3dyYXBwZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgbWFyZ2luLWxlZnQ6IDEwJTtcbiAgd2lkdGg6IDcwJTtcbn1cbi5hbGllbi1saXN0X190aXRsZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uYWxpZW4tbGlzdF9fY2VsbCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAxLjVyZW07XG59XG4uYWxpZW4tbGlzdF9faGVhZGVyIHtcbiAgY29sb3I6ICM5MWIwOWQ7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgZm9udC1zaXplOiAycmVtO1xufVxuXG5hIHtcbiAgY29sb3I6ICMyMjUxNDk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlienListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'alien-list',
                templateUrl: './alien-list.component.html',
                styleUrls: ['./alien-list.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { items: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['items']
        }], title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['l-title']
        }], columns: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['columns']
        }] }); })();


/***/ }),

/***/ "./src/app/pages/alien-portal/alien-portal.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/alien-portal/alien-portal.component.ts ***!
  \**************************************************************/
/*! exports provided: AlienPortalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlienPortalComponent", function() { return AlienPortalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/alien.service */ "./src/app/services/alien.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _alien_dashboard_alien_list_alien_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../alien-dashboard/alien-list/alien-list.component */ "./src/app/pages/alien-dashboard/alien-list/alien-list.component.ts");
/* harmony import */ var _pipes_titlecase_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/titlecase.pipe */ "./src/app/pipes/titlecase.pipe.ts");







function AlienPortalComponent_section_0_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "custom_titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const prop_r24 = ctx.$implicit;
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, prop_r24), ": ", ctx_r20.alien[prop_r24], " ");
} }
function AlienPortalComponent_section_0_alien_list_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "alien-list", 7);
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("l-title", "Servants of ", ctx_r21.alien.name, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("columns", ctx_r21.getColumns(ctx_r21.alien.type))("items", ctx_r21.children);
} }
function AlienPortalComponent_section_0_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " This alien does not have any servants. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AlienPortalComponent_section_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AlienPortalComponent_section_0_p_4_Template, 3, 4, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AlienPortalComponent_section_0_alien_list_5_Template, 1, 3, "alien-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AlienPortalComponent_section_0_ng_template_6_Template, 2, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u2190 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Magnifying glass for alien ", ctx_r19.alien.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r19.propKeys);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r19.children)("ngIfElse", _r22);
} }
class AlienPortalComponent {
    constructor(router, route, alienService) {
        this.router = router;
        this.route = route;
        this.alienService = alienService;
        this.id = this.route.snapshot.params['id'];
        console.log(this.id);
        this.loadCurrentAlien();
        this.loadChildren();
    }
    set Alien(value) {
        this.alien = value;
        this.propKeys = Object.keys(value);
    }
    loadCurrentAlien() {
        let navData = this.router.getCurrentNavigation() && this.router.getCurrentNavigation().extras;
        if (navData && navData.state && navData.state.data) {
            this.Alien = navData.state.data;
        }
        else {
            this.alienService.getBy('id', this.id).subscribe(alien => {
                this.Alien = alien;
            });
        }
    }
    loadChildren() {
        this.alienService.getBy('parent', this.id).subscribe(children => {
            if (children && children['length'] > 0) {
                this.children = children;
            }
            console.log(this.children);
        });
    }
    getColumns(type) {
        type = type.toLowerCase();
        let colType = type === "commander" ? "warrior" : "commander";
        return this.alienService.getListColumns(colType);
    }
    ngOnInit() {
    }
}
AlienPortalComponent.ɵfac = function AlienPortalComponent_Factory(t) { return new (t || AlienPortalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_2__["AlienService"])); };
AlienPortalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AlienPortalComponent, selectors: [["app-alien-portal"]], decls: 1, vars: 1, consts: [["class", "portal", 4, "ngIf"], [1, "portal"], [1, "mb-5", "text-center"], [4, "ngFor", "ngForOf"], [3, "l-title", "columns", "items", 4, "ngIf", "ngIfElse"], ["noChildren", ""], ["routerLink", "/members/dashboard", 1, "button--icon"], [3, "l-title", "columns", "items"], [2, "font-weight", "bold"]], template: function AlienPortalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AlienPortalComponent_section_0_Template, 11, 4, "section", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.alien);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"], _alien_dashboard_alien_list_alien_list_component__WEBPACK_IMPORTED_MODULE_4__["AlienListComponent"]], pipes: [_pipes_titlecase_pipe__WEBPACK_IMPORTED_MODULE_5__["TitlecasePipe"]], styles: [".portal[_ngcontent-%COMP%] {\n  padding: 4rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWxpZW4tcG9ydGFsL0Q6XFxjb2RlXFxhbGllbi1pbnZhc2lvblxcYWxpZW4taW52YXNpb25fb2NcXGFsaWVuLWludmFzaW9uLWZlL3NyY1xcYXBwXFxwYWdlc1xcYWxpZW4tcG9ydGFsXFxhbGllbi1wb3J0YWwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2FsaWVuLXBvcnRhbC9hbGllbi1wb3J0YWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hbGllbi1wb3J0YWwvYWxpZW4tcG9ydGFsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBvcnRhbCB7XHJcbiAgICBwYWRkaW5nOiA0cmVtO1xyXG59IiwiLnBvcnRhbCB7XG4gIHBhZGRpbmc6IDRyZW07XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlienPortalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-alien-portal',
                templateUrl: './alien-portal.component.html',
                styleUrls: ['./alien-portal.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_2__["AlienService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/auth/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/auth/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");




class SignInComponent {
    constructor(router, route, userService) {
        this.router = router;
        this.route = route;
        this.userService = userService;
    }
    authenticate() {
        this.userService.loginWithGoogle().then(() => {
            this.router.navigate(['members'], { relativeTo: this.route });
        });
    }
    ngOnInit() {
    }
}
SignInComponent.ɵfac = function SignInComponent_Factory(t) { return new (t || SignInComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"])); };
SignInComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignInComponent, selectors: [["app-sign-in"]], decls: 5, vars: 0, consts: [[1, "auth__authentication__title"], [1, "button", 3, "click"]], template: function SignInComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Identify yourself, soldier ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignInComponent_Template_button_click_3_listener($event) { return ctx.authenticate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Authenticate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".auth__authentication__title[_ngcontent-%COMP%] {\n  font-size: 5rem;\n  text-transform: capitalize;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLWluL0Q6XFxjb2RlXFxhbGllbi1pbnZhc2lvblxcYWxpZW4taW52YXNpb25fb2NcXGFsaWVuLWludmFzaW9uLWZlL3NyY1xcYXBwXFxwYWdlc1xcYXV0aFxcc2lnbi1pblxcc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvYXV0aC9zaWduLWluL3NpZ24taW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRVE7RUFDUSxlQUFBO0VBQ0EsMEJBQUE7QUNEaEIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9hdXRoL3NpZ24taW4vc2lnbi1pbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hdXRoIHtcclxuICAgICZfX2F1dGhlbnRpY2F0aW9uIHtcclxuICAgICAgICAmX190aXRsZSB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59IiwiLmF1dGhfX2F1dGhlbnRpY2F0aW9uX190aXRsZSB7XG4gIGZvbnQtc2l6ZTogNXJlbTtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignInComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sign-in',
                templateUrl: './sign-in.component.html',
                styleUrls: ['./sign-in.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/create-alien/create-alien.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/create-alien/create-alien.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateAlienComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAlienComponent", function() { return CreateAlienComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/alien.service */ "./src/app/services/alien.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");










function CreateAlienComponent_mat_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, a_r7), " ");
} }
function CreateAlienComponent_div_21_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, v_r9), " ");
} }
function CreateAlienComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateAlienComponent_div_21_mat_option_6_Template, 3, 4, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.vehicles);
} }
function CreateAlienComponent_div_22_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const w_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", w_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, w_r11), " ");
} }
function CreateAlienComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Weapon");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateAlienComponent_div_22_mat_option_6_Template, 3, 4, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r4.weapons);
} }
function CreateAlienComponent_div_23_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const v_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", v_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, v_r14), " ");
} }
function CreateAlienComponent_div_23_mat_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const mc_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mc_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, mc_r15), " ");
} }
function CreateAlienComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Vehicle");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateAlienComponent_div_23_mat_option_6_Template, 3, 4, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Membership Card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, CreateAlienComponent_div_23_mat_option_12_Template, 3, 4, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.vehicles);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.membership_cards);
} }
function CreateAlienComponent_div_24_mat_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const a_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", a_r17._id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 2, a_r17.name), " ");
} }
function CreateAlienComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Serves Under");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CreateAlienComponent_div_24_mat_option_6_Template, 3, 4, "mat-option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.aliens[ctx_r6.getParent(_r1.value.type)]);
} }
class CreateAlienComponent {
    constructor(alienService, router) {
        this.alienService = alienService;
        this.router = router;
        //weapons, vehicles, cards & types are hardcoded per project specifications, though for a more maintainable 
        //project they would be prime candidates to be grabbed as schema from a database.
        this.weapons = ['Water gun', 'Pepper spray', 'Chopsticks'];
        this.membership_cards = ['Shufersal', 'Hever', 'Hitech zone'];
        this.vehicles = ['Bird scooter', 'Merkava tank'];
        this.alienTypes = ['Warrior', 'Commander', 'Commander Chief'];
        this.parentDictionary = {
            "Warrior": 'Commander',
            "Commander": 'Commander Chief',
            "Commander Chief": null
        };
        //Default value - this property is two-way bound to the form "type" property, and will alter the form based on its' state.
        this.type = "Warrior";
        alienService.getAliens().subscribe(res => {
            this.aliens = res;
        });
    }
    set Type(value) {
        console.log(this.type);
        this.type = value;
    }
    getParent(type) {
        return this.parentDictionary[type];
    }
    create(alien) {
        this.alienService.createAlien(alien).subscribe(result => {
            this.router.navigate(["members", "dashboard"]);
        });
    }
    ngOnInit() {
    }
}
CreateAlienComponent.ɵfac = function CreateAlienComponent_Factory(t) { return new (t || CreateAlienComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_1__["AlienService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
CreateAlienComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateAlienComponent, selectors: [["app-create-alien"]], decls: 28, vars: 7, consts: [[1, "form__wrapper"], [1, "form__heading"], [1, "form__p"], [1, "form", 3, "ngSubmit"], ["f", "ngForm"], [1, "row"], [1, "col-md-5"], [1, "form__field"], ["required", "", "matInput", "", "ngModel", "", "name", "name", "placeholder", "Ex. Plutonius Maximus"], [1, "col-md-6"], ["required", "", "name", "type", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], ["class", "row", 4, "ngIf"], [1, "text-center", "mt-5"], [1, "button", "button--primary", 3, "disabled"], [3, "value"], ["required", "", "ngModel", "", "name", "vehicle"], ["required", "", "ngModel", "", "name", "weapon"], ["required", "", "ngModel", "", "name", "membership_card"], ["required", "", "ngModel", "", "name", "parent"]], template: function CreateAlienComponent_Template(rf, ctx) { if (rf & 1) {
        const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create Alien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Use the form interface to generate additional aliens. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The alien type being the most important property - as it alters the other properties of the form. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateAlienComponent_Template_form_ngSubmit_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r18); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8); return ctx.create(_r1.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Alien Type");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateAlienComponent_Template_mat_select_ngModelChange_19_listener($event) { return ctx.type = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, CreateAlienComponent_mat_option_20_Template, 3, 4, "mat-option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, CreateAlienComponent_div_21_Template, 7, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, CreateAlienComponent_div_22_Template, 7, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateAlienComponent_div_23_Template, 13, 2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, CreateAlienComponent_div_24_Template, 7, 1, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Create");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.type);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.alienTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.value.type === "Commander");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.value.type === "Warrior");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _r1.value.type === "Commander Chief");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.aliens && _r1.value.type !== "Commander Chief");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", _r1.invalid);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_4__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgModel"], _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelect"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MatOption"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["TitleCasePipe"]], styles: [".mat-form-field[_ngcontent-%COMP%] {\n  padding: 0 !important;\n}\n.form__wrapper[_ngcontent-%COMP%] {\n  border-radius: 5px;\n  margin: 10% 20%;\n  border: 2px #225149 solid;\n  display: inline-block;\n  padding: 5rem;\n}\n.form__field[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY3JlYXRlLWFsaWVuL0Q6XFxjb2RlXFxhbGllbi1pbnZhc2lvblxcYWxpZW4taW52YXNpb25fb2NcXGFsaWVuLWludmFzaW9uLWZlL3NyY1xcc2Nzc1xcX2dsb2JhbC12YXJpYWJsZXMuc2NzcyIsInNyYy9hcHAvcGFnZXMvY3JlYXRlLWFsaWVuL0Q6XFxjb2RlXFxhbGllbi1pbnZhc2lvblxcYWxpZW4taW52YXNpb25fb2NcXGFsaWVuLWludmFzaW9uLWZlL3NyY1xcYXBwXFxwYWdlc1xcY3JlYXRlLWFsaWVuXFxjcmVhdGUtYWxpZW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2NyZWF0ZS1hbGllbi9jcmVhdGUtYWxpZW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7Ozs7Q0FBQTtBQVlBOzs7Q0FBQTtBQ2JBO0VBQ0kscUJBQUE7QUNRSjtBREZJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7QUNLUjtBREhJO0VBQ0ksYUFBQTtBQ0tSIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY3JlYXRlLWFsaWVuL2NyZWF0ZS1hbGllbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1wcmltYXJ5OiNhMGQyOWU7XHJcbiRjb2xvci1wcmltYXJ5LWRhcms6IzkxYjA5ZDtcclxuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDE1KTtcclxuLypcclxuJGNvbG9yLXNlY29uZGFyeTogI2ZmYjkwMDtcclxuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTUpO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjZmY3NzMwO1xyXG4qL1xyXG4kY29sb3Itc2Vjb25kYXJ5OiMyMjUxNDk7XHJcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDE1KTtcclxuJGNvbG9yLXNlY29uZGFyeS1saWdodDpcdCM0ODc0NjM7XHJcblxyXG4kY29sb3ItdGVydGlhcnk6ICM1NWM1N2E7XHJcbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzdlZDU2ZjtcclxuXHJcbi8qXHJcbiRjb2xvci10ZXJ0aWFyeTogIzI5OThmZjtcclxuJGNvbG9yLXRlcnRpYXJ5LWxpZ2h0OiAjNTYzMmZhO1xyXG4qL1xyXG5cclxuXHJcbiRjb2xvci1ncmV5LWRhcms6ICM3Nzc7XHJcbiRjb2xvci1ncmV5LWRhcmstMjogIzMzMztcclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItYmxhY2s6ICMwMDA7XHJcbiRjb2xvci1ncmV5LWxpZ2h0LTE6ICNmN2Y3Zjc7XHJcbiRjb2xvci1ncmV5LWxpZ2h0LTI6ICNlZWU7XHJcbi8vZ3JpZFxyXG4kZ3JpZC13aWR0aDogMTE0cmVtO1xyXG4kZ3V0dGVyLXZlcnRpY2FsOiA4cmVtO1xyXG4kZ3V0dGVyLWhvcml6b250YWw6IDZyZW07XHJcblxyXG4kYm9yZGVyLXJhZGl1cy1kZWZhdWx0OiAzcHg7XHJcblxyXG4vL2ZvbnRcclxuJGRlZmF1bHQtZm9udC1zaXplOiAxLjZyZW07XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2dsb2JhbC12YXJpYWJsZXNcIjtcclxuLy9vdmVycmlkaW5nIG1hdGVyaWFsIGxpYnJhcnkgZGVmYXVsdCB2YWx1ZXNcclxuLm1hdC1mb3JtLWZpZWxkIHtcclxuICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxufVxyXG4uZm9ybSB7XHJcbiAgICAmX190aXRsZSB7XHJcblxyXG4gICAgfVxyXG4gICAgJl9fd3JhcHBlciB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIG1hcmdpbjogIDEwJSAyMCU7XHJcbiAgICAgICAgYm9yZGVyOiAycHggJGNvbG9yLXNlY29uZGFyeSBzb2xpZDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcGFkZGluZzogNXJlbTtcclxuICAgIH1cclxuICAgICZfX2ZpZWxkIHtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG59IiwiLypcbiRjb2xvci1zZWNvbmRhcnk6ICNmZmI5MDA7XG4kY29sb3Itc2Vjb25kYXJ5LWRhcms6IGRhcmtlbigkY29sb3Itc2Vjb25kYXJ5LCAxNSk7XG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjZmY3NzMwO1xuKi9cbi8qXG4kY29sb3ItdGVydGlhcnk6ICMyOTk4ZmY7XG4kY29sb3ItdGVydGlhcnktbGlnaHQ6ICM1NjMyZmE7XG4qL1xuLm1hdC1mb3JtLWZpZWxkIHtcbiAgcGFkZGluZzogMCAhaW1wb3J0YW50O1xufVxuXG4uZm9ybV9fd3JhcHBlciB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgbWFyZ2luOiAxMCUgMjAlO1xuICBib3JkZXI6IDJweCAjMjI1MTQ5IHNvbGlkO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHBhZGRpbmc6IDVyZW07XG59XG4uZm9ybV9fZmllbGQge1xuICBwYWRkaW5nOiAycmVtO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateAlienComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-alien',
                templateUrl: './create-alien.component.html',
                styleUrls: ['./create-alien.component.scss']
            }]
    }], function () { return [{ type: src_app_services_alien_service__WEBPACK_IMPORTED_MODULE_1__["AlienService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "home"], [1, "home__heading", "heading-primary", "heading-primary--main"], [1, "home__img__wrapper"], ["src", "../../../assets/alien-dude.png", "alt", "", "srcset", "", 1, "home__img"], [1, "home__p"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Alien Invasion ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " PS: All images in this project have been ruthlessly stolen from google images.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".home[_ngcontent-%COMP%] {\n  text-align: center;\n  width: 70%;\n  padding: 2rem;\n}\n.home__img[_ngcontent-%COMP%] {\n  margin: 0 auto;\n  max-width: 150%;\n  opacity: 0.5;\n}\n.home__p[_ngcontent-%COMP%] {\n  margin-top: 6rem;\n  font-size: 1.2rem;\n  text-align: center;\n  font-size: 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9EOlxcY29kZVxcYWxpZW4taW52YXNpb25cXGFsaWVuLWludmFzaW9uX29jXFxhbGllbi1pbnZhc2lvbi1mZS9zcmNcXGFwcFxccGFnZXNcXGhvbWVcXGhvbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FDRVI7QURPSTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7QUNMUiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ob21lIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHdpZHRoOiA3MCU7XHJcbiAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgJl9faW1nIHtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICBtYXgtd2lkdGg6IDE1MCU7XHJcbiAgICAgICAgb3BhY2l0eTogMC41O1xyXG5cclxuICAgICAgICAmX193cmFwcGVyIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9faGVhZGluZyB7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICAmX19wIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA2cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICB9XHJcbn0iLCIuaG9tZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgd2lkdGg6IDcwJTtcbiAgcGFkZGluZzogMnJlbTtcbn1cbi5ob21lX19pbWcge1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWF4LXdpZHRoOiAxNTAlO1xuICBvcGFjaXR5OiAwLjU7XG59XG4uaG9tZV9fcCB7XG4gIG1hcmdpbi10b3A6IDZyZW07XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMnJlbTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pages/readme/readme.component.ts":
/*!**************************************************!*\
  !*** ./src/app/pages/readme/readme.component.ts ***!
  \**************************************************/
/*! exports provided: ReadmeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReadmeComponent", function() { return ReadmeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ReadmeComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
ReadmeComponent.ɵfac = function ReadmeComponent_Factory(t) { return new (t || ReadmeComponent)(); };
ReadmeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ReadmeComponent, selectors: [["app-readme"]], decls: 67, vars: 0, consts: [[1, "readme"], [1, "heading-secondary"]], template: function ReadmeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " readme ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Welcome to the official readme for the ALIEN INVASION project! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " This project was created by Oren Carmel as an Avantis job appliance home assignment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Run Instructions: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Start the server: npm start ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Build the project: frontend dist; ng serve followed by npm build. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Front End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Front end contained within the alien-invasion-fe (frontend) folder. Traditional Angular folder structure; ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " src/app/guards for routing guards (functions that will trigger on specified routing events) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " src/app/pages for page specific components ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " src/app/layout for general layout wrappers. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " src/app/services; classes acting as state managers, transfering data, handling logic and API requests. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " src/app/app.component; project root. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Back End");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " /bootstrap; all files first loaded on server start. contains integral dependencies such as express, database connection, API configuration etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " /controllers: API application logic. contains routes and business methods, mostly fetching & creating data. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " /db: Data access layer. partially redundant when using Mongo but a good habit in my honest opinion. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " /models: Data models & schemas describing the structure of the application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, " /scripts: Single use scripts for specified use-cases such as clearing & populating tables. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "API");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Routes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, " /api/aliens: POST -- create an alien ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " /api/aliens: GET - get all aliens - returns a hashmap of arrays, with the keys being alien type. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " /api/aliens/:param?param=[param] - Get aliens by a param specified in query (defaults to ID). Accepts: type, parent, id. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Known issues:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, " Due to time limitations, some elements had to be 'skimmed': ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Google authentication is limited to until page refresh. User will have to re-authenticate on refresh. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Unfortunately, did not have enough time to implement token validation expiration, refresh, etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, " Authentication is not currently validated on server side. With firebase being our authentication platform, we would have to install a Firebase admin API for auth validation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Lack of input validation. Given more time, to scale this app further we would need to validate fields before inserting them to the database. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, " That could be achieved using Joi, another library or implementing custom field validation. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".readme[_ngcontent-%COMP%] {\n  padding: 3rem;\n  font-family: consolas;\n}\n.readme[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  line-height: 1;\n}\nbody[_ngcontent-%COMP%] {\n  overflow: scroll;\n  height: 100vh;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcmVhZG1lL0Q6XFxjb2RlXFxhbGllbi1pbnZhc2lvblxcYWxpZW4taW52YXNpb25fb2NcXGFsaWVuLWludmFzaW9uLWZlL3NyY1xcYXBwXFxwYWdlc1xccmVhZG1lXFxyZWFkbWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3BhZ2VzL3JlYWRtZS9yZWFkbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUNDSjtBREFJO0VBQ0ksY0FBQTtBQ0VSO0FEQ0E7RUFDSSxnQkFBQTtFQUNBLGFBQUE7QUNFSjtBRENBO0VBQ0ksaUJBQUE7QUNFSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3JlYWRtZS9yZWFkbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucmVhZG1lIHtcclxuICAgIHBhZGRpbmc6IDNyZW07XHJcbiAgICBmb250LWZhbWlseTogY29uc29sYXM7XHJcbiAgICBwIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIH1cclxufVxyXG5ib2R5IHtcclxuICAgIG92ZXJmbG93OiBzY3JvbGw7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSIsIi5yZWFkbWUge1xuICBwYWRkaW5nOiAzcmVtO1xuICBmb250LWZhbWlseTogY29uc29sYXM7XG59XG4ucmVhZG1lIHAge1xuICBsaW5lLWhlaWdodDogMTtcbn1cblxuYm9keSB7XG4gIG92ZXJmbG93OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ReadmeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-readme',
                templateUrl: './readme.component.html',
                styleUrls: ['./readme.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/pipes/titlecase.pipe.ts":
/*!*****************************************!*\
  !*** ./src/app/pipes/titlecase.pipe.ts ***!
  \*****************************************/
/*! exports provided: TitlecasePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitlecasePipe", function() { return TitlecasePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


/**
 * Angular has a custom built in titlecase but I'm not a fan of the implementation - we'll make a new 'custom' titlecase pipe.
 */
class TitlecasePipe {
    constructor() {
        this.prepositions = [
            'of', 'the', 'is', 'on', 'in', 'at', 'for'
        ];
    }
    transform(value) {
        if (!value)
            return null;
        if (typeof value != 'string')
            return value;
        value = value.replace(/_/g, ' ').replace(/-/g, ' ');
        let words = value.split(' ');
        return words.map((word, i) => {
            if (i > 0 && this.isPreposition(word)) {
                return word.toLowerCase();
            }
            return this.toTitleCase(word);
        }).join(' ');
    }
    toTitleCase(word) {
        return word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase();
    }
    isPreposition(word) {
        return this.prepositions.includes(word.toLowerCase());
    }
}
TitlecasePipe.ɵfac = function TitlecasePipe_Factory(t) { return new (t || TitlecasePipe)(); };
TitlecasePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "custom_titlecase", type: TitlecasePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TitlecasePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'custom_titlecase'
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/services/alien.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/alien.service.ts ***!
  \*******************************************/
/*! exports provided: AlienService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlienService", function() { return AlienService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class AlienService {
    constructor(http) {
        this.http = http;
        this.columns = {
            "chief commander": ['name', 'vehicle', 'membership_card'],
            "warrior": ['name', 'weapon'],
            "commander": ['name', 'vehicle'],
        };
        this.url = `${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].base_url}/aliens`;
    }
    createAlien(alien) {
        return this.http.post(this.url, alien);
    }
    getAliens() {
        return this.http.get(this.url);
    }
    getBy(param, value) {
        return this.http.get(`${this.url}/${value}?param=${param}`);
    }
    getListColumns(type) {
        console.log(type);
        return this.columns[type.toLowerCase()];
    }
}
AlienService.ɵfac = function AlienService_Factory(t) { return new (t || AlienService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AlienService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AlienService, factory: AlienService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AlienService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-auth.js");





/**
 * For smaller apps, I prefer to use Firebase to handle
 * authentication and token validation for me.
 * This way, we can delegate responsibility of
 * token management and easily implement social
 * signups on client side, no fuss.
 */
class UserService {
    constructor(fAuth) {
        this.fAuth = fAuth;
        this.user$ = this.fAuth.user;
        this.fAuth.onAuthStateChanged(observer => {
            if (!observer) {
                this.user$ = null;
                return;
            }
            this.userProfile = {
                name: observer.displayName,
                email: observer.email
            };
            this.user$ = observer;
        });
    }
    loginWithGoogle() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let provider = new firebase__WEBPACK_IMPORTED_MODULE_2__["auth"].GoogleAuthProvider();
            let result = yield this.fAuth.signInWithPopup(provider);
        });
    }
    getUser() {
        return this.fAuth.currentUser;
    }
    get Profile() {
        return this.userProfile;
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"] }]; }, null); })();


/***/ }),

/***/ "./src/app/sidebar/nav-menu/nav-menu.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sidebar/nav-menu/nav-menu.component.ts ***!
  \********************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




function NavMenuComponent_li_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const route_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", route_r31.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", route_r31.text, " ");
} }
class NavMenuComponent {
    constructor() {
        this.routes = [
            {
                path: "/members/create",
                text: "Create Aliens"
            },
            {
                path: "/members/dashboard",
                text: "Alien Dashboard"
            },
            {
                path: "/members/readme",
                text: "Readme"
            }
        ];
    }
    ngOnInit() {
    }
}
NavMenuComponent.ɵfac = function NavMenuComponent_Factory(t) { return new (t || NavMenuComponent)(); };
NavMenuComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenuComponent, selectors: [["nav-menu"]], decls: 3, vars: 1, consts: [["class", "route__item", 4, "ngFor", "ngForOf"], [1, "route__item"], ["routerLinkActive", "route--active", 1, "route", 3, "routerLink"]], template: function NavMenuComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NavMenuComponent_li_2_Template, 3, 2, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.routes);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"]], styles: [".route[_ngcontent-%COMP%] {\n  font-weight: 700;\n  letter-spacing: 3px;\n  height: 3rem;\n}\n.route__item[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.route--active[_ngcontent-%COMP%] {\n  color: #d3ead2;\n}\n.icon[_ngcontent-%COMP%] {\n  margin-left: 1rem !important;\n  padding: 1rem;\n}\na[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lkZWJhci9uYXYtbWVudS9EOlxcY29kZVxcYWxpZW4taW52YXNpb25cXGFsaWVuLWludmFzaW9uX29jXFxhbGllbi1pbnZhc2lvbi1mZS9zcmNcXHNjc3NcXF9nbG9iYWwtdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL3NpZGViYXIvbmF2LW1lbnUvRDpcXGNvZGVcXGFsaWVuLWludmFzaW9uXFxhbGllbi1pbnZhc2lvbl9vY1xcYWxpZW4taW52YXNpb24tZmUvc3JjXFxhcHBcXHNpZGViYXJcXG5hdi1tZW51XFxuYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvc2lkZWJhci9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTs7OztDQUFBO0FBWUE7OztDQUFBO0FDZEE7RUFLSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQ0tKO0FEWEk7RUFDSSxhQUFBO0FDYVI7QURQSTtFQUNJLGNEUmM7QUVpQnRCO0FETkE7RUFDSSw0QkFBQTtFQUNBLGFBQUE7QUNTSjtBRFBBO0VBQ0ksZUFBQTtBQ1VKIiwiZmlsZSI6InNyYy9hcHAvc2lkZWJhci9uYXYtbWVudS9uYXYtbWVudS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRjb2xvci1wcmltYXJ5OiNhMGQyOWU7XHJcbiRjb2xvci1wcmltYXJ5LWRhcms6IzkxYjA5ZDtcclxuJGNvbG9yLXByaW1hcnktbGlnaHQ6IGxpZ2h0ZW4oJGNvbG9yLXByaW1hcnksIDE1KTtcclxuLypcclxuJGNvbG9yLXNlY29uZGFyeTogI2ZmYjkwMDtcclxuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTUpO1xyXG4kY29sb3Itc2Vjb25kYXJ5LWxpZ2h0OiAjZmY3NzMwO1xyXG4qL1xyXG4kY29sb3Itc2Vjb25kYXJ5OiMyMjUxNDk7XHJcbiRjb2xvci1zZWNvbmRhcnktZGFyazogZGFya2VuKCRjb2xvci1zZWNvbmRhcnksIDE1KTtcclxuJGNvbG9yLXNlY29uZGFyeS1saWdodDpcdCM0ODc0NjM7XHJcblxyXG4kY29sb3ItdGVydGlhcnk6ICM1NWM1N2E7XHJcbiRjb2xvci10ZXJ0aWFyeS1saWdodDogIzdlZDU2ZjtcclxuXHJcbi8qXHJcbiRjb2xvci10ZXJ0aWFyeTogIzI5OThmZjtcclxuJGNvbG9yLXRlcnRpYXJ5LWxpZ2h0OiAjNTYzMmZhO1xyXG4qL1xyXG5cclxuXHJcbiRjb2xvci1ncmV5LWRhcms6ICM3Nzc7XHJcbiRjb2xvci1ncmV5LWRhcmstMjogIzMzMztcclxuJGNvbG9yLXdoaXRlOiAjZmZmO1xyXG4kY29sb3ItYmxhY2s6ICMwMDA7XHJcbiRjb2xvci1ncmV5LWxpZ2h0LTE6ICNmN2Y3Zjc7XHJcbiRjb2xvci1ncmV5LWxpZ2h0LTI6ICNlZWU7XHJcbi8vZ3JpZFxyXG4kZ3JpZC13aWR0aDogMTE0cmVtO1xyXG4kZ3V0dGVyLXZlcnRpY2FsOiA4cmVtO1xyXG4kZ3V0dGVyLWhvcml6b250YWw6IDZyZW07XHJcblxyXG4kYm9yZGVyLXJhZGl1cy1kZWZhdWx0OiAzcHg7XHJcblxyXG4vL2ZvbnRcclxuJGRlZmF1bHQtZm9udC1zaXplOiAxLjZyZW07XHJcbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi9zY3NzL2dsb2JhbC12YXJpYWJsZXNcIjtcclxuLnJvdXRlIHtcclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICAgIHBhZGRpbmc6IDJyZW07XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICBoZWlnaHQ6IDNyZW07XHJcbiAgICAmLS1hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAkY29sb3ItcHJpbWFyeS1saWdodDtcclxuICAgIH1cclxufVxyXG4uaWNvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMXJlbSAhaW1wb3J0YW50O1xyXG4gICAgcGFkZGluZzogMXJlbTtcclxufVxyXG5hIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi8qXG4kY29sb3Itc2Vjb25kYXJ5OiAjZmZiOTAwO1xuJGNvbG9yLXNlY29uZGFyeS1kYXJrOiBkYXJrZW4oJGNvbG9yLXNlY29uZGFyeSwgMTUpO1xuJGNvbG9yLXNlY29uZGFyeS1saWdodDogI2ZmNzczMDtcbiovXG4vKlxuJGNvbG9yLXRlcnRpYXJ5OiAjMjk5OGZmO1xuJGNvbG9yLXRlcnRpYXJ5LWxpZ2h0OiAjNTYzMmZhO1xuKi9cbi5yb3V0ZSB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGhlaWdodDogM3JlbTtcbn1cbi5yb3V0ZV9faXRlbSB7XG4gIHBhZGRpbmc6IDJyZW07XG59XG4ucm91dGUtLWFjdGl2ZSB7XG4gIGNvbG9yOiAjZDNlYWQyO1xufVxuXG4uaWNvbiB7XG4gIG1hcmdpbi1sZWZ0OiAxcmVtICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDFyZW07XG59XG5cbmEge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavMenuComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'nav-menu',
                templateUrl: './nav-menu.component.html',
                styleUrls: ['./nav-menu.component.scss']
            }]
    }], function () { return []; }, null); })();


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
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! zone.js/dist/zone-error */ "./node_modules/zone.js/dist/zone-error.js");
/* harmony import */ var zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(zone_js_dist_zone_error__WEBPACK_IMPORTED_MODULE_0__);
const environment = {
    production: false,
    base_url: "http://localhost:3001/api",
    firebase: {
        apiKey: "AIzaSyAAfFFVC5_T89uXYmlo_GYZDBrDf6PEmgE",
        authDomain: "avantis-aliens-1582893866161.firebaseapp.com",
        databaseURL: "https://avantis-aliens-1582893866161.firebaseio.com",
        projectId: "avantis-aliens-1582893866161",
        storageBucket: "avantis-aliens-1582893866161.appspot.com",
        messagingSenderId: "1081614218287",
        appId: "1:1081614218287:web:3728194a1ee9a18bd082da"
    },
    google_id: '1081614218287-1asqnjvluj92j4r9r07anfkbngip4sb9.apps.googleusercontent.com'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\alien-invasion\alien-invasion_oc\alien-invasion-fe\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
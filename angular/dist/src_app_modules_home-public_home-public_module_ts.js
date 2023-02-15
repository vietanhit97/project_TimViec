"use strict";
(self["webpackChunkngx_admin_demo"] = self["webpackChunkngx_admin_demo"] || []).push([["src_app_modules_home-public_home-public_module_ts"],{

/***/ 73320:
/*!**************************************************************!*\
  !*** ./src/app/modules/home-public/home-public.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePublicComponent": () => (/* binding */ HomePublicComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../service/user.service */ 29375);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/avatar */ 72189);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/button */ 62150);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/ripple */ 45791);







function HomePublicComponent_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePublicComponent_ng_template_19_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r2.onSignIn(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePublicComponent_ng_template_19_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r4.onSignUp(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function HomePublicComponent_ng_template_20_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "p-avatar", 10);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("label", ctx_r5.user.name[0]);
} }
function HomePublicComponent_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, HomePublicComponent_ng_template_20_ng_template_0_Template, 1, 1, "ng-template", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePublicComponent_ng_template_20_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onEditInfo(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePublicComponent_ng_template_20_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onLogOut(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r1.user.name);
} }
const _c0 = function () { return { "width": "auto", "height": "auto" }; };
class HomePublicComponent {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    ngOnInit() {
        this.getUser();
    }
    getUserByUserName(username) {
        this.userService.getUserByUserName(username).subscribe((data) => {
            this.user = data;
            console.log('roles', data.roles);
        }, (error) => {
            alert(error.message);
        });
    }
    getUser() {
        const token = this.userService.getDecodedAccessToken();
        if (token) {
            this.getUserByUserName(token.sub);
        }
    }
    onSignIn() {
        this.router.navigate(['/auth']).then(r => console.log(r));
    }
    onSignUp() {
        this.router.navigate(['/auth/signup']).then(r => console.log(r));
    }
    onLogOut() {
        window.localStorage.removeItem('auth-token');
        this.user = undefined;
    }
    onEditInfo() {
        this.router.navigate(['home-public/user/edit']).then(r => console.log(r));
    }
    onHome() {
        this.router.navigate(['/home-public']).then(r => console.log(r));
    }
}
HomePublicComponent.ɵfac = function HomePublicComponent_Factory(t) { return new (t || HomePublicComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
HomePublicComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomePublicComponent, selectors: [["ngx-home-public"]], decls: 22, vars: 5, consts: [[1, "navbar", "navbar-expand-lg", "bg-success", "navbar-dark", "justify-content-between"], ["image", "https://product.bachkhoa-aptech.edu.vn:33/Resources/Images/logo-bkap-edu.png", 3, "click"], [1, "navbar-nav"], [1, "nav-item"], [1, "nav-link"], [3, "ngIf"], ["pButton", "", "pRipple", "", "type", "button", "label", "\u0110\u0103ng nh\u1EADp", 1, "p-button-success", "mr-3", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "\u0110\u0103ng k\u00ED", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "C\u1EADp nh\u1EADt th\u00F4ng tin", 1, "p-button-success", "mr-3", 3, "click"], ["pButton", "", "pRipple", "", "type", "button", "label", "Tho\u00E1t", 1, "p-button-success", "mr-3", 3, "click"], ["styleClass", "mr-2", "shape", "circle", 1, "mt-2", 3, "label"]], template: function HomePublicComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p-avatar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function HomePublicComponent_Template_p_avatar_click_1_listener() { return ctx.onHome(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Vi\u1EC7c l\u00E0m");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "H\u1ED3 s\u01A1 & Cv");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "C\u00F4ng ty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Ph\u00E1t tri\u1EC3n s\u1EF1 nghi\u1EC7p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "li", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "C\u00F4ng c\u1EE5");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](19, HomePublicComponent_ng_template_19_Template, 2, 0, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](20, HomePublicComponent_ng_template_20_Template, 3, 1, "ng-template", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [primeng_avatar__WEBPACK_IMPORTED_MODULE_3__.Avatar, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterOutlet, primeng_button__WEBPACK_IMPORTED_MODULE_5__.ButtonDirective, primeng_ripple__WEBPACK_IMPORTED_MODULE_6__.Ripple], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLXB1YmxpYy5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 61187:
/*!***********************************************************!*\
  !*** ./src/app/modules/home-public/home-public.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePublicModule": () => (/* binding */ HomePublicModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _home_public_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-public.component */ 73320);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var primeng_avatar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/avatar */ 72189);
/* harmony import */ var primeng_badge__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! primeng/badge */ 62051);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/button */ 62150);
/* harmony import */ var primeng_ripple__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/ripple */ 45791);
/* harmony import */ var _job_public_title_job_public_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./job-public-title/job-public-title.component */ 29107);
/* harmony import */ var _job_public_detail_job_public_detail_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./job-public-detail/job-public-detail.component */ 80472);
/* harmony import */ var _job_public_info_job_public_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./job-public-info/job-public-info.component */ 73178);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/dialog */ 69812);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/calendar */ 6582);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/fileupload */ 83735);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! primeng/inputtextarea */ 81629);
/* harmony import */ var _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-edit/user-edit.component */ 40123);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/card */ 33506);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/inputtext */ 73494);
/* harmony import */ var _job_public_list_job_public_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-public-list/job-public-list.component */ 86333);
/* harmony import */ var primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! primeng/autocomplete */ 17611);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! primeng/slider */ 52340);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! primeng/dropdown */ 45596);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! primeng/paginator */ 5287);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);

























const routes = [{
        path: '',
        component: _home_public_component__WEBPACK_IMPORTED_MODULE_0__.HomePublicComponent,
        children: [
            {
                path: '',
                component: _job_public_info_job_public_info_component__WEBPACK_IMPORTED_MODULE_3__.JobPublicInfoComponent,
            },
            {
                path: 'list-job',
                component: _job_public_list_job_public_list_component__WEBPACK_IMPORTED_MODULE_5__.JobPublicListComponent,
            },
            {
                path: 'job-detail/:id',
                component: _job_public_detail_job_public_detail_component__WEBPACK_IMPORTED_MODULE_2__.JobPublicDetailComponent,
            },
            { path: 'user/edit',
                component: _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__.UserEditComponent,
            },
        ],
    },
];
class HomePublicModule {
}
HomePublicModule.ɵfac = function HomePublicModule_Factory(t) { return new (t || HomePublicModule)(); };
HomePublicModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HomePublicModule });
HomePublicModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(routes),
            primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.AvatarModule,
            primeng_badge__WEBPACK_IMPORTED_MODULE_10__.BadgeModule,
            primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
            primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule,
            primeng_card__WEBPACK_IMPORTED_MODULE_15__.CardModule,
            primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule,
            primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
            primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule,
            primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__.FileUploadModule,
            primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__.InputTextareaModule,
            primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__.AutoCompleteModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            primeng_slider__WEBPACK_IMPORTED_MODULE_21__.SliderModule,
            primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.DropdownModule,
            primeng_paginator__WEBPACK_IMPORTED_MODULE_23__.PaginatorModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HomePublicModule, { declarations: [_home_public_component__WEBPACK_IMPORTED_MODULE_0__.HomePublicComponent,
        _job_public_title_job_public_title_component__WEBPACK_IMPORTED_MODULE_1__.JobPublicTitleComponent,
        _job_public_detail_job_public_detail_component__WEBPACK_IMPORTED_MODULE_2__.JobPublicDetailComponent,
        _job_public_info_job_public_info_component__WEBPACK_IMPORTED_MODULE_3__.JobPublicInfoComponent,
        _user_edit_user_edit_component__WEBPACK_IMPORTED_MODULE_4__.UserEditComponent,
        _job_public_list_job_public_list_component__WEBPACK_IMPORTED_MODULE_5__.JobPublicListComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, primeng_avatar__WEBPACK_IMPORTED_MODULE_9__.AvatarModule,
        primeng_badge__WEBPACK_IMPORTED_MODULE_10__.BadgeModule,
        primeng_button__WEBPACK_IMPORTED_MODULE_11__.ButtonModule,
        primeng_ripple__WEBPACK_IMPORTED_MODULE_12__.RippleModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule,
        primeng_card__WEBPACK_IMPORTED_MODULE_15__.CardModule,
        primeng_inputtext__WEBPACK_IMPORTED_MODULE_16__.InputTextModule,
        primeng_dialog__WEBPACK_IMPORTED_MODULE_17__.DialogModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule,
        primeng_calendar__WEBPACK_IMPORTED_MODULE_14__.CalendarModule,
        primeng_fileupload__WEBPACK_IMPORTED_MODULE_18__.FileUploadModule,
        primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_19__.InputTextareaModule,
        primeng_autocomplete__WEBPACK_IMPORTED_MODULE_20__.AutoCompleteModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        primeng_slider__WEBPACK_IMPORTED_MODULE_21__.SliderModule,
        primeng_dropdown__WEBPACK_IMPORTED_MODULE_22__.DropdownModule,
        primeng_paginator__WEBPACK_IMPORTED_MODULE_23__.PaginatorModule] }); })();


/***/ }),

/***/ 80472:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home-public/job-public-detail/job-public-detail.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPublicDetailComponent": () => (/* binding */ JobPublicDetailComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @stomp/stompjs */ 90689);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sockjs-client */ 58030);
/* harmony import */ var sockjs_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sockjs_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 9820);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_job_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/job.service */ 14431);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../service/user.service */ 29375);
/* harmony import */ var _service_upload_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/upload.service */ 49393);
/* harmony import */ var _service_jobRegister_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/jobRegister.service */ 20148);
/* harmony import */ var _service_profiles_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/profiles.service */ 77245);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var primeng_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/dialog */ 69812);
/* harmony import */ var primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/inputtextarea */ 81629);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/api */ 15132);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/fileupload */ 83735);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/button */ 62150);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/calendar */ 6582);



















function JobPublicDetailComponent_ng_template_0_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobPublicDetailComponent_ng_template_0_ng_template_1_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r7.onBeforeApply("top"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobPublicDetailComponent_ng_template_0_ng_template_2_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r9.displayPositionInput = true; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "T\u1EA3i avatar:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p-fileUpload", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelect", function JobPublicDetailComponent_ng_template_0_ng_template_12_Template_p_fileUpload_onSelect_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r11.onSelectedAvatar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showUploadButton", false)("showCancelButton", false);
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " HomeTown is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_option_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gender_r24 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", gender_r24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", gender_r24, " ");
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " Gender is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " BirthDay is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_19_div_1_button_8_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobPublicDetailComponent_ng_template_0_ng_template_19_div_19_div_1_button_8_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r31); const i_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r29.removeSkill(i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "- ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Skills:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobPublicDetailComponent_ng_template_0_ng_template_19_div_19_div_1_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4); return ctx_r32.addSkill(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "+");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, JobPublicDetailComponent_ng_template_0_ng_template_19_div_19_div_1_button_8_Template, 2, 0, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r27 = ctx.index;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formControlName", i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r25.skills.controls.length > 1);
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, JobPublicDetailComponent_ng_template_0_ng_template_19_div_19_div_1_Template, 9, 2, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r17.skills.controls);
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " NumberYearsExperience is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const academicLevel_r34 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", academicLevel_r34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", academicLevel_r34.code, " ");
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " AcademicLevelId is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " NumberYearsExperience is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_div_44_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " DesiredWorkingAddress is required! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_option_50_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const workingForm_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", workingForm_r35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", workingForm_r35.code, " ");
} }
function JobPublicDetailComponent_ng_template_0_ng_template_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2, "Qu\u00EA qu\u00E1n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, JobPublicDetailComponent_ng_template_0_ng_template_19_div_5_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Gi\u1EDBi tinh:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, JobPublicDetailComponent_ng_template_0_ng_template_19_option_11_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, JobPublicDetailComponent_ng_template_0_ng_template_19_div_12_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, "Ng\u00E0y th\u00E1ng n\u0103m sinh:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](17, "p-calendar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](18, JobPublicDetailComponent_ng_template_0_ng_template_19_div_18_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, JobPublicDetailComponent_ng_template_0_ng_template_19_div_19_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22, "S\u1ED1 n\u0103m kinh nghi\u1EC7m:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](25, JobPublicDetailComponent_ng_template_0_ng_template_19_div_25_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](27, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](28, "Tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "select", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](31, JobPublicDetailComponent_ng_template_0_ng_template_19_option_31_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](32, JobPublicDetailComponent_ng_template_0_ng_template_19_div_32_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](35, "M\u1EE9c l\u01B0\u01A1ng mong mu\u1ED1n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](36, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](37, "input", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](38, JobPublicDetailComponent_ng_template_0_ng_template_19_div_38_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, "\u0110\u1ECBa ch\u1EC9 l\u00E0m vi\u1EC7c mong mu\u1ED1n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](43, "input", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](44, JobPublicDetailComponent_ng_template_0_ng_template_19_div_44_Template, 2, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "H\u00ECnh th\u1EE9c l\u00E0m vi\u1EC7c:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](50, JobPublicDetailComponent_ng_template_0_ng_template_19_option_50_Template, 2, 2, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    let tmp_0_0;
    let tmp_2_0;
    let tmp_5_0;
    let tmp_8_0;
    let tmp_10_0;
    let tmp_12_0;
    let tmp_13_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_0_0 = ctx_r5.info.get("homeTown")) == null ? null : tmp_0_0.errors == null ? null : tmp_0_0.errors.required) && ((tmp_0_0 = ctx_r5.info.get("homeTown")) == null ? null : tmp_0_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.genders);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_2_0 = ctx_r5.info.get("gender")) == null ? null : tmp_2_0.errors == null ? null : tmp_2_0.errors.required) && ((tmp_2_0 = ctx_r5.info.get("gender")) == null ? null : tmp_2_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showIcon", true)("maxDate", ctx_r5.currentDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r5.info.get("birthDay")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required) && ((tmp_5_0 = ctx_r5.info.get("birthDay")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r5.skills.controls.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_8_0 = ctx_r5.info.get("numberYearsExperience")) == null ? null : tmp_8_0.errors == null ? null : tmp_8_0.errors.required) && ((tmp_8_0 = ctx_r5.info.get("numberYearsExperience")) == null ? null : tmp_8_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.academicLevels);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_10_0 = ctx_r5.info.get("academicLevel")) == null ? null : tmp_10_0.errors == null ? null : tmp_10_0.errors.required) && ((tmp_10_0 = ctx_r5.info.get("academicLevel")) == null ? null : tmp_10_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("min", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r5.info.get("desiredSalary")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.required) && ((tmp_12_0 = ctx_r5.info.get("desiredSalary")) == null ? null : tmp_12_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_13_0 = ctx_r5.info.get("desiredWorkingAddress")) == null ? null : tmp_13_0.errors == null ? null : tmp_13_0.errors.required) && ((tmp_13_0 = ctx_r5.info.get("desiredWorkingAddress")) == null ? null : tmp_13_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.workingForms);
} }
function JobPublicDetailComponent_ng_template_0_ng_template_20_Template(rf, ctx) { if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobPublicDetailComponent_ng_template_0_ng_template_20_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r36.onApply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobPublicDetailComponent_ng_template_0_ng_template_20_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r37); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r38.displayPosition = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("disabled", !ctx_r6.checkApply());
} }
const _c0 = function () { return { width: "50vw" }; };
function JobPublicDetailComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, JobPublicDetailComponent_ng_template_0_ng_template_1_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, JobPublicDetailComponent_ng_template_0_ng_template_2_Template, 1, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "p-dialog", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function JobPublicDetailComponent_ng_template_0_Template_p_dialog_visibleChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r39.displayPosition = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "form", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function JobPublicDetailComponent_ng_template_0_Template_form_ngSubmit_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r41.onApply(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "T\u1EA3i cv:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "p-fileUpload", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelect", function JobPublicDetailComponent_ng_template_0_Template_p_fileUpload_onSelect_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r40); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r42.onSelected($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, JobPublicDetailComponent_ng_template_0_ng_template_12_Template, 4, 2, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "M\u00F4 t\u1EA3 v\u1EC1 b\u1EA3n th\u00E2n:");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "textarea", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](19, JobPublicDetailComponent_ng_template_0_ng_template_19_Template, 51, 15, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, JobPublicDetailComponent_ng_template_0_ng_template_20_Template, 2, 1, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "h2", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](27, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Th\u00F4ng tin chung");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](34, "M\u1EE9c l\u01B0\u01A1ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](35, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](39, "H\u00ECnh th\u1EE9c l\u00E0m vi\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](40, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](44, "Tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](50, "S\u1ED1 l\u01B0\u1EE3ng tuy\u1EC3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](52);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](55, "V\u1ECB tr\u00ED \u1EE9ng tuy\u1EC3n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Kinh nghi\u1EC7m ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](62);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "\u0110\u1ECBa \u0111i\u1EC3m l\u00E0m vi\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](67, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](68);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](70, "M\u00F4 t\u1EA3 c\u00F4ng vi\u1EC7c");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](72, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](74);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](75, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](76, "Quy\u1EC1n l\u1EE3i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.jobRegister);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r0.jobRegister);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](32, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx_r0.displayPosition)("position", ctx_r0.position)("modal", true)("baseZIndex", 10000)("draggable", false)("resizable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.info);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showUploadButton", false)("showCancelButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.checkedProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 4)("cols", 43)("maxLength", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r0.checkedProfile);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.job.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("H\u1EA1n n\u1ED9p h\u1ED3 s\u01A1: ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](27, 30, ctx_r0.job.dueDate), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"]("", ctx_r0.job.salaryMin, "-", ctx_r0.job.salaryMax, " tri\u1EC7u");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.job.workingForm.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.job.academicLevel.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("", ctx_r0.job.qtyPerson, " ng\u01B0\u1EDDi");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.job.jobPosition.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.job.numberExperience);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.job.addressWork);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.job.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.job.benefits);
} }
function JobPublicDetailComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-button", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobPublicDetailComponent_ng_template_4_Template_p_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r43.onCancel(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function JobPublicDetailComponent_ng_template_4_Template_p_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r44); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r45.displayPositionInput = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
class JobPublicDetailComponent {
    constructor(route, jobService, userService, router, fb, uploadService, jobRegisterService, profilesService) {
        this.route = route;
        this.jobService = jobService;
        this.userService = userService;
        this.router = router;
        this.fb = fb;
        this.uploadService = uploadService;
        this.jobRegisterService = jobRegisterService;
        this.profilesService = profilesService;
        this.profile = {
            academicLevel: undefined,
            delete: 0,
            description: '',
            desiredSalary: '',
            desiredWorkingAddress: '',
            desiredWorkingForm: '',
            id: 0,
            numberYearsExperience: 0,
            skill: '',
            user: undefined,
        };
        this.checkedProfile = false;
        this.stompClient = null;
        this.displayPositionInput = false;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.currentDate = new Date();
    }
    ngOnInit() {
        this.getJobById();
        this.genders = ['name', 'nữ', 'giới tính thứ 3'];
        this.getAcademicLevel();
        this.getWorkingForm();
        this.getUser();
        this.reasonDto = { jobId: 0, reason: '', statusId: 0 };
        this.info = this.fb.group({
            description: [''],
            homeTown: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            birthDay: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            skills: this.fb.array([
                this.fb.control(''),
            ]),
            numberYearsExperience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            academicLevel: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            desiredSalary: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            desiredWorkingAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
            workingForm: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required]],
        });
        this.connect();
    }
    addViews() {
        this.jobService.addView(this.route.snapshot.params.id).subscribe((data) => {
            console.log(data);
        }, (error) => {
            alert(error.message);
        });
    }
    getInitData() {
        this.profile = {
            id: null,
            academicLevel: null,
            delete: 0,
            description: '',
            desiredSalary: '',
            desiredWorkingAddress: '',
            desiredWorkingForm: '',
            numberYearsExperience: 0,
            skill: '',
            user: undefined,
        };
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    get skills() {
        return this.info.get('skills');
    }
    addSkill() {
        this.skills.push(this.fb.control(''));
    }
    removeSkill(index) {
        this.skills.removeAt(index);
    }
    getJobById() {
        this.jobService.getJobById(this.route.snapshot.params.id).subscribe((data) => {
            this.job = data;
        }, (error) => {
            alert(error.message);
        });
    }
    checkApply() {
        if (!this.userService.checkProfile(this.profile)) {
            if (!this.info.valid) {
                return false;
            }
            if (!this.fileAvatar) {
                return false;
            }
        }
        if (!this.fileCv) {
            return false;
        }
        return true;
    }
    getProfilesByUserId() {
        this.profilesService.getProfilesByUserId(this.user.id).subscribe((data) => {
            if (!data) {
                this.getInitData();
            }
            else {
                this.profile = data;
            }
            this.checkedProfile = this.userService.checkProfile(this.profile);
        }, (error) => {
            alert(error.message);
        });
    }
    getWorkingForm() {
        this.jobService.getWorkingForm().subscribe((data) => {
            this.workingForms = data;
        }, (error) => {
            alert(error.message);
        });
    }
    getAcademicLevel() {
        this.jobService.getAcademicLevels().subscribe((data) => {
            this.academicLevels = data;
        }, (error) => {
            alert(error.message);
        });
    }
    getUserByUserName(username) {
        (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.debounceTime)(1000);
        this.userService.getUserByUserName(username).subscribe((data) => {
            this.user = data;
            this.getProfilesByUserId();
            this.getJobRegister();
        }, (error) => {
            alert(error.message);
        });
    }
    getUser() {
        const token = this.userService.getDecodedAccessToken();
        if (token) {
            this.getUserByUserName(token.sub);
            console.log('Day la id', this.route.snapshot.params.id);
            this.addViews();
        }
    }
    updateUser() {
        this.userService.update(this.user).subscribe((data) => {
            this.user = data;
        }, (error) => {
            alert(error.message);
        });
    }
    updateProfiles() {
        this.profilesService.update(this.profile).subscribe((data) => {
            this.profile = data;
        }, (error) => {
            alert(error.message);
        });
    }
    updateJobRegister() {
        this.jobRegisterService.save(this.jobRegister).subscribe((data) => {
            this.jobRegister = data;
        }, (error) => {
            alert(error.message);
        });
    }
    onApply() {
        if (!this.checkedProfile) {
            let skills = '';
            // eslint-disable-next-line @typescript-eslint/prefer-for-of
            for (let i = 0; i < this.info.value.skills.length; i++) {
                if (i === this.info.value.skills.length - 1) {
                    skills += this.info.value.skills[i];
                }
                else {
                    skills += this.info.value.skills[i] + ',';
                }
            }
            this.user.avatarName = this.fileAvatar.name;
            this.user.homeTown = this.info.value.homeTown;
            this.user.birthday = this.info.value.birthday;
            this.profile.skill = skills;
            this.profile.numberYearsExperience = this.info.value.numberYearsExperience;
            this.profile.academicLevel = this.info.value.academicLevel;
            this.profile.desiredSalary = this.info.value.desiredSalary;
            this.profile.desiredWorkingAddress = this.info.value.desiredWorkingAddress;
            this.profile.desiredWorkingForm = this.info.value.workingForm.code;
            this.profile.user = this.user;
            this.uploadAvatar();
            this.updateUser();
        }
        this.profile.description = this.info.value.description;
        this.uploadCv();
        this.updateProfiles();
        this.sendApply();
        this.disconnect();
        this.router.navigate(['/home-public']).then(r => console.log(r));
    }
    onSelected(event) {
        this.fileCv = event.currentFiles[0];
        console.log('day la file', this.fileCv);
    }
    onSelectedAvatar(event) {
        this.fileAvatar = event.currentFiles[0];
        console.log('day la file', this.fileAvatar);
    }
    uploadCv() {
        this.uploadService.upload(this.fileCv, this.user.userName, this.job.id).subscribe((data) => {
            alert(data.message);
        }, (error) => {
            alert(error.message);
        });
    }
    uploadAvatar() {
        this.uploadService.uploadAvatar(this.fileAvatar, this.user.id).subscribe((data) => {
            alert(data.message);
        }, (error) => {
            alert(error.message);
        });
    }
    onBeforeApply(top) {
        const token = this.userService.getDecodedAccessToken();
        if (token) {
            this.position = top;
            this.displayPosition = true;
        }
        else {
            alert('Vui lòng đăng nhập trước');
            this.router.navigate(['/auth']).then(r => console.log(r));
        }
    }
    onCancel() {
        // eslint-disable-next-line max-len
        this.jobRegister.statusJobRegister = { code: 'Ứng viên đã hủy ứng tuyển', delete: false, description: 'Ứng vine đã hủy ứng tuyển', id: 6 };
        this.updateJobRegister();
        this.sendRefuse();
        this.onRefuse();
        this.router.navigate(['home-public']).then(r => console.log(r));
    }
    connect() {
        const socket = new sockjs_client__WEBPACK_IMPORTED_MODULE_0__('http://localhost:9090/gkz-stomp-endpoint');
        this.stompClient = _stomp_stompjs__WEBPACK_IMPORTED_MODULE_9__.Stomp.over(socket);
        const _this = this;
        // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
        this.stompClient.connect({}, function (frame) {
            console.log('Connected: ' + frame);
            // eslint-disable-next-line prefer-arrow/prefer-arrow-functions
            _this.stompClient.subscribe('/topic/apply', function (notify) {
                console.log((JSON.parse(notify.body)));
                // _this.showGreeting(JSON.parse(hello.body).greeting);
            });
        });
    }
    disconnect() {
        if (this.stompClient != null) {
            this.stompClient.disconnect();
        }
    }
    sendApply() {
        this.type = { code: 'ứng tuyển', delete: false, description: 'ứng tuyển', id: 1 };
        // eslint-disable-next-line max-len
        this.notifications = {
            receiver: this.job.creator,
            job: this.job, content: '', createDate: new Date(), delete: false, id: null, sender: this.user, type: this.type
        };
        this.stompClient.send('/gkz/job-register', {}, JSON.stringify(this.notifications));
    }
    sendRefuse() {
        this.type = { code: 'ứng tuyển', delete: false, description: 'ứng tuyển', id: 2 };
        // eslint-disable-next-line max-len
        this.notifications = {
            receiver: this.job.creator,
            job: this.job, content: '', createDate: new Date(), delete: false, id: null, sender: this.user, type: this.type
        };
        this.stompClient.send('/gkz/job-register', {}, JSON.stringify(this.notifications));
    }
    getJobRegister() {
        this.jobRegisterService.findByUserAndJob(this.user.id, this.job.id).subscribe((data) => {
            if (data.statusJobRegister.id === 6) {
                this.jobRegister = null;
            }
            else {
                this.jobRegister = data;
            }
        }, (error) => {
            alert(error.message);
        });
    }
    updateReason() {
        this.jobRegisterService.updateReason(this.reasonDto).subscribe((data) => {
            this.jobRegister.statusJobRegister = data.statusJobRegister;
            alert('Update thành công');
        }, (error) => {
            alert(error.message);
        });
    }
    onRefuse() {
        this.reasonDto.jobId = this.jobRegister.id;
        this.reasonDto.statusId = 6;
        this.updateReason();
        this.displayPositionInput = false;
    }
}
JobPublicDetailComponent.ɵfac = function JobPublicDetailComponent_Factory(t) { return new (t || JobPublicDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_job_service__WEBPACK_IMPORTED_MODULE_1__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_2__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_upload_service__WEBPACK_IMPORTED_MODULE_3__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_jobRegister_service__WEBPACK_IMPORTED_MODULE_4__.JobRegisterService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_profiles_service__WEBPACK_IMPORTED_MODULE_5__.ProfilesService)); };
JobPublicDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: JobPublicDetailComponent, selectors: [["ngx-job-public-detail"]], decls: 5, vars: 13, consts: [["class", "mt-5", 3, "ngIf"], ["header", "Nh\u1EADp l\u00FD do", 3, "visible", "position", "modal", "baseZIndex", "draggable", "resizable", "visibleChange"], [1, "container", "text-center"], ["pInputTextarea", "", "autoResize", "autoResize", 3, "rows", "cols", "ngModel", "ngModelChange"], ["pTemplate", "footer"], [1, "container", "mt-5"], [3, "ngIf"], ["header", "\u1EE8ng tuy\u1EC3n", 3, "visible", "position", "modal", "baseZIndex", "draggable", "resizable", "visibleChange"], ["novalidate", "", 1, "row", "justify-content-md-center", "container", "popup", 3, "formGroup", "ngSubmit"], [1, "col-md-8", "mb-5"], [1, "d-flex"], [1, "col-md-4", "col-form-label"], [1, "col-md-8"], ["mode", "advanced", "chooseLabel", "T\u1EA3i CV", 1, "mr-2", "upload-cv", 3, "showUploadButton", "showCancelButton", "onSelect"], [1, "form-group", "row"], ["pInputTextarea", "", "formControlName", "description", "autoResize", "autoResize", 3, "rows", "cols", "maxLength"], [1, "d-flex", "mt-5"], [1, "mb-4"], ["href", "#", 1, "display-5", "font-weight-bold"], [1, "mt-3"], [1, "d-flex", "justify-content-around", "badge", "badge-success", "mr-2", "p-5"], [1, "ml-5"], [1, "badge", "badge-success", "mr-2", "p-5", "container"], ["label", "\u1EE8ng tuy\u1EC3n ngay", "styleClass", "p-button-sm", 1, "mr-2", 3, "click"], ["label", "Cancel", "styleClass", "p-button-sm", 1, "mr-2", 3, "click"], ["mode", "advanced", "chooseLabel", "\u1EA2nh \u0111\u1EA1i di\u1EC7n", "accept", "image/*", 3, "showUploadButton", "showCancelButton", "onSelect"], ["type", "text", "formControlName", "homeTown", 1, "form-control"], ["class", "col alert alert-danger", "role", "alert", 4, "ngIf"], ["formControlName", "gender", 1, "custom-select", "mb-3"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["inputId", "icon", "formControlName", "birthDay", 3, "showIcon", "maxDate"], ["formArrayName", "skills", 4, "ngIf"], ["type", "number", "formControlName", "numberYearsExperience", 1, "form-control", 3, "min"], ["formControlName", "academicLevel", 1, "custom-select", "mb-3"], ["type", "number", "formControlName", "desiredSalary", 1, "form-control", 3, "min"], ["type", "text", "formControlName", "desiredWorkingAddress", 1, "form-control"], ["formControlName", "workingForm", 1, "custom-select", "mb-3"], ["role", "alert", 1, "col", "alert", "alert-danger"], [3, "ngValue"], ["formArrayName", "skills"], ["class", "form-group row", 4, "ngFor", "ngForOf"], ["type", "tel", 1, "form-control", 3, "formControlName"], [1, "text-right"], ["type", "button", 1, "btn", "btn-info", 3, "click"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], ["icon", "pi pi-check", "label", "Yes", 1, "p-button-text", 3, "disabled", "click"], ["icon", "pi pi-times", "label", "No", 1, "ml-2", 3, "click"], ["icon", "pi pi-check", "type", "submit", "label", "Yes", 1, "p-button-text", 3, "click"]], template: function JobPublicDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, JobPublicDetailComponent_ng_template_0_Template, 81, 33, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "p-dialog", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("visibleChange", function JobPublicDetailComponent_Template_p_dialog_visibleChange_1_listener($event) { return ctx.displayPositionInput = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "textarea", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function JobPublicDetailComponent_Template_textarea_ngModelChange_3_listener($event) { return ctx.reasonDto.reason = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, JobPublicDetailComponent_ng_template_4_Template, 2, 0, "ng-template", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.job);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("visible", ctx.displayPositionInput)("position", "top")("modal", true)("baseZIndex", 10000)("draggable", false)("resizable", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("rows", 5)("cols", 30)("ngModel", ctx.reasonDto.reason);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_dialog__WEBPACK_IMPORTED_MODULE_12__.Dialog, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, primeng_inputtextarea__WEBPACK_IMPORTED_MODULE_13__.InputTextarea, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgModel, primeng_api__WEBPACK_IMPORTED_MODULE_14__.PrimeTemplate, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, primeng_fileupload__WEBPACK_IMPORTED_MODULE_15__.FileUpload, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_button__WEBPACK_IMPORTED_MODULE_16__.Button, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, primeng_calendar__WEBPACK_IMPORTED_MODULE_17__.Calendar, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormArrayName], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.DatePipe], styles: ["p[_ngcontent-%COMP%] {\n  color: black;\n  font-size: 14px;\n}\n\nh2[_ngcontent-%COMP%] {\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1wdWJsaWMtZGV0YWlsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRiIsImZpbGUiOiJqb2ItcHVibGljLWRldGFpbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInB7XG4gIGNvbG9yOiBibGFjaztcbiAgZm9udC1zaXplOiAxNHB4O1xufVxuaDJ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi51cGxvYWQtY3Z7XG5cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 73178:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home-public/job-public-info/job-public-info.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPublicInfoComponent": () => (/* binding */ JobPublicInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/job.service */ 14431);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var _job_public_title_job_public_title_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../job-public-title/job-public-title.component */ 29107);





function JobPublicInfoComponent_ngx_job_public_title_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-job-public-title", 9);
} if (rf & 2) {
    const job_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("job", job_r6);
} }
function JobPublicInfoComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ">> Xem th\u00EAm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobPublicInfoComponent_ngx_job_public_title_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-job-public-title", 9);
} if (rf & 2) {
    const job_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("job", job_r7);
} }
function JobPublicInfoComponent_ng_template_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ">> Xem th\u00EAm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function JobPublicInfoComponent_ngx_job_public_title_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "ngx-job-public-title", 9);
} if (rf & 2) {
    const job_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("job", job_r8);
} }
function JobPublicInfoComponent_ng_template_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ">> Xem th\u00EAm");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class JobPublicInfoComponent {
    constructor(jobService, router) {
        this.jobService = jobService;
        this.router = router;
    }
    ngOnInit() {
        this.getInitData();
        this.getJobNew();
        this.getJobHighSalary();
        this.getJobDue();
    }
    getInitData() {
        this.page = 0;
        this.size = 20;
        this.totalPageJobNews = 1;
        this.totalPageJobDues = 1;
        this.totalPageJobHighSalary = 1;
    }
    getJobNew() {
        this.jobService.getJobNews(7, this.page, this.size).subscribe((data) => {
            this.jobNews = data.list;
            this.totalPageJobNews = data.totalPage;
        }, (error) => {
            alert(error.message);
        });
    }
    getJobHighSalary() {
        this.jobService.getJobHighSalary(18, this.page, this.size).subscribe((data) => {
            this.jobHighSalaries = data.list;
            this.totalPageJobHighSalary = data.totalPage;
        }, (error) => {
            alert(error.message);
        });
    }
    getJobDue() {
        this.jobService.getJobDue(5, this.page, this.size).subscribe((data) => {
            this.jobDues = data.list;
            this.totalPageJobDues = data.totalPage;
        }, (error) => {
            alert(error.message);
        });
    }
    onReadAll() {
        this.router.navigate(['/home-public/list-job']).then(r => console.log(r));
    }
}
JobPublicInfoComponent.ɵfac = function JobPublicInfoComponent_Factory(t) { return new (t || JobPublicInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router)); };
JobPublicInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: JobPublicInfoComponent, selectors: [["ngx-job-public-info"]], decls: 29, vars: 6, consts: [[1, "content", "p-4"], [1, "container", "mt-5"], [1, "d-flex", "justify-content-between", "col-11"], [1, "text-success", 3, "click"], [1, "content-group", "mt-5"], [1, "pi", "pi-star-fill", "text-success"], [1, "d-flex", "flex-wrap"], ["class", "content-detail", 3, "job", 4, "ngFor", "ngForOf"], [3, "ngIf"], [1, "content-detail", 3, "job"], [1, "text-success"]], template: function JobPublicInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "TIN TUY\u1EC2N D\u1EE4NG, VI\u1EC6C L\u00C0M T\u1ED0T NH\u1EA4T");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function JobPublicInfoComponent_Template_p_click_5_listener() { return ctx.onReadAll(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, ">> Xem t\u1EA5t c\u1EA3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Vi\u1EC7c l\u00E0m m\u1EDBi tuy\u1EC3n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](13, JobPublicInfoComponent_ngx_job_public_title_13_Template, 1, 1, "ngx-job-public-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](14, JobPublicInfoComponent_ng_template_14_Template, 2, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, " Vi\u1EC7c l\u00E0m tuy\u1EC3n g\u1EA5p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, JobPublicInfoComponent_ngx_job_public_title_20_Template, 1, 1, "ngx-job-public-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](21, JobPublicInfoComponent_ng_template_21_Template, 2, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Vi\u1EC7c l\u00E0m l\u01B0\u01A1ng cao");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](27, JobPublicInfoComponent_ngx_job_public_title_27_Template, 1, 1, "ngx-job-public-title", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](28, JobPublicInfoComponent_ng_template_28_Template, 2, 0, "ng-template", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jobNews);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalPageJobNews > 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jobDues);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalPageJobDues > 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.jobHighSalaries);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.totalPageJobHighSalary > 20);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _job_public_title_job_public_title_component__WEBPACK_IMPORTED_MODULE_1__.JobPublicTitleComponent], styles: [".content[_ngcontent-%COMP%] {\n  background: transparent linear-gradient(179deg, #edfff5, #fff) 0 0 no-repeat padding-box;\n}\n\n.content-detail[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1wdWJsaWMtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHdGQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxnQkFBQTtBQUVGIiwiZmlsZSI6ImpvYi1wdWJsaWMtaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50e1xuICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCBsaW5lYXItZ3JhZGllbnQoMTc5ZGVnLCNlZGZmZjUsI2ZmZikgMCAwIG5vLXJlcGVhdCBwYWRkaW5nLWJveDtcbn1cbi5jb250ZW50LWRldGFpbHtcbiAgbWFyZ2luLXJpZ2h0OiA1JTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 86333:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/home-public/job-public-list/job-public-list.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPublicListComponent": () => (/* binding */ JobPublicListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _service_job_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../service/job.service */ 14431);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../service/user.service */ 29375);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/inputtext */ 73494);
/* harmony import */ var primeng_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! primeng/slider */ 52340);
/* harmony import */ var primeng_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/button */ 62150);
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! primeng/dropdown */ 45596);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! primeng/paginator */ 5287);
/* harmony import */ var _job_public_title_job_public_title_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../job-public-title/job-public-title.component */ 29107);












function JobPublicListComponent_ng_template_18_ngx_job_public_title_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "ngx-job-public-title", 16);
} if (rf & 2) {
    const job_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("job", job_r2);
} }
function JobPublicListComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, JobPublicListComponent_ng_template_18_ngx_job_public_title_1_Template, 1, 1, "ngx-job-public-title", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.jobs);
} }
const _c0 = function () { return [3, 6, 9]; };
class JobPublicListComponent {
    constructor(jobService, router, userService) {
        this.jobService = jobService;
        this.router = router;
        this.userService = userService;
        this.rangeValues = [0, 200];
    }
    ngOnInit() {
        this.sortOptions = [
            { label: 'Tên công việc', value: 'name' },
            { label: 'Thời gian nộp hồ sơ', value: 'dueDate' },
        ];
        this.getInnitData();
        this.onSearch();
        this.getUser();
    }
    getInnitData() {
        this.searchJob = { addressWork: '', name: '', statusId: 2, salaryMin: 0, salaryMax: 200, skills: '' };
        this.page = 0;
        this.size = 3;
        this.totalRecords = 5;
        this.sortNumber = 1;
    }
    onSortChange(event) {
        const value = event.value;
        console.log(value, value);
        if (value.indexOf('name') === 0) {
            this.sortNumber = 2;
            this.onSortByName();
        }
        else {
            this.sortNumber = 1;
            this.onSearch();
        }
    }
    onSearch() {
        this.searchJob.statusId = 2;
        this.jobService.findJob(this.searchJob, this.page, this.size).subscribe((data) => {
            this.jobs = data.list;
            this.totalRecords = data.totalPage;
        }, (error) => {
            alert(error.message);
        });
    }
    onSortByName() {
        this.searchJob.statusId = 2;
        this.jobService.sortByName(this.searchJob, this.page, this.size).subscribe((data) => {
            this.jobs = data.list;
            this.totalRecords = data.totalPage;
        }, (error) => {
            alert(error.message);
        });
    }
    paginate(event) {
        this.page = event.page;
        this.size = event.rows;
        if (this.sortNumber === 1) {
            this.onSearch();
        }
        else {
            this.onSortByName();
        }
    }
    handleChangeSalary() {
        this.searchJob.salaryMin = this.rangeValues[0];
        this.searchJob.salaryMax = this.rangeValues[1];
    }
    getUserByUserName(username) {
        this.userService.getUserByUserName(username).subscribe((data) => {
            this.user = data;
            console.log('roles', data.roles);
        }, (error) => {
            alert(error.message);
        });
    }
    getUser() {
        const token = this.userService.getDecodedAccessToken();
        this.getUserByUserName(token.sub);
    }
}
JobPublicListComponent.ɵfac = function JobPublicListComponent_Factory(t) { return new (t || JobPublicListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_job_service__WEBPACK_IMPORTED_MODULE_0__.JobService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService)); };
JobPublicListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: JobPublicListComponent, selectors: [["ngx-job-public-list"]], decls: 20, vars: 14, consts: [[1, "d-flex", "mt-3", "mb-5", "container", "p-5"], [1, "col-2", "md:col-4"], [1, "p-inputgroup"], [1, "p-inputgroup-addon"], [1, "pi", "pi-user"], ["type", "text", "pInputText", "", "placeholder", "T\u00EAn c\u00F4ng vi\u1EC7c", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "\u0110\u1ECBa ch\u1EC9 l\u00E0m vi\u1EC7c", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "placeholder", "K\u0129 n\u0103ng l\u00E0m vi\u1EC7c", 3, "ngModel", "ngModelChange"], [1, "container", "w-25"], [3, "ngModel", "range", "max", "ngModelChange", "onChange"], ["label", "Search", "icon", "pi pi-search", "iconPos", "right", 1, "mr-2", 3, "loading", "onClick"], ["placeholder", "Sort By", "styleClass", "p-mb-2 p-mb-md-0", 3, "options", "ngModel", "ngModelChange", "onChange"], [3, "ngIf"], [1, "fixed-bottom", "mb-5", 3, "rows", "totalRecords", "rowsPerPageOptions", "onPageChange"], [1, "d-flex", "flex-wrap", "container"], ["class", "content-detail", 3, "job", 4, "ngFor", "ngForOf"], [1, "content-detail", 3, "job"]], template: function JobPublicListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function JobPublicListComponent_Template_input_ngModelChange_5_listener($event) { return ctx.searchJob.name = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function JobPublicListComponent_Template_input_ngModelChange_8_listener($event) { return ctx.searchJob.addressWork = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function JobPublicListComponent_Template_input_ngModelChange_11_listener($event) { return ctx.searchJob.skills = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "p-slider", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function JobPublicListComponent_Template_p_slider_ngModelChange_15_listener($event) { return ctx.rangeValues = $event; })("onChange", function JobPublicListComponent_Template_p_slider_onChange_15_listener() { return ctx.handleChangeSalary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "p-button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onClick", function JobPublicListComponent_Template_p_button_onClick_16_listener() { return ctx.onSearch(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "p-dropdown", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngModelChange", function JobPublicListComponent_Template_p_dropdown_ngModelChange_17_listener($event) { return ctx.sortKey = $event; })("onChange", function JobPublicListComponent_Template_p_dropdown_onChange_17_listener($event) { return ctx.onSortChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, JobPublicListComponent_ng_template_18_Template, 2, 1, "ng-template", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "p-paginator", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("onPageChange", function JobPublicListComponent_Template_p_paginator_onPageChange_19_listener($event) { return ctx.paginate($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchJob.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchJob.addressWork);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.searchJob.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("Salary: ", ctx.rangeValues[0] + " - " + ctx.rangeValues[1], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngModel", ctx.rangeValues)("range", true)("max", 200);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("options", ctx.sortOptions)("ngModel", ctx.sortKey);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.user);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("rows", 2)("totalRecords", ctx.totalRecords)("rowsPerPageOptions", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](13, _c0));
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_6__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, primeng_slider__WEBPACK_IMPORTED_MODULE_7__.Slider, primeng_button__WEBPACK_IMPORTED_MODULE_8__.Button, primeng_dropdown__WEBPACK_IMPORTED_MODULE_9__.Dropdown, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, primeng_paginator__WEBPACK_IMPORTED_MODULE_11__.Paginator, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _job_public_title_job_public_title_component__WEBPACK_IMPORTED_MODULE_2__.JobPublicTitleComponent], styles: [".content-detail[_ngcontent-%COMP%] {\n  margin-right: 5%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpvYi1wdWJsaWMtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FBQ0YiLCJmaWxlIjoiam9iLXB1YmxpYy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbnQtZGV0YWlse1xuICBtYXJnaW4tcmlnaHQ6IDUlO1xufVxuIl19 */"] });


/***/ }),

/***/ 29107:
/*!************************************************************************************!*\
  !*** ./src/app/modules/home-public/job-public-title/job-public-title.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JobPublicTitleComponent": () => (/* binding */ JobPublicTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 28267);



class JobPublicTitleComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    onReadDetail(id) {
        this.router.navigate(['/home-public/job-detail', id]).then(r => console.log(r));
    }
}
JobPublicTitleComponent.ɵfac = function JobPublicTitleComponent_Factory(t) { return new (t || JobPublicTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__.Router)); };
JobPublicTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: JobPublicTitleComponent, selectors: [["ngx-job-public-title"]], inputs: { job: "job" }, decls: 23, vars: 13, consts: [[1, "d-flex", "justify-content-lg-start", "container", "bg-success", "p-3", "rounded", "mb-4", 2, "width", "400px"], [1, "ml-2", "container"], [1, "d-flex", "justify-content-lg-between"], [1, "display-5", "font-weight-bold", 2, "cursor", "pointer", 3, "click"], [1, "badge", "badge-secondary"], [1, "d-flex", "justify-content-between"], [1, "badge", "badge-secondary", "mr-2", 2, "cursor", "pointer"], [1, "badge", "badge-secondary", "mr-2"]], template: function JobPublicTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function JobPublicTitleComponent_Template_a_click_3_listener() { return ctx.onReadDetail(ctx.job.id); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx.job.dueDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.job.qtyPerson, " ng\u01B0\u1EDDi");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.views);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", ctx.job.salaryMin, "-", ctx.job.salaryMax, " tri\u1EC7u");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.addressWork);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.job.skills);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 11, ctx.job.createDate));
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJqb2ItcHVibGljLXRpdGxlLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 40123:
/*!**********************************************************************!*\
  !*** ./src/app/modules/home-public/user-edit/user-edit.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserEditComponent": () => (/* binding */ UserEditComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 18346);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../environments/environment */ 18260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _core_services_session_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@core/services/session.service */ 12322);
/* harmony import */ var _home_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../home/profile/profile.service */ 86410);
/* harmony import */ var primeng_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! primeng/api */ 15132);
/* harmony import */ var _service_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../service/user.service */ 29375);
/* harmony import */ var _service_upload_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../service/upload.service */ 49393);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser */ 86219);
/* harmony import */ var _service_download_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../service/download.service */ 27439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 13252);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 28267);
/* harmony import */ var primeng_card__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! primeng/card */ 33506);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! primeng/fileupload */ 83735);
/* harmony import */ var primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! primeng/inputtext */ 73494);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! primeng/calendar */ 6582);

















function UserEditComponent_ng_template_0_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp h\u1ECD t\u00EAn! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp h\u1ECD t\u00EAn! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp gmail! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp s\u1ED1 \u0111i\u1EC7n tho\u1EA1i! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp \u0111\u00FAng \u0111\u1ECBnh d\u1EA1ng s\u1ED1 \u0111i\u1EC7n tho\u1EA1i! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_option_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const academicLevel_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngValue", academicLevel_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", academicLevel_r14.code, " ");
} }
function UserEditComponent_ng_template_0_div_68_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_75_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp m\u1EE9c l\u01B0\u01A1ng mong mu\u1ED1n ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_83_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp \u0111\u1ECBa ch\u1EC9a l\u00E0m vi\u1EC7c mong mu\u1ED1n ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_90_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp s\u1ED1 n\u0103m kinh nghi\u1EC7m ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_91_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ch\u1EC9 \u0111\u01B0\u1EE3c nh\u1EADp s\u1ED1 nguy\u00EAn d\u01B0\u01A1ng ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_99_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_div_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " B\u1EA1n ph\u1EA3i nh\u1EADp h\u00ECnh th\u1EE9c l\u00E0m vi\u1EC7c mong mu\u1ED1n ! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function UserEditComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "p-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "form", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngSubmit", function UserEditComponent_ng_template_0_Template_form_ngSubmit_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.onSubmit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "img", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "p-fileUpload", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("onSelect", function UserEditComponent_ng_template_0_Template_p_fileUpload_onSelect_5_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r17.onSelectedAvatar($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "H\u1ECD v\u00E0 T\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_12_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r18.user.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, UserEditComponent_ng_template_0_div_13_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](16, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](17, "H\u1ECD v\u00E0 T\u00EAn");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](19, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_19_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.user.name = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](20, UserEditComponent_ng_template_0_div_20_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](24, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_26_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r20.user.email = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](27, UserEditComponent_ng_template_0_div_27_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](28, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](29, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](30, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](31, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](32, "S\u1ED1 \u0111i\u1EC7n tho\u1EA1i");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](33, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](34, "input", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r21.user.phoneNumber = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](35, UserEditComponent_ng_template_0_div_35_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](36, UserEditComponent_ng_template_0_div_36_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](37, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](39, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](40, "Ng\u00E0y sinh");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](41, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "p-calendar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_p_calendar_ngModelChange_42_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r22.user.birthday = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](43, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](45, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](47, "Qu\u00EA qu\u00E1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](48, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_49_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r23.user.homeTown = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](51, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "label", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](53, "Gi\u1EDBi t\u00EDnh");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](54, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_select_ngModelChange_55_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r24.user.gender = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Nam");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](59, "N\u1EEF");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](60, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](62, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](63, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](64, "Tr\u00ECnh \u0111\u1ED9 h\u1ECDc v\u1EA5n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](65, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](66, "select", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_select_ngModelChange_66_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r25.profiles.academicLevel.code = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](67, UserEditComponent_ng_template_0_option_67_Template, 2, 2, "option", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](68, UserEditComponent_ng_template_0_div_68_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](69, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](70, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](72, "M\u1EE9c l\u01B0\u01A1ng mong mu\u1ED1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](73, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_74_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r26.profiles.desiredSalary = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](75, UserEditComponent_ng_template_0_div_75_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](77, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](78, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](79, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, "\u0110\u1ECBa ch\u1EC9 l\u00E0m vi\u1EC7c mong mu\u1ED1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](82, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_82_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r27.profiles.desiredWorkingAddress = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](83, UserEditComponent_ng_template_0_div_83_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](84, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](86, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "S\u1ED1 n\u0103m kinh nghi\u1EC7m");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](88, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "input", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_89_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r28.profiles.numberYearsExperience = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](90, UserEditComponent_ng_template_0_div_90_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](91, UserEditComponent_ng_template_0_div_91_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](92, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](94, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](95, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, "K\u0129 n\u0103ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](98, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_input_ngModelChange_98_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r29.profiles.skill = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](99, UserEditComponent_ng_template_0_div_99_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](100, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](102, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](103, "H\u00ECnh th\u1EE9c l\u00E0m vi\u1EC7c mong mu\u1ED1n");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](104, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "select", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function UserEditComponent_ng_template_0_Template_select_ngModelChange_105_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r16); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r30.profiles.desiredWorkingForm = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](106, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, "Fulltime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](108, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](109, "Parttime");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](110, UserEditComponent_ng_template_0_div_110_Template, 2, 0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](111, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](112, "\u00C1p d\u1EE5ng");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    let tmp_5_0;
    let tmp_7_0;
    let tmp_9_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_20_0;
    let tmp_22_0;
    let tmp_24_0;
    let tmp_26_0;
    let tmp_27_0;
    let tmp_29_0;
    let tmp_31_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx_r0.formUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("src", ctx_r0.avatarUrl, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("showUploadButton", false)("showCancelButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_5_0 = ctx_r0.formUser.get("name")) == null ? null : tmp_5_0.errors == null ? null : tmp_5_0.errors.required) && ((tmp_5_0 = ctx_r0.formUser.get("name")) == null ? null : tmp_5_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_7_0 = ctx_r0.formUser.get("name")) == null ? null : tmp_7_0.errors == null ? null : tmp_7_0.errors.required) && ((tmp_7_0 = ctx_r0.formUser.get("name")) == null ? null : tmp_7_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_9_0 = ctx_r0.formUser.get("email")) == null ? null : tmp_9_0.errors == null ? null : tmp_9_0.errors.required) && ((tmp_9_0 = ctx_r0.formUser.get("email")) == null ? null : tmp_9_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.phoneNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_11_0 = ctx_r0.formUser.get("phoneNumber")) == null ? null : tmp_11_0.errors == null ? null : tmp_11_0.errors.required) && ((tmp_11_0 = ctx_r0.formUser.get("phoneNumber")) == null ? null : tmp_11_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_12_0 = ctx_r0.formUser.get("phoneNumber")) == null ? null : tmp_12_0.errors == null ? null : tmp_12_0.errors.pattern) && ((tmp_12_0 = ctx_r0.formUser.get("phoneNumber")) == null ? null : tmp_12_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.birthday)("showTime", true)("placeholder", ctx_r0.birthday);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.homeTown);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.user.gender);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.profiles.academicLevel.code);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.academicLevels);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_20_0 = ctx_r0.formUser.get("academicLevel")) == null ? null : tmp_20_0.errors == null ? null : tmp_20_0.errors.required) && ((tmp_20_0 = ctx_r0.formUser.get("academicLevel")) == null ? null : tmp_20_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.profiles.desiredSalary);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_22_0 = ctx_r0.formUser.get("desiredSalary")) == null ? null : tmp_22_0.errors == null ? null : tmp_22_0.errors.required) && ((tmp_22_0 = ctx_r0.formUser.get("desiredSalary")) == null ? null : tmp_22_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.profiles.desiredWorkingAddress);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_24_0 = ctx_r0.formUser.get("desiredWorkingAddress")) == null ? null : tmp_24_0.errors == null ? null : tmp_24_0.errors.required) && ((tmp_24_0 = ctx_r0.formUser.get("desiredWorkingAddress")) == null ? null : tmp_24_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.profiles.numberYearsExperience);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_26_0 = ctx_r0.formUser.get("numberYearsExperience")) == null ? null : tmp_26_0.errors == null ? null : tmp_26_0.errors.required) && ((tmp_26_0 = ctx_r0.formUser.get("numberYearsExperience")) == null ? null : tmp_26_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_27_0 = ctx_r0.formUser.get("numberYearsExperience")) == null ? null : tmp_27_0.errors == null ? null : tmp_27_0.errors.pattern) && ((tmp_27_0 = ctx_r0.formUser.get("numberYearsExperience")) == null ? null : tmp_27_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.profiles.skill);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_29_0 = ctx_r0.formUser.get("skill")) == null ? null : tmp_29_0.errors == null ? null : tmp_29_0.errors.required) && ((tmp_29_0 = ctx_r0.formUser.get("skill")) == null ? null : tmp_29_0.touched));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx_r0.profiles.desiredWorkingForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ((tmp_31_0 = ctx_r0.formUser.get("desiredWorkingForm")) == null ? null : tmp_31_0.errors == null ? null : tmp_31_0.errors.required) && ((tmp_31_0 = ctx_r0.formUser.get("desiredWorkingForm")) == null ? null : tmp_31_0.touched));
} }
class UserEditComponent {
    constructor(sessionService, profileService, fb, primengConfig, userService, uploadService, sanitizer, downloadService, router) {
        this.sessionService = sessionService;
        this.profileService = profileService;
        this.fb = fb;
        this.primengConfig = primengConfig;
        this.userService = userService;
        this.uploadService = uploadService;
        this.sanitizer = sanitizer;
        this.downloadService = downloadService;
        this.router = router;
    }
    ngOnInit() {
        this.primengConfig.ripple = true;
        this.getAllAcademicLevel();
        this.getUser();
        console.log('user form: ' + this.user);
    }
    initForm() {
        const birthday = new Date(this.user.birthday);
        console.log(birthday);
        // eslint-disable-next-line max-len
        this.birthday = `${birthday.getDate()}/${birthday.getMonth()}/${birthday.getFullYear()} ${birthday.getHours()}:${birthday.getMinutes()}`;
        this.formUser = this.fb.group({
            name: [''],
            email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.email],
            // eslint-disable-next-line max-len
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('(84|0[3|5|7|8|9])+([0-9]{8})')]],
            birthDay: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            homeTown: [''],
            gender: [''],
            //profiles
            skill: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            desiredSalary: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            desiredWorkingAddress: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            numberYearsExperience: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.pattern('([0-9][0-9])|([1-9]\\d{3}\\d*)')],
            desiredWorkingForm: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
            academicLevel: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_7__.Validators.required],
        });
    }
    getUserByUserName(username) {
        this.userService.getUserByUserName(username).subscribe((data) => {
            this.user = data;
            this.avatarUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiImageUrl + this.user.avatarName;
            this.getProfiles();
            console.log('data pass: ', this.user);
        }, (error) => {
            alert(error.message);
        });
    }
    getProfilesByUserId(id) {
        this.userService.getUserProfilesByUserId(id).subscribe((data) => {
            if (data) {
                this.profiles = data;
            }
            else {
                this.profiles = {
                    academicLevel: { id: 1, code: 'cao Đẳng', description: 'abc', delete: false },
                    delete: 0,
                    description: '',
                    desiredSalary: '',
                    desiredWorkingAddress: '',
                    desiredWorkingForm: '',
                    id: 0,
                    numberYearsExperience: 0,
                    skill: '',
                    user: undefined,
                };
            }
            this.avatar = 'http://localhost:9090/api/public/files/' + this.user.avatarName;
            this.initForm();
        }, (error) => {
            alert(error.message);
        });
    }
    getAllAcademicLevel() {
        this.userService.getAllAcademicLevel().subscribe((data) => {
            this.academicLevels = data;
        }, (error) => {
            alert(error.message);
        });
    }
    getUser() {
        const token = this.userService.getDecodedAccessToken();
        this.getUserByUserName(token.sub);
    }
    getProfiles() {
        this.getProfilesByUserId(this.user.id);
    }
    onSubmit() {
        this.updateUser();
        this.updateProfile();
        console.log('User id: ', this.user.id);
        if (this.fileAvatar) {
            this.uploadAvatar();
        }
        this.router.navigate(['/home-public']).then(r => console.log(r));
    }
    getUserValue() {
        this.user.name = this.formUser.value.name;
        this.user.phoneNumber = this.formUser.value.phoneNumber;
        this.user.birthday = this.formUser.value.birthDay;
        this.user.homeTown = this.formUser.value.homeTown;
        this.user.gender = this.formUser.value.gender;
        const token = this.userService.getDecodedAccessToken();
        this.user.userName = token.sub;
    }
    getProfilesValue() {
        this.profiles.user = this.user;
        this.profiles.skill = this.formUser.value.skill;
        this.profiles.desiredWorkingAddress = this.formUser.value.desiredWorkingAddress;
        this.profiles.academicLevel = this.formUser.value.academicLevel;
        this.profiles.desiredSalary = this.formUser.value.desiredSalary;
        this.profiles.desiredWorkingForm = this.formUser.value.desiredWorkingForm;
    }
    updateProfile() {
        this.getProfilesValue();
        this.userService.updateUserProfile(this.profiles).subscribe((data) => {
            if (!data) {
                alert('chua updata');
            }
            else {
                alert('up ok ');
            }
        }, (error) => {
            alert(error.message);
        });
    }
    updateUser() {
        this.getUserValue();
        this.userService.updateUser(this.user).subscribe((data) => {
            console.log(data);
        }, (error) => {
            alert(error.message);
        });
    }
    onSelectedAvatar(event) {
        this.fileAvatar = event.currentFiles[0];
        console.log('day la file', this.fileAvatar);
    }
    uploadAvatar() {
        this.uploadService.uploadAvatar(this.fileAvatar, this.user.id).subscribe((data) => {
            alert(data.message);
        }, (error) => {
            alert(error.message);
        });
    }
}
UserEditComponent.ɵfac = function UserEditComponent_Factory(t) { return new (t || UserEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_core_services_session_service__WEBPACK_IMPORTED_MODULE_1__.SessionService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_home_profile_profile_service__WEBPACK_IMPORTED_MODULE_2__.ProfileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](primeng_api__WEBPACK_IMPORTED_MODULE_8__.PrimeNGConfig), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_upload_service__WEBPACK_IMPORTED_MODULE_4__.UploadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_service_download_service__WEBPACK_IMPORTED_MODULE_5__.DownloadFileService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router)); };
UserEditComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: UserEditComponent, selectors: [["ngx-user-edit"]], decls: 1, vars: 1, consts: [[3, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "row"], ["alt", "Avatar", 2, "width", "200px", "border-radius", "50%", "margin", "0 auto 20px", 3, "src"], [1, "row", "mb-4", 2, "margin-left", "45%"], ["mode", "basic", "chooseLabel", "\u1EA2nh \u0111\u1EA1i di\u1EC7n", "accept", "image/*", 3, "showUploadButton", "showCancelButton", "onSelect"], [1, "form-row"], [1, "form-group", "col-md-6", 2, "display", "none"], [1, "label", "col-3", "col-form-label"], [1, "col-9"], ["type", "text", "pInputText", "", "formControlName", "name", 1, "form-control", 3, "ngModel", "ngModelChange"], ["class", "col alert alert-danger", "role", "alert", 4, "ngIf"], [1, "form-group", "col-md-6"], ["type", "text", "pInputText", "", "formControlName", "email", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "form-row", 2, "margin-bottom", "20px"], [1, "col-md-6"], ["type", "text", "pInputText", "", "formControlName", "phoneNumber", 1, "form-control", 3, "ngModel", "ngModelChange"], ["inputId", "time", "formControlName", "birthDay", 3, "ngModel", "showTime", "placeholder", "ngModelChange"], ["type", "text", "pInputText", "", "formControlName", "homeTown", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "label", "col-sm-3", "col-form-label"], [1, "col-sm-9"], ["formControlName", "gender", 1, "custom-select", "mb-3", 3, "ngModel", "ngModelChange"], ["value", "Nam"], ["value", "N\u1EEF"], ["formControlName", "academicLevel", 1, "custom-select", "mb-3", 3, "ngModel", "ngModelChange"], [3, "ngValue", 4, "ngFor", "ngForOf"], ["type", "number", "pInputText", "", "formControlName", "desiredSalary", "min", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "formControlName", "desiredWorkingAddress", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "number", "pInputText", "", "formControlName", "numberYearsExperience", "min", "0", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "pInputText", "", "formControlName", "skill", 1, "form-control", 3, "ngModel", "ngModelChange"], ["value", "Fulltime"], ["value", "Parttime"], ["type", "submit", 1, "btn", "btn-primary", 2, "margin-left", "7vw"], ["role", "alert", 1, "col", "alert", "alert-danger"], [3, "ngValue"]], template: function UserEditComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, UserEditComponent_ng_template_0_Template, 113, 32, "ng-template", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, primeng_card__WEBPACK_IMPORTED_MODULE_12__.Card, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, primeng_fileupload__WEBPACK_IMPORTED_MODULE_13__.FileUpload, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.DefaultValueAccessor, primeng_inputtext__WEBPACK_IMPORTED_MODULE_14__.InputText, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormControlName, primeng_calendar__WEBPACK_IMPORTED_MODULE_15__.Calendar, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.MinValidator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ1c2VyLWVkaXQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 27439:
/*!*********************************************!*\
  !*** ./src/app/service/download.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DownloadFileService": () => (/* binding */ DownloadFileService)
/* harmony export */ });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../environments/environment */ 18260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 85029);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 14001);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 83981);




class DownloadFileService {
    constructor(http) {
        this.http = http;
        this.apiPublicUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.apiPublicUrl;
        // eslint-disable-next-line @typescript-eslint/member-ordering
        this.formData = new FormData();
    }
    getAvatar(fileName) {
        this.resetForm();
        return this.http.get(`${this.apiPublicUrl}` + 'files/' + fileName).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.tap)(receivedJob => console.log(`receivedJob=${JSON.stringify(receivedJob)}`)));
    }
    resetForm() {
        this.formData = new FormData();
    }
}
DownloadFileService.ɵfac = function DownloadFileService_Factory(t) { return new (t || DownloadFileService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient)); };
DownloadFileService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DownloadFileService, factory: DownloadFileService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_home-public_home-public_module_ts.js.map
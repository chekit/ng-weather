(self["webpackChunkng_weather"] = self["webpackChunkng_weather"] || []).push([["main"],{

/***/ 92:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 1584);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.css?ngResource */ 309);
/* harmony import */ var _app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services */ 8379);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let AppComponent = class AppComponent {
  constructor() {
    this.locatioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services__WEBPACK_IMPORTED_MODULE_2__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
  }
  ngOnInit() {
    const locations = this.locatioService.locations();
    for (const location of locations) {
      this.weatherService.addCurrentConditions(location);
    }
  }
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  styles: [(_app_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], AppComponent);


/***/ }),

/***/ 635:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ 6009);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ 3661);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};










let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_2__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_9__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
  }), _pages__WEBPACK_IMPORTED_MODULE_3__.MainPageComponent, _pages__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent],
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
})], AppModule);


/***/ }),

/***/ 6009:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   routing: () => (/* binding */ routing)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _pages_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/forecasts-list/forecasts-list.component */ 3335);
/* harmony import */ var _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/main-page/main-page.component */ 2191);



const appRoutes = [{
  path: '',
  component: _pages_main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent
}, {
  path: 'forecast/:zipcode',
  component: _pages_forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent
}];
const routing = _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forRoot(appRoutes, {});

/***/ }),

/***/ 4371:
/*!*******************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 8869);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 6532);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 5072);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.router = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router);
    this.conditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)([]);
    this.removeCondition = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.output)();
  }
  showForecast(zipcode) {
    this.router.navigate(['/forecast', zipcode]);
  }
  static {
    this.propDecorators = {
      conditions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
        args: [{
          isSignal: true,
          alias: "conditions",
          required: false,
          transform: undefined
        }]
      }],
      removeCondition: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output,
        args: ["removeCondition"]
      }]
    };
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLink],
  standalone: true,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 7455:
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* reexport safe */ _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_0__.CurrentConditionsComponent),
/* harmony export */   ZipcodeEntryComponent: () => (/* reexport safe */ _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 4371);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 1537);



/***/ }),

/***/ 990:
/*!**********************************************!*\
  !*** ./src/app/components/tabs.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _home_runner_work_ng_weather_ng_weather_src_app_components_tabs_component_ts_css_ngResource_home_runner_work_ng_weather_ng_weather_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAudGFicy1zd2l0Y2ggewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBnYXA6IDVweDsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwOwogICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7CiAgICB9CgogICAgLnRhYnMtc3dpdGNoX19pdGVtIHsKICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTdhYTA7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAudGFicy1zd2l0Y2hfX2Nsb3NlIHsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OwogICAgfQoKICAgIC50YWJzLXByZXZpZXcgewogICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICB9CiAg_home_runner_work_ng_weather_ng_weather_src_app_components_tabs_component_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/app/components/tabs.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAudGFicy1zd2l0Y2ggewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBnYXA6IDVweDsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwOwogICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7CiAgICB9CgogICAgLnRhYnMtc3dpdGNoX19pdGVtIHsKICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTdhYTA7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAudGFicy1zd2l0Y2hfX2Nsb3NlIHsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OwogICAgfQoKICAgIC50YWJzLXByZXZpZXcgewogICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICB9CiAg!./src/app/components/tabs.component.ts */ 7511);
/* harmony import */ var _home_runner_work_ng_weather_ng_weather_src_app_components_tabs_component_ts_css_ngResource_home_runner_work_ng_weather_ng_weather_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAudGFicy1zd2l0Y2ggewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBnYXA6IDVweDsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwOwogICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7CiAgICB9CgogICAgLnRhYnMtc3dpdGNoX19pdGVtIHsKICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTdhYTA7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAudGFicy1zd2l0Y2hfX2Nsb3NlIHsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OwogICAgfQoKICAgIC50YWJzLXByZXZpZXcgewogICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICB9CiAg_home_runner_work_ng_weather_ng_weather_src_app_components_tabs_component_ts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_runner_work_ng_weather_ng_weather_src_app_components_tabs_component_ts_css_ngResource_home_runner_work_ng_weather_ng_weather_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAudGFicy1zd2l0Y2ggewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBnYXA6IDVweDsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwOwogICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7CiAgICB9CgogICAgLnRhYnMtc3dpdGNoX19pdGVtIHsKICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTdhYTA7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAudGFicy1zd2l0Y2hfX2Nsb3NlIHsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OwogICAgfQoKICAgIC50YWJzLXByZXZpZXcgewogICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICB9CiAg_home_runner_work_ng_weather_ng_weather_src_app_components_tabs_component_ts__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let TabsComponent = class TabsComponent {};
TabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'tabs-component',
  template: `
    <div class="tabs">
      <ul class="tabs-switch">
        <li class="tabs-switch__item">tab (1) <button class="tabs-switch__close">X</button></li>
        <li class="tabs-switch__item">tab (2) <button class="tabs-switch__close">X</button></li>
      </ul>
      <div class="tabs-preview"><ng-content></ng-content></div>
    </div>
  `,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  standalone: true,
  styles: [(_home_runner_work_ng_weather_ng_weather_src_app_components_tabs_component_ts_css_ngResource_home_runner_work_ng_weather_ng_weather_node_modules_ngtools_webpack_src_loaders_inline_resource_js_data_CiAgICAudGFicy1zd2l0Y2ggewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBnYXA6IDVweDsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwOwogICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7CiAgICB9CgogICAgLnRhYnMtc3dpdGNoX19pdGVtIHsKICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTdhYTA7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAudGFicy1zd2l0Y2hfX2Nsb3NlIHsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OwogICAgfQoKICAgIC50YWJzLXByZXZpZXcgewogICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICB9CiAg_home_runner_work_ng_weather_ng_weather_src_app_components_tabs_component_ts__WEBPACK_IMPORTED_MODULE_0___default())]
})], TabsComponent);


/***/ }),

/***/ 1537:
/*!*********************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 2851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ZipcodeEntryComponent = class ZipcodeEntryComponent {
  constructor() {
    this.addLocation = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.output)();
  }
  static {
    this.propDecorators = {
      addLocation: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Output,
        args: ["addLocation"]
      }]
    };
  }
};
ZipcodeEntryComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Component)({
  selector: 'app-zipcode-entry',
  template: _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  standalone: true
})], ZipcodeEntryComponent);


/***/ }),

/***/ 3335:
/*!******************************************************************!*\
  !*** ./src/app/pages/forecasts-list/forecasts-list.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* binding */ ForecastsListComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list.component.html?ngResource */ 9125);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forecasts-list.component.css?ngResource */ 2246);
/* harmony import */ var _forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5443);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 8627);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 1963);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services */ 8379);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let ForecastsListComponent = class ForecastsListComponent {
  constructor() {
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_services__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.route = (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.inject)(_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute);
    this.forecast$ = this.route.params.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(params => params['zipcode']), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.filter)(Boolean), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.switchMap)(zipcode => this.weatherService.getForecast(zipcode)));
  }
};
ForecastsListComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
  selector: 'app-forecasts-list',
  template: _forecasts_list_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLink],
  standalone: true,
  styles: [(_forecasts_list_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], ForecastsListComponent);


/***/ }),

/***/ 3661:
/*!********************************!*\
  !*** ./src/app/pages/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForecastsListComponent: () => (/* reexport safe */ _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__.ForecastsListComponent),
/* harmony export */   MainPageComponent: () => (/* reexport safe */ _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__.MainPageComponent)
/* harmony export */ });
/* harmony import */ var _forecasts_list_forecasts_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forecasts-list/forecasts-list.component */ 3335);
/* harmony import */ var _main_page_main_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page/main-page.component */ 2191);



/***/ }),

/***/ 2191:
/*!********************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MainPageComponent: () => (/* binding */ MainPageComponent)
/* harmony export */ });
/* harmony import */ var _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main-page.component.html?ngResource */ 5941);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var app_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/components */ 7455);
/* harmony import */ var app_components_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/components/tabs.component */ 990);
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/services */ 8379);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let MainPageComponent = class MainPageComponent {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_services__WEBPACK_IMPORTED_MODULE_3__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_services__WEBPACK_IMPORTED_MODULE_3__.WeatherService);
    this.currentConditions = this.weatherService.getCurrentConditions();
  }
  onAddLocation(zipcode) {
    if (!this.locationService.locations().includes(zipcode)) {
      this.locationService.addLocation(zipcode);
      this.weatherService.addCurrentConditions(zipcode);
    }
  }
  onRemoveCondition(zipcode) {
    this.locationService.removeLocation(zipcode);
    this.weatherService.removeCurrentConditions(zipcode);
  }
};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [app_components__WEBPACK_IMPORTED_MODULE_1__.CurrentConditionsComponent, app_components__WEBPACK_IMPORTED_MODULE_1__.ZipcodeEntryComponent, app_components_tabs_component__WEBPACK_IMPORTED_MODULE_2__.TabsComponent],
  standalone: true
})], MainPageComponent);


/***/ }),

/***/ 8379:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* reexport safe */ _location_service__WEBPACK_IMPORTED_MODULE_0__.LOCATIONS),
/* harmony export */   LocationService: () => (/* reexport safe */ _location_service__WEBPACK_IMPORTED_MODULE_0__.LocationService),
/* harmony export */   WeatherService: () => (/* reexport safe */ _weather_service__WEBPACK_IMPORTED_MODULE_1__.WeatherService)
/* harmony export */ });
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./location.service */ 1681);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.service */ 5858);



/***/ }),

/***/ 1681:
/*!**********************************************!*\
  !*** ./src/app/services/location.service.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LOCATIONS: () => (/* binding */ LOCATIONS),
/* harmony export */   LocationService: () => (/* binding */ LocationService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

const LOCATIONS = 'locations';
let LocationService = class LocationService {
  constructor() {
    this.$locations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    let locString = localStorage.getItem(LOCATIONS);
    if (locString) {
      this.$locations.set(JSON.parse(locString));
    }
  }
  get locations() {
    return this.$locations.asReadonly();
  }
  addLocation(zipcode) {
    this.$locations.update(codes => [...codes, zipcode]);
    localStorage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
  }
  removeLocation(zipcode) {
    let index = this.$locations().indexOf(zipcode);
    if (index !== -1) {
      this.$locations.update(codes => {
        const copy = [...codes];
        copy.splice(index, 1);
        return copy;
      });
      localStorage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
    }
  }
  static {
    this.ctorParameters = () => [];
  }
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], LocationService);


/***/ }),

/***/ 5858:
/*!*********************************************!*\
  !*** ./src/app/services/weather.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeatherService: () => (/* binding */ WeatherService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 6443);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var WeatherService_1;


let WeatherService = class WeatherService {
  constructor() {
    this.currentConditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.signal)([]);
    this.http = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.inject)(_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient);
  }
  static {
    WeatherService_1 = this;
  }
  static {
    this.URL = 'https://api.openweathermap.org/data/2.5';
  }
  static {
    this.APPID = '5a4b2d457ecbef9eb2a71e480b947604';
  }
  static {
    this.ICON_URL = 'https://raw.githubusercontent.com/udacity/Sunshine-Version-2/sunshine_master/app/src/main/res/drawable-hdpi/';
  }
  addCurrentConditions(zip) {
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    this.http.get(`${WeatherService_1.URL}/weather?zip=${zip},us&units=imperial&APPID=${WeatherService_1.APPID}`).subscribe(data => this.currentConditions.update(conditions => [...conditions, {
      zip,
      data,
      iconUrl: this.getWeatherIcon(data.weather[0].id)
    }]));
  }
  removeCurrentConditions(zipcode) {
    this.currentConditions.update(conditions => {
      for (let i in conditions) {
        if (conditions[i].zip == zipcode) conditions.splice(+i, 1);
      }
      return conditions;
    });
  }
  getCurrentConditions() {
    return this.currentConditions.asReadonly();
  }
  getForecast(zipcode) {
    // Here we make a request to get the forecast data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/forecast/daily?zip=${zipcode},us&units=imperial&cnt=5&APPID=${WeatherService_1.APPID}`);
  }
  getWeatherIcon(id) {
    let imageName = 'art_clear.png';
    if (id >= 200 && id <= 232) {
      imageName = 'art_storm.png';
    }
    if (id >= 501 && id <= 511) {
      imageName = 'art_rain.png';
    }
    if (id === 500 || id >= 520 && id <= 531) {
      imageName = 'art_light_rain.png';
    }
    if (id >= 600 && id <= 622) {
      imageName = 'art_snow.png';
    }
    if (id >= 801 && id <= 804) {
      imageName = 'art_clouds.png';
    }
    if (id === 741 || id === 761) {
      imageName = 'art_fog.png';
    }
    return `${WeatherService_1.ICON_URL}${imageName}`;
  }
};
WeatherService = WeatherService_1 = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
  providedIn: 'root'
})], WeatherService);


/***/ }),

/***/ 5312:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
const environment = {
  production: false
};

/***/ }),

/***/ 4429:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 2476);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 635);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 5312);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule);

/***/ }),

/***/ 7511:
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./src/app/components/tabs.component.ts.css?ngResource!=!./node_modules/@ngtools/webpack/src/loaders/inline-resource.js?data=CiAgICAudGFicy1zd2l0Y2ggewogICAgICBkaXNwbGF5OiBmbGV4OwogICAgICBnYXA6IDVweDsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwOwogICAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7CiAgICB9CgogICAgLnRhYnMtc3dpdGNoX19pdGVtIHsKICAgICAgcGFkZGluZzogNXB4IDEwcHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2MTdhYTA7CiAgICAgIGNvbG9yOiB3aGl0ZTsKICAgIH0KCiAgICAudGFicy1zd2l0Y2hfX2Nsb3NlIHsKICAgICAgcGFkZGluZzogMDsKICAgICAgbWFyZ2luOiAwIDAgMCAxMHB4OwogICAgICBib3JkZXI6IG5vbmU7CiAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50OwogICAgfQoKICAgIC50YWJzLXByZXZpZXcgewogICAgICBwYWRkaW5nOiAyMHB4IDE1cHg7CiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICM1NzU5NWQ7CiAgICB9CiAg!./src/app/components/tabs.component.ts ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `
    .tabs-switch {
      display: flex;
      gap: 5px;
      padding: 0;
      margin: 0;
      list-style-type: none;
    }

    .tabs-switch__item {
      padding: 5px 10px;
      border: 1px solid #57595d;
      background-color: #617aa0;
      color: white;
    }

    .tabs-switch__close {
      padding: 0;
      margin: 0 0 0 10px;
      border: none;
      background-color: transparent;
    }

    .tabs-preview {
      padding: 20px 15px;
      border: 1px solid #57595d;
    }
  `, "",{"version":3,"sources":["webpack://./src/app/components/tabs.component.ts"],"names":[],"mappings":";IACI;MACE,aAAa;MACb,QAAQ;MACR,UAAU;MACV,SAAS;MACT,qBAAqB;IACvB;;IAEA;MACE,iBAAiB;MACjB,yBAAyB;MACzB,yBAAyB;MACzB,YAAY;IACd;;IAEA;MACE,UAAU;MACV,kBAAkB;MAClB,YAAY;MACZ,6BAA6B;IAC/B;;IAEA;MACE,kBAAkB;MAClB,yBAAyB;IAC3B","sourcesContent":["\n    .tabs-switch {\n      display: flex;\n      gap: 5px;\n      padding: 0;\n      margin: 0;\n      list-style-type: none;\n    }\n\n    .tabs-switch__item {\n      padding: 5px 10px;\n      border: 1px solid #57595d;\n      background-color: #617aa0;\n      color: white;\n    }\n\n    .tabs-switch__close {\n      padding: 0;\n      margin: 0 0 0 10px;\n      border: none;\n      background-color: transparent;\n    }\n\n    .tabs-preview {\n      padding: 20px 15px;\n      border: 1px solid #57595d;\n    }\n  "],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 309:
/*!**********************************************!*\
  !*** ./src/app/app.component.css?ngResource ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ``, "",{"version":3,"sources":[],"names":[],"mappings":"","sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 6532:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.css?ngResource ***!
  \*******************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: block;
}

.close {
  cursor: pointer;
}
.flex {
  display: flex;
  justify-content: space-between;
}
`, "",{"version":3,"sources":["webpack://./src/app/components/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;AACA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[":host {\n  display: block;\n}\n\n.close {\n  cursor: pointer;\n}\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 2246:
/*!******************************************************************************!*\
  !*** ./src/app/pages/forecasts-list/forecasts-list.component.css?ngResource ***!
  \******************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.icon {
  width: 45px;
  height: 45px;
  position: absolute;
  right: 20px;
  top: -2px;
}
`, "",{"version":3,"sources":["webpack://./src/app/pages/forecasts-list/forecasts-list.component.css"],"names":[],"mappings":"AAAA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;EAClB,WAAW;EACX,SAAS;AACX","sourcesContent":[".icon {\n  width: 45px;\n  height: 45px;\n  position: absolute;\n  right: 20px;\n  top: -2px;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1584:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<router-outlet></router-outlet>\n";

/***/ }),

/***/ 8869:
/*!********************************************************************************************!*\
  !*** ./src/app/components/current-conditions/current-conditions.component.html?ngResource ***!
  \********************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "@for (location of conditions(); track location.zip) {\n  <div\n    class=\"well flex\"\n    (click)=\"showForecast(location.zip)\"\n  >\n    <div>\n      <h3>{{ location.data.name }} ({{ location.zip }})</h3>\n      <h4>Current conditions: {{ location.data.weather[0].main }}</h4>\n      <h4>Temperatures today:</h4>\n      <p>\n        Current {{ location.data.main.temp | number: '.0-0' }} - Max\n        {{ location.data.main.temp_max | number: '.0-0' }} - Min {{ location.data.main.temp_min | number: '.0-0' }}\n      </p>\n      <p>\n        <a [routerLink]=\"['/forecast', location.zip]\">Show 5-day forecast for {{ location.data.name }}</a>\n      </p>\n    </div>\n    <div>\n      <span\n        class=\"close\"\n        (click)=\"removeCondition.emit(location.zip)\"\n        >&times;</span\n      >\n      <img\n        [src]=\"location.iconUrl\"\n        alt=\"Condition icon\"\n      />\n    </div>\n  </div>\n}\n";

/***/ }),

/***/ 2851:
/*!**********************************************************************************!*\
  !*** ./src/app/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode (US only):</h2>\n  <input\n    type=\"text\"\n    #zipcode\n    placeholder=\"Zipcode\"\n    class=\"form-control\"\n  />\n  <br />\n  <button\n    class=\"btn btn-primary\"\n    (click)=\"addLocation.emit(zipcode.value)\"\n  >\n    Add location\n  </button>\n</div>\n";

/***/ }),

/***/ 9125:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/forecasts-list/forecasts-list.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"panel panel-default\">\n  @if (forecast$ | async; as forecast) {\n    <div class=\"panel-heading\">\n      <h3 class=\"panel-title\">5-day forecast for {{ forecast?.city.name }}</h3>\n    </div>\n    <ul class=\"list-group\">\n      @for (dailyForecast of forecast?.list; track $index) {\n        <li class=\"list-group-item\">\n          {{ dailyForecast.dt * 1000 | date: 'EEEE, MMM d' }}:\n          {{ dailyForecast.weather[0].main }}\n          - Min: {{ dailyForecast.temp.min | number: '.0-0' }} - Max:\n          {{ dailyForecast.temp.max | number: '.0-0' }}\n\n          <img\n            [src]=\"weatherService.getWeatherIcon(dailyForecast.weather[0].id)\"\n            alt=\"Weather icon\"\n            class=\"icon\"\n          />\n        </li>\n      }\n    </ul>\n  }\n</div>\n<button\n  class=\"btn btn-success\"\n  [routerLink]=\"'/'\"\n>\n  < Back to main page\n</button>\n";

/***/ }),

/***/ 5941:
/*!*********************************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"container-fluid\">\n  <app-zipcode-entry (addLocation)=\"onAddLocation($event)\" />\n  <app-current-conditions\n    [conditions]=\"currentConditions()\"\n    (removeCondition)=\"onRemoveCondition($event)\"\n  />\n\n  <tabs-component>\n    <app-current-conditions\n      [conditions]=\"currentConditions()\"\n      (removeCondition)=\"onRemoveCondition($event)\"\n    />\n  </tabs-component>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services */ 8379);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let AppComponent = class AppComponent {
  constructor() {
    this.locatioService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services__WEBPACK_IMPORTED_MODULE_1__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.inject)(_services__WEBPACK_IMPORTED_MODULE_1__.WeatherService);
  }
  ngOnInit() {
    const locations = this.locatioService.locations();
    for (const location of locations) {
      this.weatherService.addCurrentConditions(location).subscribe(() => console.info('🚀 Locations initialised'));
    }
  }
};
AppComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'app-root',
  template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 4456);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser */ 436);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ 6140);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../environments/environment */ 5312);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 92);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routing */ 6009);
/* harmony import */ var _pages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages */ 3661);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services */ 8379);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};











let AppModule = class AppModule {};
AppModule = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
  declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
  imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__.BrowserModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _app_routing__WEBPACK_IMPORTED_MODULE_2__.routing, _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__.ServiceWorkerModule.register('/ngsw-worker.js', {
    enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production
  }), _pages__WEBPACK_IMPORTED_MODULE_3__.MainPageComponent, _pages__WEBPACK_IMPORTED_MODULE_3__.ForecastsListComponent],
  providers: [{
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_8__.HTTP_INTERCEPTORS,
    useClass: _services__WEBPACK_IMPORTED_MODULE_4__.CacheInterceptor,
    multi: true
  }],
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
/* harmony import */ var _main_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./main-page.component.css?ngResource */ 3982);
/* harmony import */ var _main_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_main_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services */ 8379);
/* harmony import */ var app_shared_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components */ 2691);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let MainPageComponent = class MainPageComponent {
  constructor() {
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_services__WEBPACK_IMPORTED_MODULE_2__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_services__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.signal)({
      error: null
    });
    this.currentConditions = this.weatherService.getCurrentConditions();
  }
  onAddLocation(zipcode) {
    this.state.update(state => ({
      ...state,
      error: null
    }));
    if (!this.locationService.locations().includes(zipcode)) {
      this.weatherService.addCurrentConditions(zipcode).subscribe({
        next: () => this.locationService.addLocation(zipcode),
        error: err => this.state.update(state => ({
          ...state,
          error: err
        }))
      });
    }
  }
};
MainPageComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-main-page',
  template: _main_page_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [app_shared_components__WEBPACK_IMPORTED_MODULE_3__.ZipcodeEntryComponent, app_shared_components__WEBPACK_IMPORTED_MODULE_3__.CurrentConditionsComponent],
  standalone: true,
  styles: [(_main_page_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], MainPageComponent);


/***/ }),

/***/ 5702:
/*!***************************************************!*\
  !*** ./src/app/services/browser-stotage.token.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROWSER_STORAGE: () => (/* binding */ BROWSER_STORAGE)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);

const BROWSER_STORAGE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('Browser Storage', {
  providedIn: 'root',
  factory: () => localStorage
});

/***/ }),

/***/ 400:
/*!***********************************************!*\
  !*** ./src/app/services/cache.interceptor.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheInterceptor: () => (/* binding */ CacheInterceptor)
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 6443);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 1536);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 6000);
/* harmony import */ var _browser_stotage_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-stotage.token */ 5702);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let CacheInterceptor = class CacheInterceptor {
  constructor(storage) {
    this.storage = storage;
    this.cache = new Map();
    this.initLocalCache();
  }
  intercept(req, next) {
    if (!this.isCacheable(req)) return next.handle(req);
    const cachedResponse = this.cache.get(req.url);
    return cachedResponse ? (0,rxjs__WEBPACK_IMPORTED_MODULE_1__.of)(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse({
      body: cachedResponse
    })) : this.sendRequest(req, next);
  }
  sendRequest(req, next) {
    return next.handle(req).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.tap)(event => {
      if (event instanceof _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpResponse) {
        this.updateCache(req.url, event.body);
      }
    }));
  }
  updateCache(key, data) {
    this.cache.set(key, data);
    this.storage.setItem('cache', JSON.stringify(Array.from(this.cache)));
  }
  isCacheable(req) {
    return req.method === 'GET';
  }
  initLocalCache() {
    const cached = this.storage.getItem('cache');
    if (cached) {
      this.cache = new Map(JSON.parse(cached));
    }
  }
  static {
    this.ctorParameters = () => [{
      type: Storage,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject,
        args: [_browser_stotage_token__WEBPACK_IMPORTED_MODULE_0__.BROWSER_STORAGE]
      }]
    }];
  }
};
CacheInterceptor = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Injectable)()], CacheInterceptor);


/***/ }),

/***/ 8379:
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROWSER_STORAGE: () => (/* reexport safe */ _browser_stotage_token__WEBPACK_IMPORTED_MODULE_0__.BROWSER_STORAGE),
/* harmony export */   CacheInterceptor: () => (/* reexport safe */ _cache_interceptor__WEBPACK_IMPORTED_MODULE_1__.CacheInterceptor),
/* harmony export */   LOCATIONS: () => (/* reexport safe */ _location_service__WEBPACK_IMPORTED_MODULE_2__.LOCATIONS),
/* harmony export */   LocationService: () => (/* reexport safe */ _location_service__WEBPACK_IMPORTED_MODULE_2__.LocationService),
/* harmony export */   WeatherService: () => (/* reexport safe */ _weather_service__WEBPACK_IMPORTED_MODULE_3__.WeatherService)
/* harmony export */ });
/* harmony import */ var _browser_stotage_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-stotage.token */ 5702);
/* harmony import */ var _cache_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cache.interceptor */ 400);
/* harmony import */ var _location_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./location.service */ 1681);
/* harmony import */ var _weather_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./weather.service */ 5858);





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _browser_stotage_token__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./browser-stotage.token */ 5702);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};


const LOCATIONS = 'locations';
let LocationService = class LocationService {
  constructor(storage) {
    this.storage = storage;
    this.$locations = (0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.signal)([]);
    let locString = storage.getItem(LOCATIONS);
    if (locString) {
      this.$locations.set(JSON.parse(locString));
    }
  }
  get locations() {
    return this.$locations.asReadonly();
  }
  addLocation(zipcode) {
    this.$locations.update(codes => [...codes, zipcode]);
    this.storage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
  }
  removeLocation(zipcode) {
    let index = this.$locations().indexOf(zipcode);
    if (index !== -1) {
      this.$locations.update(codes => {
        const copy = [...codes];
        copy.splice(index, 1);
        return copy;
      });
      this.storage.setItem(LOCATIONS, JSON.stringify(this.$locations()));
    }
  }
  static {
    this.ctorParameters = () => [{
      type: Storage,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__.Inject,
        args: [_browser_stotage_token__WEBPACK_IMPORTED_MODULE_0__.BROWSER_STORAGE]
      }]
    }];
  }
};
LocationService = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_1__.Injectable)({
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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6000);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5443);
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
    console.log(zip);
    // Here we make a request to get the current conditions data from the API. Note the use of backticks and an expression to insert the zipcode
    return this.http.get(`${WeatherService_1.URL}/weather?zip=${zip},us&units=imperial&APPID=${WeatherService_1.APPID}`).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.tap)(console.log), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(data => this.currentConditions.update(conditions => [...conditions, {
      zip,
      data,
      iconUrl: this.getWeatherIcon(data.weather[0].id)
    }])));
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

/***/ 2029:
/*!******************************************************************************************************************!*\
  !*** ./src/app/shared/components/current-conditions/components/current-condition/current-condition.component.ts ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionComponent: () => (/* binding */ CurrentConditionComponent)
/* harmony export */ });
/* harmony import */ var _current_condition_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-condition.component.html?ngResource */ 4279);
/* harmony import */ var _current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-condition.component.css?ngResource */ 8912);
/* harmony import */ var _current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 5072);
/* harmony import */ var app_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/services */ 8379);
/* harmony import */ var app_shared_components_tabs_tab_element_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! app/shared/components/tabs/tab-element.base */ 9627);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};








let CurrentConditionComponent = class CurrentConditionComponent extends app_shared_components_tabs_tab_element_base__WEBPACK_IMPORTED_MODULE_3__.TabElementBase {
  constructor() {
    super(...arguments);
    this.locationService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_services__WEBPACK_IMPORTED_MODULE_2__.LocationService);
    this.weatherService = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.inject)(app_services__WEBPACK_IMPORTED_MODULE_2__.WeatherService);
    this.location = _angular_core__WEBPACK_IMPORTED_MODULE_4__.input.required();
    this.canSelfRemove = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.input)(true);
  }
  remove() {
    const {
      zip
    } = this.location();
    this.locationService.removeLocation(zip);
    this.weatherService.removeCurrentConditions(zip);
  }
  static {
    this.propDecorators = {
      location: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
        args: [{
          isSignal: true,
          alias: "location",
          required: true,
          transform: undefined
        }]
      }],
      canSelfRemove: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
        args: [{
          isSignal: true,
          alias: "canSelfRemove",
          required: false,
          transform: undefined
        }]
      }]
    };
  }
};
CurrentConditionComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'current-condition',
  template: _current_condition_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink],
  standalone: true,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
  styles: [(_current_condition_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionComponent);


/***/ }),

/***/ 615:
/*!**************************************************************************************!*\
  !*** ./src/app/shared/components/current-conditions/current-conditions.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* binding */ CurrentConditionsComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions.component.html?ngResource */ 5481);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./current-conditions.component.css?ngResource */ 5658);
/* harmony import */ var _current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 7580);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../tabs/tabs.component */ 5119);
/* harmony import */ var _components_current_condition_current_condition_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/current-condition/current-condition.component */ 2029);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};







let CurrentConditionsComponent = class CurrentConditionsComponent {
  constructor() {
    this.conditions = (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.input)([]);
  }
  static {
    this.propDecorators = {
      conditions: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Input,
        args: [{
          isSignal: true,
          alias: "conditions",
          required: false,
          transform: undefined
        }]
      }]
    };
  }
};
CurrentConditionsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
  selector: 'app-current-conditions',
  template: _current_conditions_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectionStrategy.OnPush,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _components_current_condition_current_condition_component__WEBPACK_IMPORTED_MODULE_3__.CurrentConditionComponent, _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__.TabsComponent],
  standalone: true,
  styles: [(_current_conditions_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], CurrentConditionsComponent);


/***/ }),

/***/ 2691:
/*!********************************************!*\
  !*** ./src/app/shared/components/index.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentConditionsComponent: () => (/* reexport safe */ _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_0__.CurrentConditionsComponent),
/* harmony export */   TabElementBase: () => (/* reexport safe */ _tabs_tab_element_base__WEBPACK_IMPORTED_MODULE_1__.TabElementBase),
/* harmony export */   TabsComponent: () => (/* reexport safe */ _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__.TabsComponent),
/* harmony export */   ZipcodeEntryComponent: () => (/* reexport safe */ _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_3__.ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _current_conditions_current_conditions_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./current-conditions/current-conditions.component */ 615);
/* harmony import */ var _tabs_tab_element_base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs/tab-element.base */ 9627);
/* harmony import */ var _tabs_tabs_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tabs/tabs.component */ 5119);
/* harmony import */ var _zipcode_entry_zipcode_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zipcode-entry/zipcode-entry.component */ 8053);





/***/ }),

/***/ 9627:
/*!************************************************************!*\
  !*** ./src/app/shared/components/tabs/tab-element.base.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabElementBase: () => (/* binding */ TabElementBase)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};

let TabElementBase = class TabElementBase {};
TabElementBase = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)()], TabElementBase);


/***/ }),

/***/ 5119:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TabsComponent: () => (/* binding */ TabsComponent)
/* harmony export */ });
/* harmony import */ var _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.component.html?ngResource */ 3377);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.component.css?ngResource */ 1898);
/* harmony import */ var _tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 316);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 7580);
var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
  var c = arguments.length,
    r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
    d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let TabsComponent = class TabsComponent {
  constructor() {
    this.data = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.input)([]);
    this.state = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.signal)({
      activeIndex: 0
    });
    this.tabContentTmpl = _angular_core__WEBPACK_IMPORTED_MODULE_2__.contentChild.required('tabContent', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef
    });
    this.tabTmpl = _angular_core__WEBPACK_IMPORTED_MODULE_2__.contentChild.required('tab', {
      read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef
    });
    this.tabData = (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.contentChildren)('tabContentItem');
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.effect)(() => {
      this.data();
    });
  }
  onSetActiveIndex(index) {
    if (this.state().activeIndex === index) return;
    this.state.update(state => ({
      ...state,
      activeIndex: index
    }));
  }
  onRemoveIndex(event, index) {
    event.stopPropagation();
    this.tabData()[index].remove();
    this.state.update(state => ({
      ...state,
      activeIndex: index - 1 > 0 ? index - 1 : 0
    }));
  }
  static {
    this.ctorParameters = () => [];
  }
  static {
    this.propDecorators = {
      data: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input,
        args: [{
          isSignal: true,
          alias: "data",
          required: false,
          transform: undefined
        }]
      }],
      tabContentTmpl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild,
        args: ['tabContent', {
          ...{
            read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef
          },
          isSignal: true
        }]
      }],
      tabTmpl: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChild,
        args: ['tab', {
          ...{
            read: _angular_core__WEBPACK_IMPORTED_MODULE_2__.TemplateRef
          },
          isSignal: true
        }]
      }],
      tabData: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ContentChildren,
        args: ['tabContentItem', {
          isSignal: true
        }]
      }]
    };
  }
};
TabsComponent = __decorate([(0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
  selector: 'tabs-component',
  template: _tabs_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
  standalone: true,
  styles: [(_tabs_component_css_ngResource__WEBPACK_IMPORTED_MODULE_1___default())]
})], TabsComponent);


/***/ }),

/***/ 8053:
/*!****************************************************************************!*\
  !*** ./src/app/shared/components/zipcode-entry/zipcode-entry.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZipcodeEntryComponent: () => (/* binding */ ZipcodeEntryComponent)
/* harmony export */ });
/* harmony import */ var _zipcode_entry_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./zipcode-entry.component.html?ngResource */ 3671);
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

/***/ 3982:
/*!********************************************************************!*\
  !*** ./src/app/pages/main-page/main-page.component.css?ngResource ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.error {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid #b41d1d;
  border-radius: 5px;
  background-color: #febebed5;
}

.error__icon {
  font-size: 24px;
  text-shadow: 0px 0px 2px hsl(0deg 0% 0% / 60%);
}

.error__text,
.error__icon {
  margin: 0;
}
`, "",{"version":3,"sources":["webpack://./src/app/pages/main-page/main-page.component.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,aAAa;EACb,aAAa;EACb,yBAAyB;EACzB,kBAAkB;EAClB,2BAA2B;AAC7B;;AAEA;EACE,eAAe;EACf,8CAA8C;AAChD;;AAEA;;EAEE,SAAS;AACX","sourcesContent":[".error {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px;\n  margin: 5px 0;\n  border: 1px solid #b41d1d;\n  border-radius: 5px;\n  background-color: #febebed5;\n}\n\n.error__icon {\n  font-size: 24px;\n  text-shadow: 0px 0px 2px hsl(0deg 0% 0% / 60%);\n}\n\n.error__text,\n.error__icon {\n  margin: 0;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 8912:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/shared/components/current-conditions/components/current-condition/current-condition.component.css?ngResource ***!
  \******************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
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
`, "",{"version":3,"sources":["webpack://./src/app/shared/components/current-conditions/components/current-condition/current-condition.component.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[":host {\n  display: block;\n}\n\n.close {\n  cursor: pointer;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 5658:
/*!**************************************************************************************************!*\
  !*** ./src/app/shared/components/current-conditions/current-conditions.component.css?ngResource ***!
  \**************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
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
`, "",{"version":3,"sources":["webpack://./src/app/shared/components/current-conditions/current-conditions.component.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,8BAA8B;AAChC","sourcesContent":[":host {\n  display: block;\n}\n\n.close {\n  cursor: pointer;\n}\n\n.flex {\n  display: flex;\n  justify-content: space-between;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___.toString();


/***/ }),

/***/ 1898:
/*!**********************************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.css?ngResource ***!
  \**********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/sourceMaps.js */ 3142);
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ 5950);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:host {
  display: block;
}

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
  cursor: pointer;
  transition: background-color 0.15s ease-in-out;
}

.tabs-switch__item:hover {
  background-color: #4a5e7c;
}

.tabs-switch__item.is-active {
  background-color: #303d51;
}

.tabs-switch__close {
  padding: 0;
  margin: 0 0 0 10px;
  border: none;
  background-color: transparent;
}

.tabs-switch__close:hover {
  color: #8ba5d0;
}

.tabs-switch__close:active {
  color: #7288ac;
}

.tabs-preview {
  padding: 20px 15px;
  border: 1px solid #57595d;
}

.placeholder-text {
  text-align: center;
  color: #ccc;
}
`, "",{"version":3,"sources":["webpack://./src/app/shared/components/tabs/tabs.component.css"],"names":[],"mappings":"AAAA;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,QAAQ;EACR,UAAU;EACV,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;EACjB,yBAAyB;EACzB,yBAAyB;EACzB,YAAY;EACZ,eAAe;EACf,8CAA8C;AAChD;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,kBAAkB;EAClB,YAAY;EACZ,6BAA6B;AAC/B;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,yBAAyB;AAC3B;;AAEA;EACE,kBAAkB;EAClB,WAAW;AACb","sourcesContent":[":host {\n  display: block;\n}\n\n.tabs-switch {\n  display: flex;\n  gap: 5px;\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\n.tabs-switch__item {\n  padding: 5px 10px;\n  border: 1px solid #57595d;\n  background-color: #617aa0;\n  color: white;\n  cursor: pointer;\n  transition: background-color 0.15s ease-in-out;\n}\n\n.tabs-switch__item:hover {\n  background-color: #4a5e7c;\n}\n\n.tabs-switch__item.is-active {\n  background-color: #303d51;\n}\n\n.tabs-switch__close {\n  padding: 0;\n  margin: 0 0 0 10px;\n  border: none;\n  background-color: transparent;\n}\n\n.tabs-switch__close:hover {\n  color: #8ba5d0;\n}\n\n.tabs-switch__close:active {\n  color: #7288ac;\n}\n\n.tabs-preview {\n  padding: 20px 15px;\n  border: 1px solid #57595d;\n}\n\n.placeholder-text {\n  text-align: center;\n  color: #ccc;\n}\n"],"sourceRoot":""}]);
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
module.exports = "<div class=\"container-fluid\">\n  @if (state().error) {\n    <div class=\"error\">\n      <p class=\"error__icon\">⚠️</p>\n      <p class=\"error__text\">{{ state().error.message ?? 'Data not Found' }}</p>\n    </div>\n  }\n  <app-zipcode-entry (addLocation)=\"onAddLocation($event)\" />\n  <app-current-conditions [conditions]=\"currentConditions()\" />\n</div>\n";

/***/ }),

/***/ 4279:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/shared/components/current-conditions/components/current-condition/current-condition.component.html?ngResource ***!
  \*******************************************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well flex\">\n  <div>\n    <h3>{{ location().data.name }} ({{ location().zip }})</h3>\n    <h4>Current conditions: {{ location().data.weather[0].main }}</h4>\n    <h4>Temperatures today:</h4>\n    <p>\n      Current {{ location().data.main.temp | number: '.0-0' }} - Max\n      {{ location().data.main.temp_max | number: '.0-0' }} - Min {{ location().data.main.temp_min | number: '.0-0' }}\n    </p>\n    <p>\n      <a [routerLink]=\"['/forecast', location().zip]\">Show 5-day forecast for {{ location().data.name }}</a>\n    </p>\n  </div>\n  <div>\n    @if (canSelfRemove()) {\n      <span\n        class=\"close\"\n        (click)=\"remove.emit(location().zip)\"\n        >&times;</span\n      >\n    }\n    <img\n      [src]=\"location().iconUrl\"\n      alt=\"Condition icon\"\n    />\n  </div>\n</div>\n";

/***/ }),

/***/ 5481:
/*!***************************************************************************************************!*\
  !*** ./src/app/shared/components/current-conditions/current-conditions.component.html?ngResource ***!
  \***************************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<tabs-component [data]=\"conditions()\">\n  <ng-template\n    #tab\n    let-location\n  >\n    {{ location.data.name + '&nbsp;(' + location.zip + ')' }}\n  </ng-template>\n  <ng-template\n    #tabContent\n    let-data\n  >\n    <current-condition\n      [location]=\"data\"\n      [canSelfRemove]=\"false\"\n      #tabContentItem\n    />\n  </ng-template>\n</tabs-component>\n";

/***/ }),

/***/ 3377:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/tabs/tabs.component.html?ngResource ***!
  \***********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"tabs\">\n  @if (data().length) {\n    <ul class=\"tabs-switch\">\n      @for (item of data(); track $index) {\n        <li\n          class=\"tabs-switch__item\"\n          [ngClass]=\"{ 'is-active': state().activeIndex === $index }\"\n          (click)=\"onSetActiveIndex($index)\"\n        >\n          <ng-container\n            [ngTemplateOutlet]=\"tabTmpl()\"\n            [ngTemplateOutletContext]=\"{ $implicit: item }\"\n          />\n          <button\n            class=\"tabs-switch__close\"\n            (click)=\"onRemoveIndex($event, $index)\"\n          >\n            X\n          </button>\n        </li>\n      }\n    </ul>\n    <div class=\"tabs-preview\">\n      @for (item of data(); track $index) {\n        <div [hidden]=\"state().activeIndex !== $index\">\n          <ng-container\n            [ngTemplateOutlet]=\"tabContentTmpl()\"\n            [ngTemplateOutletContext]=\"{ $implicit: item }\"\n          />\n        </div>\n      }\n    </div>\n  } @else {\n    <p class=\"placeholder-text\">Please enter the zipcode in the form to see the weather conditions</p>\n  }\n</div>\n";

/***/ }),

/***/ 3671:
/*!*****************************************************************************************!*\
  !*** ./src/app/shared/components/zipcode-entry/zipcode-entry.component.html?ngResource ***!
  \*****************************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<div class=\"well\">\n  <h2>Enter a zipcode (US only):</h2>\n  <input\n    type=\"text\"\n    #zipcode\n    placeholder=\"Zipcode\"\n    class=\"form-control\"\n  />\n  <br />\n  <button\n    class=\"btn btn-primary\"\n    (click)=\"addLocation.emit(zipcode.value)\"\n  >\n    Add location\n  </button>\n</div>\n";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4429)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map
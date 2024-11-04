# NgWeather

## Result on GitHub Pages

[https://chekit.github.io/ng-weather/](https://chekit.github.io/ng-weather/)

General app structure was changed to better split the building blocks of the app to appropriate layers:

- [pages](src/app/pages)
- [shared](src/app/shared)
- [services](src/app/services)

Components are trasnaformed to standalone. The main app component is left as it is - not standalone, the main AppModule is left to keep app settings as it was designed at the beginning.

## STEP #1

The [`LocationService`](src/app/services/location.service.ts) is now responsible for saving locations to the local storage.

The [`WeatherService`](src/app/services/weather.service.ts) is responsible for fetching the weather data from the OpenWeatherMap API.

The services are used independently in the [AppComponent](src/app/app.component.ts), [MainPageComponent](src/app/pages/main-page/main-page.component.ts) and [CurrentConditionComponent](src/app/shared/components/current-conditions/components/current-condition/current-condition.component.ts) to initialise data and manipulate it.

## STEP #2

The [`TabsComponent`](src/app/shared/components/tabs/tabs.component.ts) is implemented with the content projection in mind. It supports setting the tab switch and tab content via 2 templates, the tab content should implement/to be extended from the [`TabElementBase`](src/app/shared/components/tabs/tab-element.base.ts) class to provide the awaited interface for closing the tab.

## STEP #3

The cache system is implemented as an interceptor service [`CacheInterceptor`](src/app/services/cache.interceptor.ts). The class is generic and can be specified for various type of response data to be cached. For the current app it uses the [type](src/app/app.module.ts#L15) with responses from `WeatherService`.

To customise the cache update timeout for checking the results, you need to set up the window variable `ref_timeout` in the browser console. The value should be in milliseconds. For reference please check [`CacheInterceptor`](src/app/services/cache.interceptor.ts#L63)

```javascript
window.ref_timeout = 2000;
```

### Why `class` for interceptor and not `function`?

> Since I left the main `AppModule`, I decided it will be more consistent to write the interceptor in object style in place of functional.

> Please check the setup in [`AppModule`](src/app/app.module.ts#L31);

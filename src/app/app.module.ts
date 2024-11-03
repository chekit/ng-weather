import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { routing } from './app.routing';
import { ForecastsListComponent, MainPageComponent } from './pages';
import { CacheInterceptor } from './services/cache.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    routing,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    MainPageComponent,
    ForecastsListComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: CacheInterceptor,
      multi: true,
    },
    { provide: 'Window', useValue: window },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

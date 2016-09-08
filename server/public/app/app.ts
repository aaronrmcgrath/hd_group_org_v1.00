// APP //
// main or bootstrap, runs the app

// imports needed for app
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

// app components
 import { AppComponent } from './app.component';
// import { appRouteProviders } from './app.routes';

// launches app
bootstrap(AppComponent, [
    // appRouteProviders,
    HTTP_PROVIDERS
])
 .catch((err: any) => console.error(err));

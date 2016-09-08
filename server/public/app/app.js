// APP //
// main or bootstrap, runs the app
"use strict";
// imports needed for app
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
// app components
var app_component_1 = require('./app.component');
// import { appRouteProviders } from './app.routes';
// launches app
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    // appRouteProviders,
    http_1.HTTP_PROVIDERS
])
    .catch(function (err) { return console.error(err); });
//# sourceMappingURL=app.js.map
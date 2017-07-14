"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
// application routing
var app_routing_1 = require('./app.routing');
// components imports
var app_component_1 = require('./components/app/app.component');
var music_sheet_component_1 = require('./components/music-sheet/music-sheet.component');
var start_dashboard_component_1 = require('./components/start-dashboard/start-dashboard.component');
//service imports
var music_sheet_settings_service_1 = require('./services/music-sheet-settings-service/music-sheet-settings.service');
var TimerEventsManager_service_1 = require('./services/timer-events-service/TimerEventsManager.service');
var AppConstants_service_1 = require('./services/app-constants-service/AppConstants.service');
var ApplicationImageSprite_service_1 = require('./services/ApplicationImagesSpriteService/ApplicationImageSprite.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                music_sheet_component_1.MusicSheetComponent,
                start_dashboard_component_1.StartDashboardComponent
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [music_sheet_settings_service_1.MusicSheetSettingsService,
                TimerEventsManager_service_1.TimerEventsManagerService,
                AppConstants_service_1.AppConstantsService,
                ApplicationImageSprite_service_1.ApplicationImageSpriteService]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map
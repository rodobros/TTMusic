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
var router_1 = require('@angular/router');
var music_sheet_settings_service_1 = require('../../services/music-sheet-settings-service/music-sheet-settings.service');
var StartDashboardComponent = (function () {
    function StartDashboardComponent(router, musicSheetSettingsService) {
        this.router = router;
        this.musicSheetSettingsService = musicSheetSettingsService;
        this.tempoValue_ = this.musicSheetSettingsService.getTempo();
        this.beatsPerMeasure_ = this.musicSheetSettingsService.getBeatsPerMeasure();
        this.beatsLength_ = this.musicSheetSettingsService.getBeatLength();
    }
    StartDashboardComponent.prototype.startMusic = function () {
        this.setMusicSettings();
        var link = ['/musicSheet'];
        this.router.navigate(link);
    };
    StartDashboardComponent.prototype.setMusicSettings = function () {
        this.musicSheetSettingsService.setTempo(this.tempoValue_);
        this.musicSheetSettingsService.setBeatsPerMeasure(this.beatsPerMeasure_);
        this.musicSheetSettingsService.setBeatLength(this.beatsLength_);
    };
    StartDashboardComponent = __decorate([
        core_1.Component({
            selector: 'start-dashboard',
            templateUrl: "app/components/start-dashboard/start-dashboard.component.html",
            styleUrls: ['app/components/start-dashboard/start-dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, music_sheet_settings_service_1.MusicSheetSettingsService])
    ], StartDashboardComponent);
    return StartDashboardComponent;
}());
exports.StartDashboardComponent = StartDashboardComponent;
//# sourceMappingURL=start-dashboard.component.js.map
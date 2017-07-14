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
var AppConstantsService = (function () {
    function AppConstantsService() {
    }
    AppConstantsService.prototype.getMusicSheetRowWidth = function () {
        return 1000;
    };
    AppConstantsService.prototype.getMusicSheetRowHeight = function () {
        return 100;
    };
    AppConstantsService.prototype.getCanvasDrawerSpeed = function () {
        return 100; // in ms
    };
    AppConstantsService.prototype.getMeasuresPerRow = function () {
        return 4;
    };
    //////////////////// Notes constants
    AppConstantsService.prototype.getWholeNoteSpriteIndex = function () {
        return 4;
    };
    AppConstantsService.prototype.getHalfNoteSpriteIndex = function () {
        return 3;
    };
    AppConstantsService.prototype.getQuarterNoteSpriteIndex = function () {
        return 2;
    };
    AppConstantsService.prototype.getEighthNoteSpriteIndex = function () {
        return 1;
    };
    AppConstantsService.prototype.getSixteenthNoteSpriteIndex = function () {
        return 0;
    };
    AppConstantsService.prototype.getNoteSpriteNumber = function () {
        return 5;
    };
    // notes offsets
    AppConstantsService.prototype.getWholeNoteOffsetX = function () {
        return 8;
    };
    AppConstantsService.prototype.getWholeNoteOffsetY = function () {
        return 5;
    };
    AppConstantsService.prototype.getHalfNoteOffsetX = function () {
        return 8;
    };
    AppConstantsService.prototype.getHalfNoteOffsetY = function () {
        return 37;
    };
    AppConstantsService.prototype.getQuarterNoteOffsetX = function () {
        return 8;
    };
    AppConstantsService.prototype.getQuarterNoteOffsetY = function () {
        return 12;
    };
    AppConstantsService.prototype.getEighthNoteOffsetX = function () {
        return 14;
    };
    AppConstantsService.prototype.getEighthNoteOffsetY = function () {
        return 40;
    };
    AppConstantsService.prototype.getSixteenthNoteOffsetX = function () {
        return 14;
    };
    AppConstantsService.prototype.getSixteenthNoteOffsetY = function () {
        return 38;
    };
    AppConstantsService.prototype.getDrawerSpeed = function () {
        return 100;
    };
    AppConstantsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], AppConstantsService);
    return AppConstantsService;
}());
exports.AppConstantsService = AppConstantsService;
//# sourceMappingURL=AppConstants.service.js.map
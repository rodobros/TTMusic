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
var ApplicationImageSpriteService = (function () {
    function ApplicationImageSpriteService() {
        this.wholeNoteSrc_ = './images/miniWhole.png';
        this.halfNoteSrc_ = './images/miniHalf.png';
        this.quarterNoteSrc_ = './images/miniQuarter.png';
        this.eighthNoteSrc_ = './images/miniEighth.png';
        this.sixteenthNoteSrc_ = './images/miniSixteenth.png';
        this.wholeNoteImage_ = new Image();
        this.wholeNoteImage_.src = this.wholeNoteSrc_;
        this.halfNoteImage_ = new Image();
        this.halfNoteImage_.src = this.halfNoteSrc_;
        this.quarterNoteImage_ = new Image();
        this.quarterNoteImage_.src = this.quarterNoteSrc_;
        this.eighthNoteImage_ = new Image();
        this.eighthNoteImage_.src = this.eighthNoteSrc_;
        this.sixteenthNoteImage_ = new Image();
        this.sixteenthNoteImage_.src = this.sixteenthNoteSrc_;
    }
    ApplicationImageSpriteService.prototype.getWholeNoteSprite = function () {
        return this.wholeNoteImage_;
    };
    ApplicationImageSpriteService.prototype.getHalfNoteSprite = function () {
        return this.halfNoteImage_;
    };
    ApplicationImageSpriteService.prototype.getQuarterNoteSprite = function () {
        return this.quarterNoteImage_;
    };
    ApplicationImageSpriteService.prototype.getEighthNoteSprite = function () {
        return this.eighthNoteImage_;
    };
    ApplicationImageSpriteService.prototype.getSixteenthNoteSprite = function () {
        return this.sixteenthNoteImage_;
    };
    ApplicationImageSpriteService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], ApplicationImageSpriteService);
    return ApplicationImageSpriteService;
}());
exports.ApplicationImageSpriteService = ApplicationImageSpriteService;
//# sourceMappingURL=ApplicationImageSprite.service.js.map
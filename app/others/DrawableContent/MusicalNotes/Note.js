"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var Note = (function (_super) {
    __extends(Note, _super);
    function Note(canvas, positionX, positionY, applicationImageSpriteService, appConstantsService) {
        _super.call(this, canvas);
        this.applicationImageSpriteService = applicationImageSpriteService;
        this.appConstantsService = appConstantsService;
        this.currentSpriteIndex = 0;
        this.positionX_ = 0;
        this.positionY_ = 0;
        this.offsetX_ = 0;
        this.offsetY_ = 0;
        this.wasAjusted = false;
        this.positionX_ = positionX;
        this.positionY_ = positionY;
        this.updateOffsets();
    }
    Note.prototype.draw = function () {
        if (this.isImageOk(this.getCurrentSprite())) {
            this.context = this.myCanvas.getContext("2d");
            this.context.drawImage(this.getCurrentSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
        }
    };
    ;
    Note.prototype.updateToNextPossibleNote = function () {
        if (this.currentSpriteIndex < this.appConstantsService.getNoteSpriteNumber() - 1) {
            this.currentSpriteIndex++;
            this.updateOffsets();
            this.currentNoteName = 5 - this.appConstantsService.getNoteSpriteNumber();
        }
    };
    Note.prototype.getCurrentSprite = function () {
        switch (this.currentSpriteIndex) {
            case this.appConstantsService.getWholeNoteSpriteIndex():
                return this.applicationImageSpriteService.getWholeNoteSprite();
            case this.appConstantsService.getHalfNoteSpriteIndex():
                return this.applicationImageSpriteService.getHalfNoteSprite();
            case this.appConstantsService.getQuarterNoteSpriteIndex():
                return this.applicationImageSpriteService.getQuarterNoteSprite();
            case this.appConstantsService.getEighthNoteSpriteIndex():
                return this.applicationImageSpriteService.getEighthNoteSprite();
            case this.appConstantsService.getSixteenthNoteSpriteIndex():
                return this.applicationImageSpriteService.getSixteenthNoteSprite();
        }
    };
    Note.prototype.changeSprite = function (index) {
        this.currentSpriteIndex = index;
        this.currentNoteName = 5 - index;
        this.updateOffsets();
    };
    Note.prototype.updateOffsets = function () {
        switch (this.currentSpriteIndex) {
            case this.appConstantsService.getWholeNoteSpriteIndex():
                this.offsetX_ = this.appConstantsService.getWholeNoteOffsetX();
                this.offsetY_ = this.appConstantsService.getWholeNoteOffsetY();
                break;
            case this.appConstantsService.getHalfNoteSpriteIndex():
                this.offsetX_ = this.appConstantsService.getHalfNoteOffsetX();
                this.offsetY_ = this.appConstantsService.getHalfNoteOffsetY();
                break;
            case this.appConstantsService.getQuarterNoteSpriteIndex():
                this.offsetX_ = this.appConstantsService.getQuarterNoteOffsetX();
                this.offsetY_ = this.appConstantsService.getQuarterNoteOffsetY();
                break;
            case this.appConstantsService.getEighthNoteSpriteIndex():
                this.offsetX_ = this.appConstantsService.getEighthNoteOffsetX();
                this.offsetY_ = this.appConstantsService.getEighthNoteOffsetY();
                break;
            case this.appConstantsService.getSixteenthNoteSpriteIndex():
                this.offsetX_ = this.appConstantsService.getSixteenthNoteOffsetX();
                this.offsetY_ = this.appConstantsService.getSixteenthNoteOffsetY();
                break;
        }
    };
    Note.prototype.getMeasureNumber = function () {
        return this.measureNumber_;
    };
    Note.prototype.setMeasureNumber = function (value) {
        this.measureNumber_ = value;
    };
    Note.prototype.getPosX = function () {
        return this.positionX_;
    };
    Note.prototype.setPosX = function (value) {
        this.positionX_ = value;
    };
    Note.prototype.getNoteName = function () {
        return this.currentNoteName;
    };
    return Note;
}(DrawableContent_1.DrawableContent));
exports.Note = Note;
//# sourceMappingURL=Note.js.map
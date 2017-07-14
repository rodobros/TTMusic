"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var SixteenthNote = (function (_super) {
    __extends(SixteenthNote, _super);
    function SixteenthNote(canvas, positionX, positionY, applicationImageSpriteService) {
        _super.call(this, canvas);
        this.applicationImageSpriteService = applicationImageSpriteService;
        this.positionX_ = 0;
        this.positionY_ = 0;
        this.offsetX_ = 14;
        this.offsetY_ = 50 - 12;
        this.positionX_ = positionX;
        this.positionY_ = positionY;
    }
    SixteenthNote.prototype.draw = function () {
        if (this.isImageOk(this.applicationImageSpriteService.getSixteenthNoteSprite())) {
            this.context = this.myCanvas.getContext("2d");
            this.context.drawImage(this.applicationImageSpriteService.getSixteenthNoteSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
        }
    };
    ;
    return SixteenthNote;
}(DrawableContent_1.DrawableContent));
exports.SixteenthNote = SixteenthNote;
//# sourceMappingURL=SixteenthNote.js.map
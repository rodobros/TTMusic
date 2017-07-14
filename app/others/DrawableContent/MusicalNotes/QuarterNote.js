"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var QuarterNote = (function (_super) {
    __extends(QuarterNote, _super);
    function QuarterNote(canvas, positionX, positionY, applicationImageSpriteService) {
        _super.call(this, canvas);
        this.applicationImageSpriteService = applicationImageSpriteService;
        this.positionX_ = 0;
        this.positionY_ = 0;
        this.offsetX_ = 8;
        this.offsetY_ = 24 - 12;
        this.positionX_ = positionX;
        this.positionY_ = positionY;
    }
    QuarterNote.prototype.draw = function () {
        if (this.isImageOk(this.applicationImageSpriteService.getQuarterNoteSprite())) {
            this.context = this.myCanvas.getContext("2d");
            this.context.drawImage(this.applicationImageSpriteService.getQuarterNoteSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
        }
    };
    ;
    return QuarterNote;
}(DrawableContent_1.DrawableContent));
exports.QuarterNote = QuarterNote;
//# sourceMappingURL=QuarterNote.js.map
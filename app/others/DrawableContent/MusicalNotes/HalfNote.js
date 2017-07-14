"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var HalfNote = (function (_super) {
    __extends(HalfNote, _super);
    function HalfNote(canvas, positionX, positionY, applicationImageSpriteService) {
        _super.call(this, canvas);
        this.applicationImageSpriteService = applicationImageSpriteService;
        this.positionX_ = 0;
        this.positionY_ = 0;
        this.offsetX_ = 8;
        this.offsetY_ = 47 - 10;
        this.positionX_ = positionX;
        this.positionY_ = positionY;
    }
    HalfNote.prototype.draw = function () {
        if (this.isImageOk(this.applicationImageSpriteService.getHalfNoteSprite())) {
            this.context = this.myCanvas.getContext("2d");
            this.context.drawImage(this.applicationImageSpriteService.getHalfNoteSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
        }
    };
    ;
    return HalfNote;
}(DrawableContent_1.DrawableContent));
exports.HalfNote = HalfNote;
//# sourceMappingURL=HalfNote.js.map
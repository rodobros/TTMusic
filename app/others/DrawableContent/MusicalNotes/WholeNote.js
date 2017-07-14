"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var WholeNote = (function (_super) {
    __extends(WholeNote, _super);
    function WholeNote(canvas, positionX, positionY, applicationImageSpriteService) {
        _super.call(this, canvas);
        this.applicationImageSpriteService = applicationImageSpriteService;
        this.positionX_ = 0;
        this.positionY_ = 0;
        this.offsetX_ = 8;
        this.offsetY_ = 5;
        this.positionX_ = positionX;
        this.positionY_ = positionY;
    }
    WholeNote.prototype.draw = function () {
        if (this.isImageOk(this.applicationImageSpriteService.getWholeNoteSprite())) {
            this.context = this.myCanvas.getContext("2d");
            this.context.drawImage(this.applicationImageSpriteService.getWholeNoteSprite(), this.positionX_ - this.offsetX_, this.positionY_ - this.offsetY_);
        }
    };
    ;
    return WholeNote;
}(DrawableContent_1.DrawableContent));
exports.WholeNote = WholeNote;
//# sourceMappingURL=WholeNote.js.map
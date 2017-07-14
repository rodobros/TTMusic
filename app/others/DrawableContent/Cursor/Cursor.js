"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var Cursor = (function (_super) {
    __extends(Cursor, _super);
    function Cursor(canvas) {
        _super.call(this, canvas);
        this.positionX_ = 0;
        this.cursorHeight_ = 100;
        this.cursorWidth_ = 6;
        this.speed_ = 0;
        this.myCanvas_ = canvas;
    }
    Cursor.prototype.draw = function () {
        var canvas = this.myCanvas;
        this.context = canvas.getContext("2d");
        this.context.beginPath();
        // draw the cursor
        this.context.moveTo(this.positionX_, 0);
        this.context.lineTo(this.positionX_, this.cursorHeight_);
        this.context.lineWidth = this.cursorWidth_;
        this.context.strokeStyle = this.LINE_DEFAULT_COLOR();
        this.context.stroke();
        this.incrementPosition();
    };
    Cursor.prototype.setSpeed = function (value) {
        this.speed_ = value;
    };
    Cursor.prototype.incrementPosition = function () {
        if (this.positionX_ >= 1000) {
            this.positionX_ = 0;
            return;
        }
        this.positionX_ = this.positionX_ + this.speed_;
    };
    Cursor.prototype.getPositionX = function () {
        return this.positionX_;
    };
    return Cursor;
}(DrawableContent_1.DrawableContent));
exports.Cursor = Cursor;
//# sourceMappingURL=Cursor.js.map
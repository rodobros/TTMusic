"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var Measure = (function (_super) {
    __extends(Measure, _super);
    function Measure(canvas, startX, endX, height, measureNumberInRow) {
        _super.call(this, canvas);
        this.measureNumberInRow = measureNumberInRow;
        this.startX_ = startX;
        this.endX_ = endX;
        this.height_ = height;
        this.notes_ = new Array();
    }
    Measure.prototype.draw = function () {
        this.drawMeasureLines();
        for (var _i = 0, _a = this.notes_; _i < _a.length; _i++) {
            var n = _a[_i];
            n.draw();
        }
    };
    Measure.prototype.drawMeasureLines = function () {
        var canvas = this.myCanvas;
        this.context = canvas.getContext("2d");
        this.context.beginPath();
        this.context.moveTo(this.startX_, this.height_ * 0.25);
        this.context.lineTo(this.endX_, this.height_ * 0.25);
        this.context.moveTo(this.startX_, this.height_ * 0.5);
        this.context.lineTo(this.endX_, this.height_ * 0.5);
        this.context.moveTo(this.startX_, this.height_ * 0.75);
        this.context.lineTo(this.endX_, this.height_ * 0.75);
        this.context.lineWidth = this.LINE_WIDTH();
        this.context.strokeStyle = this.LINE_DEFAULT_COLOR();
        this.context.stroke();
    };
    Measure.prototype.addNote = function (note) {
        note.setMeasureNumber(this.measureNumberInRow);
        this.notes_.push(note);
    };
    Measure.prototype.removeNote = function (Id) {
        for (var i = 0; i < this.notes_.length; ++i) {
            if (this.notes_[i].ID == Id) {
                this.notes_.splice(i, 1);
                return;
            }
        }
    };
    Measure.prototype.getNotes = function () {
        return this.notes_;
    };
    Measure.prototype.getStartX = function () {
        return this.startX_;
    };
    Measure.prototype.getLength = function () {
        return this.endX_ - this.startX_;
    };
    Measure.prototype.getEndX = function () {
        return this.endX_;
    };
    return Measure;
}(DrawableContent_1.DrawableContent));
exports.Measure = Measure;
//# sourceMappingURL=Measure.js.map
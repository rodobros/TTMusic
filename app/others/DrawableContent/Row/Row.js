"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var Measure_1 = require('../Measure/Measure');
var Row = (function (_super) {
    __extends(Row, _super);
    function Row(canvas) {
        _super.call(this, canvas);
        var widthPerMeasure = Row.ROW_WIDTH / 4;
        this.Measures_ = new Array();
        for (var i = 0; i < Row.MEASURE_COUNT; ++i) {
            this.Measures_[i] = new Measure_1.Measure(canvas, widthPerMeasure * i, widthPerMeasure * (i + 1), Row.ROW_HEIGHT, i);
        }
    }
    Row.prototype.draw = function () {
        this.drawOutline();
        this.drawMesuresSeparator();
        for (var i = this.Measures_.length - 1; i >= 0; i--) {
            this.Measures_[i].draw();
        }
    };
    Row.prototype.drawOutline = function () {
        var canvas = this.myCanvas;
        this.context = canvas.getContext("2d");
        this.context.beginPath();
        // outline of the row
        this.context.moveTo(0, 0);
        this.context.lineTo(Row.ROW_WIDTH, 0);
        this.context.lineTo(Row.ROW_WIDTH, Row.ROW_HEIGHT);
        this.context.lineTo(0, Row.ROW_HEIGHT);
        this.context.lineTo(0, 0);
        this.context.lineWidth = this.LINE_WIDTH();
        this.context.strokeStyle = this.LINE_DEFAULT_COLOR();
        this.context.stroke();
    };
    Row.prototype.drawMesuresSeparator = function () {
        var canvas = this.myCanvas;
        this.context = canvas.getContext("2d");
        this.context.beginPath();
        var widthPerMeasure = Row.ROW_WIDTH / 4;
        this.context.moveTo(widthPerMeasure, 0);
        this.context.lineTo(widthPerMeasure, Row.ROW_HEIGHT);
        this.context.moveTo(widthPerMeasure * 2, 0);
        this.context.lineTo(widthPerMeasure * 2, Row.ROW_HEIGHT);
        this.context.moveTo(widthPerMeasure * 3, 0);
        this.context.lineTo(widthPerMeasure * 3, Row.ROW_HEIGHT);
        this.context.lineWidth = this.LINE_WIDTH();
        this.context.strokeStyle = this.LINE_DEFAULT_COLOR();
        this.context.stroke();
    };
    Row.prototype.getMeasure = function (index) {
        return this.Measures_[index];
    };
    Row.prototype.getAllMeasures = function () {
        return this.Measures_;
    };
    Row.ROW_WIDTH = 1000;
    Row.ROW_HEIGHT = 100;
    Row.MEASURE_COUNT = 4;
    return Row;
}(DrawableContent_1.DrawableContent));
exports.Row = Row;
//# sourceMappingURL=Row.js.map
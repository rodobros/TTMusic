"use strict";
var MusicSheetDrawer = (function () {
    function MusicSheetDrawer(canvas, speed) {
        this.myCanvas_ = canvas;
        this.elementsToDraw_ = new Array();
        this.speed_ = speed;
    }
    MusicSheetDrawer.prototype.clearCanvas = function () {
        var canvas = this.myCanvas_;
        this.context_ = canvas.getContext("2d");
        this.context_.clearRect(0, 0, canvas.width, canvas.height);
    };
    MusicSheetDrawer.prototype.addElementToDraw = function (element) {
        this.elementsToDraw_.push(element);
    };
    MusicSheetDrawer.prototype.clearElementsToDraw = function () {
        this.elementsToDraw_ = [];
    };
    MusicSheetDrawer.prototype.deleteElement = function (id) {
        for (var i = 0; i < this.elementsToDraw_.length; ++i) {
            if (this.elementsToDraw_[i].ID == id) {
                this.elementsToDraw_.splice(i, 0);
            }
        }
    };
    MusicSheetDrawer.prototype.initDrawing = function () {
        var _this = this;
        this.drawerID_ = window.setInterval(function () { return _this.drawingFunction(); }, 100);
    };
    MusicSheetDrawer.prototype.endDrawing = function () {
        window.clearInterval(this.drawerID_);
    };
    MusicSheetDrawer.prototype.drawingFunction = function () {
        this.clearCanvas();
        for (var _i = 0, _a = this.elementsToDraw_; _i < _a.length; _i++) {
            var d = _a[_i];
            d.draw();
        }
    };
    return MusicSheetDrawer;
}());
exports.MusicSheetDrawer = MusicSheetDrawer;
//# sourceMappingURL=MusicSheetDrawer.js.map
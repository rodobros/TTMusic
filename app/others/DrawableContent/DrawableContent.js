"use strict";
var DrawableContent = (function () {
    function DrawableContent(canvas) {
        this.myCanvas = canvas;
        this.ID = DrawableContent.currentID;
        DrawableContent.currentID++;
    }
    DrawableContent.prototype.LINE_WIDTH = function () {
        return 2;
    };
    DrawableContent.prototype.LINE_DEFAULT_COLOR = function () {
        return "#000000";
    };
    DrawableContent.prototype.draw = function () {
    };
    DrawableContent.prototype.isImageOk = function (img) {
        // During the onload event, IE correctly identifies any images that
        // weren’t downloaded as not complete. Others should too. Gecko-based
        // browsers act like NS4 in that they report this incorrectly.
        if (!img.complete) {
            return false;
        }
        // However, they do have two very useful properties: naturalWidth and
        // naturalHeight. These give the true size of the image. If it failed
        // to load, either of these should be zero.
        if (typeof img.naturalWidth !== "undefined" && img.naturalWidth === 0) {
            return false;
        }
        // No other way of checking: assume it’s ok.
        return true;
    };
    ;
    DrawableContent.currentID = 0;
    return DrawableContent;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DrawableContent;
exports.DrawableContent = DrawableContent;
//# sourceMappingURL=DrawableContent.js.map
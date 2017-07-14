"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var DrawableContent_1 = require('../DrawableContent');
var Row_1 = require('../Row/Row');
var Partition = (function (_super) {
    __extends(Partition, _super);
    function Partition(canvas, appConstantsService, applicationImageSpriteService, musicSheetSettingsService) {
        _super.call(this, canvas);
        this.appConstantsService = appConstantsService;
        this.applicationImageSpriteService = applicationImageSpriteService;
        this.musicSheetSettingsService = musicSheetSettingsService;
        this.currentRowNumber_ = 0;
        this.singleNoteOffset = 50;
        this.rows = new Array();
    }
    Partition.prototype.draw = function () {
        /*
        if(this.rows[this.currentRowNumber]) {
            this.rows[this.currentRowNumber].draw();
        }
        */
        // should draw everything?
    };
    Partition.prototype.createRow = function () {
        this.rows[this.rows.length] = new Row_1.Row(this.myCanvas);
    };
    Partition.prototype.deleteLastRow = function () {
        this.rows[this.rows.length] = undefined;
    };
    Partition.prototype.addNote = function (cursorPositionX, note) {
        this.rows[this.currentRowNumber_].getMeasure(Math.floor(cursorPositionX / (Row_1.Row.ROW_WIDTH / Row_1.Row.MEASURE_COUNT))).addNote(note);
    };
    Partition.prototype.arrangeNotes = function () {
        for (var _i = 0, _a = this.rows[this.currentRowNumber_].getAllMeasures(); _i < _a.length; _i++) {
            var m = _a[_i];
            var measure = m;
            var notes = measure.getNotes();
            for (var _b = 0, notes_1 = notes; _b < notes_1.length; _b++) {
                var n = notes_1[_b];
                var castedNote = n;
                if (!castedNote.wasAjusted) {
                    var currentMeasure = this.rows[this.currentRowNumber_].getAllMeasures()[castedNote.getMeasureNumber()];
                    var numberOfPossibleNotesPerMeasure = (this.musicSheetSettingsService.getMaximumNumberSixteenthBeatPerMeasure() / this.musicSheetSettingsService.getNumberSixteenthBeatByNoteName(castedNote.getNoteName()));
                    if (numberOfPossibleNotesPerMeasure > 1) {
                        numberOfPossibleNotesPerMeasure++;
                        var drawableMeasureLength = currentMeasure.getLength();
                        var distancePerNote = drawableMeasureLength / numberOfPossibleNotesPerMeasure;
                        var position = Math.floor((castedNote.getPosX() - currentMeasure.getStartX()) / (currentMeasure.getLength() / numberOfPossibleNotesPerMeasure)) + 1;
                        if (position == numberOfPossibleNotesPerMeasure)
                            position--;
                        castedNote.setPosX(currentMeasure.getStartX() + position * distancePerNote);
                    }
                    else {
                        castedNote.setPosX(currentMeasure.getStartX() + this.singleNoteOffset);
                    }
                    castedNote.wasAjusted = true;
                }
            }
        }
    };
    Partition.prototype.setCurrentRowNumber = function (value) {
        this.currentRowNumber_ = value;
    };
    Partition.prototype.getRow = function (number) {
        return this.rows[number];
    };
    return Partition;
}(DrawableContent_1.DrawableContent));
exports.Partition = Partition;
//# sourceMappingURL=Partition.js.map
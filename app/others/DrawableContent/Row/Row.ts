import { DrawableContent } from '../DrawableContent'
import { Measure } from '../Measure/Measure'


export class Row extends DrawableContent {
	constructor(canvas : any) {
		super(canvas);
		let widthPerMeasure = Row.ROW_WIDTH / 4;
		this.Measures_ = new Array<DrawableContent>();
		for(var i = 0 ; i < Row.MEASURE_COUNT ; ++i) {
			this.Measures_[i] = new Measure(canvas, widthPerMeasure * i, widthPerMeasure * (i+1), Row.ROW_HEIGHT , i);
		}
	}

	draw() : void {
		this.drawOutline();
		this.drawMesuresSeparator();
		for (var i = this.Measures_.length - 1; i >= 0; i--) {
			this.Measures_[i].draw()
		}
	}

	private drawOutline() : void {
		let canvas = this.myCanvas
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
	}

	private drawMesuresSeparator() : void {
		let canvas = this.myCanvas;
 		this.context = canvas.getContext("2d");
 		this.context.beginPath();

		let widthPerMeasure = Row.ROW_WIDTH / 4;
		this.context.moveTo(widthPerMeasure, 0);
		this.context.lineTo(widthPerMeasure, Row.ROW_HEIGHT);

		this.context.moveTo(widthPerMeasure * 2, 0);
		this.context.lineTo(widthPerMeasure * 2, Row.ROW_HEIGHT);

		this.context.moveTo(widthPerMeasure * 3, 0);
		this.context.lineTo(widthPerMeasure * 3, Row.ROW_HEIGHT);

		this.context.lineWidth = this.LINE_WIDTH();
		this.context.strokeStyle = this.LINE_DEFAULT_COLOR();
		this.context.stroke();
	}

	public getMeasure(index) : Measure {
		return <Measure>this.Measures_[index];
	}

	public getAllMeasures() : Array<DrawableContent> {
		return this.Measures_;
	}

	private Measures_ : Array<DrawableContent>;
	static ROW_WIDTH = 1000;
	static ROW_HEIGHT = 100;
	static MEASURE_COUNT = 4;
}
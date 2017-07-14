export default class DrawableContent {
	myCanvas : any;
  	context:CanvasRenderingContext2D;

  	protected LINE_WIDTH() : number {
  		return 2;
  	}

  	protected LINE_DEFAULT_COLOR() : string {
  		return "#000000";
  	}

    static currentID = 0;

    public ID;

	constructor(canvas) {
		this.myCanvas = canvas;
    this.ID = DrawableContent.currentID;
    DrawableContent.currentID++;
	}

	draw() : void {

	}

  protected isImageOk(img : HTMLImageElement) : boolean {
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
}

export { DrawableContent };
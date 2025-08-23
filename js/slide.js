export default class Slide {
  constructor(slide, container) {
    this.slide = document.querySelector(slide);
    this.container = document.querySelector(container);
  }

  bindEv() {
    this.onStart = this.onStart.bind(this);
    this.onMove = this.onMove.bind(this);
    this.onEnd = this.onEnd.bind(this);
  }

  onStart(event) {
    this.container.addEventListener("mousemove", this.onMove);
  }

  onMove(event) {}

  onEnd(event) {
    this.container.removeEventListener("mousemove", this.onMove);
  }

  addSlideEv() {
    this.container.addEventListener("mousedown", this.onStart);
    this.container.addEventListener("mouseup", this.onEnd);
  }

  init() {
    this.bindEv();
    this.addSlideEv();
    return this;
  }
}

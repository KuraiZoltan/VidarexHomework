import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  @ViewChild('lensImage') lensImage!: ElementRef<HTMLImageElement>;

  magnification = 2;
  saturation = 100;

  lensLeft = 0;
  lensTop = 0;

  imageLeft = 0;
  imageTop = 0;

  onMouseMove(e: MouseEvent) {
    this.lensLeft = e.x;
    this.lensTop = e.y;
    const smallImage: HTMLImageElement = <HTMLImageElement> e.target
    var img: HTMLImageElement = this.lensImage.nativeElement;
    this.imageLeft = this.lensLeft / smallImage.clientWidth * img.naturalWidth;
    this.imageTop = this.lensTop / smallImage.clientHeight * img.naturalHeight;
    console.log(smallImage.clientWidth, smallImage.clientHeight)
    /*console.log(this.imageLeft, this.imageTop)*/
  }

  constructor() { }

  changeMagnification(event: any) {
    this.magnification = event.currentTarget.value
    console.log(this.magnification)
  }

  changeSaturation(event: any) {
    this.saturation = event.currentTarget.value
    console.log(this.saturation)
  }
}

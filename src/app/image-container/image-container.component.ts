import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  @ViewChild('photo') photo !: ElementRef<HTMLImageElement>;
  @ViewChild('container') container!: ElementRef<HTMLDivElement>;
  @ViewChild('lens') lens!: ElementRef<HTMLDivElement>;
  @ViewChild('lensPhoto') lensPhoto!: ElementRef<HTMLImageElement>;

  magnification = 2;
  saturation = 100;

  onMouseOver(e: MouseEvent) {
    this.lens.nativeElement.style.display = 'block';
  }

  onMouseOut(e: MouseEvent) {
    this.lens.nativeElement.style.display = 'none';
  }

  onMousemove(e: MouseEvent) {
    let lensBorderWidth = this.lens.nativeElement.offsetWidth - this.lens.nativeElement.clientWidth;
    let lensBorderHeight = this.lens.nativeElement.offsetHeight - this.lens.nativeElement.clientHeight;

    this.lens.nativeElement.style.left = e.x - this.lens.nativeElement.clientWidth - lensBorderWidth + 'px';
    this.lens.nativeElement.style.top = e.y - this.lens.nativeElement.clientHeight - lensBorderHeight + 'px';

    this.lensPhoto.nativeElement.style.width = this.photo.nativeElement.clientWidth * this.magnification + 'px'
    this.lensPhoto.nativeElement.style.height = this.photo.nativeElement.clientHeight * this.magnification + 'px'

    const widthRatio = this.lensPhoto.nativeElement.width / this.photo.nativeElement.clientWidth;
    const heightRatio = this.lensPhoto.nativeElement.height / this.photo.nativeElement.clientHeight;

    let realX = e.x * widthRatio - this.lens.nativeElement.clientWidth / 2;
    let realY = e.y * heightRatio - this.lens.nativeElement.clientHeight / 2;

    this.lensPhoto.nativeElement.style.translate = `-${realX}px -${realY}px`;
  }

  onWheelmove(event: any) {
    if (event.deltaY === -100) {
      if (this.magnification < 10) {
        this.magnification += 1;
      }
    } else {
      if (this.magnification > 1) {
        this.magnification -= 1;
      }
    }
  }

  changeMagnification(event: any) {
    this.magnification = event.currentTarget.value;
  }

  changeSaturation(event: any) {
    this.saturation = event.currentTarget.value;
  }

  
}

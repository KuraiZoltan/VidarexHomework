import { Component } from '@angular/core';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  magnification = 2;
  saturation = 100;

  myThumbnail = '../assets/18492-city-cityscape-metropolitan_area-capital_city-the_hague-7680x4320.jpg';
  myFullresImage = '../assets/18492-city-cityscape-metropolitan_area-capital_city-the_hague-7680x4320.jpg';
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

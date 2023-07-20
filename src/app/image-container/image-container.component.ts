import { Component } from '@angular/core';
import { NgxImgZoomService } from 'ngx-img-zoom';

@Component({
  selector: 'app-image-container',
  templateUrl: './image-container.component.html',
  styleUrls: ['./image-container.component.css']
})
export class ImageContainerComponent {
  myThumbnail = '../assets/18492-city-cityscape-metropolitan_area-capital_city-the_hague-7680x4320.jpg';
  myFullresImage = '../assets/18492-city-cityscape-metropolitan_area-capital_city-the_hague-7680x4320.jpg';
  constructor() { }

}

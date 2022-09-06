import { Component, OnInit } from '@angular/core';
import { GetImgService } from 'src/app/services/get-img.service' ;
import { Image } from 'src/app/models/placeholder.model';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.css']
})
export class ImageComponent implements OnInit {

  constructor(private service: GetImgService){  }

  imgs!: Image[];

  ngOnInit() {
    this.service.list().subscribe((imgs:any)=>{
      this.imgs = imgs.results;
    })
  }

 
}

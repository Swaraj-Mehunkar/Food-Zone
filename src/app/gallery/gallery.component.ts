import { Component, OnInit } from '@angular/core';
import { IGallery } from '../igallery';
import { GalleryService } from '../services/gallery.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {

  result: IGallery[] = [];

  constructor(private galleryservice:GalleryService) { }

  ngOnInit(): void {

    this.galleryservice.getData().subscribe((data: IGallery[]) => {
      console.log(data);
      this.result = data;
      // for cart use------------------------

      this.result.forEach((a: any) => {

        Object.assign(a, { quantity: 1, total: a.Price })
      });
    });
    
  }
}

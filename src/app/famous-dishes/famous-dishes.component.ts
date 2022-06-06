import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { IProduct } from '../iproduct';

@Component({
  selector: 'app-famous-dishes',
  templateUrl: './famous-dishes.component.html',
  styleUrls: ['./famous-dishes.component.css']
})
export class FamousDishesComponent implements OnInit {

  result:IProduct[]=[];

  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {

    this.api.getData().subscribe((data:IProduct[]) =>{
     console.log("in function", data);

     for(var i=0;i<data.length;i++){
       let item:IProduct={
         food_id:data[i].food_id,
         food_name:data[i].food_name,
         price:data[i].price,
         rating:data[i].rating,
         category:data[i].category,
         cook_time:data[i].cook_time,
         image_url:data[i].image_url
       };
       this.result.push(item);
       console.log(this.result);
     }
    });
  
  }
}

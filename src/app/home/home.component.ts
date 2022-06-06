import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  searchItem:string = '';
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if(params['searchItem'])
      this.searchItem= params['searchItem'];
    })
  }
  search(): void{
    if(this.searchItem)
    this.router.navigateByUrl('/search/' + this.searchItem)
  }

}

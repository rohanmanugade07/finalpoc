import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { UerListService } from 'src/app/services/uer-list.service';

@Component({
  selector: 'app-single-product-view',
  templateUrl: './single-product-view.component.html',
  styleUrls: ['./single-product-view.component.css'],
})
export class SingleProductViewComponent implements OnInit {
  currentRating = 1;
  faStar = faStar;
  productId:number = 0 
  userData: any;

  constructor(private uerDataService: UerListService, private route:ActivatedRoute) {
 
  }

  ngOnInit(): void {
    this.getParams()
    this.getProductDetailById()
  }

  getParams(){
    this.route.params.subscribe((params:Params)=>{
     this.productId = params['id']
    }) }

    getProductDetailById(){
      this.uerDataService.getSingleProductDetails(this.productId).subscribe((data: any) => {
        this.userData = data;
        console.log(data);
      });
    }
  createFn(num: number) {
    let arr = [];
    for (let i = 1; i <= 5; i++) {
      if (1 > num && 0 < num) {
        arr.push(0.5);
        num -= num;
      } else if (num < 1) {
        arr.push(0);
        num -= 0;
      } else {
        arr.push(1);
        num -= 1;
      }
    }
    return arr;
  }
}

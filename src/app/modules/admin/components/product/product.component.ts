import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { UerListService } from 'src/app/services/uer-list.service';
// import { FilterPipe } from 'src/app/shared/filter.pipe';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {

  
  public filterCategory : any
  searchKey:string ="";
  searchValue! : string;
  currentRating = 1;
  faStar = faStar;
  pageSize: number = 4;
  productList: any = [];
  collection = [];
  page: number = 1;
  totalLength: any;

  constructor(private uerListService: UerListService, private cartservice: CartService ) {
    this.uerListService.getProductList().subscribe((data) => {
      this.productList = data;
      this.filterCategory = data;
      this.productList.forEach((a:any) =>{

        if(a.category ==="women's clothing" || a.category ==="men's clothing"){
          a.category ="fashion"
        }

        Object.assign(a,{quantity:1, total:a.price})
      })
      this.totalLength = this.productList.length;

      console.log(data);

    });
    this.cartservice.search.subscribe((val:any)=>{
      this.searchKey = val;
    })
  }
addtoCart(item:any){
  this.cartservice.addtoCart(item);
}

filter(category:string){
  this.filterCategory = this.productList
  .filter((a:any)=>{
    if(a.category == category || category==''){
      return a;
    }
  })
}

  ngOnInit(): void {}
  // it will convert rating into an array

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

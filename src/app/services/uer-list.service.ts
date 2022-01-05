import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class UerListService {
  // setZoomBreakPoints(arg0: { w: number; h: number; }[]) {
  //   throw new Error('Method not implemented.');
  // }

  constructor(private http: HttpClient) { }
  
  getUserList(){
    let apiUrl = "https://jsonplaceholder.typicode.com/users";
    return this.http.get(apiUrl);
  }

  getUserDetails(userId:any){
    let userDetailsUrl = "https://reqres.in/api/users/"+userId;
    return this.http.get(userDetailsUrl);
  }

  getSingleProductDetails(productId: any){
    let singleProductDetailsUrl = "https://fakestoreapi.com/products/"+productId;
    return this.http.get(singleProductDetailsUrl);
  }

  getProductList(){
    let productListUrl = "https://fakestoreapi.com/products";
    return this.http.get(productListUrl);
  }

  addUser(url:any,body:any){
    let addUserUrl = "https://reqres.in/api";
    return this.http.post<any>(addUserUrl + url, body);
  }

}

import { CartService } from 'src/app/services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any=[];
  public grandTotal : number = 0;
  handler:any = null;

  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProducts()
    .subscribe(res=>{
      this.products =res;
      this.grandTotal = this.cartservice.getTotalPrice();
    })

    this.loadStripe();

  }

  removeItem(item: any){
    this.cartservice.removeCartItem(item)
  }

  emptycart(){
    this.cartservice.removeAllCart();
  }





  pay(amount: any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51K15WvSFC3UiCiUT7887blbUasqfLS1buVe5xWSbTMtc9dIoFXsEfgG90X6a6Is1xvinJZnBKp83sbvt8CsfD2c100PpiKORKb',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Token Created!!');
      }
    });
 
    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51K15WvSFC3UiCiUT7887blbUasqfLS1buVe5xWSbTMtc9dIoFXsEfgG90X6a6Is1xvinJZnBKp83sbvt8CsfD2c100PpiKORKb',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}





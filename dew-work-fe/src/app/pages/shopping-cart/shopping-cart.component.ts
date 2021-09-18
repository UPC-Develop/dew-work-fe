import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnDestroy{
  
  title = 'Shopping Cart';

  constructor() {
  
  }

  ngOnDestroy(): void {
  
  }

}
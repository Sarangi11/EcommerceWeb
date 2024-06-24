import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  
  isSidepanaleVisible:boolean = false;
  productobj:any={
    "productId":0,
    "productsku":"",
    "productName":"",
    "productPrice":0,
    "productShortName":"",
    "productDescription":"",
    "creationDate":new Date(),
    "deliveryTimeSpan":"",
    "category":0,
    "productImageUrl":""

  }

  openSidePanel(){
    this.isSidepanaleVisible = true;
  
  }
  closeSidePanel(){
    this.isSidepanaleVisible = false;
  }


}

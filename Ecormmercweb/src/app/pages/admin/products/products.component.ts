import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ProductService } from '../../../services/product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
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

  constructor(private productsrv:ProductService){
    

  }

  openSidePanel(){
    this.isSidepanaleVisible = true;
  
  }
  closeSidePanel(){
    this.isSidepanaleVisible = false;
  }


}

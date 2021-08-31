import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})


export class ProductsComponent implements OnInit {
  
  constructor(private productsService: ProductsService) {}
  
  products: Array<{id:number, name:string}> = []

  ngOnInit() {
    this.products = this.productsService.getAll()
    console.log(this.products)
  }

  title = 'Produtos';
  isCollapsed = false;
}

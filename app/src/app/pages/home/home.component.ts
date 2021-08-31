import { Component, OnInit} from '@angular/core';
import { ProductsService } from '../../services/products.service';

import { BrowserModule } from '@angular/platform-browser'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {
  constructor(private productsService: ProductsService) {}
  products: Array<any>[] = []
  ngOnInit() {
    this.products = this.productsService.getAll()
    console.log(this.products)
  }

  title = 'Home';
  isCollapsed = false;
}

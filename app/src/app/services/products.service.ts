import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  getAll():any {
    return [
      {
        id: 1, 
        name: "Coca-cola"
      }
    ]
  }
}

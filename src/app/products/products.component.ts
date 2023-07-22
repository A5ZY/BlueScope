import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from '../services/user-details.service';
declare var bootstrap: any;
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  products: any;
  viewedProduct: any;
  constructor(private productS: UserDetailsService) { }

  ngOnInit(): void {
    this.products = this.productS.products;
    console.log(this.products);
  }
  viewProduct(product: any) {
    this.viewedProduct = product;
    const modal = new bootstrap.Modal('#viewProductModal');
    modal.show();
  }
  openMap(){
    const modal = new bootstrap.Modal('#viewMap');
    modal.show();
  }
}

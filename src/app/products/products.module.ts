import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule, Routes } from '@angular/router';
import { MapComponent } from '../map/map.component';



const routes: Routes = [{
  path: '',
  component: ProductsComponent
}]
@NgModule({
  declarations: [ProductsComponent, MapComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [MapComponent]

})
export class ProductsModule { }

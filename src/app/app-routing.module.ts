import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HeaderComponent } from './components/header/header.component';
import { ProductComponent } from './components/product/product.component';
import { ProductFooterComponent } from './components/product-footer/product-footer.component';
import { FooterComponent } from './components/footer/footer.component';

const routes: Routes = [
  {path: 'header', component : HeaderComponent},
  {path: 'product', component : ProductComponent},
  {path: 'product-footer', component :  ProductFooterComponent},
  {path: 'footer', component : FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

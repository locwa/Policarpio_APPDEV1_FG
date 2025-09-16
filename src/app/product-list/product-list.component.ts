import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'
import productData from '../../../products.json';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = productData
}

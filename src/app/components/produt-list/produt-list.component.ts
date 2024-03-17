import { Component, OnInit } from '@angular/core';
import { products } from 'src/app/Constants';
import { Product } from 'src/app/model/Product';

@Component({
  selector: 'product-list',
  templateUrl: './produt-list.component.html',
  styleUrls: ['./produt-list.component.scss'],
})
export class ProdutListComponent implements OnInit {
  public items: Product[];
  public ngOnInit() {
    this.items = products;
  }
}

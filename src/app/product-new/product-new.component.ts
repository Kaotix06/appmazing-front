import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../products.service';
import { Category } from '../Model/Category';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {
  categories: any = [];
  
  category: Category = new Category();
  name: string;
  stock: number;
  price: number;
  active: boolean = false;
  date_added: Date;


  constructor(private router: Router, private productsService: ProductsService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.loadCategories();
  }

  newProduct(){
    const product = {
      name: this.name,
      stock: this.stock,
      price: this.price,
      active: this.active,
      date_added: this.date_added,
      category: this.category
    }

    this.productsService.newProduct(product);
    this.navigateToHome();
  }

  loadCategories(){
    this.categoriesService.getCategories().subscribe((data: Category[]) => {
      this.categories = data;
    });
  }

  cancelInsert(){
    this.navigateToHome();
  }

  navigateToHome(){
    this.router.navigate(['/products']);
  }
}

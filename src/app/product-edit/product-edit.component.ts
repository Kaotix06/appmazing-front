import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../Model/Category';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  categories: any = [];
  category: Category = new Category();
  product: any;

  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router, private categoriesServices: CategoriesService) { }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data =>{
      this.product = data;
    })
    this.loadCategories();
  }

  loadCategories(){
    this.categoriesServices.getCategories().subscribe(data => {
      this.categories = data;
    });
  }

  updateProduct(){
    this.productService.updateProduct(this.product);
    this.navigateDetail();
  }

  cancelUpdate(){
    this.navigateDetail();
  }

  navigateDetail(){
    this.router.navigate(['/product', this.route.snapshot.params['id']]);
  }

}

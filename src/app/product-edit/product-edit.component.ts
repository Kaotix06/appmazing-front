import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesService } from '../categories.service';
import { Category } from '../Model/Category';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
  providers: [DatePipe]
})
export class ProductEditComponent implements OnInit {
  categories: any = [];
  category: Category = new Category();
  product: any;

  constructor(private productService: ProductsService, private route: ActivatedRoute, private router: Router, private categoriesServices: CategoriesService, private datePipe: DatePipe) { }

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe(data =>{
      this.product = data;
    let dateFormated = this.datePipe.transform(this.product.date_added, 'yyyy-MM-dd');
      this.product.date_added = dateFormated;
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

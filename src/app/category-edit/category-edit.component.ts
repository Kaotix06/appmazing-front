import { Component, OnInit } from '@angular/core';
import { Category } from '../Model/Category';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  categories: any = [];
  category: Category = new Category();

  constructor(private categoryService: CategoriesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.categoryService.getCategory(this.route.snapshot.params['id']).subscribe(data =>{
      this.category = data;
    })
  }

  updateCategory(){
    this.categoryService.updateCategory(this.category);
    this.navigateDetail();
  }

  cancelUpdate(){
    this.navigateDetail();
  }
  
  navigateDetail() {
    this.router.navigate(['/category', this.route.snapshot.params['id']]);
  }

}

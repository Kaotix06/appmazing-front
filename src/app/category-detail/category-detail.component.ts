import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CategoryDeleteComponent } from '../category-delete/category-delete.component';

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.css']
})
export class CategoryDetailComponent implements OnInit {
  category: any;

  constructor(private categoryService: CategoriesService, private route: ActivatedRoute, private router: Router, public dialog: MatDialog) { }

  ngOnInit() {
    this.categoryService.getCategory(this.route.snapshot.params['id']).subscribe(data =>{
      this.category = data;
    })
  }

  openDeleteDialog(categoryId: number): void{
    this.dialog.open(CategoryDeleteComponent, {data: {categoryId: categoryId}});
  }

  editCategory(){
    this.router.navigate(['/category/edit', this.route.snapshot.params['id']]);
  }

  closeCategory(){
    this.router.navigate(['/categories']);
  }

}

import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../categories.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { CategoryDeleteComponent } from '../category-delete/category-delete.component';

@Component({
  selector: 'app-category-home',
  templateUrl: './category-home.component.html',
  styleUrls: ['./category-home.component.css']
})
export class CategoryHomeComponent implements OnInit {
  categories: any = [];

  constructor(private categoriesService: CategoriesService, private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.categoriesService.getCategories().subscribe(data =>{
      this.categories = data;
    })
  }

  openDetailForm(row: any){
    this.router.navigate(['/category', row.id]);
  }

  editCategoryDetail(category: any){
    this.router.navigate(['/category/edit', category]);
  }

  openDeleteDialog(categoryId: number): void{
    this.dialog.open(CategoryDeleteComponent, {data: {categoryId: categoryId}});
  }

  displayedColumns: string[] = ["id", "name", "actions"];

}

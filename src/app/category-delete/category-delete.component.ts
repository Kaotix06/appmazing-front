import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';
import { CategoriesService } from '../categories.service';

@Component({
  selector: 'app-category-delete',
  templateUrl: './category-delete.component.html',
  styleUrls: ['./category-delete.component.css']
})
export class CategoryDeleteComponent implements OnInit {
  categoryId: number;

  constructor(private categoryService: CategoriesService, public dialogRef: MatDialogRef<CategoryDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {categoryId: number}, private router: Router) {
      this.categoryId = data.categoryId;
    }

  ngOnInit() {
  }

  confirm(): void{
    this.categoryService.deleteCategory(this.categoryId);
    this.dialogRef.close();
    this.router.routeReuseStrategy.shouldReuseRoute = function(){
      return false;
    }
    this.router.onSameUrlNavigation = 'reload';
    this.router.navigate(['/categories'])
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<any> {
    const url = 'http://localhost:30030/categories/getAll';
    const headers = new HttpHeaders();
    return this.http.get<any>(url, {headers})
  }

  getCategory(c_id: number): Observable<any>{
    const url = 'http://localhost:30030/categories/get';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = JSON.stringify({id: c_id});
    return this.http.post(url, body, {headers});
  }

  newCategory(category: any): void{
    const url = 'http://localhost:30030/categories/add';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = category;
    this.http.post(url, body, {headers}).subscribe();
  }

  updateCategory(category: any): void{
    const url = 'http://localhost:30030/categories/update';
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const body = category;
    this.http.put(url, body, {headers}).subscribe();
  }

  deleteCategory(categoryId: number): void{
    const url = 'http://localhost:30030/categories/delete';
    const body = {id: categoryId};
    const options ={
      body: body,
      headers: new HttpHeaders()
    };
    this.http.delete(url, options).subscribe();
  }
}

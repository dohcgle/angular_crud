import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private htpp: HttpClient) { }

  postProduct(data: any) {
    return this.htpp.post<any>("http://localhost:3000/productList/", data)
  }

  getProduct(){
    return this.htpp.get<any>("http://localhost:3000/productList/")
  }

  putProduct(data: any, id: number){
    return this.htpp.put<any>("http://localhost:3000/productList/"+id, data)
  }

  deleteProduct(id: number){
    return this.htpp.delete<any>("http://localhost:3000/productList/"+id)
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itable } from '../interface/interface';

@Injectable({
  providedIn: 'root'
})
export class EmployerService {

  constructor(private _http: HttpClient) { }
  posturl = `${environment.baseurl}/users.json`;


  fetchproducts(): Observable<any> {
    return this._http.get(this.posturl)
      .pipe(
        map((res: any) => {
          let postarr: Array<string> = [];
          for (const key in res) {

            postarr.push({ ...res[key], id: key })
          }
          return postarr
        })
      );
  }



  ceratepost(post: Itable): Observable<any> {
    return this._http.post(this.posturl, post)
  }

  singlePostFetch(id: string): Observable<any> {
    let singleUrl = `${environment.baseurl}/users/${id}.json`
    return this._http.get(singleUrl)

  }

  updatePost(post:any,updatedId:any):Observable<any>{
    let updateurl= `${environment.baseurl}/users/${updatedId}.json`
    return this._http.patch(updateurl,post)
  }

  ondelete(deleteid:  string) :Observable<any>{
    let deleteurl=`${environment.baseurl}/users/${deleteid}.json`
    return this._http.delete(deleteurl)
    
    
  }
}

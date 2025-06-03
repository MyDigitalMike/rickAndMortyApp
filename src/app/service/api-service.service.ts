import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  nextUrl: string  | null = '';
  previusUrl: string  | null = '';
  private readonly baseUrl = 'https://rickandmortyapi.com/api/character';
  constructor(private http: HttpClient) { }
  getNextPage():Observable<any> {
    const url = this.nextUrl ? this.nextUrl : this.baseUrl;
    return this.http.get<any>(url).pipe(
      map(respose=>{
        this.nextUrl = respose.info.next;
        this.previusUrl = respose.info.prev;
        return {
          characters: respose.results,
          nextUrl: respose.info.next,
          previusUrl: respose.info.prev
        }
      }),
      catchError(error => {
        console.error('Error in getNextPage:', error);
        return throwError(() => new Error('Error fetching data'));
      })
    );
  }
  getPreviusPage():Observable<any> {
    const url = this.previusUrl ? this.previusUrl : this.baseUrl;
    return this.http.get<any>(url).pipe(
      map(respose=>{
        this.nextUrl = respose.info.next;
        this.previusUrl = respose.info.prev;
        return {
          characters: respose.results,
          nextUrl: respose.info.next,
          previusUrl: respose.info.prev
        }
      }),
      catchError(error => {
        console.error('Error in getPreviusPage:', error);
        return throwError(() => new Error('Error fetching data'));
      })
    );
  }
}

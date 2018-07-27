import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from '../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class JournalService {

 constructor(private http: Http) { }

 getList(): Observable<Response>{
   return this.http.get('http://localhost:3000/api/journal-entries').pipe(map((res) => res.json()))
   
 }
 getJournal(id){
    return this.http.get(`http://localhost:3000/api/journal-entries/${id}`).pipe(map((res) => res.json()))
  }

}
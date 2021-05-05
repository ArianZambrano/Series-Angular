import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Serie } from '../../models/serie/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  seriesURL: string = "https://series-bc20d-default-rtdb.firebaseio.com/series.json";

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.seriesURL).pipe(
      map(res => {
        return res
      })
    )
  }
}

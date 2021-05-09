import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Serie } from '../../models/serie/serie';

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  seriesURL: string = "https://series-bc20d-default-rtdb.firebaseio.com/series.json";
  serieURL: string = "https://series-bc20d-default-rtdb.firebaseio.com/series/";

  constructor(private http: HttpClient) { }

  getSeries(): Observable<Serie[]>{
    return this.http.get<Serie[]>(this.seriesURL).pipe(
      map(res => {
        return res
      })
    )
  }

  setSerie(serie: Serie | undefined): Observable<Serie>{
    let body = JSON.stringify(serie);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return this.http.post(this.seriesURL, body, {headers}).pipe(map(res => {
      console.log(res);
      return res;
    }))
  }

  updateSerie(serie: Serie, key$: string | null){
    let body = JSON.stringify(serie);
    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    let url = `${this.serieURL}/${key$}.json`;
    return this.http.put(url, body, {headers}).pipe(map(res => {
      console.log(res);
      return res;
    }));
  }
}

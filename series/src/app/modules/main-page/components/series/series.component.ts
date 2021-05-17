import { Component, OnInit } from '@angular/core';
import { Serie } from '../../../../models/serie/serie';
import { SeriesService } from '../../../../services/series-service/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public series: Serie[] = [];
  public serie?: Serie;
  loading: boolean = true;

  constructor(private _seriesService: SeriesService) {
    this._seriesService.getSeries().subscribe(data => {
      setTimeout(()=>{
        for (const key$ in data){
          this.serie = data[key$];
          this.serie.key$ = key$;
          this.series.push(this.serie); 
        }
        console.log(this.series);
        this.loading = false;
      }, 3000)
    }
    );
  } 

  deleteSerie(key$: string){
    this._seriesService.deleteSerie(key$).subscribe(data => {
      let index = this.series.findIndex(s => s.key$ == key$);
      this.series.splice(index, 1);
    },
    error => {
      console.log(error)
    })
  }

  ngOnInit(): void {    
  }
}

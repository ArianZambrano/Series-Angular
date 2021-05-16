import { Component, OnInit } from '@angular/core';
import { Serie } from '../../../../models/serie/serie';
import { SeriesService } from '../../../../services/series-service/series.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public series:Serie[] =[];
  public serie?: Serie;

  constructor(private _seriesService: SeriesService,
              private router: Router) {
    this._seriesService.getSeries().subscribe(data => {
      for (const key$ in data){
        this.serie = data[key$];
        this.serie.key$ = key$;
        this.series.push(this.serie); 
      }
      console.log(this.series)
    }
    );
  }

  ngOnInit(): void {

  }
}

import { Component, OnInit } from '@angular/core';
import { SeriesService } from '../../../../services/series-service/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public series:any =[];

  constructor(private _seriesService: SeriesService) {}

  ngOnInit(): void {
    this._seriesService.getSeries()
    .subscribe((data) => this.series =data);
  }

}

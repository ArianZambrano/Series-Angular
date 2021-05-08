import { Component, OnInit } from '@angular/core';
import { Serie } from '../../../../models/serie/serie';
import { SeriesService } from '../../../../services/series-service/series.service';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {
  public series:Serie[] =[];

  constructor(private _seriesService: SeriesService) {
    this._seriesService.getSeries().subscribe(data => this.series = data);
  }

  ngOnInit(): void {

  }

}

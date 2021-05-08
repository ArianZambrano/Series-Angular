import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '.././../services/series-service/series.service';
import { Serie } from 'src/app/models/serie/serie';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.scss']
})
export class EditSerieComponent implements OnInit {
  serie!: Serie
  name: string | null = ''

  constructor(private _activatedRoute: ActivatedRoute,
              private _seriesService: SeriesService) {}

  ngOnInit(): void {
    let series: any;
    this._activatedRoute.paramMap.subscribe(params => {
      this.name = params.get('name');
      this._seriesService.getSeries().subscribe(data => {
        series = data
        this.serie = series.find((s: any) => s.name == this.name)
      });
    })
  }
}

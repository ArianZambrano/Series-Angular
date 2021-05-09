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
              private _seriesService: SeriesService) {
    let series: any
    this._activatedRoute.params.subscribe(params => {
      this.name = params['name'];
      this._seriesService.getSeries().subscribe(data => {
        series = data
        this.serie = series.find((s: any) => s.name == this.name);
      })
    })
  }

  ngOnInit(): void {
  }

  update() {
    let series: any;
    this._seriesService.getSeries().subscribe(data => {
      series = data
      this.serie = series.find((s: any) => s.name == this.name);
      this._seriesService.updateSerie(this.serie, this.name).subscribe(data => console.log(data))
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SeriesService } from '.././../services/series-service/series.service';
import { Serie } from 'src/app/models/serie/serie';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-edit-serie',
  templateUrl: './edit-serie.component.html',
  styleUrls: ['./edit-serie.component.scss']
})
export class EditSerieComponent implements OnInit {
  serie!: Serie
  id!: string  

  constructor(private _activatedRoute: ActivatedRoute,
              private _seriesService: SeriesService,
              private router: Router,
              private _toastr: ToastrService) {
      this._activatedRoute.params.subscribe(parameters=>{
        this.id = parameters['id'];
      })
      this._seriesService.getSerieByKey(this.id).subscribe(data => this.serie = data)
  }

  ngOnInit(): void {
  }

  update() {
    this._seriesService.updateSerie(this.serie, this.id).subscribe(
      () => {
        this._toastr.success('Serie added correctly!')
        this.router.navigateByUrl('/series')
      },
      error => this._toastr.error('There was an error :( try it again')
    )
  }
}

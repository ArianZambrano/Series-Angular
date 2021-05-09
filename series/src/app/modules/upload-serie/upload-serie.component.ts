import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serie } from 'src/app/models/serie/serie';
import { SeriesService } from 'src/app/services/series-service/series.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-serie',
  templateUrl: './upload-serie.component.html',
  styleUrls: ['./upload-serie.component.scss']
})
export class UploadSerieComponent implements OnInit {
  serieForm: FormGroup;
  serie?: Serie;

  constructor(private _seriesService: SeriesService,
              private _toastr: ToastrService,
              private form: FormBuilder) {
      this.serieForm = this.form.group({
        name: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', Validators.required],
        author: ['', Validators.required]
      })
  }

  ngOnInit(): void {
  }

  create(){
    this.serie = this.serieForm.value;
    this._seriesService.setSerie(this.serie).subscribe(
      () => this._toastr.success('Serie added correctly!'),
      error => this._toastr.error('There was an error :( try it again')
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Serie } from 'src/app/models/serie/serie';
import { SeriesService } from 'src/app/services/series-service/series.service';
import { Router } from '@angular/router';
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
              private router: Router,
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
    if (!this.serieForm.valid){
      this._toastr.error('Complete all the fields');
    }
    else{
      this.serie = this.serieForm.value;
      this._seriesService.newSerie(this.serie).subscribe(
        (data) => {
          this._toastr.success('Serie added correctly!'); 
          console.log(data)
          this.router.navigateByUrl('/series')  
        },
        error => this._toastr.error('There was an error :( try it again')
      )
    }
    
  }

  invalid(attr: string){
    return this.serieForm.get(attr)?.invalid && this.serieForm.get(attr)?.touched;
  }
}

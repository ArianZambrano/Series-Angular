import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSerieComponent } from './upload-serie.component';

describe('UploadSerieComponent', () => {
  let component: UploadSerieComponent;
  let fixture: ComponentFixture<UploadSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UploadSerieComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

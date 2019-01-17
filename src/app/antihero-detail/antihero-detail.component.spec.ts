import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AntiheroDetailComponent } from './antihero-detail.component';

describe('AntiheroDetailComponent', () => {
  let component: AntiheroDetailComponent;
  let fixture: ComponentFixture<AntiheroDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AntiheroDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AntiheroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

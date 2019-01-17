import { Component, OnInit, Input } from '@angular/core';
import { Antihero } from '../antihero';


@Component({
  selector: 'app-antihero-detail',
  templateUrl: './antihero-detail.component.html',
  styleUrls: ['./antihero-detail.component.scss']
})
export class AntiheroDetailComponent implements OnInit {

  @Input() antihero: Antihero;

  constructor() { }

  ngOnInit() {
  }

}

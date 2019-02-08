import { Component, OnInit, Input } from '@angular/core';

import { Source } from '../source';

@Component({
  selector: 'app-source-detail',
  templateUrl: './source-detail.component.html',
  styleUrls: ['./source-detail.component.css']
})
export class SourceDetailComponent implements OnInit {

  @Input() source: Source;

  constructor() { }

  ngOnInit() {
  }

}

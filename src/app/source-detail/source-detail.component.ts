import { Component, OnInit, Input } from '@angular/core';

import { Source } from '../source';
import { SourceService } from '../source.service';

@Component({
  selector: 'app-source-detail',
  templateUrl: './source-detail.component.html',
  styleUrls: ['./source-detail.component.css']
})
export class SourceDetailComponent implements OnInit {

  @Input() source: Source;

  deleteSource() {
    this.sourceService.deleteSource(this.source);
    this.source = undefined;
  }

  constructor(private sourceService: SourceService) { }

  ngOnInit() {
  }

}

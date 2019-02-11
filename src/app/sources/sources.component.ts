import { Component, OnInit } from '@angular/core';

import { Source } from '../source';
import { SourceService } from '../source.service';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {
  sources: Source[];
  selectedSource: Source;

  getSources(): void {
    this.sourceService.getSources().subscribe(sources => this.sources = sources);
  }

  onSelect(source: Source) {
    this.selectedSource = source;
  }

  constructor(private sourceService: SourceService) { }

  ngOnInit() {
    this.getSources();
    if (this.sources[0]) {
      this.onSelect(this.sources[0]);
    }
  }
}

import { Injectable } from '@angular/core';
import { Observable, of} from 'rxjs';

import { Source } from './source';
import { SOURCES } from './mock-sources';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class SourceService {

  getSources(): Observable<Source[]> {
    this.messageService.add('SourceService: fetched sources');
    return of(SOURCES);
  }

  addSource(source: Source): void {
    this.messageService.add('SourceService: added source');
    SOURCES.push(source);
    source.id = SOURCES.length;
  }

  deleteSource(source: Source): void {
    this.messageService.add('SourceService: removed source');
    SOURCES.splice(source.id - 1, 1);
  }

  constructor(private messageService: MessageService) { }
}

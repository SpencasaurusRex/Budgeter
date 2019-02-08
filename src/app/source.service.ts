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

  constructor(private messageService: MessageService) { }
}

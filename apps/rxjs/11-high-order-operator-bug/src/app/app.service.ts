import { inject, Injectable } from '@angular/core';
import { forkJoin, map, Observable } from 'rxjs';
import { LocalDBService, TopicType } from './localDB.service';

@Injectable({ providedIn: 'root' })
export class AppService {
  private dbService = inject(LocalDBService);

  getAllInfo = this.dbService.infos;

  /* deleteOldTopics(type: TopicType): Observable<boolean> {
    const infoByType = this.dbService.searchByType(type);
    return infoByType.length > 0
      ? infoByType
          .map((t) => this.dbService.deleteOneTopic(t.id))
          .reduce((acc, curr) => merge(acc, curr), of(true))
      : of(true);
  } */

  deleteOldTopics(type: TopicType): Observable<boolean> {
    const infosByType = this.dbService.searchByType(type);
    let deleteObservables = infosByType.map((info) =>
      this.dbService.deleteOneTopic(info.id),
    );

    return forkJoin(deleteObservables).pipe(
      map((array) => array.every((res) => res === true)),
    );
  }
}

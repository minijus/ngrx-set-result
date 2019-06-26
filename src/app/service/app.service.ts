import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { find } from 'rxjs/operators';

import { AppState } from '../store/app.reducer';
import { selectAppReady } from '../store/app.selectors';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(private store: Store<AppState>) {}
  isReady() {
    return this.store
      .select(selectAppReady)
      .pipe(find(ready => !!ready))
      .toPromise();
  }
}

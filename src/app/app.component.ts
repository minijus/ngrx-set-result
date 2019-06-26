import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppService } from './service/app.service';
import { AppState } from './store/app.reducer';
import { setAppState } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  ready = false;
  constructor(private appService: AppService, private store: Store<AppState>) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.store.dispatch(setAppState({ ready: true }));
    }, 5000);

    this.appService.isReady().then(() => {
      this.ready = true;
    });
  }
}

import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { MemoizedSelector, Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';

import { AppService } from './app.service';
import { AppState } from '../store/app.reducer';
import { selectAppReady } from '../store/app.selectors';

describe('AppService', () => {
  let service: AppService;
  let store: MockStore<AppState>;
  let appReady: MemoizedSelector<AppState, boolean>;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [provideMockStore()] });

    store = TestBed.get(Store);
    appReady = store.overrideSelector(selectAppReady, false);

    service = TestBed.get(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#isReady', () => {
    it('should resolve once app state becomes ready', fakeAsync(() => {
      setTimeout(() => {
        appReady.setResult(true);
      }, 1000);

      const spy = jasmine.createSpy();
      service.isReady().then(spy);

      expect(spy).not.toHaveBeenCalled();

      tick(1001);

      expect(spy).toHaveBeenCalled();
    }));
  });
});

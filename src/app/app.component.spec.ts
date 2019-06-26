import { async, fakeAsync, TestBed, tick } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { AppComponent } from './app.component';
import { AppService } from './service/app.service';

describe('AppComponent', () => {
  const appService = {
    isReady: () => Promise.resolve()
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      providers: [provideMockStore(), { provide: AppService, useValue: appService }]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have not ready message after init`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const body = fixture.debugElement.nativeElement;
    expect(body.textContent).toContain('App not yet ready');
  });

  it(`should have ready message after 5 seconds`, fakeAsync(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();

    tick(5001);
    fixture.detectChanges();

    const body = fixture.debugElement.nativeElement;
    expect(body.textContent).toContain('App became ready');
  }));
});

import { Component, Inject, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { IdamAuthenticationService } from '@pa-util/angular2-idam';
import { GLOBALS, Global } from './idam/global';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<void> = new Subject<void>();

  constructor(
    public authService: IdamAuthenticationService,
    @Inject(GLOBALS) public g: Global //Recomended injection token this is how to inject it on your components and services   
    ) {}

  ngOnInit(): void {
    this.authService.TryLogin(); // This this step is required in order to login, if it is not included you will get an error saying the path login/token is not found

    this.authService.getUserStream() // We recommend retrieving the user from here and passing it down to an InjectionToken
      .takeUntil(this.ngUnsubscribe)
      .subscribe(u => this.g.user = u);
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
  }
}
import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { fromEvent, Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { AuthComponent } from '../components/elements/auth/auth.component';
import { select, Store } from '@ngrx/store';
import { UserState } from 'src/app/auth/store/reducers/user.reducer';
import { loadUser, login, logout, register } from 'src/app/auth/store/actions/user.actions';
import { selectMessage, selectUser } from 'src/app/auth/store/selectors/user.selectors';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { slideInAnimation } from '../animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-public-layout',
  templateUrl: './public-layout.component.html',
  styleUrls: ['./public-layout.component.scss'],
  animations: [
    trigger('logo_animation', [
      state('inactive', style({
        opacity: 0,
      })),
      state('active', style({
        opacity: 1,
      })),
      transition('inactive => active', animate('1500ms ease-in')),
      transition('active => inactive', animate('1500ms ease-out')),
    ]),
    slideInAnimation
  ]
})
export class PublicLayoutComponent implements OnInit {
  
  @ViewChild('logoScroll') div:any;

  logo$: Observable<any> = fromEvent(window, "scroll")
  .pipe( map(() => window.pageYOffset>this.div.nativeElement.offsetTop+screen.availHeight-window.outerHeight));

  user$!: Observable<any>;
  message$!: Observable<any>;
  
  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 850px)')
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );

    prepareRoute(outlet: RouterOutlet) {
      return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
    }

  onSwitchTheme({ checked }: any) {
    checked
      ? this.document.body.classList.add('alternate-theme')
      : this.document.body.classList.remove('alternate-theme');
  }

  scroll($el: HTMLElement) {
    $el.scrollIntoView({behavior: "smooth", block: "center", inline: "nearest"});
}



  AuthDialog( form: boolean){
    const ref = this.dialog.open( AuthComponent, { 
      panelClass: 'my-dialog',
      closeOnNavigation: true,
      data: {
        switched: form
      }
    });

    const sub = ref.componentInstance.RegisterOrLogin.subscribe(( success: any) => {
      success.switched ?
      this.store.dispatch(login({data: success.data}))
      : this.store.dispatch(register({data: success.data}))
      this.user$.subscribe(data => {
        if(data[0]!==null)
        ref.close();
      });
      

    });
    ref.afterClosed().subscribe(() => {
      sub.unsubscribe();
    });
  }


  logout() {
    this.store.dispatch(logout());
    this.message$ = this.store.pipe(select(selectMessage));
    this.message$.subscribe(data => console.log(data));
  }

  constructor(
    private store: Store<UserState>,
    private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document,
    public dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.loadUser();
  }


  loadUser(): void {
    this.store.dispatch(loadUser());
    this.user$ = this.store.pipe(select(selectUser));
  }
}

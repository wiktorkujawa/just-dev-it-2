import { BreakpointObserver } from '@angular/cdk/layout';
import { DOCUMENT } from '@angular/common';
import { Component, DoCheck, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, DoCheck {


  theme: number = 1;
  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe('(max-width: 850px)')
    .pipe(
      map((result) => result.matches),
      shareReplay()
    );
  constructor(private breakpointObserver: BreakpointObserver,
    @Inject(DOCUMENT) private document: Document) { }
  ngDoCheck(): void {
    this.theme = this.document.body.classList.length;
  }
  

  ngOnInit(): void {
    
  }

}

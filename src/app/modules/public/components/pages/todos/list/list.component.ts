import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  @ViewChildren('child') child:any;

  cols! : number;
  margin!: string;
  gutter!: string;

  Breakpoint = {
    grid:{
      xl: 5,
      lg: 4,
      md: 3,
      sm: 2,
      xs: 1
    },
    margin:{
      xl: "2rem",
      lg: "1.7rem",
      md: "1.4rem",
      sm: "1.1rem",
      xs: "0.8rem"
    },
    gutter:{
      xl: "50px",
      lg: "40px",
      md: "30px",
      sm: "20px",
      xs: "10px"
    }
  };


  todos =[
    {
      id: 1,
      name: 'John'
    },
    {
      id: 2,
      name: 'Ted'
    },
    {
      id: 3,
      name: 'Mat'
    },
    {
      id: 4,
      name: 'Alex'
    },
  ]

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.cols = this.Breakpoint.grid.xs;
          this.margin = this.Breakpoint.margin.xs;
          this.gutter = this.Breakpoint.gutter.xs;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.cols = this.Breakpoint.grid.sm;
          this.margin = this.Breakpoint.margin.sm;
          this.gutter = this.Breakpoint.gutter.sm;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.cols = this.Breakpoint.grid.md;
          this.margin = this.Breakpoint.margin.md;
          this.gutter = this.Breakpoint.gutter.md;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.cols = this.Breakpoint.grid.lg;
          this.margin = this.Breakpoint.margin.lg;
          this.gutter = this.Breakpoint.gutter.lg;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.cols = this.Breakpoint.grid.xl;
          this.margin = this.Breakpoint.margin.xl;
          this.gutter = this.Breakpoint.gutter.xl;
        }
      }
    });
  }

  ngOnInit(): void {
  }

}

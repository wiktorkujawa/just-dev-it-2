import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ],{optional: true}),
      query(':enter', [
        style({ left: '-100%' })
      ]),
      query(':leave', animateChild(),{optional: true}),
      group([
        query(':leave', [
          animate('600ms ease-out', style({ left: '100%' }))
        ],{optional: true}),
        query(':enter', [
          animate('900ms ease-out', style({ left: '0%' }))
        ])
      ]),
      query(':enter', animateChild()),
    ])
  ]);
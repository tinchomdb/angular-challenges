import {
  computed,
  Directive,
  effect,
  ElementRef,
  inject,
  input,
  output,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  animationFrameScheduler,
  fromEvent,
  interval,
  merge,
  switchMap,
  takeUntil,
  takeWhile,
  tap,
} from 'rxjs';

@Directive({
  selector: '[holdable]',
})
export class HoldableDirective {
  holdable = input(1000);
  progressEmitter = output<number>();
  done = output<void>();
  holdTime = signal(0);
  progress = computed(() => {
    return this.holdTime() / this.holdable();
  });
  interval = signal(1);

  el = inject(ElementRef);

  hold$ = fromEvent(this.el.nativeElement, 'mousedown');
  release$ = merge(
    fromEvent(this.el.nativeElement, 'mouseup'),
    fromEvent(this.el.nativeElement, 'mouseleave'),
  );

  constructor() {
    this.hold$
      .pipe(
        switchMap(() => {
          const startTime = performance.now();
          return interval(10, animationFrameScheduler).pipe(
            tap(() => {
              this.holdTime.update(() => {
                const elapsedTime = performance.now() - startTime;
                return elapsedTime;
              });
              if (this.holdTime() >= this.holdable()) {
                this.done.emit();
              }
            }),
            takeWhile(() => this.holdTime() < this.holdable()),
            takeUntil(this.release$),
          );
        }),
        takeUntilDestroyed(),
      )
      .subscribe();

    this.release$
      .pipe(
        tap(() => {
          this.holdTime.set(0);
        }),
        takeUntilDestroyed(),
      )
      .subscribe();

    effect(() => {
      this.progressEmitter.emit(this.progress());
    });
  }
}

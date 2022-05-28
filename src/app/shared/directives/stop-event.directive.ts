import { Directive, Input, ElementRef, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[dwStopEvent]'
})
export class StopEventDirective implements OnChanges {

  @Input() dwStopEvent: any;

  constructor(private elementRef: ElementRef) {
    console.log('Se utilizo la directiva', this.elementRef.nativeElement);
    this.elementRef.nativeElement.addEventListener('click', (e:any) => {
      console.log('Hiciste click ', e);
      e.stopPropagation();
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    
  }

}

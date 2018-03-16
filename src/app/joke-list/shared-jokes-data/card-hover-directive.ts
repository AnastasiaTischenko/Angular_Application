import { Directive, HostListener, HostBinding, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[CardHover]'
})
export class CardHoverDirective {
  @Output() hover = new EventEmitter();
  ishovering: string;
  @HostBinding('class.card-outline-primary') private border: boolean;

  @HostListener('mouseover') onMouseOver() {
    this.border = true;
    this.ishovering = 'block';
    this.hover.emit(this.ishovering);
  }

  @HostListener('mouseout') onMouseOut() {
    this.border = false;
    this.ishovering = 'none';
    this.hover.emit(this.ishovering);
  }
}

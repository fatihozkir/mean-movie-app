import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() imageUrl: string | undefined;
  @Input() title: string | undefined;
  @Input() text: string | undefined;
  @Input() link: string | undefined;

  @Input() showButton: boolean = false;
  @Input() className: string = 'btn-primary';
  @Input() buttonText: string = 'button';

  @Output() onClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  btnOnClick(event:Event){
    this.onClick.emit(event);
  }
}

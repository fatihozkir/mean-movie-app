import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-material-card',
  templateUrl: './material-card.component.html',
  styleUrls: ['./material-card.component.scss'],
})
export class MaterialCardComponent implements OnInit {
  @Input() title: string = '';
  @Input() photo: string = '';
  @Input() subtitle: string = '';
  @Input() description: string = '';

  @Input() buttonPrimaryShow: boolean = false;
  @Input() buttonPrimaryTitle: string = '';

  @Input() buttonSecondaryShow: boolean = false;
  @Input() buttonSecondaryTitle: string = '';

  @Output() onPrimaryClick: EventEmitter<any> = new EventEmitter();
  @Output() onSecondaryClick: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onButtonPrimaryClick(event: Event) {
    this.onPrimaryClick.emit(event);
  }
  onButtonSecondaryClick(event: Event) {
    this.onSecondaryClick.emit(event);
  }
}

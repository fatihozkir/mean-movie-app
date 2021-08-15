import { Component, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-list-group',
  templateUrl: './list-group.component.html',
  styleUrls: ['./list-group.component.scss'],
})
export class ListGroupComponent implements OnInit {
  @Input() list: any[] = [];
  @Input() routePath: string | undefined;

  constructor() {}

  ngOnInit() {}
}

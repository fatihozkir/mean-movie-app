import { Component, OnInit } from '@angular/core';
import { CategoryListItem } from '../../../data/models/category/category-list-item.model';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css'],
})
export class MainLayoutComponent implements OnInit {
  constructor() {}
  generateRandom(): string {
    return Math.floor(Math.random() * (1000 - 1) + 1).toString();
  }
  categories: CategoryListItem[] = [
    {
      id: this.generateRandom(),
      title: 'test',
    },
    {
      id: this.generateRandom(),
      title: 'test12',
    },
  ];
  ngOnInit() {}
}

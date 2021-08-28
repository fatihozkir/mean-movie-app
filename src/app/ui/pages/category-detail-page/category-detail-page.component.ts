import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-category-detail-page',
  templateUrl: './category-detail-page.component.html',
  styleUrls: ['./category-detail-page.component.scss'],
})
export class CategoryDetailPageComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
   
  }
}

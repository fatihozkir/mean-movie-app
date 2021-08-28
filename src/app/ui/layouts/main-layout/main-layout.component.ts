import { CategoryService } from './../../../services/category/category.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { CategoryListItem } from '../../../data/models/category/category-list-item.model';
import { Subscription } from 'rxjs';
import { PageEvent } from '@angular/material/paginator';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss'],
})
export class MainLayoutComponent implements OnInit, OnDestroy {
  constructor(private categoryService: CategoryService) {}

  private categoriesSubscription: Subscription = new Subscription();
  isLoading: boolean = false;

  // totalAmount = 0;
  // currentPageIndex = 1;
  // postsPerPage = 8;
  // pageSizeOptions: number[] = [1, 2, 5, 10];
  categories: CategoryListItem[] = [];

  ngOnInit() {
    this.categoryService.getSidebarCategories();
    this.isLoading = true;
    this.categoriesSubscription = this.categoryService
      .getCategoryUpdateListener()
      .subscribe(
        (data: { categories: CategoryListItem[]; totalAmount: number }) => {
          this.isLoading = false;
          this.categories = data.categories;
        }
      );
  }
  ngOnDestroy() {
    this.categoriesSubscription.unsubscribe();
  }


}

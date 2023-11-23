import { Component, Input } from '@angular/core';
import { ReviewsModelResults } from '../../models/reviews.model';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
})
export class ReviewsComponent {
  @Input() review!: ReviewsModelResults;

  reviewOpened: boolean = false;

  constructor() {}
}

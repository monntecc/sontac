import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html'
})
export class ReviewsComponent implements OnInit {
  @Input() review!: any;

  reviewOpened: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from "../../models/movie.model";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {
  @Input() item!: MovieModel;
  @Input() container!: MovieModel[];

  formOpened: boolean = false;
  isOpened: boolean = false;

  movieTitle: string = '';
  movieRelease_date: string = '';
  movieOverview: string = '';
  movieVote_average: number = 0;
  movieImage_path: string | null = '';

  submitForm() {
    this.item.title = this.movieTitle;
    this.item.release_date = this.movieRelease_date;
    this.item.overview = this.movieOverview;
    this.item.vote_average = this.movieVote_average;
    this.item.poster_path = this.movieImage_path || this.item.poster_path;

    this.formOpened = false;
  }

  onEdit() {
    this.isOpened = false;
    this.formOpened = true;

    this.movieTitle = this.item.title;
    this.movieRelease_date = this.item.release_date;
    this.movieOverview = this.item.overview;
    this.movieVote_average= this.item.vote_average;
    this.movieImage_path = this.item.poster_path;
  }

  onDelete() {
    const index = this.container.indexOf(this.item);
    if(this.container.includes(this.item)) {
      this.container.splice(index, 1);
    }
  }

  constructor() { }

  ngOnInit(): void {
    this.item.poster_path = 'https://image.tmdb.org/3/p/t/w500/' + this.item.poster_path;
  }

}

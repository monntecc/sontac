import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/api/tmdb.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
})
export class TrendingComponent implements OnInit {
  container: MovieModel[] = [];
  page: number = 1;

  constructor(private service: TMDBService) {}

  ngOnInit(): void {
    this.initializeTrending('movie', 'week', this.container, this.page);
  }

  onEdit() {
    this.container = [];
    return this.initializeTrending('movie', 'week', this.container, this.page);
  }

  initializeTrending(
    type: string,
    timeWindow: string,
    container: MovieModel[],
    page: number,
  ) {
    this.service.getTrending(type, timeWindow, page).subscribe((moviesEl) => {
      moviesEl.results.forEach((moviesEl: MovieModel) => {
        container.push({
          overview: moviesEl.overview,
          poster_path:
            'https://image.tmdb.org/3/t/p/w500/' + moviesEl.poster_path,
          release_date: moviesEl.release_date,
          vote_average: moviesEl.vote_average,
          id: moviesEl.id,
          title: moviesEl.title,
          original_title: moviesEl.original_title,
          backdrop_path:
            'https://image.tmdb.org/3/t/p/w500/' + moviesEl.backdrop_path,
          original_language: moviesEl.original_language,
          popularity: moviesEl.popularity,
        });
      });
    });
  }
}

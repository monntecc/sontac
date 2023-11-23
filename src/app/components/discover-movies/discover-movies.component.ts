import { Component, OnInit } from '@angular/core';
import { TMDBService } from '../../services/api/tmdb.service';
import { MovieModel } from '../../models/movie.model';

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html',
})
export class DiscoverMoviesComponent implements OnInit {
  page: number = 1;
  discoverContainer: MovieModel[] = [];

  constructor(private http: TMDBService) {}

  ngOnInit(): void {
    this.initializeDiscoverMovies(this.page);
  }

  onPageChange() {
    this.discoverContainer = [];
    return this.initializeDiscoverMovies(this.page);
  }

  initializeDiscoverMovies(page: number) {
    this.http
      .getDiscover('movie', page, 'popularity.desc')
      .subscribe((discover): void => {
        discover.results.forEach((discoverEl: MovieModel): void => {
          this.discoverContainer.push({
            ...discoverEl,
            backdrop_path:
              'https://image.tmdb.org/3/t/p/w500/' + discoverEl.backdrop_path,
            poster_path:
              'https://image.tmdb.org/3/t/p/w500/' + discoverEl.poster_path,
          });
        });
      });
  }
}

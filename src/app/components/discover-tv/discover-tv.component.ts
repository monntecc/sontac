import { Component, OnInit } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { TMDBService } from '../../services/api/tmdb.service';

@Component({
  selector: 'app-discover-tv',
  templateUrl: './discover-tv.component.html',
})
export class DiscoverTvComponent implements OnInit {
  page: number = 1;
  discoverTVContainer: MovieModel[] = [];

  constructor(private http: TMDBService) {}

  ngOnInit(): void {
    this.initializeDiscoverTV(this.page);
  }

  onEdit() {
    this.discoverTVContainer = [];
    return this.initializeDiscoverTV(this.page);
  }

  initializeDiscoverTV(page: number) {
    this.http
      .getDiscover('tv', page, 'popularity.desc')
      .subscribe((discover) => {
        discover.results.forEach((discoverEl: MovieModel) => {
          this.discoverTVContainer.push({
            backdrop_path:
              'https://image.tmdb.org/3/t/p/w500/' + discoverEl.backdrop_path,
            original_language: discoverEl.original_language,
            original_title: discoverEl.original_title,
            popularity: discoverEl.popularity,
            poster_path:
              'https://image.tmdb.org/3/t/p/w500/' + discoverEl.poster_path,
            release_date: discoverEl.release_date,
            vote_average: discoverEl.vote_average,
            id: discoverEl.id,
            title: discoverEl.title,
            overview: discoverEl.title,
            name: discoverEl.name,
            origin_country: discoverEl.origin_country,
            first_air_date: discoverEl.first_air_date,
            vote_count: discoverEl.vote_count,
          });
        });
      });
  }
}

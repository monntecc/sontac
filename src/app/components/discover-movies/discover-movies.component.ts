import { Component, OnInit } from '@angular/core';
import {TMDBService} from "../../services/api/tmdb.service";
import {MovieModel} from "../../models/movie.model";
import {last} from "rxjs";

@Component({
  selector: 'app-discover-movies',
  templateUrl: './discover-movies.component.html'
})
export class DiscoverMoviesComponent implements OnInit {
  page: number = 1;
  discoverContainer: MovieModel[] = [];

  constructor(private http: TMDBService) { }

  ngOnInit(): void {
    this.initializeDiscoverMovies(this.page);
  }

  onEdit() {
    this.discoverContainer = [];
    return this.initializeDiscoverMovies(this.page);
  }

  initializeDiscoverMovies(page: number) {
    this.http.getDiscover('movie', page, 'popularity.desc').subscribe(discover => {
      discover.results.forEach((discoverEl: MovieModel) => {
        this.discoverContainer.push({
          backdrop_path: 'https://image.tmdb.org/3/t/p/w500/'+ discoverEl.backdrop_path,
          original_language: discoverEl.original_language,
          original_title: discoverEl.original_title,
          popularity: discoverEl.popularity,
          poster_path: 'https://image.tmdb.org/3/t/p/w500/' + discoverEl.poster_path,
          release_date: discoverEl.release_date,
          vote_average: discoverEl.vote_average,
          id: discoverEl.id,
          title: discoverEl.title,
          overview: discoverEl.title
        })
      })
    })
  }

}

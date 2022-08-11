import { Component, OnInit } from '@angular/core';
import {MovieModel} from "../../models/movie.model";
import {TMDBService} from "../../services/api/tmdb.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent implements OnInit {
  content: MovieModel[] = [];

  constructor(private service: TMDBService) { }

  ngOnInit(): void {
    this.initializePopular('movie', 1);
  }

  initializePopular(type: string, page: number) {
    this.service.getPopular(type, page).subscribe(popular => {
      popular.results.forEach((popular: MovieModel) => {
        this.content.push({
          overview: popular.overview,
          poster_path: 'https://image.tmdb.org/3/t/p/w500/' + popular.poster_path,
          release_date: popular.release_date,
          vote_average: popular.vote_average,
          id: popular.id,
          title: popular.title,
          original_title: popular.original_title,
          backdrop_path: 'https://image.tmdb.org/3/t/p/w500/' + popular.backdrop_path,
          original_language: popular.original_language,
          popularity: popular.popularity
        })
      })
    })
  }

}

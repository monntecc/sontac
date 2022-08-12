import {Component, OnDestroy, OnInit} from '@angular/core';
import {forkJoin, Subscription} from "rxjs";
import {DetailsModel} from "../../models/details.model";
import {TMDBService} from "../../services/api/tmdb.service";
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html'
})
export class FavoritePageComponent implements OnInit, OnDestroy {
  movieElement!: Subscription;
  favoriteMovies: Record<string, DetailsModel> = {};

  storageIds = localStorage['favoriteId'] || 0;

  constructor(private http: TMDBService, private storage: StorageService) { }

  ngOnInit(): void {
    this.initializeDetails();
  }

  ngOnDestroy(): void {
    this.movieElement.unsubscribe();
  }

  initializeDetails() {
    this.movieElement = this.storage.subscribeStorageValue<number[]>('favoriteId', []).subscribe(favorite => {
      const removedIds = Object.keys(this.favoriteMovies).map(Number).filter(e => !favorite.includes(e));
      for (const removedId of removedIds) delete this.favoriteMovies[removedId];
      const ids = favorite.filter(e => !(e in this.favoriteMovies));
      forkJoin(ids.map(e => this.http.getDetails('movie', e))).subscribe((movies: DetailsModel[]) => {
        for (let i = 0; i < movies.length; i++) this.favoriteMovies[ids[i]] = movies[i];
      });
    })
  }

}

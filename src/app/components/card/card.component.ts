import {Component, Input, OnInit} from '@angular/core';
import {MovieModel} from "../../models/movie.model";
import {StorageService} from "../../services/storage/storage.service";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styles: [`
    .saturate { filter: brightness(0) invert(1); }
    .normal { filter: none; }
  `]
})
export class CardComponent implements OnInit {
  @Input() item!: MovieModel;
  @Input() container!: MovieModel[];

  isFavorited: boolean = false;

  themeColor = localStorage['color-theme'];

  addToFavorite() {
    const ids = this.storage.getStorageValue<number[]>('favoriteId', []);
    if (ids.includes(this.item.id)) return;
    ids.push(this.item.id);
    this.storage.setStorageValue('favoriteId', ids);
    this.isFavorited = true;
  }

  constructor(private storage: StorageService) { }

  ngOnInit(): void {
    this.item.poster_path = 'https://image.tmdb.org/3/p/t/w500/' + this.item.poster_path;
    const ids = this.storage.getStorageValue<number[]>('favoriteId', []);
    if (ids.includes(this.item.id)) this.isFavorited = true;

    this.themeColor == null ? this.themeColor = "dark" : "light";
  }

}

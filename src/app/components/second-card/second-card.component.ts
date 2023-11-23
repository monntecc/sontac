import { Component, Input } from '@angular/core';
import { MovieModel } from '../../models/movie.model';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-second-card',
  templateUrl: './second-card.component.html',
})
export class SecondCardComponent {
  @Input() item!: MovieModel;

  successAlert: boolean = false;
  errorAlert: boolean = false;

  constructor(private storage: StorageService) {}

  addToFavorite() {
    const ids = this.storage.getStorageValue<number[]>('favoriteId', []);
    if (ids.includes(this.item.id)) {
      this.errorAlert = true;
      setTimeout(() => {
        this.errorAlert = false;
      }, 2000);
      return;
    }
    ids.push(this.item.id);
    this.storage.setStorageValue('favoriteId', ids);
    this.successAlert = true;
    setTimeout(() => {
      this.successAlert = false;
    }, 2000);
  }
}

import { Component, Input } from '@angular/core';
import { DetailsModel } from '../../models/details.model';
import { StorageService } from '../../services/storage/storage.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
})
export class FavoritesComponent {
  @Input() item!: DetailsModel;
  @Input() movieId!: number;

  constructor(private storage: StorageService) {}

  onRemove() {
    const ids = this.storage
      .getStorageValue<number[]>('favoriteId', [])
      .filter((e) => e != this.movieId);
    this.storage.setStorageValue('favoriteId', ids);
    window.location.reload();
  }
}

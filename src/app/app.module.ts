import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {SafePipe} from './pipes/safe.pipe';
import {TMDBService} from "./services/api/tmdb.service";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { CardComponent } from './components/card/card.component';
import { TrendingComponent } from './components/trending/trending.component';
import { PopularComponent } from './components/popular/popular.component';
import { DetailsComponent } from './components/details/details.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SecondCardComponent } from './components/second-card/second-card.component';
import { SliderComponent } from './components/slider/slider.component';
import {StorageService} from "./services/storage/storage.service";
import { FavoritesComponent } from './components/favorites/favorites.component';
import { FavoritePageComponent } from './components/favorite-page/favorite-page.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {TranslateHttpLoader} from "@ngx-translate/http-loader";
import { DiscoverTvComponent } from './components/discover-tv/discover-tv.component';
import { DiscoverMoviesComponent } from './components/discover-movies/discover-movies.component';
import {SwiperModule} from "swiper/angular";

@NgModule({
  declarations: [
    AppComponent,
    SafePipe,
    CardComponent,
    TrendingComponent,
    PopularComponent,
    DetailsComponent,
    MainPageComponent,
    HeaderComponent,
    FooterComponent,
    SecondCardComponent,
    SliderComponent,
    FavoritesComponent,
    FavoritePageComponent,
    ReviewsComponent,
    DiscoverTvComponent,
    DiscoverMoviesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      }
    })
  ],
  providers: [TMDBService, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}


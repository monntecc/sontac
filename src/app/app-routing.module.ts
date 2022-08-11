import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailsComponent} from "./components/details/details.component";
import {MainPageComponent} from "./components/main-page/main-page.component";
import {PopularComponent} from "./components/popular/popular.component";
import {TrendingComponent} from "./components/trending/trending.component";
import {FavoritePageComponent} from "./components/favorite-page/favorite-page.component";
import {DiscoverMoviesComponent} from "./components/discover-movies/discover-movies.component";
import {DiscoverTvComponent} from "./components/discover-tv/discover-tv.component";

const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'details/:id', component: DetailsComponent},
  {path: 'popular', component: PopularComponent},
  {path: 'trending', component: TrendingComponent},
  {path: 'favorite', component: FavoritePageComponent},
  {path: 'discover/movie', component: DiscoverMoviesComponent},
  {path: 'discover/tv', component: DiscoverTvComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

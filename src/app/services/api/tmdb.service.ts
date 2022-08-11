import {environment} from "../../../environments/environment.prod";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ReviewsModel} from "../../models/reviews.model";
import {CreditsModel} from "../../models/credits.model";
import {Injectable} from "@angular/core";
import {DetailsModel} from "../../models/details.model";
import {VideosModel} from "../../models/videos.model";
import {RecommendationsModel} from "../../models/recommendations.model";
import {MultiSearchModel} from "../../models/multi-search.model";

@Injectable()
export class TMDBService {
  private apiKey = environment.apiKey;
  language = localStorage['language'];

  constructor(private http: HttpClient) {
  }

  getTrending(type: string, timeWindow: string, page: number): Observable<any> {
    const request = `https://api.themoviedb.org/3/trending/${type}/${timeWindow}?api_key=${this.apiKey}&language=${this.language}&page=${page}`;
    return this.http.get(request);
  }

  getPopular(type: string, page: number): Observable<any> {
    const request = `https://api.themoviedb.org/3/${type}/popular?api_key=${this.apiKey}&language=${this.language}&page=${page}`;
    return this.http.get(request);
  }

  getVideos(type: string, id: number): Observable<VideosModel> {
    const request = `https://api.themoviedb.org/3/${type}/${id}/videos?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<VideosModel>(request);
  }

  getReviews(type: string, id: number, page: number): Observable<ReviewsModel> {
    const request = `https://api.themoviedb.org/3/${type}/${id}/reviews?api_key=${this.apiKey}&language=${this.language}&page=${page}`;
    return this.http.get<ReviewsModel>(request);
  }

  getCredits(type: string, id: number): Observable<CreditsModel> {
    const request = `https://api.themoviedb.org/3/${type}/${id}/credits?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<CreditsModel>(request);
  }

  getDetails(type: string, id: number): Observable<DetailsModel> {
    const request = `https://api.themoviedb.org/3/${type}/${id}?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<DetailsModel>(request);
  }

  getRecommendations(type: string, id: number): Observable<RecommendationsModel> {
    const request = `https://api.themoviedb.org/3/${type}/${id}/recommendations?api_key=${this.apiKey}&language=${this.language}`;
    return this.http.get<RecommendationsModel>(request);
  }

  getMultiSearch(query: string, page: number): Observable<MultiSearchModel> {
    const request = `https://api.themoviedb.org/3/search/multi?api_key=${this.apiKey}&language=${this.language}&query=${query}&page=${page}`;
    return this.http.get<MultiSearchModel>(request);
  }

  getDiscover(type: string, page: number, content: string): Observable<any> {
    const request = `https://api.themoviedb.org/3/discover/${type}?api_key=${this.apiKey}&language=${this.language}&sort_by=${content}&page=${page}`;
    return this.http.get(request);

  }

}

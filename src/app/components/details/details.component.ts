import {Component, Input, OnInit} from '@angular/core';
import {TMDBService} from "../../services/api/tmdb.service";
import {ActivatedRoute} from "@angular/router";
import {CreditsModel} from "../../models/credits.model";
import {VideosModel} from "../../models/videos.model";
import {DetailsModel} from "../../models/details.model";
import {ReviewsModel} from "../../models/reviews.model";
import {MovieModel} from "../../models/movie.model";
import {RecommendationsModel} from "../../models/recommendations.model";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html'
})
export class DetailsComponent implements OnInit {
  id!: number;
  page: number = 1;

  trailerOpened: boolean = false;

  creditElement!: CreditsModel;
  detailElement!: DetailsModel;
  videoElement!: VideosModel;
  reviewsElement!: ReviewsModel;
  recommendationElement!: RecommendationsModel;

  constructor(private route: ActivatedRoute, private http: TMDBService) { }

  ngOnInit(): void {
    this.id = +(this.route.snapshot.paramMap.get("id") ?? 0);
    this.initializeDetails();
    this.initializeReviews();
    this.initializeCredits();
    this.initializeVideos();
    this.initializeRecommendations();
  }

  onEdit() {
    return this.initializeReviews();
  }


  initializeDetails() {
    this.http.getDetails('movie', this.id).subscribe((details: DetailsModel) => {
      this.detailElement = details;
    })
  }

  initializeReviews() {
    this.http.getReviews('movie', this.id, this.page).subscribe((reviews: ReviewsModel) => {
      this.reviewsElement = reviews;
    });
  }

  initializeCredits() {
    this.http.getCredits('movie', this.id).subscribe((credits: CreditsModel) => {
      this.creditElement = credits;
      this.creditElement.cast.splice(14, 100000000000);
      this.creditElement.crew.splice(14, 100000000000);
    });
  }

  initializeVideos() {
    this.http.getVideos('movie', this.id).subscribe((videos: VideosModel) => {
      this.videoElement = videos;
    });
  }

  initializeRecommendations() {
    this.http.getRecommendations('movie', this.id).subscribe((recommendations: RecommendationsModel) => {
      this.recommendationElement = recommendations;
    })
  }

}

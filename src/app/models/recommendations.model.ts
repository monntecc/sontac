export interface RecommendationsModel {
  page: number;
  results: {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    id: number;
    title: string;
    backdrop_path: string | null;
    original_title: string;
    vote_average: number;
    original_language: string;
    popularity: number;
  }[];
  total_pages: number;
}

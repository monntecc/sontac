export interface MultiSearchModel {
  results: {
    poster_path: string | null;
    adult: boolean;
    overview: string;
    release_date: string;
    original_title: string;
    id: number;
    media_type: 'movie' | 'tv';
    original_language: string;
    title: string;
    backdrop_path: string | null;
    popularity: number;
    vote_count: number;
    vote_average: number;
    know_for?: {
      poster_path: string | null;
      adult: boolean;
      overview: string;
      release_date: string;
      original_title: string;
      id: number;
      media_type: 'movie' | 'tv';
      original_language: string;
      title: string;
      backdrop_path: string | null;
      popularity: number;
      vote_count: number;
      vote_average: number;
    };
  }[];
}

export interface DetailsModel {
  adult: boolean,
  backdrop_path: string | null,
  budget: number,
  genres: {
    id: number,
    name: string
  }[],
  homepage: string | null,
  id: number,
  imdb_id: string | null,
  original_language: string,
  original_title: string,
  overview: string | null,
  popularity: number,
  poster_path: string | null,
  production_companies: {
    name: string,
    id: number,
    logo_path: string | null,
    origin_country: string
  }[],
  production_countries: {
    name: string
  }[],
  release_date: string | Date,
  revenue: number,
  runtime: number | null,
  spoken_languages: {
    name: string
  }[],
  status: string | 'Rumored' | 'Planned' | 'In Production' | 'Post Production' | 'Released' | 'Canceled',
  tagline: string | null,
  title: string,
  video: boolean,
  vote_average: number,
  vote_count: number
}

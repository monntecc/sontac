export interface MovieModel {
  poster_path: string | null,
  overview: string,
  release_date: string,
  id: number,
  title: string,
  backdrop_path: string | null,
  original_title: string,
  vote_average: number,
  original_language: string,
  popularity: number,
  name?: string,
  vote_count?: number,
  origin_country?: string,
  first_air_date?: string
}

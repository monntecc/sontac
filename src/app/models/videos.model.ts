export interface VideosModel {
  id: number,
  results: {
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
  }[]
}

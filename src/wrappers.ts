export type PagedList<T> = {
  items: T[]
  total: number
  totalPages: number
  page: number
}

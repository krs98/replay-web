export type Cursor = string

export type CursorPage<T> = {
  page: T[]
  next_cursor: Cursor
}

export type SearchParams = { [key: string]: string | string[] | undefined }

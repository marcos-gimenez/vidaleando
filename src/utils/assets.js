export const UPLOADS_BASE = '/assets/uploads/'

export const asset = (path) => `${UPLOADS_BASE}${path}`

export const range = (start, end, mapper) =>
  Array.from({ length: end - start + 1 }, (_, index) => mapper(start + index))

export interface Post {
  id: string,
  subject: string,
  content: string,
  path: string
}

export type addPostModel = Omit<Post, "id">

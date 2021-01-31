export interface Bookmark {
  _id: string;
  post: string;
  user: string;
  archived: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

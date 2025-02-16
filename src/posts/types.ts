export interface PostData {
  id: number;
  text: string;
  image: string;
  publicationDate: Date;
}

export interface CommentData {
  id: number;
  userID: number;
  postID: number;
  text: string;
  publicationTime: Date;
}
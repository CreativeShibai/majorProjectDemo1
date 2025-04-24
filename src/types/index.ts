export interface User {
  id: string;
  name: string;
  username: string;
  avatar: string;
  location?: string;
  bio?: string;
  verified?: boolean;
  followers: number;
  following: number;
  tweets: number;
}

export interface Tweet {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  retweets: number;
  replies: number;
  views: number;
  media?: string[];
  isLiked?: boolean;
  isRetweeted?: boolean;
}

export interface TweetFormData {
  content: string;
  media?: File[];
}
export interface InitialState {
  images: UnsplashImages[];
  searchTerm: string;
}

export interface UnsplashImages {
  id: string;
  description: string;
  url: string;
  likes: number;
  userId: string;
  username: string;
  userFullName: string;
}

export interface InitialState {
  images: UpsplashImages[];
  searchTerm: string;
}

export interface UpsplashImages {
  id: string;
  description: string;
  url: string;
  likes: number;
  userId: string;
  username: string;
  userFullName: string;
}

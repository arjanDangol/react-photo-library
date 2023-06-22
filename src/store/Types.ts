export interface InitialState {
  images: UnsplashImages[];
  searchTerm: string;
  pageNumber: string | null;
}

export interface UnsplashImages {
  id: string;
  description: string;
  url: string;
  likes: number;
  userId: string;
  username: string;
  userFullName: string;
  createdAt: number;
}

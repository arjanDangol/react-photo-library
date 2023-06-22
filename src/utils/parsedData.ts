import { UnsplashImages } from "../interface/Types";

export const parseData = async (items: any[]) => {
  try {
    const parsedData: UnsplashImages[] = [];
    items.forEach(
      (item: {
        id: string;
        description: string;
        urls: { small: string };
        likes: number;
        created_at: number;
        user: {
          id: string;
          username: string;
          name: string;
        };
      }) => {
        parsedData.push({
          id: item.id,
          description: item.description ? item.description : "No description",
          url: item.urls.small,
          likes: item.likes,
          userId: item.user.id,
          username: item.user.username,
          userFullName: item.user.name,
          createdAt: item.created_at,
        });
      }
    );

    return parsedData;
  } catch (err) {
    console.log(err);
  }
};

import { UpsplashImages } from "../store/Types";

export const parseData = async (items: any[]) => {
  try {
    const parsedData: UpsplashImages[] = [];
    items.forEach(
      (item: {
        id: string;
        description: string;
        urls: { small: string };
        likes: number;
        user: {
          id: string;
          username: string;
          name: string;
        };
      }) => {
        parsedData.push({
          id: item.id,
          description: item.description,
          url: item.urls.small,
          likes: item.likes,
          userId: item.user.id,
          username: item.user.username,
          userFullName: item.user.name,
        });
      }
    );

    return parsedData;
  } catch (err) {
    console.log(err);
  }
};

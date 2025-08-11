export type User = {
  name: {
    first: string;
    last: string;
  };
  login: {
    uuid: string;
  };
  picture: {
    medium: string;
  };
};

export interface UserCardProps {
  user: User;
}

export interface UserCardThumbnailProps {
  imageUrl: string;
}

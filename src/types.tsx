import { sortValues } from "./consts";

export type User = {
  name: {
    first: string;
    last: string;
  };
  email: string;
  phone: string;
  login: {
    uuid: string;
  };
  picture: {
    medium: string;
  };
  location: {
    country: string;
  };
  dob: {
    date: string;
  };
};

export interface UserCardProps {
  user: User;
}

export interface UserThumbnailProps {
  imageUrl: string;
}

export type UserDetailProps = Omit<User, "login" | "picture">;

export type SortValue = (typeof sortValues)[keyof typeof sortValues];

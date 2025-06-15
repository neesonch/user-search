import { type User } from "../types";

interface UserCardProps {
  user: User;
}

export const UserCard = (props: UserCardProps) => {
  const { name } = props.user;
  return <p>{`I'm ${name.first} ${name.last}!`}</p>;
};

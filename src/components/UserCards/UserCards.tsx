import { UserCard } from "../UserCard/UserCard";
import { type User } from "../../types";

interface UserCardsProps {
  users: User[];
}

export const UserCards = (props: UserCardsProps) => {
  const renderedCards = props.users.filter((user) => {
    console.log(user); //DEBUG
    return user.name.first.toLowerCase().indexOf("e") === -1; //DEBUG
  });

  return (
    <>
      {renderedCards.map((user) => {
        return <UserCard user={user} key={user.login.uuid} />;
      })}
    </>
  );
};

import { UserCard } from "../UserCard/UserCard";
import { type User } from "../../types";
import styles from "./UserCardList.module.css";
import { useUserStore } from "../../store/userStore";

interface UserCardsProps {
  users: User[];
}

export const UserCardList = (props: UserCardsProps) => {
  const { searchTerm } = useUserStore();

  const renderedCards = props.users.filter((user) => {
    const userFullName = `${user.name.first} ${user.name.last}`;
    return userFullName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });

  return (
    <div className={styles.userCardListWrapper}>
      {renderedCards.map((user) => {
        return <UserCard user={user} key={user.login.uuid} />;
      })}
    </div>
  );
};

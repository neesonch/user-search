import { UserCard } from "../UserCard/UserCard";
import { type User } from "../../types";
import styles from "./UserCardList.module.css";
import { useUserStore } from "../../store/userStore";
//import { useEffect } from "react";

interface UserCardsProps {
  users: User[];
}

export const UserCardList = (props: UserCardsProps) => {
  const { searchTerm, countryFilter } = useUserStore();

  const cardsFilteredBySearch = props.users.filter((user) => {
    const userFullName = `${user.name.first} ${user.name.last}`;
    return userFullName.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  });

  const cardsFilteredByCountry =
    countryFilter === ""
      ? cardsFilteredBySearch
      : cardsFilteredBySearch.filter((user) => {
          return user.location.country === countryFilter;
        });

  // useEffect(() => {
  //   console.log(countryFilter);
  // }, [countryFilter]);

  return (
    <div className={styles.userCardListWrapper}>
      {cardsFilteredByCountry.map((user) => {
        return <UserCard user={user} key={user.login.uuid} />;
      })}
    </div>
  );
};

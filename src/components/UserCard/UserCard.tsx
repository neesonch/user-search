import { type UserCardProps } from "../../types";
import { UserCardThumbnail } from "./components/UserCardThumbnail";
import styles from "./UserCard.module.css";

export const UserCard = (props: UserCardProps) => {
  const { name, picture } = props.user;
  return (
    <div className={styles.userCardWrapper}>
      <p>{`I'm ${name.first} ${name.last}!`}</p>
      <UserCardThumbnail imageUrl={picture.medium} />
    </div>
  );
};

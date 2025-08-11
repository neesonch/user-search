import { type UserCardProps } from "../../types";
import { UserThumbnail, UserDetails } from "./components/";

import styles from "./UserCard.module.css";

export const UserCard = (props: UserCardProps) => {
  const { name, picture, location, dob, email, phone } = props.user;
  return (
    <div className={styles.userCardWrapper}>
      <UserThumbnail imageUrl={picture.medium} />
      <UserDetails
        name={name}
        location={location}
        dob={dob}
        email={email}
        phone={phone}
      />
    </div>
  );
};

import { type UserDetailProps } from "../../../types";
import styles from "../UserCard.module.css";

export const UserDetails = (props: UserDetailProps) => {
  const { name, location, dob, email, phone } = props;

  const formattedDob = new Date(dob.date).toLocaleDateString("en-GB");

  return (
    <div className={styles.userDetailsWrapper}>
      <h3>{`${name.first} ${name.last}`}</h3>
      <p>{`${location.country}`}</p>
      <p>{`${formattedDob}`}</p>
      <p>
        <a href={`mailto:${email}`}>{`${email}`}</a>
      </p>
      <p>
        <a href={`tel:${phone}`}>{`${phone}`}</a>
      </p>
    </div>
  );
};

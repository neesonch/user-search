import styles from "../UserCard.module.css";
import { type UserCardThumbnailProps } from "../../../types";

export const UserCardThumbnail = (props: UserCardThumbnailProps) => {
  const { imageUrl } = props;
  return <img className={styles.userCardThumbnailWrapper} src={imageUrl} />;
};

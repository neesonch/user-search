import styles from "../UserCard.module.css";
import { type UserThumbnailProps } from "../../../types";

export const UserThumbnail = (props: UserThumbnailProps) => {
  const { imageUrl } = props;
  return <img className={styles.userThumbnailWrapper} src={imageUrl} />;
};

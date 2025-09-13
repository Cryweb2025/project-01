import styles from "./ProfileCard.module.css";

interface Props {
  avatar?: string;
  name: string;
  description: string;
}

function ProfileCard(props: Props) {
  const { avatar, name, description } = props;
  const fallbackUrl =
    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_1280.png";
  return (
    <div className={styles.container}>
      <img src={avatar || fallbackUrl} alt={"User avatar: + name"} />
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.userDescription}>{description}</p>
    </div>
  );
}

export default ProfileCard;

// fallback- запасной вариант - заглушка

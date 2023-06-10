import styles from "./FirstName.module.css";
const FullName = ({ fullname }) => {
  return (
    <div className={styles.firstname}>
      <div className={styles.fullname}>Full Name</div>
      <div className={styles.mansourHoussam}>{fullname}</div>
    </div>
  );
};

export default FullName;

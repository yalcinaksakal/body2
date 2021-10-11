import styles from "./Loading.module.css";
import Spinner from "../Spinner/SpinnerDots";
const Loading = () => {
  return (
    <div className={styles.loading}>
      <h3>Loading</h3>
      <Spinner />
    </div>
  );
};
export default Loading;

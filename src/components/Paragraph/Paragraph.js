import styles from "./p.module.css";

const Paragraph = () => (
  <div className={styles.p}>
    <p className={styles.red}>Click or touch to choose a body part</p>
    <p>
      Drag to rotate the model
      <br />
      Zoom in/out
    </p>
  </div>
);
export default Paragraph;

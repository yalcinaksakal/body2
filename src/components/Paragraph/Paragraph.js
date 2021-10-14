import styles from "./p.module.css";

const Paragraph = () => (
  <p className={styles.p}>
    Drag to rotate the model
    <br />
    Click or touch to choose a body part
    <br />
    Zoom in/out
  </p>
);
export default Paragraph;

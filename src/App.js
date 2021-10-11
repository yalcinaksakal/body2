import Canvas from "./components/Canvas/Canvas";
import Loading from "./components/Loading/Loading";
import Paragraph from "./components/Paragraph/Paragraph";
import styles from "./App.module.css";
import { useState } from "react";
import { changeModel } from "./components/Canvas/lib/setScene";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && <Loading />}
      <Paragraph />
      <div className={styles.home}>
        <Canvas setIsLoading={setIsLoading} />
      </div>
      <button onClick={() => changeModel()}>Change Gender</button>
    </>
  );
}

export default App;

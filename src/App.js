import Canvas from "./components/Canvas/Canvas";
import Loading from "./components/Loading/Loading";
import Paragraph from "./components/Paragraph/Paragraph";
import styles from "./App.module.css";
import { useState } from "react";
import { changeModel } from "./components/Canvas/lib/setScene";
import ChosenPart from "./components/ChosenPart/ChosenPart";

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [bodyPart, setBodyPart] = useState("");
	return (
		<>
			{isLoading && <Loading />}
			<Paragraph />
			<ChosenPart bodyPart={bodyPart} />
			<div className={styles.home}>
				<Canvas setIsLoading={setIsLoading} setBodyPart={setBodyPart} />
			</div>
			{!isLoading && (
				<button
					onClick={() =>
						setBodyPart(changeModel() ? "Not interactive yet " : "")
					}
				>
					Change Gender
				</button>
			)}
		</>
	);
}

export default App;

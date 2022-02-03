import { useEffect, useRef } from "react";

import setScene from "./lib/setScene";

const Canvas = ({ setIsLoading, setBodyPart }) => {
	const canvasRef = useRef();

	useEffect(() => {
		const onResize = setScene(canvasRef.current, setIsLoading, setBodyPart);

		//resize
		window.addEventListener("resize", onResize);

		//cleanup
		return () => window.removeEventListener("resize", onResize);
	}, [setIsLoading, setBodyPart]);

	return (
		<div
			ref={canvasRef}
			style={{
				width: "100%",
				height: "100%",
			}}
		></div>
	);
};

export default Canvas;

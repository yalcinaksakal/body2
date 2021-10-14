import { useEffect, useRef } from "react";

import setScene from "./lib/setScene";

const Canvas = ({ setIsLoading, setBodyPart }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const { onResize, animate } = setScene(
      canvasRef.current,
      setIsLoading,
      setBodyPart
    );

    let frameId;

    const RAF = () => {
      animate();
      frameId = requestAnimationFrame(RAF);
    };

    //resize
    window.addEventListener("resize", onResize);

    //start animation
    RAF();

    //cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
    };
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

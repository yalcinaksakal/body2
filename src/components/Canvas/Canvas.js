import { useEffect, useRef } from "react";

import setScene from "./lib/setScene";

const Canvas = ({ setIsLoading }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const { onResize, keyDownHandler, keyUpHandler, animate } = setScene(
      canvasRef.current,
      setIsLoading
    );

    let frameId;

    const RAF = () => {
      animate();
      frameId = requestAnimationFrame(RAF);
    };

    //resize
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", keyDownHandler);
    window.addEventListener("keyup", keyUpHandler);

    //start animation
    RAF();

    //cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", keyDownHandler);
      window.removeEventListener("keyup", keyUpHandler);
    };
  }, [setIsLoading]);

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

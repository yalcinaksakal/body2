import { useEffect, useRef } from "react";

import setScene from "./lib/setScene";

const Canvas = ({ setIsLoading }) => {
  const canvasRef = useRef();

  useEffect(() => {
    const { onResize, clicked, animate, domElement } = setScene(
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
    domElement.addEventListener("click", clicked);

    //start animation
    RAF();

    //cleanup
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("resize", onResize);
      domElement.removeEventListener("click", clicked);
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

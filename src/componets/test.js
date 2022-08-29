import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import React, { useCallback, useRef, useState } from "react";


export default function CarosselProducts () {
  const mainRef = useRef();
  const [start, setStart] = useState(-1); // The start index for the fullscreen carousel

  const onMove = useCallback((_, index) => {
    mainRef.current && mainRef.current.go(index);
  }, []);

  return (
    <div>
      <Splide
        options={{ width: 200, height: 200 }}
        onClick={() => setStart(mainRef.current?.splide?.index || 0)}
        ref={mainRef}
      >
        {renderSlides()}
      </Splide>

      {start > -1 && (
        <div className="fullscreen">
          <Splide
            options={{ start, width: "100vw", height: "100vh" }}
            onClick={() => setStart(-1)}
            onMove={onMove}
          >
            {renderSlides()}
          </Splide>
        </div>
      )}
    </div>
  );
};

// Just renders random images
function renderSlides() {
  return Array.from({ length: 10 }).map((_, index) => (
    <SplideSlide key={index}>
      <img
        src={`https://source.unsplash.com/random/800x450?sig=${index}`}
        alt=""
      />
    </SplideSlide>
  ));
}

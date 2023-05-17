import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const SplideCarousel = ({
  recordList,
  recordPerpage,
  rewind,
  width,
  height,
  gap,
  pagination,
  autoplay,
  ...rest
}) => {
  const autoplayOption = autoplay && {
    type: "loop",
    autoplay: !!autoplay,
    pauseOnHover: true,
    resetProgress: false
  };

  const optionConfig = {
    perPage: recordPerpage || 1,
    rewind: !!rewind,
    height: height,
    width: width,
    pagination: !!pagination,
    gap: gap || "1rem",
    ...autoplayOption
  };

  function CustomCarousel() {
    if (autoplay) {
      return (
        <>
          <SplideTrack>
            {recordList.map((record, idx) => (
              <SplideSlide key={idx}>{record.render()}</SplideSlide>
            ))}
          </SplideTrack>
          <div className="splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </>
      );
    }

    return (
      <>
        {recordList.map((record, idx) => (
          <SplideSlide key={idx}>{record.render()}</SplideSlide>
        ))}
      </>
    );
  }

  return (
    <Splide
      aria-labelledby="slide-carousel"
      className={rest.className}
      hasTrack={!autoplay}
      tag="section"
      options={optionConfig}
    >
      <CustomCarousel />
    </Splide>
  );
};

export default SplideCarousel;

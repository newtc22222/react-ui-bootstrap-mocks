import React from "react";
import { Carousel } from "react-bootstrap";

const HeaderBanner = () => {
  const bannerTop = [];

  if (bannerTop.length === 0) return <></>;

  return (
    <Carousel>
      {bannerTop.map((banner, idx) => {
        return (
          <Carousel.Item key={idx}>
            <img
              className="d-block w-100"
              src={banner.path}
              alt={banner.title}
              onClick={() => {}}
            />
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default HeaderBanner;

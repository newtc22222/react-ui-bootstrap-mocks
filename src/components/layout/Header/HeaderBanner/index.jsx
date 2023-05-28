import React from "react";
import { SpliderCarousel } from "../../../common";
import useWindowSize from "../../../../hooks/useWindowSize";
import { banners } from "./sample";

const fixedStyleBannerTop = {
  padding: "0 10%",
  width: "80%",
  height: "100%",
  objectFit: "cover",
};

const HeaderBanner = () => {
  const [width, height] = useWindowSize();

  const bannerTop = banners.map((b) => {
    return {
      render: () => (
        <img src={b} alt="" className="w-100" style={fixedStyleBannerTop} />
      ),
    };
  });

  if (bannerTop.length === 0) return <></>;

  return (
    <div className="container-fluid bg-secondary">
      <SpliderCarousel
        recordList={bannerTop}
        height={width > 600 ? "7vh" : "5vh"}
      />
    </div>
  );
};

export default HeaderBanner;

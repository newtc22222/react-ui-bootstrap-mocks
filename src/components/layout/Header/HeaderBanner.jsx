import React from "react";
import { SpliderCarousel } from "../../common";

const fixedStyleBannerTop = {
  padding: "0 10%",
  width: "80%",
  height: "100%",
  objectFit: "cover",
};

const HeaderBanner = () => {
  const bannerTop = [
    {
      render: () => (
        <img
          src="https://th.bing.com/th/id/OIP.RmFQYaCHhtm9oQCaTvkNFgHaBB?pid=ImgDet&w=2000&h=276&rs=1"
          alt=""
          style={fixedStyleBannerTop}
        />
      ),
    },
    {
      render: () => (
        <img
          src="https://th.bing.com/th/id/OIP.CrLBdXP8YsyPA9502_s0qQHaA-?pid=ImgDet&rs=1https://th.bing.com/th/id/OIP.CrLBdXP8YsyPA9502_s0qQHaA-?pid=ImgDet&rs=1"
          alt=""
          style={fixedStyleBannerTop}
        />
      ),
    },
  ];

  if (bannerTop.length === 0) return <></>;

  return (
    <div className="container">
      <SpliderCarousel
        recordList={bannerTop}
        height={window.innerWidth > 600 ? "7vh" : "5vh"}
      />
    </div>
  );
};

export default HeaderBanner;

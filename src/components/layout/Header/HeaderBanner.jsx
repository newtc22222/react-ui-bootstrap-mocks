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
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.manetco.ir%2Fwp-content%2Fuploads%2F2018%2F06%2FTop-Banner-1.jpg&f=1&nofb=1&ipt=06c90e464fbf7adaf5b19fa38a4c64e12309093aceecd0d37c3f13576d45fd1e&ipo=images"
          alt=""
          className="w-100"
          style={fixedStyleBannerTop}
        />
      ),
    },
    {
      render: () => (
        <img
          src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.bergerorg.com%2Fwp-content%2Fuploads%2F2014%2F05%2Fcommercial-top-banner-image.jpg&f=1&nofb=1&ipt=1f0e80335d2d37056b5170ac905185f69cf7fadd855d79d2b4906ff1677e3a16&ipo=images"
          alt=""
          className="w-100"
          style={fixedStyleBannerTop}
        />
      ),
    },
  ];

  if (bannerTop.length === 0) return <></>;

  return (
    <div className="container-fluid bg-secondary">
      <SpliderCarousel
        recordList={bannerTop}
        height={window.innerWidth > 600 ? "7vh" : "5vh"}
      />
    </div>
  );
};

export default HeaderBanner;

import React from "react";
import mobileBannerImg from "../assets/images/image-web-3-mobile.jpg";
import desktopBannerImg from "../assets/images/image-web-3-desktop.jpg";
import Article from "./Article";

const Banner = () => {
  return (
    <section className="wrapper">
      <div className="left">
        <picture className="banner-img">
          <source media="(max-width: 480px)" srcSet={mobileBannerImg} />
          <img src={desktopBannerImg} alt="banner-img" />
        </picture>
        <div className="banner-content">
          <div className="heading">
            <h1>The Bright Future of Web 3.0?</h1>
          </div>
          <div className="para">
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
            <div className="read-more">
              <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <Article />
      </div>
    </section>
  );
};

export default Banner;

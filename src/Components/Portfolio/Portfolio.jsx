import React from "react";
import css from "./Portfolio.module.scss";
import portfolio_img1 from '../../assets/portfolio_img1.jpg'
import portfolio_img2 from '../../assets/portfolio_img2.jpg'
import portfolio_img3 from '../../assets/portfolio_img3.jpg'
import portfolio_img4 from '../../assets/portfolio_img4.jpg'

const Portfolio = () => {
  return (
    <div className={css.wrapper}>
      <h1 className={`${css.portfolio} gothic-a1-black`}>PORT FOLIO</h1>
      <img src={portfolio_img1} />
      <img src={portfolio_img3} />
      <img src={portfolio_img4} />
    </div>
  );
};

export default Portfolio;

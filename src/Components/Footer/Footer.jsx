import React from "react";
import style from "./Footer.module.scss";
import { FaArrowRightLong } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";
import Clock from '../Clock/Clock'

const Footer = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.row_1}>
        <h3 className={style.row_1_left}>
          Let's create something great together
        </h3>
        <h5 className={style.row_1_right}  >
          {" "}
          <FaArrowRightLong />  <a href="mailto:harisjamil353@gmail.com?subject=subject&body=message">
        SEND ME AN EMAIL
      </a>
        </h5>
      </div>
      <div className={style.row_2}>
        <h3 className={style.row_2_left}>BASED IN PAK - WORKING WORLDWIDE</h3>
        <h5 className={style.row_2_right}>
          {" "}
          <p>LOCAL TIME  </p> <BiSolidRightArrow />   <Clock />
        </h5>
      </div>

      <div className={style.row_3}>
        <div className={style.row_3_hr}></div>
        <div className={style.social_icons}>
            <p style={{fontSize:'20px', fontWeight:'700'}}>P.S</p>
            <p>Figma</p>
            <p>LinkedIn</p>
            <p>Behance</p>
            <FaXTwitter/>
            <p>© 2023, PPIK STUDIO.
            All Rights Reserved</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;

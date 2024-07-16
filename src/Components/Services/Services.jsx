import React from "react";
import styles from "./Sevices.module.scss";
import services_img1 from "../../assets/services_img1.png";
import services_img2 from "../../assets/services_img2.jpg";
import services_img3 from "../../assets/services_img3.jpg";
import services_img4 from "../../assets/services_img4.jpg";


const Services = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={`${styles.heading} gothic-a1-black`}> SERVICES</h1>
      <div className={styles.cards}>

        {/* card 1 */}
        <div className={styles.card1}>
          <div className={styles.card1_left}>
            <h1 className={`${styles.card_heading} gothic-a1-black`}>LANDING PAGE</h1>
            <p className={styles.card_para}>
              We will help you create a spectacular one-page site. Everything in
              its place - We will put the juiciest out of the convent and
              translate it into design.
            </p>
          </div>
          <div className={styles.card1_right}>
            <img src={services_img1} alt="servicesimg1" />
          </div>
        </div>
        {/* card 2 */}
        <div className={styles.card1} >
        <div className={styles.card1_left}  >
            <h1 className={`${styles.card_heading} gothic-a1-black`}>MULTI- PAGE WEBSITE</h1>
            <p className={styles.card_para}>
            We will help you create a spectacular one-page site. Everything in its place 
            </p>
          </div>
          <div className={styles.card1_right}>
            <img src={services_img2} alt="servicesim2" />
          </div>

        </div>
        {/* card 3 */}
        <div className={styles.card1}>
        <div className={styles.card1_left}>
            <h1 className={`${styles.card_heading} gothic-a1-black`}>DEVELOP- MENT</h1>
            <p className={styles.card_para}>
            We will help you create a spectacular one-page site. Everything in its place - We will put the juiciest out of the convent and translate it into design.
            </p>
          </div>
          <div className={styles.card1_right}>
            <img src={services_img3} alt="servicesim2" />
          </div>

        </div>

        {/* Card 4 */}
        <div className={styles.card1}>
        <div className={styles.card1_left}>
            <h1 className={`${styles.card_heading} gothic-a1-black`}>DESIGN IN FIGMA</h1>
            <p className={styles.card_para}>
              WWe will help you create a spectacular one-page site. Everything in its place - We will put the juiciest out of the convent and translate it into design.
            </p>
          </div>
          <div className={styles.card1_right}>
            <img src={services_img4} alt="servicesim2" />
          </div>

        </div>


      </div>
    </div>
  );
};

export default Services;

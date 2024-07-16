import React from "react";
import style from "./Worflow.module.scss";
const Workflow = () => {
  return (
    <div className={style.wrapper}>
      <h1 className={`${style.heading} gothic-a1-black`}>
        WORK <br /> FLOW
      </h1>
      <div className={style.cards_rows}>

        {/* Row 1 */}
        <div className={style.row1}>
          <div className={style.card1}>
            <div className={style.num_heading}>
              <h1 className={`${style.number} gothic-a1-black`}>01</h1>
              <h2 className={style.heading_workflow}>
                CALL FOR THE INTRODUCTION AND BRIEFING
              </h2>
            </div>
            <p className={style.card_content}>
              We'll get to know each other at Zoom and discuss anything about
              the project. Along the way, we'll discuss the workflow and I’”ll
              give you some ideas right away.
            </p>
          </div>
          <div className={style.card2}>
            <div className={style.num_heading}>
              <h1 className={`${style.number} gothic-a1-black`}>02</h1>
              <h2 className={style.heading_workflow}>
                QUOTATION AND AGREEMENT
              </h2>
            </div>
            <p className={style.card_content}>
              I'll send you a detailed quote with several cost options- You will
              choose the one that tifs you best and then finalize our
              collaboration by signing an agreement.
            </p>
          </div>
        </div>

        {/* Row 2 */}

        <div className={style.row2}>
          <div className={style.row2_card1}>
            <div className={style.num_heading}>
              <h1 className={`${style.number} gothic-a1-black`}>03</h1>
              <h2 className={style.heading_workflow}>
              PROTOTYPING
              </h2>
            </div>
            <p className={style.card_content}>
            Behind all successful websites lies no less successful prototypes. I Will create a textuality, Which Will be the core of the future website.
            </p>
          </div>
          <div className={style.row2_card2}>
            <div className={style.num_heading}>
              <h1 className={`${style.number} gothic-a1-black`} >04</h1>
              <h2 className={style.heading_workflow}>
              DESIGN CONCEPT
              </h2>
            </div>
            <p className={style.card_content}>
            Finally start to design We will discuss your preferences and make 2 concepts tor the first 2 screens ot the website.
            </p>
          </div>
        </div>

        {/* Row 3 */}
        <div className={style.row3}>
          <div className={style.card1}>
            <div className={style.num_heading}>
              <h1 className={`${style.number} gothic-a1-black`}>05</h1>
              <h2 className={style.heading_workflow}>
              ALL PAGES DESIGN IN FIGMA
              </h2>
            </div>
            <p className={style.card_content}>
            We will dive into tne design
ot all pages. Each element
will be thought out and
crafted with the greatest
creativity and attention
to detail.
            </p>
          </div>
          <div className={style.card2}>
            <div className={style.num_heading}>
              <h1 className={`${style.number} gothic-a1-black`}>06</h1>
              <h2 className={style.heading_workflow}>
              WEBSITE LAYOUT ON FRAMER
              </h2>
            </div>
            <p className={style.card_content}>
            We design your website using Framer, ensuring a seamless experience across desktop and mobile
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Workflow;

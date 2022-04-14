/* eslint-disable jsx-a11y/anchor-is-valid */
import "./BertholdoFooter.css";
import logoBer from "../../assets/logoBertholdo.png";

import React from "react";
import { ChatComponent } from "../ChatComponent/ChatComponent";

export const BertholdoFooter = () => {
  return (
    <section className="bertholdo-footer-main">
      <div>
        <img src={logoBer} alt="" srcset="" width={"100%"} />
      </div>
      <div>
        <ChatComponent />
      </div>
    </section>
  );
};

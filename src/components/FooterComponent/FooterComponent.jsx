/* eslint-disable jsx-a11y/anchor-is-valid */
import "./FooterComponent.css";
import * as FaIcons from "react-icons/fa";
import * as BsIcons from "react-icons/bs";

import React from "react";
import { IconContext } from "react-icons";

export const FooterComponent = () => {
  return (
    <section className="footer-container-main">
      <div className="logo-container">LOGOTIPO</div>
      <footer className="footer-elements">
        <section className="content-divider">
          <div className=" navigation-footer">
            <div>
              <ul>
                <li>
                  <a href="#">QUEM SOMOS</a>
                </li>
                <li>
                  <a href="#">GÔNDOLAS</a>
                </li>
                <li>
                  <a href="#">MÓVEIS DE AÇO</a>
                </li>
                <li>
                  <a href="#">ARMAZENAGEM</a>
                </li>
                <li>
                  <a href="#">CONTATO</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="social-container">
            <ul>
              <li>FAÇA SEU ORÇAMENTO</li>
              <li>SEHA UM COLABORADOR</li>
              <li>
                <div>
                  <span>SIGA-NOS NAS REDES</span>
                  <div className="icons-container-footer">
                    <IconContext.Provider value={{ color: " #cd2b30" }}>
                      <a href="#">
                        <FaIcons.FaFacebookSquare />
                      </a>
                      <a href="#">
                        <FaIcons.FaInstagramSquare />
                      </a>
                    </IconContext.Provider>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </section>

        <section className="content-divider">
          <div className="adress-container">
            <ul>
              <li>
                LOJA <span>.</span> BH (a 5km do centro!)
              </li>
              <li>Av.Professor Mário Werneck, 26 - 2° Andar</li>
              <li>Belo Horizonte - MG, CEP: 30455-610</li>
              <li>comercial@comercial.com.br</li>
              <li className="contac-style-unic">
                {" "}
                <IconContext.Provider value={{ color: " #d3c396" }}>
                  <BsIcons.BsFillTelephoneFill />
                  <span>(31)3333-3333</span>
                </IconContext.Provider>
              </li>
              <li className="contac-style-unic">
                {" "}
                <IconContext.Provider value={{ color: " #d3c396" }}>
                  <BsIcons.BsWhatsapp />
                  <span>(31)93333-3333</span>
                </IconContext.Provider>
              </li>
            </ul>
          </div>

          <div className="adress-container">
            <ul>
              <li>
                LOJA <span>.</span> BH (a 5km do centro!)
              </li>
              <li>Av.Professor Mário Werneck, 26 - 2° Andar</li>
              <li>Belo Horizonte - MG, CEP: 30455-610</li>
              <li>comercial@comercial.com.br</li>
              <li className="contac-style-unic">
                {" "}
                <IconContext.Provider value={{ color: " #d3c396" }}>
                  <BsIcons.BsFillTelephoneFill />
                  <span>(31)3333-3333</span>
                </IconContext.Provider>
              </li>
              <li className="contac-style-unic">
                {" "}
                <IconContext.Provider value={{ color: " #d3c396" }}>
                  <BsIcons.BsWhatsapp />
                  <span>(31)93333-3333</span>
                </IconContext.Provider>
              </li>
            </ul>
          </div>
        </section>
      </footer>
      <div className="whats-app-button">
        <button>
          <IconContext.Provider value={{ color: "#ffff" }}>
            <BsIcons.BsWhatsapp />
          </IconContext.Provider>
        </button>
      </div>
    </section>
  );
};

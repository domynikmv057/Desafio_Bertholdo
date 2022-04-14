import "./HeaderComponent.css";
import * as FaIcons from "react-icons/fa";

import { MyDropDaw } from "./MyDropDaw";
import { IconContext } from "react-icons";
export const HeaderComponent = () => {
  return (
    <header className="header-component">
      <section className="header-component-contact">
        <div>
          <p>
            ENTRE EM CONTATO CONOSCO{" "}
            <FaIcons.FaArrowRight className="icon-arrow" />
          </p>

          <p>(31)3333-3333</p>
          <span>.</span>
          <p>(31)93333-3333</p>
          <span>.</span>
          <p>comercial@comercial.com.br</p>
        </div>
      </section>

      <section className="header-component-navigate">
        <div className="logo-tipe-menu">
          <h1>LOGOTIPO</h1>
        </div>
        <ul className="list-menu">
          <li>QUEM SOMOS</li>
          <li>
            <MyDropDaw
              title="GÔNDOLAS"
              action1={"GÔNDOLAS GRANDES"}
              action2={"GÔNDOLAS MEDIANAS"}
              action3={"GÔNDOLAS PEQUENAS"}
            />
          </li>
          <li>
            <MyDropDaw
              title="MÓVEIS DE AÇÕ"
              action1={"MÓVEIS DE AÇÕ GRANDES"}
              action2={"MÓVEIS DE AÇÕ MEDIANAS"}
              action3={"MÓVEIS DE AÇÕ PEQUENAS"}
            />
          </li>
          <li>
            <MyDropDaw
              title="AMARZENAGEM"
              action1={"AMARZENAGEM GRANDES"}
              action2={"AMARZENAGEM MEDIANAS"}
              action3={"AMARZENAGEM PEQUENAS"}
            />
          </li>
          <li>
            CONTATO
            <div className="search-icon">
              <IconContext.Provider value={{ color: "red" }}>
                <FaIcons.FaSearch />
              </IconContext.Provider>
            </div>
          </li>
        </ul>
      </section>
    </header>
  );
};

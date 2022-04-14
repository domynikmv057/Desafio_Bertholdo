import { useState } from "react";
import "./SalesForm.css";

export const SalesForm = () => {
  const [registerForm, setRegisterForm] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterForm({ ...registerForm, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section className="sales-form-main">
      <div className="sales-text-container">
        <h2>
          SEJA UM REVENDEDOR <span>OBTENHA GRANDES LUCROS</span> EM SUAS VENDAS
          !
        </h2>
        <p>Cadastre-se usando o formulario a seguir</p>
      </div>
      <div className="form-container">
        <form id="cad-form" className="form-data">
          <fieldset>
            <legend>
              <p>
                <label htmlFor="email_login">
                  Nome<span>*</span>{" "}
                </label>
                <input
                  onChange={handleChange}
                  id="name_login"
                  name="name"
                  required="required"
                  type="text"
                />
              </p>
            </legend>
            <legend>
              <p>
                <label htmlFor="email_login">
                  Sobrenome<span>*</span>{" "}
                </label>
                <input
                  onChange={handleChange}
                  id="surname_login"
                  name="surname"
                  required="required"
                  type="text"
                />
              </p>
            </legend>
          </fieldset>
          <fieldset>
            <legend>
              <p>
                <label htmlFor="email_login">
                  E-mail<span>*</span>{" "}
                </label>
                <input
                  onChange={handleChange}
                  className="especial-imput"
                  id="email_login"
                  name="email"
                  required="required"
                  type="email"
                />
              </p>
            </legend>
          </fieldset>
          <fieldset>
            <legend>
              <p>
                <label htmlFor="email_login">
                  Telefone<span>*</span>{" "}
                </label>
                <input
                  onChange={handleChange}
                  id="telephone_login"
                  name="telephone"
                  required="required"
                  type="tel"
                />
              </p>
            </legend>
            <legend>
              <p>
                <label htmlFor="email_login">
                  Link para seu curriculo<span>*</span>{" "}
                </label>
                <input
                  onChange={handleChange}
                  id="linkCurriculum_login"
                  name="linkCurriculum"
                  required="required"
                  type="text"
                />
              </p>
            </legend>
          </fieldset>
          <div className="button-container">
            <button onClick={handleSubmit}>ENVIAR MEU CADASTRO</button>
          </div>
        </form>
      </div>
    </section>
  );
};

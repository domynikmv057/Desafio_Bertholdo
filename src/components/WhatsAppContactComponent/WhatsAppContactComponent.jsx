import "./WhatsAppContactComponent.css";
import whatsAppImg from "../../assets/whatsAppImg.png";

export const WhatsAppContactComponent = () => {
  return (
    <section className="whats-component-main">
      <div>
        <img src={whatsAppImg} alt="Logo WhatsApp personalizada" />
      </div>
      <div className="whats-text-menu">
        <h2>SOLICITE SEU ORÇAMENTO PELO WHATSAPP</h2>
        <p>Venda exclusica para lojistas</p>
        <button>CONVERSE COM A GENTE</button>
      </div>
    </section>
  );
};

import "./ResourceStrip.css";

export const ResourceStrip = () => {
  return (
    <section className="resource-strip-component">
      <div style={{ backgroundColor: "#231f20" }}>
        <h1>Quer ser um colaborador ou representante?</h1>
        <button>PREENCHA SEUS DADOS</button>
      </div>

      <div style={{ backgroundColor: "#1f1b1c" }}>
        <h1>Venda exclusiva para lojistas através do WhatsApp:</h1>
        <button>CONVERSE COM A GENTE</button>
      </div>

      <div style={{ backgroundColor: "#161415" }}>
        <h1>Gostou de algum dos nossos produtos?</h1>
        <button>FAÇA SEU ORÇAMENTO</button>
      </div>

      <div style={{ backgroundColor: "#0f0d0e" }}>
        <h1> Seja um revendedor agora mesmo!</h1>
        <button>FAÇA SEU CADASTRO</button>
      </div>
    </section>
  );
};

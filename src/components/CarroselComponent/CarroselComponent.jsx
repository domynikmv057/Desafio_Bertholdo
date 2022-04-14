import "./CarroselComponent.css";
import { MyCarrosel } from "./MyCarrosel";

export const CarroselComponent = () => {
  return (
    <div className="carrosel-component-main-container">
      <MyCarrosel />
      <div className="title-component">
        <h1> PRODUTOS DIRETO DA FÁBRICA!</h1>
        <p>
          Somos especialistas em gôndolas, porta pallets, racks, roupeiro,
          estantes, e mais diversos outros itens para organizar o armazenamento
          de produtos.
        </p>
        <p>
          Solicite seu orçamento agora e monte sua loja com quem entende de aço!
        </p>
        <button>QUERO FAZER UM ORÇAMENTO</button>
      </div>
    </div>
  );
};

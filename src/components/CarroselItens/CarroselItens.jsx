import "./CarroselItens.css";
import { ItensData } from "./ItensData.js";
import shevrom from "../../assets/shevron.png";
import { useRef } from "react";

export const CarroselItens = () => {
  const carousel = useRef(null);

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <section className="carrosel-itens-container">
      <h1>Nossos produtos</h1>
      <div className="container-carosel-assets buttons">
        <button onClick={handleLeftClick}>
          <img src={shevrom} alt="Scroll Left" />
        </button>

        <div className="carrosel-container" ref={carousel}>
          {ItensData.map((item, index) => {
            return (
              <div key={index} className="item-container">
                <div className="image-product-container">
                  {item.image}
                  {item.oudPrice !== "" ? (
                    <div className="promotion-disaine">
                      <span>% OFF</span>
                    </div>
                  ) : null}
                </div>
                <p>{item.title}</p>
                <p>{item.subTitle}</p>
                <h3>
                  <span>{item.oudPrice}</span> {item.price}
                </h3>
                <h4>{item.portionPrice}</h4>
              </div>
            );
          })}
        </div>

        <button onClick={handleRightClick}>
          <img src={shevrom} alt="Scroll Right" />
        </button>
      </div>

      <div className="buttons"></div>
    </section>
  );
};

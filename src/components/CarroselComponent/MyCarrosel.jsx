import { Carousel } from "react-bootstrap";
import firstSlide from "../../assets/carroselMain.png";

export const MyCarrosel = () => {
  return (
    <Carousel style={{ width: "100%", height: "100%" }}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstSlide}
          alt="First slide"
          style={{ heigh: "600px" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstSlide}
          alt="Second slide"
          style={{ heigh: "600px" }}
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={firstSlide}
          alt="Third slide"
          style={{ heigh: "600px" }}
        />
      </Carousel.Item>
    </Carousel>
  );
};

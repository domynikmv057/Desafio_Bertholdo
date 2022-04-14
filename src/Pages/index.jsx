import { BertholdoFooter } from "../components/BertholdoFooter/BertholdoFooter";
import { CarroselComponent } from "../components/CarroselComponent/CarroselComponent";
import { CarroselItens } from "../components/CarroselItens/CarroselItens";
import { FooterComponent } from "../components/FooterComponent/FooterComponent";
import { HeaderComponent } from "../components/HeaderComponent/HeaderComponent";
import { ResourceStrip } from "../components/ResourceStrip/ResourceStrip";
import { SalesForm } from "../components/SalesForm/SalesForm";
import { WhatsAppContactComponent } from "../components/WhatsAppContactComponent/WhatsAppContactComponent";

export const Main = () => {
  return (
    <>
      <HeaderComponent />
      <CarroselComponent />
      <ResourceStrip />
      <CarroselItens />
      <WhatsAppContactComponent />
      <SalesForm />
      <FooterComponent />
      <BertholdoFooter />
    </>
  );
};

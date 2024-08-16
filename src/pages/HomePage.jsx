import Hero from "../components/Hero/Hero";
import Steps from "../components/Steps/Steps";
import Classes from "../components/Classes/Classes";
import About from "../components/About/About";
import Testemonials from "../components/Testemonials/Testemonial";
import PicturesGrid from "../components/PicturesGrid/PicturesGrid";
import PriceTable from "../components/PriceTable/PriceTable";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Steps />
      <PicturesGrid />
      <Classes />
      <About />
      <PriceTable />
      <Testemonials />
    </>
  );
}

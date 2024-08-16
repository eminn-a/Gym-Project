import Hero from "../components/Hero/Hero";
import Steps from "../components/Steps/Steps";
import Classes from "../components/Classes/Classes";
import About from "../components/About/About";
import Testemonials from "../components/Testemonials/Testemonial";
import PicturesGrid from "../components/PicturesGrid/PicturesGrid";
import PriceTable from "../components/PriceTable/PriceTable";

import { heroData } from "../data/heroData";
import { priceData } from "../data/priceData";
import { programsData } from "../data/programsData";
import { steps } from "../data/steps";
import { testemonials } from "../data/testemonials";

export default function HomePage() {
  return (
    <>
      <Hero heroData={heroData} />
      <Steps steps={steps} />
      <PicturesGrid />
      <Classes programsData={programsData} />
      <About />
      <PriceTable priceData={priceData} />
      <Testemonials testemonials={testemonials} />
    </>
  );
}

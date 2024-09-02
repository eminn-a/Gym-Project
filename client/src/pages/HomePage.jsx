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
import { coaches } from "../data/coaches";
import { useEffect } from "react";

export default function HomePage() {
  useEffect(() => {
    if (location.hash) {
      console.log(location);
      const section = document.querySelector(location.hash);
      if (section) {
        const offset = 90;
        window.scrollTo({
          top: section.offsetTop - offset,
        });
      }
    } else {
      window.scrollTo({
        top: 0,
      });
    }
  }, [location]);

  return (
    <>
      <Hero heroData={heroData} />
      <Steps steps={steps} />
      {/* <PicturesGrid /> */}
      <Classes programsData={programsData} />
      <About coaches={coaches} />
      <PriceTable priceData={priceData} />
      <Testemonials testemonials={testemonials} />
    </>
  );
}

import Hero from "../components/Hero/Hero";
import Steps from "../components/Steps/Steps";
import Classes from "../components/Classes/Classes";
import About from "../components/About/About";
import Testemonials from "../components/Testemonials/Testemonial";
import PriceTable from "../components/PriceTable/PriceTable";

import { heroData } from "../data/heroData";
import { priceData } from "../data/priceData";
import { programsData } from "../data/programsData";
import { steps } from "../data/steps";
import { coaches } from "../data/coaches";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import * as commentService from "../services/commentService";

import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const {
    data: comments,
    isLoading: isCommentsLoading,
    error: commentsError,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () => commentService.getLatest(3),
    retry: 1,
  });

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const section = document.querySelector(location.hash);
      if (section) {
        const offset = 90;
        window.scrollTo({
          top: section.offsetTop - offset,
          behavior: "smooth",
        });
      }
    } else {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }, [location.hash]);

  return (
    <>
      <Hero heroData={heroData} />
      <Steps steps={steps} />
      <Classes programsData={programsData} />
      <About coaches={coaches} />
      <PriceTable priceData={priceData} />
      <Testemonials
        testemonials={comments || []}
        isLoading={isCommentsLoading}
        error={commentsError}
      />
    </>
  );
}

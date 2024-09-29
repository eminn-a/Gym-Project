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
import { useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import * as commentService from "../services/commentService";
import { useQuery } from "@tanstack/react-query";

export default function HomePage() {
  const { hash } = useLocation();

  const {
    data: comments,
    isLoading: isCommentsLoading,
    error: commentsError,
  } = useQuery({
    queryKey: ["comments"],
    queryFn: () => commentService.getLatest(3),
    retry: 1,
    staleTime: 5 * 60 * 1000,
  });

  useEffect(() => {
    const scrollToSection = () => {
      const offset = 90;
      if (hash) {
        const section = document.querySelector(hash);
        if (section) {
          window.scrollTo({
            top: section.offsetTop - offset,
            behavior: "smooth",
          });
        }
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    scrollToSection();
  }, [hash]);

  const memoizedHeroData = useMemo(() => heroData, []);
  const memoizedPriceData = useMemo(() => priceData, []);
  const memoizedProgramsData = useMemo(() => programsData, []);
  const memoizedSteps = useMemo(() => steps, []);
  const memoizedCoaches = useMemo(() => coaches, []);

  return (
    <>
      <Hero heroData={memoizedHeroData} />
      <Steps steps={memoizedSteps} />
      <Classes programsData={memoizedProgramsData} />
      <About coaches={memoizedCoaches} />
      <PriceTable priceData={memoizedPriceData} />
      <Testemonials
        testemonials={comments || []}
        isLoading={isCommentsLoading}
        error={commentsError}
      />
    </>
  );
}

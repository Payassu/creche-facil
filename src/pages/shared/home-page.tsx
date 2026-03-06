import HeroSection from "@/components/home-page/hero-section.tsx";
import FeaturesSection from "@/components/home-page/features-section.tsx";
import {Fragment} from "react";
import FeaturedInstitutions from "@/components/home-page/featured-institutions.tsx";

export default function HomePage() {
  return (
      <Fragment>
          <HeroSection/>
          <FeaturesSection />
          <FeaturedInstitutions />
      </Fragment>
  );
}

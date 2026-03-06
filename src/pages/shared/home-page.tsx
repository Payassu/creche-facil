import HeroSection from "@/components/home-page/hero-section.tsx";
import FeaturesSection from "@/components/home-page/features-section.tsx";
import {Fragment} from "react";
import NearbyInstitutionsSection from "@/components/home-page/nearby-institutions-section.tsx";

export default function HomePage() {
  return (
      <Fragment>
          <HeroSection/>
          <FeaturesSection />
          <NearbyInstitutionsSection />
      </Fragment>
  );
}

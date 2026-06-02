import { setRequestLocale } from "next-intl/server";
import { HeroSection } from "./sections/HeroSection";
import { StatsSection } from "./sections/StatsSection";
import { SuccessStoriesSection } from "./sections/SuccessStoriesSection";
import { WhyNaeSection } from "./sections/WhyNaeSection";
import { ProductsSection } from "./sections/ProductsSection";
import { CtaBannerSection } from "./sections/CtaBannerSection";

export default function HomePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  setRequestLocale(locale);

  return (
    <>
      <HeroSection />
      <StatsSection />
      <SuccessStoriesSection />
      <WhyNaeSection />
      <ProductsSection locale={locale} />
      <CtaBannerSection />
    </>
  );
}

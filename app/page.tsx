import HeroSection from "@/components/features/home/HeroSection";
import ServicesGrid from "@/components/features/home/ServicesGrid";
import WhyHertz from "@/components/features/home/WhyHertz";
import CTABanner from "@/components/features/home/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesGrid />
      <WhyHertz />
      <CTABanner />
    </>
  );
}

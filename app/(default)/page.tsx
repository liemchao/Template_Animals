export const metadata = {
  title: "Home - Open PRO",
  description: "Page description",
};

import Hero from "@/components/hero";
import Features from "@/components/features";
import Newsletter from "@/components/newsletter";
import Zigzag from "@/components/zigzag";
import Testimonials from "@/components/testimonials";
import Slider from "@/components/ui/silder";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Zigzag />
      <Slider />
      {/* <Testimonials /> */}
      <Newsletter />
    </>
  );
}

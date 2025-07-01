import { FeaturedProducts } from "./components/FeaturedProducts";
import { Hero } from "./components/Hero";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq";
import { useTitles } from "../../hooks/useTitles";

export const HomePage = () => {
  useTitles("Access Latest Computer Science eBook");
  return (
    <main>
      <div className="pt-10">
        <Hero />
        <FeaturedProducts />
        <Testimonials />
        <Faq />
      </div>
    </main>
  );
};

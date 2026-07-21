import Hero from "../components/Hero";
import StatsWhyChoose from "../components/home/StatsWhyChoose";
import FeaturedProperties from "../components/home/FeaturedProperties";
import ShowcaseCategories from "../components/home/ShowcaseCategories";
import TimelineLifestyle from "../components/home/TimelineLifestyle";
import LocationsTestimonials from "../components/home/LocationsTestimonials";
import AwardsCTA from "../components/home/AwardsCTA";

export default function Home() {
  return (
    <main className="bg-black">
      <Hero />
      <StatsWhyChoose />
      <FeaturedProperties />
      <ShowcaseCategories />
      <TimelineLifestyle />
      <LocationsTestimonials />
      <AwardsCTA />
    </main>
  );
}

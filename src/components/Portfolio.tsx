
import { useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoPlay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";

/* ================= IMAGES ================= */

import gtr911 from "@/assets/portfolio/911 GTR Precision.webp";
import blackFriday from "@/assets/portfolio/Black Friday Luxury Deals.webp";
import burgerBlast from "@/assets/portfolio/Burger Blast Campaign.webp";
import colaBrand from "@/assets/portfolio/Cola Brand – Power & Competition Campaign.webp";
import darkFantasy from "@/assets/portfolio/Dark Fantasy Character Concept.webp";
import energyAd from "@/assets/portfolio/Energy Drink Advertising Concept.webp";
import energyMotion from "@/assets/portfolio/Energy In Motio.webp";
import epicFantasy from "@/assets/portfolio/Epic Fantasy Illustration.webp";
import f1Victory from "@/assets/portfolio/F1 Victory Visual.webp";
import iconicDrop from "@/assets/portfolio/Iconic Drop – Limited Edition.webp";
import kinjiClass from "@/assets/portfolio/Kinji Class – Luxury Motion.webp";
import palestine from "@/assets/portfolio/Palestine Lemon Soda Social Campaign.webp";
import personalBrand from "@/assets/portfolio/Personal Brand – Artistic Touches.webp";
import sushi from "@/assets/portfolio/Premium Sushi Experience.webp";
import ramen from "@/assets/portfolio/Ramen Rush Menu.webp";
import redbullElectric from "@/assets/portfolio/Red Bull Electric Power Visual.webp";
import redbullNeon from "@/assets/portfolio/Red Bull Neon Energy Concept.webp";
import roaster from "@/assets/portfolio/Roaster Order Now.webp";
import sauvage from "@/assets/portfolio/Sauvage Noir.webp";
import supra from "@/assets/portfolio/Supra Velocity.webp";
import theyDontCare from "@/assets/portfolio/They Don’t Care About U.webp";
import timeless from "@/assets/portfolio/Timeless Precisio.webp";
import unleash from "@/assets/portfolio/Unleash The Beas.webp";
import upgrade from "@/assets/portfolio/Upgrade Your Styl.webp";
import urban from "@/assets/portfolio/Urban .webp";

/* ================= DATA ================= */

type Project = {
  title: string;
  category: string;
  image: string;
};

const projects: Project[] = [
  { title: "911 GTR Precision", category: "Automotive", image: gtr911 },
  { title: "Black Friday Luxury Deals", category: "E-Commerce", image: blackFriday },
  { title: "Burger Blast Campaign", category: "Food Advertising", image: burgerBlast },
  { title: "Cola Brand Campaign", category: "Branding", image: colaBrand },
  { title: "Dark Fantasy Character", category: "Concept Art", image: darkFantasy },
  { title: "Energy Drink Advertising", category: "Advertising", image: energyAd },
  { title: "Energy In Motion", category: "Motion Visual", image: energyMotion },
  { title: "Epic Fantasy Illustration", category: "Illustration", image: epicFantasy },
  { title: "F1 Victory Visual", category: "Sports Visual", image: f1Victory },
  { title: "Iconic Drop Limited Edition", category: "Luxury Branding", image: iconicDrop },
  { title: "Kinji Class Luxury Motion", category: "Luxury Motion", image: kinjiClass },
  { title: "Palestine Lemon Soda", category: "Social Campaign", image: palestine },
  { title: "Personal Brand Touches", category: "Personal Branding", image: personalBrand },
  { title: "Premium Sushi Experience", category: "Food Branding", image: sushi },
  { title: "Ramen Rush Menu", category: "Menu Design", image: ramen },
  { title: "Red Bull Electric Power", category: "Energy Visual", image: redbullElectric },
  { title: "Red Bull Neon Energy", category: "Brand Concept", image: redbullNeon },
  { title: "Roaster Order Now", category: "Food Advertising", image: roaster },
  { title: "Sauvage Noir", category: "Luxury Visual", image: sauvage },
  { title: "Supra Velocity", category: "Automotive", image: supra },
  { title: "They Don’t Care About U", category: "Awareness", image: theyDontCare },
  { title: "Timeless Precision", category: "Luxury Design", image: timeless },
  { title: "Unleash The Beast", category: "Energy Campaign", image: unleash },
  { title: "Upgrade Your Style", category: "Product Advertising", image: upgrade },
  { title: "Urban Streetwear", category: "Fashion", image: urban },
];

/* ================= COMPONENT ================= */

export function Portfolio() {
  const { ref, isVisible } = useScrollAnimation();
  const [activeImage, setActiveImage] = useState<string | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { 
      loop: true, 
      align: "start",
      slidesToScroll: 1,
      containScroll: "trimSnaps"
    }, 
    [AutoPlay({ delay: 3000, stopOnInteraction: true })]
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <>
      <section id="portfolio" className="py-24 md:py-32 overflow-hidden bg-white/[0.02]">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header */}
          <div className="container mx-auto px-6 mb-16 flex flex-col md:flex-row items-end justify-between gap-8">
            <div className="text-left">
              <span className="text-primary text-xs tracking-[0.3em] uppercase font-bold">
                Selected Projects
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 tracking-tight">
                Creative Portfolio
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mt-8 rounded-full" />
            </div>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={scrollPrev}
                className="rounded-full w-14 h-14 border-white/10 bg-white/5 backdrop-blur-md hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={scrollNext}
                className="rounded-full w-14 h-14 border-white/10 bg-white/5 backdrop-blur-md hover:bg-primary hover:text-white transition-all duration-300"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
            </div>
          </div>

          {/* Carousel */}
          <div className="relative px-6">
            <div className="embla overflow-hidden" ref={emblaRef}>
              <div className="embla__container flex -ml-6">
                {projects.map((project, index) => (
                  <div key={index} className="embla__slide flex-[0_0_85%] sm:flex-[0_0_50%] lg:flex-[0_0_33.33%] xl:flex-[0_0_480px] pl-4 sm:pl-6">
                    <PortfolioCard
                      project={project}
                      onClick={() => setActiveImage(project.image)}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10
          bg-background/95 backdrop-blur-xl animate-fade-in"
          onClick={() => setActiveImage(null)}
        >
          <div className="relative max-w-7xl w-full h-full flex items-center justify-center cursor-zoom-out group">
            <img 
              src={activeImage} 
              className="max-w-full max-h-full rounded-2xl shadow-glow-lg border border-white/10 object-contain animate-scale-in" 
              alt="Project View"
              onContextMenu={(e) => e.preventDefault()}
              onDragStart={(e) => e.preventDefault()}
            />
            {/* Remove download link as per user request */}
          </div>
        </div>
      )}
    </>
  );
}

function PortfolioCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative"
    >
      <div className="relative aspect-[3/4] sm:aspect-[4/3] rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden border border-white/5 
        shadow-2xl transition-all duration-500 group-hover:shadow-primary/30 group-hover:border-primary/40">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-1000
          group-hover:scale-110"
        />
        
        {/* Hover Overlay - More visible on mobile since there is no hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent
          opacity-100 sm:opacity-0 group-hover:opacity-100 transition-all duration-500
          p-6 md:p-8 flex flex-col justify-end">
          <div className="translate-y-0 sm:translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
            <span className="text-primary text-[10px] sm:text-xs uppercase tracking-widest font-bold mb-1 sm:mb-2 block">
              {project.category}
            </span>
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white tracking-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}

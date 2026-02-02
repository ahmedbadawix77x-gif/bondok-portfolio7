import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

/* ================= IMAGES ================= */

import gtr911 from "@/assets/portfolio/911 GTR Precision.jpeg";
import blackFriday from "@/assets/portfolio/Black Friday Luxury Deals.jpeg";
import burgerBlast from "@/assets/portfolio/Burger Blast Campaign.jpeg";
import colaBrand from "@/assets/portfolio/Cola Brand – Power & Competition Campaign.jpeg";
import darkFantasy from "@/assets/portfolio/Dark Fantasy Character Concept.jpeg";
import energyAd from "@/assets/portfolio/Energy Drink Advertising Concept.jpeg";
import energyMotion from "@/assets/portfolio/Energy In Motio.jpeg";
import epicFantasy from "@/assets/portfolio/Epic Fantasy Illustration.jpeg";
import f1Victory from "@/assets/portfolio/F1 Victory Visual.jpeg";
import iconicDrop from "@/assets/portfolio/Iconic Drop – Limited Edition.jpeg";
import kinjiClass from "@/assets/portfolio/Kinji Class – Luxury Motion.jpeg";
import palestine from "@/assets/portfolio/Palestine Lemon Soda Social Campaign.jpeg";
import personalBrand from "@/assets/portfolio/Personal Brand – Artistic Touches.jpeg";
import sushi from "@/assets/portfolio/Premium Sushi Experience.jpeg";
import ramen from "@/assets/portfolio/Ramen Rush Menu.jpeg";
import redbullElectric from "@/assets/portfolio/Red Bull Electric Power Visual.jpeg";
import redbullNeon from "@/assets/portfolio/Red Bull Neon Energy Concept.jpeg";
import roaster from "@/assets/portfolio/Roaster Order Now.jpeg";
import sauvage from "@/assets/portfolio/Sauvage Noir.jpeg";
import supra from "@/assets/portfolio/Supra Velocity.jpeg";
import theyDontCare from "@/assets/portfolio/They Don’t Care About U.jpeg";
import timeless from "@/assets/portfolio/Timeless Precisio.jpeg";
import unleash from "@/assets/portfolio/Unleash The Beas.jpeg";
import upgrade from "@/assets/portfolio/Upgrade Your Styl.jpeg";
import urban from "@/assets/portfolio/Urban .jpeg";

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

  return (
    <>
      <section id="portfolio" className="py-32 overflow-hidden">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-20">
            <span className="text-primary text-sm tracking-widest uppercase">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold mt-4">
              My Creative Work
            </h2>
            <div className="w-24 h-1 bg-gradient-primary mx-auto mt-6 rounded-full" />
          </div>

          <div className="portfolio-marquee">
            <div className="portfolio-track">
              {[...projects, ...projects].map((project, index) => (
                <PortfolioCard
                  key={index}
                  project={project}
                  onClick={() => setActiveImage(project.image)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {activeImage && (
        <div
          className="lightbox-backdrop"
          onClick={() => setActiveImage(null)}
        >
          <img src={activeImage} className="lightbox-image" />
        </div>
      )}
    </>
  );
}

/* ================= CARD ================= */

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
      className="relative w-[420px] mx-6 rounded-3xl overflow-hidden
      shadow-card cursor-pointer group transition-transform duration-300
      hover:-translate-y-2"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-[300px] w-full object-cover transition-transform duration-700
        group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent
        opacity-0 group-hover:opacity-100 transition-opacity duration-300
        p-6 flex flex-col justify-end">
        <span className="text-xs uppercase tracking-wider text-primary mb-1">
          {project.category}
        </span>
        <h3 className="text-xl font-semibold text-white">
          {project.title}
        </h3>
      </div>
    </div>
  );
}

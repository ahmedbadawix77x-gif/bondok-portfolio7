import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const brands = [
  { name: "Red Bull", initials: "RB" },
  { name: "Monster Energy", initials: "ME" },
  { name: "Chipsy", initials: "CH" },
  { name: "BMW", initials: "BMW" },
  { name: "Mercedes", initials: "MB" },
  { name: "Egyptian Brands", initials: "EG" },
];

export function Brands() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              Trusted By
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
              Brands I've Worked With
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className={`group flex flex-col items-center justify-center p-6 bg-card rounded-2xl shadow-card hover-lift transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Logo placeholder - grayscale to color on hover */}
                <div className="w-16 h-16 rounded-xl bg-secondary flex items-center justify-center mb-3 grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:bg-gradient-primary">
                  <span className="text-lg font-display font-bold text-muted-foreground group-hover:text-primary-foreground transition-colors duration-300">
                    {brand.initials}
                  </span>
                </div>
                <p className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                  {brand.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

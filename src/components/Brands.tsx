import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const brands = [
  { name: "Red Bull", logo: "RB", color: "#e0121a" },
  { name: "Monster Energy", logo: "ME", color: "#95d600" },
  { name: "Chipsy", logo: "CH", color: "#fbb034" },
  { name: "BMW", logo: "BMW", color: "#0066ad" },
  { name: "Mercedes", logo: "MB", color: "#ffffff" },
  { name: "Vantage", logo: "V", color: "#000000" },
];

export function Brands() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="py-24 relative overflow-hidden bg-white/[0.01]">
      <div className="container mx-auto px-6">
        <div
          ref={ref}
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="text-center mb-16">
            <span className="text-primary text-[10px] uppercase tracking-[0.4em] font-black">Collaboration</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold mt-4">Trusted by Industry Leaders</h2>
            <div className="w-12 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-6 rounded-full" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
            {brands.map((brand, index) => (
              <div
                key={brand.name}
                className="group relative flex flex-col items-center justify-center p-8 rounded-[2rem] 
                bg-white/[0.03] border border-white/5 backdrop-blur-md transition-all duration-500
                hover:bg-white/[0.07] hover:border-white/10 hover:-translate-y-2 hover:shadow-2xl"
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Logo Placeholder - Designed to look like a real icon */}
                <div className="w-16 h-16 rounded-2xl bg-black/40 flex items-center justify-center 
                  text-2xl font-black tracking-tighter mb-4 shadow-inner border border-white/5
                  group-hover:scale-110 transition-transform duration-500"
                  style={{ color: brand.color }}>
                  {brand.logo}
                </div>
                
                <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40 group-hover:text-foreground transition-colors">
                  {brand.name}
                </span>

                {/* Subtle Glow on Hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500 rounded-full"
                  style={{ backgroundColor: brand.color }} />
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* 3D Floating Elements in Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[300px] pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full border border-white/5 animate-float-3d opacity-20 blur-[1px]" />
        <div className="absolute bottom-[20%] right-[8%] w-48 h-48 rounded-full bg-primary/5 blur-3xl animate-pulse" />
      </div>
    </section>
  );
}

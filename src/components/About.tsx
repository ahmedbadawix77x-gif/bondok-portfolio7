import { MapPin, GraduationCap, Briefcase, Calendar, User } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-80 h-80 bg-primary/15 rounded-full blur-[120px] pointer-events-none animate-pulse" />
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-accent/10 rounded-full blur-[140px] pointer-events-none animate-pulse delay-700" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Section Header */}
          <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <span className="text-primary text-xs tracking-[0.35em] uppercase font-bold">
                Background
              </span>
              <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 tracking-tight">
                Get to Know Me
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mt-8 rounded-full" />
            </div>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
            {/* Bio Content */}
            <div className="lg:col-span-7 space-y-8">
              <div className="relative p-8 md:p-10 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-md">
                <div className="absolute -top-6 -left-6 w-12 h-12 rounded-2xl bg-primary flex items-center justify-center text-white shadow-lg shadow-primary/20">
                  <User className="w-6 h-6" />
                </div>
                
                <div className="space-y-6 text-muted-foreground/90 leading-relaxed text-lg">
                  <p>
                    I am a creative <span className="text-foreground font-semibold">Graphic Designer</span> based in Cairo, Egypt, with over
                    two years of professional experience in crafting visually striking and
                    emotionally resonant designs.
                  </p>
                  <p>
                    My expertise lies in <span className="text-primary font-medium italic">Adobe Photoshop</span> and <span className="text-primary font-medium italic">Adobe Illustrator</span>, 
                    where I focus on high-end branding, social media visuals, and comprehensive marketing systems.
                  </p>
                  <p>
                    Currently studying <span className="text-foreground font-semibold">Computer Science</span>, I bridge the gap between pure artistic 
                    creativity and technical precision, allowing me to build visual languages that are both beautiful and systematically functional.
                  </p>
                  <p>
                    I have contributed to design concepts for global and local leaders including{" "}
                    <span className="text-primary font-semibold">Red Bull</span>,{" "}
                    <span className="text-primary font-semibold">Monster Energy</span>, and{" "}
                    <span className="text-primary font-semibold">Chipsy</span>, alongside various automotive and retail brands.
                  </p>
                </div>
              </div>
            </div>

            {/* Info Cards Grid */}
            <div className="lg:col-span-5 grid sm:grid-cols-2 gap-4 md:gap-6">
              <InfoCard
                icon={<MapPin className="h-6 w-6" />}
                title="Location"
                value="Cairo, Egypt"
                delay={200}
                isVisible={isVisible}
              />
              <InfoCard
                icon={<Calendar className="h-6 w-6" />}
                title="Age"
                value="19 Years Old"
                delay={300}
                isVisible={isVisible}
              />
              <InfoCard
                icon={<Briefcase className="h-6 w-6" />}
                title="Experience"
                value="2+ Years"
                delay={400}
                isVisible={isVisible}
              />
              <InfoCard
                icon={<GraduationCap className="h-6 w-6" />}
                title="Education"
                value="CS Student"
                delay={500}
                isVisible={isVisible}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function InfoCard({
  icon,
  title,
  value,
  delay,
  isVisible,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay: number;
  isVisible: boolean;
}) {
  return (
    <div
      className={`group p-6 md:p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 
      backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.07] hover:border-white/10
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary 
        group-hover:bg-primary group-hover:text-white transition-all duration-500 mb-6 shadow-glow-sm">
        {icon}
      </div>
      <div className="space-y-1">
        <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-bold">{title}</p>
        <p className="text-lg font-bold text-foreground tracking-tight group-hover:text-primary transition-colors duration-300">
          {value}
        </p>
      </div>
    </div>
  );
}

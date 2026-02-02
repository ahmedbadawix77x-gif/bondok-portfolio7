import { MapPin, GraduationCap, Briefcase, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export function About() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
              Get to Know Me
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Bio */}
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am a creative Graphic Designer based in Cairo, Egypt, with over
                two years of experience in crafting visually striking and
                well-structured designs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I specialize in Adobe Photoshop and Adobe Illustrator, focusing on
                branding, social media visuals, marketing designs, and modern
                visual identities.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Alongside my design career, I study computer science with a
                specialization in graphic design, which allows me to combine
                creativity with technical precision and a strong understanding of
                digital systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I have worked on design concepts and visuals for well-known brands
                such as <span className="text-primary font-medium">Red Bull</span>,{" "}
                <span className="text-primary font-medium">Monster Energy</span>,{" "}
                <span className="text-primary font-medium">Chipsy</span>, automotive
                brands, and several Egyptian brands.
              </p>
            </div>

            {/* Info Cards */}
            <div className="grid sm:grid-cols-2 gap-4">
              <InfoCard
                icon={<MapPin className="h-6 w-6" />}
                title="Location"
                value="Cairo, Egypt"
                delay={0}
              />
              <InfoCard
                icon={<Calendar className="h-6 w-6" />}
                title="Age"
                value="19 Years Old"
                delay={100}
              />
              <InfoCard
                icon={<Briefcase className="h-6 w-6" />}
                title="Experience"
                value="2+ Years"
                delay={200}
              />
              <InfoCard
                icon={<GraduationCap className="h-6 w-6" />}
                title="Education"
                value="Computer Science"
                delay={300}
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
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  delay: number;
}) {
  return (
    <div
      className="group p-6 bg-card rounded-2xl shadow-card hover-lift transition-all duration-300"
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <p className="text-sm text-muted-foreground">{title}</p>
      <p className="text-lg font-semibold text-foreground">{value}</p>
    </div>
  );
}

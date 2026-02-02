import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { LucideIcon } from "lucide-react";
import {
  Image as ImageIcon,
  PenTool,
  Sparkles,
  Palette,
  Type,
  Droplet,
} from "lucide-react";

type Skill = {
  icon: LucideIcon;
  name: string;
  description: string;
  color: string;
};

const skills: Skill[] = [
  {
    icon: ImageIcon,
    name: "Adobe Photoshop",
    description: "Professional photo manipulation, digital painting & advanced compositing for high-end results.",
    color: "from-blue-500/20 to-cyan-500/20",
  },
  {
    icon: PenTool,
    name: "Adobe Illustrator",
    description: "Precision vector graphics, scalable logo systems & detailed brand asset creation.",
    color: "from-orange-500/20 to-yellow-500/20",
  },
  {
    icon: Sparkles,
    name: "Branding",
    description: "Strategic storytelling through visual systems that define and elevate brand perception.",
    color: "from-purple-500/20 to-pink-500/20",
  },
  {
    icon: Palette,
    name: "Visual Identity",
    description: "Developing cohesive design languages that ensure consistency across all brand touchpoints.",
    color: "from-indigo-500/20 to-purple-500/20",
  },
  {
    icon: Type,
    name: "Typography",
    description: "Expert font pairing and layout hierarchy that enhances readability and brand personality.",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    icon: Droplet,
    name: "Color Theory",
    description: "Scientific color selection to evoke specific emotions and ensure visual harmony.",
    color: "from-rose-500/20 to-red-500/20",
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`transition-all duration-1000 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-20 max-w-2xl mx-auto">
            <span className="text-primary text-xs tracking-[0.35em] uppercase font-bold">
              Expertise
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 tracking-tight">
              Design Capabilities
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full" />
            <p className="mt-8 text-muted-foreground/80 leading-relaxed text-lg">
              Combining technical mastery with creative vision to deliver visuals that leave a lasting impact.
            </p>
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                delay={index * 150}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({
  skill,
  delay,
  isVisible,
}: {
  skill: Skill;
  delay: number;
  isVisible: boolean;
}) {
  const { icon: Icon, name, description, color } = skill;

  return (
    <div
      className={`group relative p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 
      backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.07] hover:border-white/10
      hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/10
      ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Background Gradient Hover */}
      <div className={`absolute inset-0 rounded-[2.5rem] bg-gradient-to-br ${color} 
        opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

      {/* Icon Container */}
      <div className="relative w-16 h-16 mb-8 rounded-2xl bg-white/5 
        border border-white/10 flex items-center justify-center text-primary
        group-hover:scale-110 group-hover:bg-primary group-hover:text-white
        group-hover:border-primary transition-all duration-500 shadow-xl shadow-black/20">
        <Icon className="w-8 h-8" />
      </div>

      {/* Content */}
      <div className="relative space-y-3">
        <h3 className="text-2xl font-bold tracking-tight group-hover:text-primary transition-colors duration-300">
          {name}
        </h3>
        <p className="text-muted-foreground/70 leading-relaxed group-hover:text-muted-foreground transition-colors duration-300">
          {description}
        </p>
      </div>

      {/* Subtle indicator */}
      <div className="absolute top-8 right-8 w-2 h-2 rounded-full bg-primary/20 
        group-hover:bg-primary group-hover:scale-150 transition-all duration-500" />
    </div>
  );
}

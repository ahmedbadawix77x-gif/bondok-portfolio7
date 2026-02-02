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
};

const skills: Skill[] = [
  {
    icon: ImageIcon,
    name: "Adobe Photoshop",
    description: "Photo editing, manipulation & compositing",
  },
  {
    icon: PenTool,
    name: "Adobe Illustrator",
    description: "Vector graphics & logo design",
  },
  {
    icon: Sparkles,
    name: "Branding",
    description: "Building strong and memorable brands",
  },
  {
    icon: Palette,
    name: "Visual Identity",
    description: "Cohesive and consistent visual systems",
  },
  {
    icon: Type,
    name: "Typography",
    description: "Font selection, hierarchy & readability",
  },
  {
    icon: Droplet,
    name: "Color Theory",
    description: "Strategic and emotional color usage",
  },
];

export function Skills() {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  return (
    <section id="skills" className="relative py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-widest uppercase">
              My Skills
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
              What I Do Best
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
          </div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <SkillCard
                key={skill.name}
                skill={skill}
                delay={index * 100}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function SkillCard({
  skill,
  delay,
  isVisible,
}: {
  skill: Skill;
  delay: number;
  isVisible: boolean;
}) {
  const { icon: Icon, name, description } = skill;

  return (
    <div
      className={`p-6 rounded-2xl bg-card shadow-card
      transition-all duration-300 hover:-translate-y-1 hover:shadow-glow
      ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon */}
      <div className="w-14 h-14 mb-5 rounded-xl bg-gradient-primary
        flex items-center justify-center text-primary-foreground">
        <Icon className="w-7 h-7" />
      </div>

      {/* Text */}
      <h3 className="text-lg font-semibold mb-1">{name}</h3>
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  );
}

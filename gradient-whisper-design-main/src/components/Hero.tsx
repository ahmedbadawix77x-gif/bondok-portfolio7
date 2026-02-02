import { ArrowDown, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-primary/10 via-background to-background"
    >
      {/* ===== Background FX ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary Glow */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] animate-pulse" />

        {/* Accent Glow */}
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[140px] animate-pulse delay-1000" />

        {/* Center Halo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-[700px] h-[700px] rounded-full bg-gradient-to-tr from-primary/5 via-accent/5 to-transparent blur-[160px]" />
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ===== Text Content ===== */}
          <div className="text-center lg:text-left space-y-6">
            <span
              className="inline-block px-5 py-2 rounded-full 
              bg-gradient-to-r from-primary/20 to-accent/20 
              text-primary text-sm font-medium shadow-glow"
            >
              ✨ Available for work
            </span>

            <h1 className="font-display font-bold leading-tight">
              <span className="block text-4xl md:text-5xl lg:text-6xl">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  Ahmed
                </span>
              </span>
              <span className="block mt-3 text-2xl md:text-3xl lg:text-4xl text-muted-foreground">
                Graphic Designer & Visual Branding Specialist
              </span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
              I design clean, modern and emotionally engaging visuals that help
              brands stand out. Expert in Adobe Photoshop & Illustrator with 2+
              years of experience.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-primary to-accent
                text-primary-foreground shadow-glow hover:shadow-[0_0_40px_rgba(99,102,241,0.6)]
                transition-all duration-500"
                asChild
              >
                <a
                  href="mailto:ahmedashraff497@gmail.com?subject=Project Inquiry"
                  className="inline-flex items-center gap-2 text-primary-foreground"
                >
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </a>
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-primary/30 backdrop-blur-sm
                hover:bg-primary/10 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download CV
              </Button>
            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-10 justify-center lg:justify-start">
              {[
                { value: "2+", label: "Years Experience" },
                { value: "50+", label: "Projects Done" },
                { value: "20+", label: "Happy Clients" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ===== Image Section ===== */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              {/* Outer Glow Ring */}
              <div
                className="absolute inset-0 rounded-full 
                bg-gradient-to-r from-primary to-accent 
                blur-[80px] opacity-40 animate-pulse"
              />

              {/* Image */}
              <div
                className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden
                border border-primary/20 shadow-[0_0_60px_rgba(99,102,241,0.5)]
                transition-transform duration-700 hover:scale-105"
              >
                <img
                  src={profilePhoto}
                  alt="Ahmed - Graphic Designer"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
        gap-2 text-muted-foreground hover:text-primary transition-colors"
      >
        <span className="text-sm tracking-wide">Scroll Down</span>
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  );
}

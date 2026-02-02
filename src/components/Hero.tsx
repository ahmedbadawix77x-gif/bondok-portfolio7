import { Mail, Download, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import profilePhoto from "@/assets/profile-photo.jpg";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex items-center justify-center overflow-hidden
      bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))]
      from-primary/5 via-background to-background"
    >
      {/* ===== 3D Floating Aesthetic Shapes ===== */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Large 3D Glass Sphere Top-Left */}
        <div className="absolute top-[10%] left-[-5%] w-80 h-80 rounded-full 
          bg-gradient-to-br from-white/10 to-transparent backdrop-blur-[4px] 
          border border-white/10 shadow-[inset_0_-10px_40px_rgba(255,255,255,0.1)] 
          animate-float3D opacity-40 z-0" />
        
        {/* Colorful 3D Cylinder/Pill Shape Right */}
        <div className="absolute top-[20%] right-[-2%] w-32 h-64 rounded-full 
          bg-gradient-to-b from-primary/10 via-accent/5 to-transparent backdrop-blur-[2px] 
          border border-white/5 rotate-[25deg] animate-float opacity-30 z-0" />

        {/* Small Floating Glass Cube-like shape */}
        <div className="absolute bottom-[25%] left-[15%] w-24 h-24 rounded-[2rem]
          bg-gradient-to-tr from-white/5 to-transparent backdrop-blur-[2px]
          border border-white/10 rotate-[-15deg] animate-float-delayed opacity-20 z-0" />

        {/* Diffused Light Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[140px] animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
          
          {/* ===== Content ===== */}
          <div className="flex-1 text-center lg:text-left space-y-8 animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full 
              bg-white/[0.03] border border-white/5 backdrop-blur-md
              text-primary text-[10px] font-black tracking-[0.2em] shadow-glow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              AVAILABLE FOR NEW COLLABORATIONS
            </div>

            <h1 className="font-display font-black leading-[1.1] tracking-tighter">
              <span className="block text-4xl md:text-5xl lg:text-6xl text-foreground">
                Hello, I'm{" "}
                <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent animate-gradient">
                  Ahmed
                </span>
              </span>
              <span className="block mt-2 text-xl md:text-2xl text-muted-foreground/60 font-medium tracking-tight italic">
                Graphic Designer & Visual Alchemist
              </span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Transforming complex ideas into <span className="text-foreground font-semibold underline decoration-primary/20 decoration-2">breath-taking</span> visual identities 
              and motion concepts that define modern brands.
            </p>

            {/* CTA Group */}
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-4">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-full blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
                
                <Button
                  size="lg"
                  className="relative h-14 px-8 rounded-full bg-primary hover:bg-primary/90 
                  text-white text-base font-bold shadow-xl transition-all duration-500 hover:scale-[1.03]"
                  asChild
                >
                  <a href="#contact" className="gap-2">
                    <Mail className="h-5 w-5" />
                    Start a Project
                  </a>
                </Button>
              </div>

              <div className="relative group">
                <Button
                  size="lg"
                  variant="outline"
                  className="relative h-14 px-8 rounded-full border-white/10 bg-white/[0.03] 
                  backdrop-blur-md text-base font-bold hover:bg-white/[0.08] hover:border-white/20 
                  transition-all duration-500 hover:scale-[1.03]"
                  asChild
                >
                  <a href="#portfolio">
                    <Download className="mr-2 h-5 w-5 text-primary group-hover:animate-bounce" />
                    Get Portfolio
                  </a>
                </Button>
                <div className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-primary rounded-full transition-all duration-500 group-hover:w-[60%]" />
              </div>
            </div>
            
            {/* Quick Stats */}
            <div className="flex gap-10 pt-6 justify-center lg:justify-start">
              <div className="space-y-0.5">
                <p className="text-2xl font-black text-foreground">50+</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground/50 font-black">Closed Projects</p>
              </div>
              <div className="w-[1px] h-8 bg-white/5 self-center" />
              <div className="space-y-0.5">
                <p className="text-2xl font-black text-foreground">2+</p>
                <p className="text-[9px] uppercase tracking-widest text-muted-foreground/50 font-black">Years Obsessed</p>
              </div>
            </div>
          </div>

          {/* ===== Right: Image Section ===== */}
          <div className="flex-1 flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative group p-4">
              {/* Dynamic Image Glow */}
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[100px] opacity-20 group-hover:opacity-60 transition-opacity duration-700 animate-pulse" />
              
              <div className="relative w-64 h-64 md:w-[440px] md:h-[440px] rounded-[3.5rem] overflow-hidden
                border border-white/5 shadow-2xl transition-all duration-700
                group-hover:rounded-[2.5rem] group-hover:scale-[1.01] group-hover:border-primary/30">
                
                <img
                  src={profilePhoto}
                  alt="Ahmed - Visual Alchemist"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-80" />
                
                <div className="absolute top-8 right-8 p-3.5 rounded-2xl bg-white/10 backdrop-blur-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0 shadow-glow-sm">
                  <Play className="h-5 w-5 text-white fill-white animate-pulse" />
                </div>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-black/60 backdrop-blur-xl border border-white/10 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/70">Creative Visionary</p>
                  <p className="text-sm font-bold text-white mt-1 uppercase">Ahmed Ashraf</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center
        gap-3 text-muted-foreground/30 hover:text-primary transition-all group animate-fade-up delay-1000"
      >
        <span className="text-[9px] uppercase tracking-[0.4em] font-black group-hover:tracking-[0.6em] transition-all">Discover</span>
        <div className="relative w-6 h-10 rounded-full border border-white/5 flex justify-center p-1">
          <div className="w-1 h-2 bg-primary/40 rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
}

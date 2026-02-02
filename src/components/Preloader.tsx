import { useEffect, useState } from "react";

export function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 800); // Wait for fade exit
    }, 2500); // Show for 2.5s

    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] flex items-center justify-center bg-background transition-opacity duration-700 ease-in-out ${
        fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
      <div className="relative flex flex-col items-center">
        {/* Animated Glow Backdrop */}
        <div className="absolute inset-0 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse pointer-events-none" />
        
        {/* The Logo/Brand */}
        <div className="relative text-5xl md:text-7xl font-display font-black tracking-tighter">
          <span className="bg-gradient-to-r from-primary via-purple-400 to-accent bg-clip-text text-transparent animate-gradient">
            Bondok
          </span>
          {/* Subtle Outer Glow */}
          <div className="absolute inset-x-0 -bottom-2 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-50 blur-sm" />
        </div>

        {/* Loading Bar */}
        <div className="mt-12 w-48 h-[2px] bg-white/5 rounded-full overflow-hidden">
          <div className="h-full bg-gradient-to-r from-primary to-accent animate-load" />
        </div>

        <p className="mt-6 text-[10px] uppercase tracking-[0.5em] text-muted-foreground/60 font-bold animate-pulse">
          Crafting Visual Magic
        </p>
      </div>
    </div>
  );
}

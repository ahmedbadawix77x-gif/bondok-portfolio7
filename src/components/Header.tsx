import { useState, useEffect } from "react";
import { ThemeToggle } from "./ThemeToggle";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-2xl border-b border-white/5 shadow-2xl"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#home"
            className="group relative flex items-center"
          >
            <span className="text-xl font-display font-black tracking-tighter bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent group-hover:opacity-80 transition-all duration-300">
              Bondok
            </span>
          </a>

          {/* Desktop Navigation - More Minimal */}
          <div className="hidden md:flex items-center gap-6">
            <ul className="flex items-center gap-6 px-6 py-2 rounded-full bg-white/[0.02] border border-white/5 backdrop-blur-xl">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="relative text-[10px] uppercase tracking-[0.25em] font-black text-muted-foreground/60 hover:text-primary transition-all duration-300 group"
                  >
                    {link.label}
                    <span className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 group-hover:shadow-[0_0_10px_hsl(var(--primary))] transition-all scale-0 group-hover:scale-100" />
                  </a>
                </li>
              ))}
            </ul>

            <div className="h-4 w-[1px] bg-white/5" />

            <div className="flex items-center gap-4">
              <ThemeToggle />
              <a 
                href="#contact"
                className="text-[9px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full border border-primary/20 text-primary hover:bg-primary hover:text-white transition-all duration-500"
              >
                Let's Talk
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground/60 hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className={`md:hidden absolute top-full left-0 right-0 mt-3 mx-4 p-8 rounded-[2.5rem] bg-background/95 backdrop-blur-3xl border border-white/5 transition-all duration-500 shadow-2xl ${
            isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
        >
          <ul className="flex flex-col gap-6 text-center">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-2xl font-display font-bold text-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="pt-6 border-t border-white/5 flex justify-center">
              <ThemeToggle />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

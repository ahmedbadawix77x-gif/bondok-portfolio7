import { Heart, Instagram, Facebook, Mail } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border/40 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <a
            href="#home"
            className="text-2xl font-display font-bold gradient-text hover:opacity-90 transition"
          >
            Bondok<span className="text-primary"></span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-5">
            <a
              href="https://www.instagram.com/ahmed_bondok_30/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="footer-icon"
            >
              <Instagram className="w-5 h-5" />
            </a>

            <a
              href="https://www.facebook.com/share/1b8WrN6H5N/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="footer-icon"
            >
              <Facebook className="w-5 h-5" />
            </a>

            <a
              href="mailto:ahmedashraff497@gmail.com?subject=Contact from Portfolio"
              aria-label="Email"
              className="footer-icon"
            >
              <Mail className="w-5 h-5" />
            </a>

            <a
              href="https://www.behance.net/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Behance"
              className="footer-icon font-semibold tracking-wide"
            >
              Be
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

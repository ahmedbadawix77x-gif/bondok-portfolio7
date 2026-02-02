import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Send,
  Mail,
  MapPin,
  Phone,
  Facebook,
  Instagram,
  MessageCircle,
} from "lucide-react";
import { toast } from "sonner";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast.success("Message sent successfully! I'll get back to you soon.");
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-24 bg-secondary/30">
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
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mt-2">
              Let's Work Together
            </h2>
            <div className="w-20 h-1 bg-gradient-primary mx-auto mt-4 rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8">
              <p className="text-lg text-muted-foreground">
                Ready to bring your vision to life? Let's collaborate and create
                something amazing together. Feel free to reach out!
              </p>

              <div className="space-y-6">
                <ContactInfo
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  value="ahmedashraff497@gmail.com"
                  href="mailto:ahmedashraff497@gmail.com?subject=Contact from Portfolio"
                />

                <ContactInfo
                  icon={<MapPin className="h-5 w-5" />}
                  label="Location"
                  value="Cairo, Egypt"
                />
                <ContactInfo
                  icon={<Phone className="h-5 w-5" />}
                  label="WhatsApp"
                  value="+20 112 989 3269"
                  href="https://wa.me/201129893269"
                />
              </div>

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm font-medium text-muted-foreground mb-4">
                  Follow me on social media
                </p>
                <div className="flex gap-4">
                  <SocialLink
                    icon={<Facebook className="h-5 w-5" />}
                    href="https://www.facebook.com/?locale=ar_AR"
                    label="Facebook"
                  />
                  <SocialLink
                    icon={<Instagram className="h-5 w-5" />}
                    href="https://instagram.com/ahmed_bondok_30"
                    label="Instagram"
                  />
                  <SocialLink
                    icon={<MessageCircle className="h-5 w-5" />}
                    href="https://wa.me/201129893269"
                    label="WhatsApp"
                  />
                </div>
              </div>
            </div>
            {/* Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-card/60 backdrop-blur-xl border border-border/40 rounded-2xl p-6 shadow-card"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    required
                    className="h-11 bg-background border-border
        focus:border-primary focus:ring-1 focus:ring-primary
        transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-muted-foreground"
                  >
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="@gmail.com"
                    required
                    className="h-11 bg-background border-border
        focus:border-primary focus:ring-1 focus:ring-primary
        transition-all duration-300"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Project Inquiry"
                  required
                  className="bg-card border-border focus:border-primary transition-colors duration-300"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell me about your project..."
                  rows={5}
                  required
                  className="bg-card border-border focus:border-primary transition-colors duration-300 resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-soft hover:shadow-glow transition-all duration-300"
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </span>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactInfo({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-gradient-primary group-hover:text-primary-foreground transition-all duration-300">
        {icon}
      </div>
      <div>
        <p className="text-sm text-muted-foreground">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="block hover:translate-x-1 transition-transform duration-300"
      >
        {content}
      </a>
    );
  }

  return content;
}

function SocialLink({
  icon,
  href,
  label,
}: {
  icon: React.ReactNode;
  href: string;
  label: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="w-12 h-12 rounded-xl bg-card shadow-card flex items-center justify-center text-muted-foreground hover:text-primary-foreground hover:bg-gradient-primary transition-all duration-300 hover-lift"
    >
      {icon}
    </a>
  );
}

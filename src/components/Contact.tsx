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
import emailjs from "@emailjs/browser";

export function Contact() {
  const { ref, isVisible } = useScrollAnimation();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.currentTarget;
    
    try {
      // Configuration - These will need to be replaced by the user
      const SERVICE_ID = "YOUR_SERVICE_ID";
      const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
      const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

      if (SERVICE_ID === "YOUR_SERVICE_ID") {
        await new Promise((resolve) => setTimeout(resolve, 1500));
        toast.info("Please configure your EmailJS keys in Contact.tsx to receive emails.");
      } else {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          form,
          PUBLIC_KEY
        );
        toast.success("Message sent! I'll get back to you shortly.");
      }
    } catch (error) {
      console.error("Email error:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
      form.reset();
    }
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 overflow-hidden bg-white/[0.01]">
      {/* 3D Floating Elements in Background */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full h-[300px] pointer-events-none -z-10">
        <div className="absolute top-[10%] left-[5%] w-32 h-32 rounded-full border border-white/5 animate-float-3d opacity-20 blur-[1px]" />
        <div className="absolute bottom-[20%] right-[8%] w-64 h-64 bg-primary/10 blur-[120px] animate-pulse" />
        <div className="absolute top-0 right-1/4 w-48 h-48 bg-accent/5 blur-[100px] animate-pulse delay-500" />
      </div>
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
              Collaboration
            </span>
            <h2 className="text-4xl md:text-6xl font-display font-bold mt-4 tracking-tight">
              Let's Make Magic
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent mx-auto mt-8 rounded-full" />
            <p className="mt-8 text-muted-foreground/80 text-lg leading-relaxed">
              Have a project in mind or just want to say hi? My inbox is always open.
            </p>
          </div>

          <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Contact Details */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <ContactItem
                  icon={<Mail className="h-6 w-6" />}
                  label="Email Me"
                  value="ahmedashraff497@gmail.com"
                  href="mailto:ahmedashraff497@gmail.com"
                />
                <ContactItem
                  icon={<MessageCircle className="h-6 w-6" />}
                  label="WhatsApp"
                  value="+20 112 989 3269"
                  href="https://wa.me/201129893269"
                />
                <ContactItem
                  icon={<MapPin className="h-6 w-6" />}
                  label="Based In"
                  value="Cairo, Egypt"
                />
              </div>

              {/* Social Presence */}
              <div className="p-8 rounded-[2.5rem] bg-white/[0.03] border border-white/5 backdrop-blur-md">
                <h3 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60 mb-6">
                  Social Presence
                </h3>
                <div className="flex gap-4">
                  <SocialButton
                    icon={<Facebook className="h-5 w-5" />}
                    href="https://www.facebook.com/AhmedBondok30?mibextid=wwXIfr"
                    label="Facebook"
                    brandColor="hover:bg-blue-600 hover:border-blue-500 hover:text-white"
                  />
                  <SocialButton
                    icon={<Instagram className="h-5 w-5" />}
                    href="https://instagram.com/ahmed_bondok_30"
                    label="Instagram"
                    brandColor="hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white"
                  />
                </div>
              </div>
            </div>

            {/* Premium Form */}
            <div className="lg:col-span-7">
              <form
                onSubmit={handleSubmit}
                className="p-8 md:p-12 rounded-[3rem] bg-white/[0.03] border border-white/5 
                backdrop-blur-xl shadow-2xl shadow-black/20 space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest ml-1">
                      Full Name
                    </label>
                    <Input
                      name="user_name"
                      placeholder="Ahmed Ashraf"
                      required
                      className="h-14 bg-white/[0.03] border-white/10 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest ml-1">
                      Email Address
                    </label>
                    <Input
                      name="user_email"
                      type="email"
                      placeholder="hello@example.com"
                      required
                      className="h-14 bg-white/[0.03] border-white/10 rounded-2xl focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-bold text-muted-foreground/60 uppercase tracking-widest ml-1">
                    Your Message
                  </label>
                  <Textarea
                    name="message"
                    placeholder="Tell me about your vision..."
                    rows={6}
                    required
                    className="bg-white/[0.03] border-white/10 rounded-[2rem] focus:border-primary focus:ring-1 focus:ring-primary transition-all duration-300 resize-none p-6"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full h-16 rounded-[1.5rem] bg-primary hover:bg-primary/90 
                  text-white text-lg font-bold shadow-glow transition-all duration-300 hover:scale-[1.01]"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="h-5 w-5" />
                      Send Message
                    </span>
                  )}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactItem({
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
    <div className="group flex items-center gap-6 p-6 rounded-[2rem] bg-white/[0.03] border border-white/5 
      hover:bg-white/[0.07] hover:border-white/10 transition-all duration-500">
      <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary 
        group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-glow-sm">
        {icon}
      </div>
      <div>
        <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-bold mb-1">{label}</p>
        <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300">{value}</p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition-transform duration-300 hover:translate-x-2">
      {content}
    </a>
  ) : (
    content
  );
}

function SocialButton({ 
  icon, 
  href, 
  label,
  brandColor 
}: { 
  icon: React.ReactNode; 
  href: string;
  label: string;
  brandColor: string;
}) {
  return (
    <div className="group relative">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 
        flex items-center justify-center text-muted-foreground/60 transition-all duration-500 
        hover:-translate-y-2 hover:shadow-2xl ${brandColor}`}
      >
        {icon}
      </a>
      {/* Tooltip */}
      <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1 bg-background border border-white/10 
        rounded-lg text-[10px] uppercase tracking-widest font-bold opacity-0 group-hover:opacity-100 
        transition-all duration-300 pointer-events-none">
        {label}
      </span>
    </div>
  );
}

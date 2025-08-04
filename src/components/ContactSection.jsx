import React, { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Send,
  X as Twitter,
} from "lucide-react";
import { cn } from "../lib/utils";
import { useToast } from "../hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message, I'll get back to you soon",
      });
      setIsSubmitting(false);
      form.reset();
    }, 1500);
  };

  const socialLinks = [
    { icon: <Linkedin />, url: "#", label: "LinkedIn" },
    { icon: <Twitter />, url: "#", label: "Twitter" },
    { icon: <Instagram />, url: "#", label: "Instagram" },
    { icon: <Facebook />, url: "#", label: "Facebook" },
  ];

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 text-primary" />,
      title: "Email",
      value: "thefahad674@gmail.com",
      href: "mailto:thefahad674@gmail.com",
    },
    {
      icon: <Phone className="h-5 w-5 text-primary" />,
      title: "Phone",
      value: "+91 8076927845",
      href: "tel:+918076927845",
    },
    {
      icon: <MapPin className="h-5 w-5 text-primary" />,
      title: "Location",
      value: "Delhi, India",
      href: "#",
    },
  ];

  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 relative bg-secondary/20"
    >
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out. I'm always open to discussing new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Contact Information</h3>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start group">
                  <div className="p-2.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    {item.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-sm uppercase tracking-wider text-muted-foreground mb-1">
                      {item.title}
                    </h4>
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors text-base font-normal block"
                    >
                      {item.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto pt-8 border-t border-muted/20">
              <h4 className="text-sm font-medium text-muted-foreground mb-4 text-center">
                CONNECT WITH ME
              </h4>
              <div className="flex justify-center gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                      "p-2.5 rounded-full bg-muted/50 hover:bg-primary/10",
                      "transition-all hover:scale-110 hover:text-primary",
                      "text-muted-foreground hover:text-primary"
                    )}
                    aria-label={social.label}
                  >
                    {React.cloneElement(social.icon, { className: "h-5 w-5" })}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-6 md:p-8 rounded-xl shadow-sm border border-muted/20">
            <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 bg-background focus:outline-none focus:ring-1 focus:ring-primary/50 focus:border-transparent"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-4 py-3 rounded-lg border border-muted-foreground/20 bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-transparent"
                  placeholder="Hello, I'd like to talk about..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-3 px-6 rounded-lg bg-gradient-to-r from-primary to-purple-600 text-white font-medium flex items-center justify-center gap-2 hover:shadow-lg transition-all"
                )}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

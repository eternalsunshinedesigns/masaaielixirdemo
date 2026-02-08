import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { FloatingBotanicals } from "@/components/ui/FloatingBotanicals";
import { useToast } from "@/hooks/use-toast";
import { Instagram, Facebook, Mail, MapPin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Message Sent",
      description: "Thank you for reaching out. We'll respond within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-card via-background to-card/50 overflow-hidden">
        <FloatingBotanicals variant="accent" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="max-w-3xl mx-auto text-center">
            <motion.p
              className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Reach Out
            </motion.p>
            <motion.h1
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-medium text-primary mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Get in Touch
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-foreground/80 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              We'd love to hear from you. Reach out for questions, orders, or simply to share your journey.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-24 overflow-hidden">
        <FloatingBotanicals variant="minimal" />
        <div className="container mx-auto px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <ScrollReveal direction="left">
              <div>
                <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Message</p>
                <div className="w-12 h-[1px] bg-secondary mb-8" />
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-8">
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="name" className="text-foreground font-medium">Your Name</Label>
                    <Input
                      id="name"
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="mt-2 bg-card border-border focus:border-secondary"
                      placeholder="Enter your name"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="email" className="text-foreground font-medium">Email Address</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="mt-2 bg-card border-border focus:border-secondary"
                      placeholder="your@email.com"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <Label htmlFor="message" className="text-foreground font-medium">Your Message</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                      rows={6}
                      className="mt-2 bg-card border-border focus:border-secondary resize-none"
                      placeholder="Tell us how we can help..."
                    />
                  </motion.div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full sm:w-auto px-12 text-sm tracking-[0.15em] uppercase"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="right">
              <div className="lg:pl-8">
                <p className="text-xs tracking-[0.4em] uppercase text-secondary mb-4 font-medium">Info</p>
                <div className="w-12 h-[1px] bg-secondary mb-8" />
                <h2 className="font-serif text-2xl md:text-3xl font-medium text-primary mb-8">
                  Connect With Us
                </h2>

                <div className="space-y-8">
                  {[
                    { icon: Mail, title: "Email", content: <a href="mailto:hello@maasaielixir.com" className="text-foreground/70 hover:text-secondary transition-colors">hello@maasaielixir.com</a> },
                    { icon: MapPin, title: "Based In", content: <p className="text-foreground/70">Mombasa, Kenya<br />Serving clients worldwide</p> },
                  ].map((item, i) => (
                    <motion.div
                      key={item.title}
                      className="flex items-start space-x-4"
                      initial={{ opacity: 0, x: 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.15 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-primary mb-1">{item.title}</h3>
                        {item.content}
                      </div>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-medium text-primary mb-4">Follow Our Journey</h3>
                    <div className="flex items-center space-x-4">
                      {[
                        { icon: Instagram, label: "Instagram" },
                        { icon: Facebook, label: "Facebook" },
                      ].map((social) => (
                        <motion.a
                          key={social.label}
                          href="#"
                          aria-label={social.label}
                          className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <social.icon className="w-5 h-5 text-primary" />
                        </motion.a>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
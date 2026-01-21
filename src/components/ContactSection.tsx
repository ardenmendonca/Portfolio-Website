import type React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojjlqqg";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold font-heading mb-4">
            <span className="gradient-text">Get in Touch</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Have a project in mind or just want to chat? I'd love to hear from
            you!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left: Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold font-heading mb-6">
              Let's work together
            </h3>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm open to exciting opportunities in AI, Data Science, and
              Software Development. Whether you have a question or just want to
              say hi, I’ll get back to you!
            </p>

            <div className="space-y-4 mb-8">
              <a
                href="mailto:arden.mendonca@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="text-foreground font-medium">
                    arden.mendonca@gmail.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+447818961721"
                className="flex items-center gap-4 p-4 rounded-xl glass-card hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="text-foreground font-medium">+44 7818 961721</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com/in/ardenmendonca"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
              >
                <Linkedin className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
              <a
                href="https://github.com/ardenmendonca"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-card hover:bg-primary/10 transition-all duration-300 group"
              >
                <Github className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </a>
            </div>
          </motion.div>

          {/* Right: Form / Sent state */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            {!isSent ? (
              <form
                onSubmit={handleSubmit}
                className="glass-card rounded-2xl p-8"
              >
                <div className="grid gap-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Name
                      </label>
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email
                      </label>
                      <input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Subject
                    </label>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What's this about?"
                      className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      placeholder="Tell me about your project or just say hello!"
                      className="w-full rounded-xl bg-secondary/50 border border-border px-4 py-3 outline-none focus:border-primary resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 py-4 text-lg font-medium rounded-xl transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <CheckCircle className="w-5 h-5" />
                        Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        <Send className="w-5 h-5" />
                        Send Message
                      </span>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    This form sends directly to my inbox (no email app needed).
                  </p>
                </div>
              </form>
            ) : (
              <div className="glass-card rounded-2xl p-10 text-center">
                <div className="mx-auto w-14 h-14 rounded-2xl bg-primary/15 flex items-center justify-center mb-5">
                  <CheckCircle className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-bold font-heading mb-2">
                  Message Sent!
                </h3>
                <p className="text-muted-foreground mb-8">
                  Thanks for reaching out. I’ll get back to you as soon as
                  possible.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="inline-flex items-center justify-center gap-2 border border-primary/30 hover:bg-primary/10 hover:border-primary px-6 py-3 font-medium rounded-xl transition-colors"
                >
                  Send Another Message <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

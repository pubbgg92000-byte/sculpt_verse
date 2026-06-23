"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from "lucide-react";
import { getWhatsAppLink } from "@/lib/utils";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    projectType: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus("sent");
        setFormData({
          name: "",
          phone: "",
          email: "",
          projectType: "",
          budget: "",
          message: "",
        });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-charcoal via-forest-dark to-charcoal">
        <div className="container-narrow text-center px-6">
          <p className="text-label text-bronze-light mb-4 tracking-[0.3em]">
            Contact Us
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-warm-white mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Let&apos;s Create Together
          </h1>
          <div className="divider mx-auto mb-6" />
          <p className="text-warm-white/60 max-w-xl mx-auto">
            Share your vision with us. We&apos;ll get back to you within 24
            hours with a detailed proposal and free quote.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding bg-warm-white">
        <div className="container-wide px-6">
          <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-3">
              <h2 className="heading-section text-2xl md:text-3xl mb-8">
                Send Us a Message
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-stone-light bg-white text-charcoal placeholder:text-charcoal-light/50 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="contact-phone"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Phone Number *
                    </label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-stone-light bg-white text-charcoal placeholder:text-charcoal-light/50 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                      placeholder="+91 93816 99807"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-email"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-stone-light bg-white text-charcoal placeholder:text-charcoal-light/50 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="contact-project-type"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="contact-project-type"
                      value={formData.projectType}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          projectType: e.target.value,
                        })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-stone-light bg-white text-charcoal focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                    >
                      <option value="">Select type</option>
                      <option value="animal">Animal Sculpture</option>
                      <option value="garden">Garden Feature</option>
                      <option value="metal">Metal Art</option>
                      <option value="resort">Resort Installation</option>
                      <option value="playground">Playground</option>
                      <option value="custom">Custom Project</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="contact-budget"
                      className="block text-sm font-medium text-charcoal mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="contact-budget"
                      value={formData.budget}
                      onChange={(e) =>
                        setFormData({ ...formData, budget: e.target.value })
                      }
                      className="w-full px-4 py-3 rounded-lg border border-stone-light bg-white text-charcoal focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all"
                    >
                      <option value="">Select budget</option>
                      <option value="under-50k">Under ₹50,000</option>
                      <option value="50k-1l">₹50,000 — ₹1,00,000</option>
                      <option value="1l-3l">₹1,00,000 — ₹3,00,000</option>
                      <option value="3l-10l">₹3,00,000 — ₹10,00,000</option>
                      <option value="10l-plus">₹10,00,000+</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="block text-sm font-medium text-charcoal mb-2"
                  >
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 rounded-lg border border-stone-light bg-white text-charcoal placeholder:text-charcoal-light/50 focus:border-forest focus:ring-2 focus:ring-forest/20 outline-none transition-all resize-none"
                    placeholder="Describe your project — location, type of sculpture, size preferences, any reference images..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary text-sm px-8 py-4 flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send className="w-4 h-4" />
                  {status === "sending"
                    ? "Sending..."
                    : status === "sent"
                    ? "Message Sent!"
                    : "Send Message"}
                </button>

                {status === "sent" && (
                  <p className="text-sm text-forest font-medium">
                    ✓ Thank you! We&apos;ll get back to you within 24 hours.
                  </p>
                )}
                {status === "error" && (
                  <p className="text-sm text-red-600 font-medium">
                    Something went wrong. Please try WhatsApp or call us directly.
                  </p>
                )}
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-2">
              <div className="bg-cream rounded-2xl p-8 sticky top-28">
                <h3
                  className="text-xl font-bold text-charcoal mb-6"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  Other Ways to Reach Us
                </h3>

                <div className="space-y-6">
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#25D366]/10 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/20 transition-colors">
                      <MessageCircle className="w-6 h-6 text-[#25D366]" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal group-hover:text-forest transition-colors">
                        WhatsApp
                      </p>
                      <p className="text-sm text-charcoal-light">
                        Fastest response — usually within 1 hour
                      </p>
                    </div>
                  </a>

                  <a
                    href="tel:+919381699807"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center shrink-0 group-hover:bg-forest/20 transition-colors">
                      <Phone className="w-6 h-6 text-forest" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal group-hover:text-forest transition-colors">
                        +91 93816 99807
                      </p>
                      <p className="text-sm text-charcoal-light">
                        Mon–Sat, 9:00 AM – 7:00 PM
                      </p>
                    </div>
                  </a>

                  <a
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=ragulakanakaraju@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-bronze/10 flex items-center justify-center shrink-0 group-hover:bg-bronze/20 transition-colors">
                      <Mail className="w-6 h-6 text-bronze" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal group-hover:text-forest transition-colors">
                        ragulakanakaraju@gmail.com
                      </p>
                      <p className="text-sm text-charcoal-light">
                        We reply as soon as possible
                      </p>
                    </div>
                  </a>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-stone/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-stone-dark" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">
                        Workshop Location
                      </p>
                      <p className="text-sm text-charcoal-light">
                        Hyderabad, Telangana, India
                        <br />
                        <span className="text-xs text-charcoal-light/60">
                          Transport and setup discussed per project
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-forest/10 flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6 text-forest" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal">
                        Business Hours
                      </p>
                      <p className="text-sm text-charcoal-light">
                        Mon–Sat: 9:00 AM – 7:00 PM
                        <br />
                        Sunday: By Appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

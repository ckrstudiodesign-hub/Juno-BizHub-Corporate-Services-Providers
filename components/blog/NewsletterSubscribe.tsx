"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ArrowRight, CheckCircle, Loader2, AlertCircle, Sparkles } from "lucide-react";

interface NewsletterSubscribeProps {
  /** "inline" = compact row for blog posts, "banner" = full-width section for home/blog listing */
  variant?: "inline" | "banner";
}

export default function NewsletterSubscribe({ variant = "banner" }: NewsletterSubscribeProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim() }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setMessage(data.message || "You're subscribed!");
        setEmail("");
      } else {
        setStatus("error");
        setMessage(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }

    // Reset status after 5 seconds
    setTimeout(() => {
      setStatus("idle");
      setMessage("");
    }, 5000);
  };

  if (variant === "inline") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 p-6 md:p-8 rounded-2xl bg-[#0a0a0a] border border-white/5 relative overflow-hidden"
      >
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/40 to-transparent"></div>
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gold/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-6">
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-gold/10 rounded-xl flex items-center justify-center border border-gold/20">
              <Mail size={18} className="text-gold" />
            </div>
            <div>
              <h4 className="text-sm font-black text-white uppercase tracking-wider">Subscribe</h4>
              <p className="text-[11px] text-gray-500">Daily business insights</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="flex-1 w-full flex gap-2">
            <div className="relative flex-1">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                required
                disabled={status === "loading" || status === "success"}
                className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/40 focus:ring-1 focus:ring-gold/20 transition-all disabled:opacity-50"
              />
            </div>
            <button
              type="submit"
              disabled={status === "loading" || status === "success"}
              className="px-5 py-3 bg-gold text-black font-black text-xs uppercase tracking-widest rounded-xl hover:bg-white transition-all duration-300 disabled:opacity-50 shrink-0 flex items-center gap-2"
            >
              {status === "loading" && <Loader2 size={14} className="animate-spin" />}
              {status === "success" && <CheckCircle size={14} />}
              {status === "idle" || status === "error" ? "Subscribe" : status === "success" ? "Done!" : "..."}
            </button>
          </form>
        </div>

        <AnimatePresence>
          {message && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`mt-3 text-xs flex items-center gap-1.5 ${
                status === "success" ? "text-emerald-400" : "text-red-400"
              }`}
            >
              {status === "success" ? <CheckCircle size={12} /> : <AlertCircle size={12} />}
              {message}
            </motion.p>
          )}
        </AnimatePresence>
      </motion.div>
    );
  }

  // ─── Banner variant (for home page and blog listing) ───────────────
  return (
    <section className="relative py-20 md:py-28 px-4 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030303] via-[#0a0804] to-[#030303]"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gold/5 rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold/20 to-transparent"></div>

      <div className="max-w-3xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          {/* Icon */}
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center border border-gold/20 backdrop-blur-sm">
                <Mail size={28} className="text-gold" />
              </div>
              <Sparkles size={14} className="text-gold absolute -top-1 -right-1 animate-pulse" />
            </div>
          </div>

          {/* Heading */}
          <div className="space-y-3">
            <span className="text-gold font-black tracking-[0.3em] uppercase text-[10px] md:text-xs block">
              Newsletter
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-tight">
              Stay Ahead with{" "}
              <span className="text-gradient-gold">Daily Insights</span>
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
              Get the latest updates on business setup, corporate tax, visa regulations, free zones, and more — delivered straight to your inbox every day.
            </p>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600 pointer-events-none" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  required
                  disabled={status === "loading" || status === "success"}
                  className="w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-xl sm:rounded-full text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gold/40 focus:ring-2 focus:ring-gold/10 transition-all disabled:opacity-50"
                />
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="group px-8 py-4 bg-gold text-black font-black text-xs uppercase tracking-widest rounded-xl sm:rounded-full hover:bg-white transition-all duration-300 shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:shadow-none disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {status === "loading" && <Loader2 size={14} className="animate-spin" />}
                {status === "success" && <CheckCircle size={14} />}
                {status === "idle" || status === "error" ? (
                  <>
                    Subscribe <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </>
                ) : status === "success" ? (
                  "Subscribed!"
                ) : (
                  "Subscribing..."
                )}
              </button>
            </div>

            <AnimatePresence>
              {message && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -5 }}
                  className={`mt-4 text-sm flex items-center justify-center gap-2 ${
                    status === "success" ? "text-emerald-400" : "text-red-400"
                  }`}
                >
                  {status === "success" ? <CheckCircle size={14} /> : <AlertCircle size={14} />}
                  {message}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.form>

          {/* Trust line */}
          <p className="text-[11px] text-gray-600 tracking-wide">
            Free forever · No spam · Unsubscribe anytime
          </p>

          {/* Topics */}
          <div className="flex flex-wrap justify-center gap-2 pt-2">
            {["Business Setup", "Corporate Tax", "Golden Visa", "Free Zones", "Banking", "VAT"].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-gold/70 border border-gold/10 rounded-full bg-gold/5"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

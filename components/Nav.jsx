"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { profile } from "../data/profile";
import { Icon } from "./ui";

const sections = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function Nav() {
  const [active, setActive] = useState("about");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-3 z-50 flex justify-center px-4 sm:top-5"
    >
      <nav className="glass flex w-full max-w-3xl items-center gap-2 rounded-full px-3 py-2 sm:px-4">
        <a
          href="#top"
          className="relative z-10 shrink-0 pl-1 pr-2 text-[13px] font-semibold tracking-tight text-ink-900"
        >
          {profile.initials}
          <span className="text-mint">.</span>
        </a>

        <div className="relative z-10 hidden flex-1 items-center justify-center gap-1 sm:flex">
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`relative rounded-full px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                active === s.id ? "text-ink-900" : "text-ink-500 hover:text-ink-900"
              }`}
            >
              {active === s.id && (
                <motion.span
                  layoutId="navpill"
                  className="absolute inset-0 -z-10 rounded-full bg-white/85 shadow-[0_2px_10px_-4px_rgba(24,38,84,0.25)]"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              {s.label}
            </a>
          ))}
        </div>

        <div className="relative z-10 ml-auto flex items-center gap-1 sm:ml-0">
          {[
            { href: profile.links.github, icon: "github", label: "GitHub" },
            { href: profile.links.linkedin, icon: "linkedin", label: "LinkedIn" },
            { href: `mailto:${profile.links.email}`, icon: "mail", label: "Email" },
          ].map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.icon === "mail" ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={l.label}
              className="flex h-8 w-8 items-center justify-center rounded-full text-ink-500 transition-all hover:bg-white/80 hover:text-accent-600"
            >
              <Icon name={l.icon} className="h-[17px] w-[17px]" />
            </a>
          ))}
        </div>
      </nav>
    </motion.header>
  );
}

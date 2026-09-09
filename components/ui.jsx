"use client";

import { motion } from "framer-motion";

export function Reveal({ children, delay = 0, y = 22, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, filter: "blur(6px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Section({ id, eyebrow, title, intro, children }) {
  return (
    <section id={id} className="scroll-mt-28 px-5 py-14 sm:px-8 sm:py-20">
      <div className="mx-auto w-full max-w-5xl">
        <Reveal>
          <div className="mb-10 sm:mb-14">
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-600">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" />
              {eyebrow}
            </span>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-900 sm:text-[2.6rem] sm:leading-[1.1]">
              {title}
            </h2>
            {intro ? (
              <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-ink-500 sm:text-base">
                {intro}
              </p>
            ) : null}
          </div>
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Icon({ name, className = "h-4 w-4" }) {
  const paths = {
    mail: (
      <>
        <rect x="3" y="5" width="18" height="14" rx="2.5" />
        <path d="m3.6 7 7.5 5.4a1.6 1.6 0 0 0 1.8 0L20.4 7" />
      </>
    ),
    github: (
      <path d="M12 2.5a9.5 9.5 0 0 0-3 18.5c.5.1.7-.2.7-.5v-1.9c-2.6.6-3.2-1.2-3.2-1.2-.4-1.1-1-1.4-1-1.4-.9-.6 0-.6 0-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.8.9.1-.7.4-1.2.6-1.4-2.1-.3-4.3-1.1-4.3-4.8 0-1 .4-1.9 1-2.6-.1-.3-.4-1.3.1-2.6 0 0 .8-.3 2.7 1a9.2 9.2 0 0 1 4.9 0c1.9-1.3 2.7-1 2.7-1 .5 1.3.2 2.3.1 2.6.6.7 1 1.6 1 2.6 0 3.7-2.2 4.5-4.3 4.7.3.3.6.9.6 1.9v2.7c0 .3.2.6.7.5A9.5 9.5 0 0 0 12 2.5Z" />
    ),
    linkedin: (
      <>
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M7.5 10.5V17M7.5 7.6v.1M11.5 17v-3.6c0-1.2.9-2.1 2-2.1s2 .9 2 2.1V17M11.5 10.8V17" />
      </>
    ),
    arrow: <path d="M5 12h13m0 0-5.5-5.5M18 12l-5.5 5.5" />,
    spark: (
      <path d="M12 3v4m0 10v4M3 12h4m10 0h4M6.3 6.3l2.8 2.8m5.8 5.8 2.8 2.8m0-11.4-2.8 2.8m-5.8 5.8-2.8 2.8" />
    ),
    cap: (
      <>
        <path d="M3 9.2 12 5l9 4.2-9 4.2z" />
        <path d="M6.5 11.2v4.3c0 1.4 2.5 2.5 5.5 2.5s5.5-1.1 5.5-2.5v-4.3" />
      </>
    ),
    badge: (
      <>
        <circle cx="12" cy="10" r="5.2" />
        <path d="M9 14.6 8 21l4-2 4 2-1-6.4" />
      </>
    ),
    pin: (
      <>
        <path d="M12 21s6.5-5.4 6.5-10a6.5 6.5 0 0 0-13 0C5.5 15.6 12 21 12 21Z" />
        <circle cx="12" cy="11" r="2.3" />
      </>
    ),
  };

  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  );
}

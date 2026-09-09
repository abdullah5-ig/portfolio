"use client";

import { motion } from "framer-motion";
import { coreStack, profile, stats } from "../data/profile";
import { Icon } from "./ui";

const ease = [0.22, 1, 0.36, 1];

function up(delay) {
  return {
    initial: { opacity: 0, y: 26, filter: "blur(8px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    transition: { duration: 0.85, delay, ease },
  };
}

export default function Hero() {
  return (
    <section id="top" className="relative px-5 pb-14 pt-28 sm:px-8 sm:pb-20 sm:pt-40">
      <div className="mx-auto w-full max-w-5xl">
        <motion.div {...up(0.05)}>
          <span className="chip inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-[12px] font-medium text-ink-700">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-mint opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-mint" />
            </span>
            {profile.availability}
          </span>
        </motion.div>

        <div className="mt-7 grid gap-10 lg:grid-cols-[1.55fr_1fr] lg:items-center lg:gap-14">
          <div>
            <motion.h1
              {...up(0.12)}
              className="text-[2.65rem] font-semibold leading-[1.04] tracking-[-0.03em] text-ink-900 sm:text-6xl lg:text-[4.1rem]"
            >
              {profile.name}
            </motion.h1>

            <motion.p
              {...up(0.16)}
              className="mt-2.5 text-[15px] font-semibold uppercase tracking-[0.2em] text-accent-600"
            >
              {profile.discipline}
            </motion.p>

            <motion.p
              {...up(0.22)}
              className="mt-5 max-w-xl text-lg font-medium leading-snug gradient-text sm:text-[1.4rem]"
            >
              {profile.tagline}
            </motion.p>

            <motion.div {...up(0.3)} className="mt-6 flex flex-wrap gap-2">
              {coreStack.map((t) => (
                <span
                  key={t}
                  className="rounded-xl bg-ink-900 px-3 py-1.5 text-[12.5px] font-semibold tracking-tight text-white shadow-[0_6px_18px_-8px_rgba(13,20,36,0.55)]"
                >
                  {t}
                </span>
              ))}
            </motion.div>

            <motion.p {...up(0.36)} className="mt-6 max-w-xl text-[15px] leading-relaxed text-ink-500">
              {profile.headline}
            </motion.p>

            <motion.div {...up(0.42)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink-900 px-5 py-3 text-[14px] font-medium text-white shadow-lift transition-all hover:bg-accent-600"
              >
                Get in touch
                <Icon
                  name="arrow"
                  className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                />
              </a>
              <a
                href="#projects"
                className="chip inline-flex items-center gap-2 rounded-full px-5 py-3 text-[14px] font-medium text-ink-900"
              >
                View work
              </a>
              <span className="inline-flex items-center gap-1.5 pl-1 text-[13px] text-ink-400">
                <Icon name="pin" className="h-4 w-4" />
                {profile.location}
              </span>
            </motion.div>
          </div>

          {/* Portrait / monogram panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.24, ease }}
            className="relative mx-auto w-full max-w-[300px] lg:max-w-none"
          >
            <div className="glass aspect-square rounded-5xl p-2.5">
              <div className="relative z-10 flex h-full w-full items-center justify-center overflow-hidden rounded-[1.9rem] bg-gradient-to-br from-white/90 via-accent-50/70 to-[#e6fbf7]">
                {profile.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.photo}
                    alt={profile.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <>
                    <span
                      aria-hidden="true"
                      className="absolute h-[62%] w-[62%] rounded-full border border-white/90 bg-white/35 shadow-[0_8px_30px_-10px_rgba(24,38,84,0.18)]"
                    />
                    <span
                      aria-hidden="true"
                      className="absolute h-[86%] w-[86%] rounded-full border border-white/60"
                    />
                    <span className="relative text-[5.5rem] font-semibold tracking-tight gradient-text sm:text-[6.5rem]">
                      {profile.initials}
                    </span>
                  </>
                )}
              </div>
            </div>

            <div className="glass absolute -bottom-4 -left-4 rounded-2xl px-4 py-3 sm:-left-6">
              <p className="relative z-10 text-[11px] font-medium uppercase tracking-[0.14em] text-ink-400">
                Current
              </p>
              <p className="relative z-10 mt-0.5 text-[13px] font-semibold text-ink-900">
                {profile.role}
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div {...up(0.54)} className="mt-12 sm:mt-14">
          <div className="hairline" />
          <div className="grid grid-cols-3 gap-4 pt-7">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-2xl font-semibold tracking-tight text-ink-900 sm:text-3xl">
                  {s.value}
                </p>
                <p className="mt-1 text-[12px] leading-snug text-ink-400 sm:text-[13px]">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

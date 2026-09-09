"use client";

import {
  about,
  certifications,
  education,
  experience,
  profile,
  projects,
  skillGroups,
} from "../data/profile";
import { Icon, Reveal, Section } from "./ui";

/* ───────────────────────── About ───────────────────────── */
export function About() {
  return (
    <Section id="about" eyebrow="About" title="The question behind the numbers">
      {/* Data-first framing: analysis is the core, research is where it's applied. */}
      <div className="grid gap-6 lg:grid-cols-[1.35fr_1fr] lg:gap-8">
        <Reveal>
          <div className="glass h-full rounded-4xl p-7 sm:p-9">
            <div className="relative z-10 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className={
                    i === 0
                      ? "text-[16px] leading-relaxed text-ink-700 sm:text-[17px]"
                      : "text-[15px] leading-relaxed text-ink-500"
                  }
                >
                  {p}
                </p>
              ))}
            </div>
          </div>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {about.pillars.map((p, i) => (
            <Reveal key={p.title} delay={0.08 * (i + 1)}>
              <div className="glass glass-hover h-full rounded-3xl p-5 sm:p-6">
                <div className="relative z-10">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                    <Icon name="spark" className="h-[18px] w-[18px]" />
                  </span>
                  <h3 className="mt-3.5 text-[15px] font-semibold tracking-tight text-ink-900">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] leading-relaxed text-ink-500">{p.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}

/* ─────────────────────── Experience ─────────────────────── */
export function Experience() {
  return (
    <Section
      id="experience"
      eyebrow="Experience"
      title="Where the work happens"
      intro="Where I have applied the analysis so far."
    >
      <div className="space-y-5">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={0.06 * i}>
            <article className="glass glass-hover rounded-4xl p-7 sm:p-9">
              <div className="relative z-10">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-ink-900 sm:text-2xl">
                      {job.role}
                    </h3>
                    <p className="mt-1 text-[15px] font-medium text-accent-600">{job.company}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[12px] font-medium ${
                        job.current
                          ? "bg-mint/15 text-[#1d8a7c]"
                          : "bg-white/70 text-ink-500"
                      }`}
                    >
                      {job.current && <span className="h-1.5 w-1.5 rounded-full bg-mint" />}
                      {job.period}
                    </span>
                    <p className="mt-1.5 text-[12px] text-ink-400">{job.location}</p>
                  </div>
                </div>

                <p className="mt-5 text-[15px] leading-relaxed text-ink-700">{job.summary}</p>

                <ul className="mt-5 space-y-2.5">
                  {job.points.map((pt) => (
                    <li key={pt} className="flex gap-3 text-[14px] leading-relaxed text-ink-500">
                      <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent-300" />
                      {pt}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {job.tags.map((t) => (
                    <span
                      key={t}
                      className="chip rounded-full px-3 py-1.5 text-[12px] font-medium text-ink-700"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ──────────────── Education + Certifications ──────────────── */
export function Education() {
  return (
    <Section id="education" eyebrow="Education & Credentials" title="Foundation">
      <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
        <Reveal>
          <div className="glass h-full rounded-4xl p-7 sm:p-8">
            <div className="relative z-10">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent-50 text-accent-600">
                <Icon name="cap" className="h-[18px] w-[18px]" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                Education
              </h3>
              <ol className="mt-5 space-y-5">
                {education.map((e) => (
                  <li key={e.school} className="relative border-l border-ink-900/10 pl-5">
                    <span
                      className={`absolute -left-[4.5px] top-1.5 h-2 w-2 rounded-full ${
                        e.current ? "bg-mint" : "bg-ink-900/20"
                      }`}
                    />
                    <p className="text-[15px] font-semibold tracking-tight text-ink-900">
                      {e.school}
                    </p>
                    <p className="mt-0.5 text-[13.5px] text-ink-500">{e.detail}</p>
                    <p className="mt-0.5 text-[12.5px] text-ink-400">{e.period}</p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="glass h-full rounded-4xl p-7 sm:p-8">
            <div className="relative z-10">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#e6fbf7] text-[#1d8a7c]">
                <Icon name="badge" className="h-[18px] w-[18px]" />
              </span>
              <h3 className="mt-4 text-[15px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                Certifications
              </h3>
              <ul className="mt-5 space-y-3">
                {certifications.map((c) => (
                  <li key={c.name} className="chip rounded-2xl px-4 py-3.5">
                    <p className="text-[14px] font-semibold leading-snug tracking-tight text-ink-900">
                      {c.name}
                    </p>
                    <p className="mt-0.5 text-[12.5px] text-ink-400">{c.issuer}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

/* ───────────────────────── Skills ───────────────────────── */
export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Toolkit"
      intro="Analysis and reporting first. The research skills sit on top of those."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => (
          <Reveal key={g.title} delay={0.05 * i}>
            <div className="glass glass-hover h-full rounded-3xl p-6">
              <div className="relative z-10">
                <h3 className="text-[14px] font-semibold tracking-tight text-ink-900">
                  {g.title}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => {
                    const hot = g.featured?.includes(s);
                    return (
                      <span
                        key={s}
                        className={`rounded-full px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                          hot
                            ? "bg-ink-900 text-white"
                            : "chip text-ink-700"
                        }`}
                      >
                        {s}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

/* ───────────────────────── Projects ───────────────────────── */
export function Projects() {
  return (
    <Section
      id="projects"
      eyebrow="Projects"
      title="Selected work"
      intro="Real data, real findings. The two with links have the full code and write-up on GitHub."
    >
      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.06 * i}>
            <article className="glass glass-hover group flex h-full flex-col overflow-hidden rounded-4xl">
              {/* Optional chart/screenshot. Add `image: "/projects/name.png"`
                  to a project in data/profile.js and it appears here. */}
              {p.image ? (
                <div className="relative z-10 border-b border-white/70 bg-white/55 p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={p.image}
                    alt={p.imageAlt || p.title}
                    className="h-[190px] w-full rounded-2xl bg-white object-contain"
                  />
                </div>
              ) : null}
              <div className="relative z-10 flex flex-1 flex-col p-7">
                <span className="w-fit rounded-full bg-accent-50 px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.1em] text-accent-600">
                  {p.category}
                </span>
                <h3 className="mt-4 text-[18px] font-semibold leading-snug tracking-tight text-ink-900">
                  {p.title}
                </h3>
                <p className="mt-2.5 flex-1 text-[14px] leading-relaxed text-ink-500">{p.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-ink-900/15 bg-white/45 px-2.5 py-1 text-[11.5px] font-medium text-ink-500"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                {p.link ? (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-1.5 text-[13.5px] font-medium text-accent-600"
                  >
                    View project
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                    />
                  </a>
                ) : null}
              </div>
            </article>
          </Reveal>
        ))}

        <Reveal delay={0.06 * projects.length}>
          <article className="flex h-full min-h-[200px] items-center justify-center rounded-4xl border border-dashed border-ink-900/12 bg-white/25 p-7 text-center backdrop-blur-sm">
            <div>
              <p className="text-[14px] font-medium text-ink-500">More projects on the way</p>
              <a
                href={profile.links.github}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-accent-600"
              >
                See my GitHub
                <Icon name="arrow" className="h-4 w-4" />
              </a>
            </div>
          </article>
        </Reveal>
      </div>
    </Section>
  );
}

/* ───────────────────────── Contact ───────────────────────── */
export function Contact() {
  const cards = [
    { label: "Email", value: profile.links.email, href: `mailto:${profile.links.email}`, icon: "mail" },
    { label: "GitHub", value: "abdullah5-ig", href: profile.links.github, icon: "github" },
    { label: "LinkedIn", value: "abdullah-naqvi", href: profile.links.linkedin, icon: "linkedin" },
  ];

  return (
    <Section id="contact" eyebrow="Contact" title="Let's talk">
      <Reveal>
        <div className="glass rounded-5xl p-8 sm:p-12">
          <div className="relative z-10">
            <p className="max-w-2xl text-lg font-medium leading-snug text-ink-700 sm:text-[1.35rem]">
              I'm always open to connecting with recruiters and professionals in data analytics,
              market research, product, and applied AI.
            </p>

            <div className="mt-9 grid gap-3 sm:grid-cols-3">
              {cards.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  target={c.icon === "mail" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="chip group flex items-center gap-3 rounded-2xl px-4 py-4"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/80 text-ink-700 transition-colors group-hover:text-accent-600">
                    <Icon name={c.icon} className="h-[18px] w-[18px]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-ink-400">
                      {c.label}
                    </span>
                    <span className="block truncate text-[13.5px] font-medium text-ink-900">
                      {c.value}
                    </span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
export function Footer() {
  return (
    <footer className="px-5 pb-10 sm:px-8">
      <div className="mx-auto w-full max-w-5xl">
        <div className="hairline" />
        <div className="flex flex-col items-center justify-between gap-3 pt-6 sm:flex-row">
          <p className="text-[12.5px] text-ink-400">
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>
          <p className="text-[12.5px] text-ink-400">Built with Next.js, Tailwind CSS & Framer Motion</p>
        </div>
      </div>
    </footer>
  );
}

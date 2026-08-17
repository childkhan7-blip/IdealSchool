import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowRight,
  BookOpen,
  FlaskConical,
  GraduationCap,
  Library,
  Mail,
  MapPin,
  Menu,
  Phone,
  Clock,
  Trophy,
  X,
} from "lucide-react";

import principalImg from "@/assets/principal.jpg";
import sanaullahImg from "@/assets/teacher-sanaullah.jpg";
import karimImg from "@/assets/teacher-karim.jpg";
import gullNawazImg from "@/assets/teacher-gull-nawaz.jpg";
import qariJamilImg from "@/assets/teacher-qari-jamil.jpg";
import ahmedImg from "@/assets/teacher-ahmed.jpg";
import zhoibImg from "@/assets/teacher-zhoib.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ideal Grammar School | Excellence, Discipline & Care" },
      {
        name: "description",
        content:
          "Ideal Grammar School: meet our principal and faculty, view our 45-minute period schedule, facilities, and contact details.",
      },
      { property: "og:title", content: "Ideal Grammar School" },
      {
        property: "og:description",
        content:
          "A modern school built on academic excellence and discipline. Faculty, schedule, facilities and admissions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

/* ---------------------------------------------------------------
 * Easily editable content — replace names, text and image URLs here
 * ------------------------------------------------------------- */
const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Principal's Message", href: "#principal" },
  { label: "Teachers", href: "#teachers" },
  { label: "Schedule", href: "#schedule" },
  { label: "About & Facilities", href: "#facilities" },
  { label: "Contact & Location", href: "#contact" },
];

type Teacher = {
  name: string;
  role: string;
  bio: string;
  image: string;
  details?: string;
};

const TEACHERS: Teacher[] = [
  {
    name: "Sir Sanaullah",
    role: "Science",
    bio: "Science teacher with 10 years of experience across physics, chemistry and biology.",
    details:
      "Sir Sanaullah has taught science for 10 years and leads our inquiry-based practical program. He runs weekly lab sessions, prepares students for board examinations and the annual science exhibition, and mentors the junior science club. His classes pair strong conceptual grounding with hands-on experiments so students learn by observing, questioning and testing.",
    image: sanaullahImg,
  },
  {
    name: "Sir Karim",
    role: "English",
    bio: "English teacher with 10+ years of experience in language, literature and debate.",
    details:
      "Sir Karim has taught English for more than 10 years and heads our language and literature program. He coaches the school debating and declamation teams, runs the creative writing club, and prepares senior students for board English papers. His lessons build vocabulary, grammar and reading comprehension step by step, with weekly presentations so every student learns to speak with confidence.",
    image: karimImg,
  },
  {
    name: "Sir Gull Nawaz",
    role: "General / Social Studies",
    bio: "General and Social Studies teacher with 6+ years of classroom experience.",
    details:
      "Sir Gull Nawaz has taught General Knowledge and Social Studies for over 6 years across the middle and senior sections. He covers geography, civics, history and current affairs, using maps, timelines and class discussions to connect lessons to everyday life. He supervises the general knowledge quiz team, guides students through project work and field visits, and keeps a strong focus on discipline and study habits.",
    image: gullNawazImg,
  },
  {
    name: "Qari Jamil",
    role: "Islamiyat",
    bio: "Islamiyat teacher with 7+ years of experience in Islamic studies.",
    details:
      "Qari Jamil has taught Islamiyat and Islamic studies for more than 7 years. He leads Qur'an recitation with correct tajweed, memorisation (hifz) circles and the daily morning assembly duas. His lessons cover seerah, hadith, fiqh basics and Islamic history, with a steady emphasis on akhlaq — honesty, respect for parents and teachers, and good conduct in and outside school. He also prepares students for Naat and Qirat competitions.",
    image: qariJamilImg,
  },
  {
    name: "Sir Ahmed",
    role: "Mathematics",
    bio: "Mathematics teacher with 5 years of experience from primary to senior classes.",
    details:
      "Sir Ahmed has taught Mathematics for 5 years, covering arithmetic, algebra, geometry and trigonometry. He builds concepts step by step on the board, sets daily practice work and runs extra problem-solving sessions before examinations. He also trains the school mathematics olympiad and mental-maths teams, and keeps parents updated on each student's progress.",
    image: ahmedImg,
  },
  {
    name: "Sir Zhoib",
    role: "Urdu",
    bio: "Urdu teacher with 4+ years of experience in language, grammar and literature.",
    details:
      "Sir Zhoib has taught Urdu for more than 4 years across the primary and middle sections. He covers qawaid (grammar), essay and letter writing, nazm and nasr, and improves handwriting and pronunciation through daily reading practice. He prepares students for Urdu speech, Naat and hamd competitions, and encourages a love for Urdu poetry and literature alongside strong examination results.",
    image: zhoibImg,
  },
];

const SCHEDULE = [
  { name: "Assembly / Homeroom", time: "07:45 – 08:00", mins: 15, type: "open" },
  { name: "Period 1", time: "08:00 – 08:45", mins: 45, type: "period" },
  { name: "Period 2", time: "08:45 – 09:30", mins: 45, type: "period" },
  { name: "Period 3", time: "09:30 – 10:15", mins: 45, type: "period" },
  { name: "Period 4", time: "10:15 – 11:00", mins: 45, type: "period" },
  { name: "Section Break / Recess", time: "11:00 – 11:30", mins: 30, type: "break" },
  { name: "Period 5", time: "11:30 – 12:15", mins: 45, type: "period" },
  { name: "Period 6", time: "12:15 – 13:00", mins: 45, type: "period" },
  { name: "Period 7", time: "13:00 – 13:45", mins: 45, type: "period" },
];

const FACILITIES = [
  {
    icon: GraduationCap,
    title: "Academic Excellence",
    text: "A rigorous curriculum, continuous assessment and small-group mentoring that keeps every learner progressing.",
  },
  {
    icon: FlaskConical,
    title: "Computer & Science Labs",
    text: "Fully equipped physics, chemistry, biology and computing labs with hands-on weekly practicals.",
    to: "/labs" as const,
  },

  {
    icon: Library,
    title: "Library",
    text: "Over 12,000 titles, quiet study bays and a digital catalogue open through the school day.",
    to: "/library" as const,
  },
  {
    icon: Trophy,
    title: "Sports & Extra-Curriculars",
    text: "Cricket, football, athletics, debate, art and robotics clubs building teamwork and character.",
  },
];

const CONTACT = {
  address: "24 Grammar Avenue, Model Town, Lahore",
  email: "info@idealgrammarschool.edu",
  phone: "+92 300 1234567",
  hours: "Mon – Sat, 7:30 AM – 3:00 PM",
  mapEmbed:
    "https://www.google.com/maps?q=Model+Town+Lahore&output=embed",
};

/* -------------------------------------------------------------- */

function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 py-3.5">
        <a href="#home" className="flex items-center gap-3">
          <span className="surface-navy grid size-10 place-items-center rounded-xl">
            <BookOpen className="size-5 text-gold" aria-hidden />
          </span>
          <span className="font-display text-base leading-tight font-semibold text-primary sm:text-lg">
            Ideal Grammar School
          </span>
        </a>

        <ul className="hidden items-center gap-6 xl:flex">
          {NAV_LINKS.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="btn-gold hidden rounded-full px-5 py-2.5 text-sm font-semibold sm:inline-flex"
          >
            Apply / Contact Us
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            className="grid size-10 place-items-center rounded-lg border border-border text-primary xl:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-border bg-background px-5 pb-5 xl:hidden">
          <ul className="flex flex-col gap-1 pt-3">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-primary"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn-gold mt-3 block rounded-full px-5 py-3 text-center text-sm font-semibold sm:hidden"
          >
            Apply / Contact Us
          </a>
        </div>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 sm:pt-36 sm:pb-24">
      <div
        className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full opacity-25 blur-3xl"
        style={{ background: "var(--gradient-gold)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -bottom-52 -left-40 size-[32rem] rounded-full opacity-20 blur-3xl"
        style={{ background: "var(--gradient-navy)" }}
        aria-hidden
      />
      <div
        id="principal"
        className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16"
      >
        <div className="surface-3d relative rounded-3xl p-3">
          <div className="overflow-hidden rounded-2xl">
            <img
              src={principalImg}
              alt="Principal of Ideal Grammar School"
              width={912}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="surface-navy absolute -bottom-5 left-6 rounded-2xl px-5 py-3">
            <p className="text-xs tracking-widest text-gold uppercase">Est. 1998</p>
            <p className="text-sm font-semibold">Excellence & Discipline</p>
          </div>
        </div>

        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
            Principal's Spotlight
          </span>
          <h1 className="mt-5 text-4xl leading-[1.05] font-bold text-primary sm:text-5xl lg:text-6xl">
            Principal Name
          </h1>
          <p className="text-gradient-gold mt-3 text-xl font-semibold sm:text-2xl">
            Principal's Welcome Message
          </p>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            At Ideal Grammar School we believe academic excellence grows out of daily
            discipline. Every 45-minute period is planned with purpose, every teacher is a
            mentor, and every child is known by name. We prepare students not only to score
            well, but to think clearly, act honestly and lead with humility.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#contact" className="btn-gold rounded-full px-6 py-3 text-sm font-semibold">
              Apply for Admission
            </a>
            <a
              href="#teachers"
              className="surface-3d rounded-full px-6 py-3 text-sm font-semibold text-primary"
            >
              Meet Our Faculty
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <p className="text-xs font-semibold tracking-[0.2em] text-gold uppercase">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-muted-foreground">{subtitle}</p>}
    </div>
  );
}

function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function Teachers() {
  const [openTeacher, setOpenTeacher] = useState<string | null>(null);

  return (
    <section id="teachers" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Our Faculty"
          title="Teachers who know every student"
          subtitle="A qualified, caring team leading each department with subject mastery and mentorship."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TEACHERS.map((t) => (
            <article key={t.name} className="surface-3d overflow-hidden rounded-3xl">
              <img
                src={t.image}
                alt={`${t.name}, ${t.role}`}
                loading="lazy"
                width={600}
                height={420}
                className="h-56 w-full object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-primary">{t.name}</h3>
                <p className="mt-1 text-sm font-semibold text-gold">{t.role}</p>
                {t.details ? (
                  <>
                    <button
                      type="button"
                      onClick={() => setOpenTeacher(openTeacher === t.name ? null : t.name)}
                      aria-expanded={openTeacher === t.name}
                      aria-controls={`teacher-details-${slugify(t.name)}`}
                      className="mt-3 block w-full cursor-pointer text-left text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                    >
                      {t.bio}
                      <span className="mt-2 block text-xs font-semibold text-gold">
                        {openTeacher === t.name ? "Show less ↑" : "Read more ↓"}
                      </span>
                    </button>
                    {openTeacher === t.name && (
                      <p
                        id={`teacher-details-${slugify(t.name)}`}
                        className="mt-3 border-t border-border pt-3 text-sm leading-relaxed text-muted-foreground"
                      >
                        {t.details}
                      </p>
                    )}
                  </>
                ) : (
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.bio}</p>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Schedule() {
  return (
    <section id="schedule" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="Daily Routine"
          title="Every academic period is strictly 45 minutes"
          subtitle="A predictable rhythm that protects teaching time and keeps focus high all day."
        />

        <div className="surface-navy mb-8 flex flex-col items-center justify-between gap-4 rounded-3xl px-7 py-6 sm:flex-row">
          <div className="flex items-center gap-4">
            <Clock className="size-8 text-gold" aria-hidden />
            <div>
              <p className="text-xs tracking-widest text-gold uppercase">Period length</p>
              <p className="text-2xl font-bold">45 minutes — no exceptions</p>
            </div>
          </div>
          <p className="text-sm text-primary-foreground/75">
            7 periods · 1 assembly · 1 recess · 07:45 – 13:45
          </p>
        </div>

        <ol className="grid gap-4">
          {SCHEDULE.map((s) => (
            <li
              key={s.name}
              className={
                s.type === "break"
                  ? "flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-dashed border-gold bg-gold-soft/30 px-6 py-5"
                  : "surface-3d flex flex-wrap items-center justify-between gap-3 rounded-2xl px-6 py-5"
              }
            >
              <div className="flex items-center gap-4">
                <span
                  className={
                    s.type === "period"
                      ? "surface-navy grid size-10 shrink-0 place-items-center rounded-xl text-sm font-bold"
                      : "grid size-10 shrink-0 place-items-center rounded-xl border border-gold text-sm font-bold text-primary"
                  }
                >
                  {s.type === "period" ? s.name.replace("Period ", "") : "•"}
                </span>
                <div>
                  <p className="font-semibold text-primary">{s.name}</p>
                  <p className="text-sm text-muted-foreground">{s.time}</p>
                </div>
              </div>
              <span
                className={
                  s.mins === 45
                    ? "btn-gold rounded-full px-4 py-1.5 text-xs font-bold"
                    : "rounded-full border border-border px-4 py-1.5 text-xs font-bold text-muted-foreground"
                }
              >
                {s.mins} mins
              </span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Facilities() {
  return (
    <section id="facilities" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="About & Facilities"
          title="The pillars of an Ideal education"
          subtitle="Purpose-built spaces and programs that support learning beyond the textbook."
        />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FACILITIES.map((f) => {
            const body = (
              <>
                <span className="surface-navy mb-5 grid size-12 place-items-center rounded-2xl">
                  <f.icon className="size-6 text-gold" aria-hidden />
                </span>
                <h3 className="text-lg font-semibold text-primary">{f.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
                {"to" in f && f.to ? (
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-gold">
                    {f.title === "Library" ? "Explore our library" : "Explore our labs"}
                    <ArrowRight className="size-4" aria-hidden />
                  </span>
                ) : null}
              </>
            );

            return "to" in f && f.to ? (
              <Link
                key={f.title}
                to={f.to}
                className="surface-3d block rounded-3xl p-7 transition-transform duration-300 hover:-translate-y-1 focus-visible:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
              >
                {body}
              </Link>
            ) : (
              <article key={f.title} className="surface-3d rounded-3xl p-7">
                {body}
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading
          eyebrow="Contact & Location"
          title="Visit us or send a message"
          subtitle="Admissions enquiries are answered within one working day."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <div className="surface-3d grid gap-5 rounded-3xl p-7 sm:grid-cols-2">
              <div className="flex gap-3">
                <MapPin className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-primary">Address</p>
                  <p className="text-sm text-muted-foreground">{CONTACT.address}</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-primary">Email</p>
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {CONTACT.email}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Phone className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-primary">Phone</p>
                  <a
                    href={`tel:${CONTACT.phone.replace(/\s/g, "")}`}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {CONTACT.phone}
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
                <div>
                  <p className="text-sm font-semibold text-primary">Opening hours</p>
                  <p className="text-sm text-muted-foreground">{CONTACT.hours}</p>
                </div>
              </div>
            </div>

            <div className="surface-3d overflow-hidden rounded-3xl p-3">
              <iframe
                title="Ideal Grammar School location map"
                src={CONTACT.mapEmbed}
                loading="lazy"
                className="h-72 w-full rounded-2xl border-0"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <form
            className="surface-3d rounded-3xl p-7"
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
          >
            <h3 className="text-xl font-semibold text-primary">Send us a message</h3>
            <div className="mt-6 grid gap-4">
              <div className="grid gap-2">
                <label htmlFor="name" className="text-sm font-medium text-primary">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  required
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  placeholder="Your full name"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-medium text-primary">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  placeholder="you@example.com"
                />
              </div>
              <div className="grid gap-2">
                <label htmlFor="message" className="text-sm font-medium text-primary">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none transition-shadow focus:ring-2 focus:ring-ring"
                  placeholder="How can we help?"
                />
              </div>
              <button type="submit" className="btn-gold rounded-full px-6 py-3 text-sm font-semibold">
                Send message
              </button>
              {sent && (
                <p role="status" className="text-sm font-medium text-primary">
                  Thank you — your message has been noted. We'll be in touch shortly.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="surface-navy mt-10 rounded-t-[2.5rem]">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid size-10 place-items-center rounded-xl bg-primary-foreground/10">
              <BookOpen className="size-5 text-gold" aria-hidden />
            </span>
            <span className="font-display text-lg font-semibold">Ideal Grammar School</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-primary-foreground/70">
            Nurturing academic excellence, discipline and character since 1998.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-gold uppercase">Quick links</h3>
          <ul className="mt-4 space-y-2">
            {NAV_LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-sm text-primary-foreground/70 transition-colors hover:text-gold"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-gold uppercase">Reach us</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>{CONTACT.address}</li>
            <li>{CONTACT.email}</li>
            <li>{CONTACT.phone}</li>
            <li>{CONTACT.hours}</li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-widest text-gold uppercase">Follow</h3>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li>
              <a href="#" className="transition-colors hover:text-gold">
                Facebook — @idealgrammar
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-gold">
                Instagram — @idealgrammar
              </a>
            </li>
            <li>
              <a href="#" className="transition-colors hover:text-gold">
                YouTube — Ideal Grammar School
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 px-5 py-6">
        <p className="mx-auto max-w-7xl text-center text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Ideal Grammar School. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Teachers />
        <Schedule />
        <Facilities />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

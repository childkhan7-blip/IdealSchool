import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  BookOpen,
  Brain,
  GraduationCap,
  Sparkles,
  Target,
  Trophy,
} from "lucide-react";
import academicExcellenceImage from "@/assets/academic-excellence.svg";

export const Route = createFileRoute("/academic-excellence")({
  head: () => ({
    meta: [
      { title: "Academic Excellence | Ideal Grammar School" },
      {
        name: "description",
        content:
          "Academic excellence at Ideal Grammar School: rigorous curriculum, continuous assessment, small-group mentoring, board exam preparation and outstanding results.",
      },
      { property: "og:title", content: "Academic Excellence — Ideal Grammar School" },
      {
        property: "og:description",
        content:
          "A rigorous curriculum, continuous assessment and small-group mentoring that keeps every learner progressing toward excellence.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AcademicExcellencePage,
});

const PILLARS = [
  {
    icon: BookOpen,
    title: "Rigorous Curriculum",
    text: "A carefully structured curriculum aligned with the national board syllabus, enriched with additional practice, critical thinking exercises and real-world applications in every subject.",
  },
  {
    icon: Target,
    title: "Continuous Assessment",
    text: "Weekly tests, monthly assessments and term examinations track every student's progress. Detailed feedback helps parents and teachers identify strengths and areas for improvement early.",
  },
  {
    icon: Brain,
    title: "Small-Group Mentoring",
    text: "Every student is known by name. Small-group mentoring sessions provide extra support in challenging subjects, ensuring no learner is left behind and every child reaches their full potential.",
  },
  {
    icon: Trophy,
    title: "Board Exam Preparation",
    text: "Dedicated revision programs, past-paper practice and mock examinations prepare senior students thoroughly for board exams, building confidence and exam technique.",
  },
];

const FACTS = [
  { label: "Board results", value: "98% pass rate" },
  { label: "Top scorers", value: "A+ grade holders" },
  { label: "Assessment", value: "Weekly + monthly" },
  { label: "Mentoring", value: "Small groups" },
];

function AcademicExcellencePage() {
  return (
    <main className="min-h-screen pb-20">
      <div className="mx-auto max-w-6xl px-5 pt-10">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          <ArrowLeft className="size-4" aria-hidden />
          Back to home
        </Link>

        <div className="mt-8 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold tracking-[0.2em] text-gold uppercase">
              About & Facilities
            </p>
            <h1 className="mt-3 text-3xl font-bold text-primary sm:text-4xl">
              Academic Excellence at Ideal Grammar School
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At Ideal Grammar School, academic excellence is not just a goal — it is our
              foundation. We believe every child has the potential to achieve greatness, and our
              job is to unlock that potential through a rigorous curriculum, continuous assessment
              and dedicated mentoring.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Our students consistently achieve outstanding results in board examinations, with a
              98% pass rate and numerous A+ grade holders every year. But excellence at Ideal
              Grammar School goes beyond grades — we nurture critical thinking, curiosity and a
              lifelong love of learning.
            </p>
          </div>

          <figure className="surface-3d overflow-hidden rounded-3xl p-2">
            <img
              src={academicExcellenceImage}
              alt="Academic excellence at Ideal Grammar School — trophy, graduation cap, books and A+ badge"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[26rem]"
            />
            <figcaption className="px-3 py-3 text-center text-xs text-muted-foreground">
              Excellence in every subject, every assessment, every student.
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
              <Award className="size-4 text-gold" aria-hidden />
              A Culture of Excellence
            </span>
            <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
              Where Every Student Strives for Greatness
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Academic excellence at Ideal Grammar School is built on a simple belief: every
              student can succeed when given the right support. Our teachers go beyond the
              textbook, connecting lessons to real life and encouraging students to ask questions,
              think deeply and take pride in their work.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              From the youngest primary students learning their first letters to senior students
              preparing for board examinations, every child at Ideal Grammar School is on a journey
              of continuous improvement. We celebrate effort as much as achievement, and we
              recognise progress at every step.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-gold bg-gold-soft/30 px-5 py-4">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-primary">Why students excel: </span>
                Small class sizes, dedicated teachers, regular feedback and a culture that rewards
                hard work — the perfect formula for academic success at every level.
              </p>
            </div>
          </div>
          <figure className="surface-3d overflow-hidden rounded-3xl p-2">
            <img
              src={academicExcellenceImage}
              alt="Ideal Grammar School academic excellence — a symbol of achievement and learning"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[24rem]"
            />
            <figcaption className="px-3 py-3 text-center text-xs text-muted-foreground">
              The pursuit of excellence — one of the hallmarks of Ideal Grammar School.
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {PILLARS.map((p) => (
            <article key={p.title} className="surface-3d rounded-3xl p-7">
              <span className="surface-navy mb-5 grid size-12 place-items-center rounded-2xl">
                <p.icon className="size-6 text-gold" aria-hidden />
              </span>
              <h2 className="text-lg font-semibold text-primary">{p.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
            </article>
          ))}
        </div>

        <div className="surface-navy mt-10 grid gap-6 rounded-3xl px-7 py-8 sm:grid-cols-2 lg:grid-cols-4">
          {FACTS.map((f) => (
            <div key={f.label}>
              <p className="text-xs tracking-widest text-gold uppercase">{f.label}</p>
              <p className="mt-1 text-base font-semibold">{f.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 flex items-start gap-4 rounded-3xl border border-dashed border-gold bg-gold-soft/30 px-6 py-6">
          <GraduationCap className="mt-0.5 size-6 shrink-0 text-gold" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Our promise. </span>
            Every student who walks through our gates leaves with more than knowledge — they leave
            with confidence, discipline and the skills to succeed in examinations, in higher
            education and in life.
          </p>
        </div>
      </div>
    </main>
  );
}
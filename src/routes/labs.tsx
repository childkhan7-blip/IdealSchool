import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Cpu, FlaskConical, Microscope, ShieldCheck, Wifi } from "lucide-react";
import labImage from "@/assets/science-lab.png";

export const Route = createFileRoute("/labs")({
  head: () => ({
    meta: [
      { title: "Computer & Science Labs | Ideal Grammar School" },
      {
        name: "description",
        content:
          "Inside the Ideal Grammar School laboratories: physics, chemistry, biology and computer labs, safety standards, equipment and weekly practical sessions.",
      },
      { property: "og:title", content: "Computer & Science Labs — Ideal Grammar School" },
      {
        property: "og:description",
        content:
          "Purpose-built physics, chemistry, biology and computing labs with hands-on weekly practicals and full safety supervision.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LabsPage,
});

const LABS = [
  {
    icon: FlaskConical,
    title: "Chemistry Laboratory",
    text: "Fume hood, analytical balances, titration and reagent stations with clearly labelled chemical storage. Students perform every board-syllabus practical themselves under teacher supervision.",
  },
  {
    icon: Microscope,
    title: "Biology Laboratory",
    text: "Compound microscopes, prepared and fresh slides, dissection kits, anatomical models and specimen jars for hands-on study of cells, tissues and systems.",
  },
  {
    icon: Cpu,
    title: "Physics Laboratory",
    text: "Optics benches, electricity and magnetism kits, mechanics apparatus and measuring instruments for accurate experimental work and error analysis.",
  },
  {
    icon: Wifi,
    title: "Computer Laboratory",
    text: "Modern workstations with broadband internet, teaching MS Office, typing skills, web basics and introductory programming from the middle section upward.",
  },
];

const FACTS = [
  { label: "Practical sessions", value: "Weekly, every science class" },
  { label: "Students per bench", value: "Maximum 4" },
  { label: "Supervision", value: "Subject teacher + lab assistant" },
  { label: "Safety", value: "Goggles, gloves, first-aid & fire kit" },
];

function LabsPage() {
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
              Computer & Science Laboratories
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At Ideal Grammar School we believe science is learned by doing. Our laboratories are
              purpose-built spaces where every student — not just a demonstrator — handles the
              apparatus, records observations and draws conclusions. Each lab is fully equipped for
              the board syllabus and supervised by a subject teacher with a trained lab assistant.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Practical work runs weekly through the academic year and feeds directly into our annual
              science exhibition, where students present their own projects to parents and guests.
            </p>
          </div>

          <figure className="surface-3d overflow-hidden rounded-3xl p-2">
            <img
              src={labImage}
              alt="Ideal Grammar School students performing a chemistry experiment with their teacher in the science laboratory"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[26rem]"
            />
            <figcaption className="px-3 py-3 text-center text-xs text-muted-foreground">
              Senior students at work in the Ideal Grammar School chemistry lab.
            </figcaption>
          </figure>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {LABS.map((l) => (
            <article key={l.title} className="surface-3d rounded-3xl p-7">
              <span className="surface-navy mb-5 grid size-12 place-items-center rounded-2xl">
                <l.icon className="size-6 text-gold" aria-hidden />
              </span>
              <h2 className="text-lg font-semibold text-primary">{l.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{l.text}</p>
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
          <ShieldCheck className="mt-0.5 size-6 shrink-0 text-gold" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Safety first. </span>
            Every lab displays its rules at the entrance, keeps a stocked first-aid box and fire
            extinguisher, and no experiment begins before the supervising teacher has briefed the
            class.
          </p>
        </div>
      </div>
    </main>
  );
}

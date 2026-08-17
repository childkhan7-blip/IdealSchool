import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowLeft,
  Award,
  Dumbbell,
  FlaskConical,
  Music,
  Palette,
  Sparkles,
  Trophy,
  Users,
} from "lucide-react";
import sportsExtra1 from "@/assets/sports-extra-1.png";
import sportsExtra2 from "@/assets/sports-extra-2.png";

export const Route = createFileRoute("/sports-extra-curriculars")({
  head: () => ({
    meta: [
      { title: "Sports & Extra-Curriculars | Ideal Grammar School" },
      {
        name: "description",
        content:
          "Sports and extra-curricular activities at Ideal Grammar School: cricket, football, athletics, debate, art and robotics clubs building teamwork and character.",
      },
      { property: "og:title", content: "Sports & Extra-Curriculars — Ideal Grammar School" },
      {
        property: "og:description",
        content:
          "Cricket, football, athletics, debate, art and robotics clubs — building teamwork, confidence and character beyond the classroom.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: SportsExtraCurricularsPage,
});

const ACTIVITIES = [
  {
    icon: Trophy,
    title: "Cricket",
    text: "Our cricket team trains on the school ground with proper coaching, nets and inter-school matches. Students learn teamwork, sportsmanship and the discipline of regular practice.",
  },
  {
    icon: Dumbbell,
    title: "Football & Athletics",
    text: "Football practice on the school field plus athletics events — sprints, long jump and relay races — keep students active and build physical fitness and healthy competition.",
  },
  {
    icon: Users,
    title: "Debate & Declamation",
    text: "Weekly debate and declamation sessions develop confident public speakers. Students compete in Urdu and English speech contests, school assemblies and inter-school competitions.",
  },
  {
    icon: Palette,
    title: "Art & Creative Writing",
    text: "Painting, drawing, calligraphy and creative writing clubs let students express themselves. Art competitions and the school magazine showcase their best work each year.",
  },
  {
    icon: Music,
    title: "Naat, Qirat & Recitation",
    text: "Students are trained in Naat, Qirat and Qur'an recitation with correct tajweed, preparing them for school and inter-school competitions with confidence and devotion.",
  },
  {
    icon: FlaskConical,
    title: "Science & Robotics Club",
    text: "From science projects to simple robotics, curious minds explore technology and invention. Students present their projects at the annual science exhibition.",
  },
];

const FACTS = [
  { label: "Sports ground", value: "Cricket & football" },
  { label: "Clubs", value: "10+ active clubs" },
  { label: "Competitions", value: "Inter-school events" },
  { label: "Annual events", value: "Sports day + science exhibition" },
];

function SportsExtraCurricularsPage() {
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
              Sports & Extra-Curricular Activities
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At Ideal Grammar School we believe education goes beyond the textbook. Our sports
              and extra-curricular program gives every student the chance to discover their
              talents, build confidence and learn life skills — teamwork, discipline, leadership
              and perseverance — that stay with them long after they leave school.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              From cricket and football on the school ground to debate, art, robotics and Naat
              competitions, there is something for every interest. Our students participate in
              inter-school events and shine in both academic and co-curricular arenas.
            </p>
          </div>

          <figure className="surface-3d overflow-hidden rounded-3xl p-2">
            <img
              src={sportsExtra1}
              alt="Ideal Grammar School students enjoying sports and extra-curricular activities together"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[26rem]"
            />
            <figcaption className="px-3 py-3 text-center text-xs text-muted-foreground">
              Our students — active, confident and full of energy.
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <figure className="surface-3d overflow-hidden rounded-3xl p-2">
            <img
              src={sportsExtra2}
              alt="Ideal Grammar School students participating in extra-curricular activities"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[24rem]"
            />
            <figcaption className="px-3 py-3 text-center text-xs text-muted-foreground">
              Building character, teamwork and lifelong friendships.
            </figcaption>
          </figure>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
              <Award className="size-4 text-gold" aria-hidden />
              Beyond the Classroom
            </span>
            <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
              Where Talents Grow and Friendships Bloom
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              At Ideal Grammar School, extra-curricular activities are not an afterthought — they
              are an essential part of every student's journey. Our students eagerly look forward
              to sports day, where the whole school comes together to cheer, compete and
              celebrate. The cricket and football grounds echo with energy during recess and
              after-school practice sessions.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Beyond sports, our debate competitions build confident speakers, our art club
              nurtures creativity, and our robotics and science clubs inspire future innovators.
              Every student is encouraged to join at least one club — because at Ideal Grammar
              School, every child has a talent waiting to be discovered.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-gold bg-gold-soft/30 px-5 py-4">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-primary">Why students love it: </span>
                Sports and clubs give students the chance to shine outside the classroom — building
                confidence, friendships and character that last a lifetime.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ACTIVITIES.map((a) => (
            <article key={a.title} className="surface-3d rounded-3xl p-7">
              <span className="surface-navy mb-5 grid size-12 place-items-center rounded-2xl">
                <a.icon className="size-6 text-gold" aria-hidden />
              </span>
              <h2 className="text-lg font-semibold text-primary">{a.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{a.text}</p>
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
          <Trophy className="mt-0.5 size-6 shrink-0 text-gold" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Balanced growth. </span>
            We prepare students not only to score well in examinations but to stand tall in life.
            Sports and extra-curriculars at Ideal Grammar School nurture the whole child — mind,
            body and character.
          </p>
        </div>
      </div>
    </main>
  );
}
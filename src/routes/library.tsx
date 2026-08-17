import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, BookOpen, Clock, Laptop, Users, Award, Sparkles } from "lucide-react";
import libraryImage from "@/assets/library.png";

export const Route = createFileRoute("/library")({
  head: () => ({
    meta: [
      { title: "School Library | Ideal Grammar School" },
      {
        name: "description",
        content:
          "Inside the Ideal Grammar School library: 12,000+ titles, quiet study bays, a digital catalogue, reading programs and weekly library periods for every class.",
      },
      { property: "og:title", content: "School Library — Ideal Grammar School" },
      {
        property: "og:description",
        content:
          "One of the best school libraries in the region: 12,000+ titles, quiet study bays, digital catalogue and weekly reading periods.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: LibraryPage,
});

const HIGHLIGHTS = [
  {
    icon: BookOpen,
    title: "12,000+ Titles",
    text: "Fiction, classics, Urdu and English literature, Islamic studies, reference encyclopaedias, science and career guidance sections — all catalogued by class level so every student finds a book at the right reading stage.",
  },
  {
    icon: Users,
    title: "Quiet Study Bays",
    text: "Individual reading bays and group discussion tables with plenty of natural light, allowing senior students to prepare for board examinations in a calm, supervised environment.",
  },
  {
    icon: Laptop,
    title: "Digital Catalogue",
    text: "Search, reserve and renew books from the library terminals. Digital reference material and e-books support project work and research assignments.",
  },
  {
    icon: Clock,
    title: "Open All Day",
    text: "The library stays open through the whole school day, including recess, with a weekly library period timetabled for every class from primary upward.",
  },
];

const FACTS = [
  { label: "Collection", value: "12,000+ titles" },
  { label: "Seating", value: "60 readers at a time" },
  { label: "Borrowing", value: "2 books · 14 days" },
  { label: "Library period", value: "Weekly, every class" },
];

function LibraryPage() {
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
              The Ideal Grammar School Library
            </h1>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              One of the best school libraries in the region, the Ideal Grammar School library is the
              quiet heart of our campus. Row after row of well-kept shelves hold more than 12,000
              titles — from picture books for our youngest readers to advanced reference works for
              board and college preparation.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              We believe a strong reader becomes a strong learner in every subject. That is why every
              class has a timetabled library period, why we run reading challenges and book-review
              competitions through the year, and why our librarian helps each student choose books
              that stretch them just enough.
            </p>
          </div>

          <figure className="surface-3d overflow-hidden rounded-3xl p-2">
            <img
              src={libraryImage}
              alt="Wooden bookshelves filled with thousands of books in the Ideal Grammar School library"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[26rem]"
            />
            <figcaption className="px-3 py-3 text-center text-xs text-muted-foreground">
              Our main reading hall, home to over 12,000 catalogued titles.
            </figcaption>
          </figure>
        </div>

        <div className="mt-10 grid items-center gap-8 lg:grid-cols-2">
          <figure className="surface-3d overflow-hidden rounded-3xl p-2">
            <img
              src={libraryImage}
              alt="The Ideal Grammar School library — one of the best school libraries in the region"
              loading="lazy"
              className="h-64 w-full rounded-2xl object-cover sm:h-80 lg:h-[24rem]"
            />
            <figcaption className="px-3 py-3 text-center text-xs text-muted-foreground">
              One of the best libraries in Ideal Grammar School — a haven for young readers.
            </figcaption>
          </figure>
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft/30 px-4 py-1.5 text-xs font-semibold tracking-widest text-primary uppercase">
              <Award className="size-4 text-gold" aria-hidden />
              One of the Best Libraries
            </span>
            <h2 className="mt-4 text-2xl font-bold text-primary sm:text-3xl">
              A World of Knowledge Under One Roof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              The Ideal Grammar School library is proudly one of the best libraries in the school —
              a bright, welcoming space where curiosity comes alive. With over 12,000 carefully
              selected titles spanning fiction, classics, Urdu and English literature, Islamic
              studies, science, history and career guidance, there is truly something for every
              reader.
            </p>
            <p className="mt-3 text-base leading-relaxed text-muted-foreground">
              Our library is more than just a collection of books — it is a sanctuary for learning.
              Students gather here during recess, after class and during their weekly library
              periods to explore, discover and grow. The calm atmosphere, comfortable reading bays
              and dedicated librarian make it the perfect place to develop a lifelong love of
              reading.
            </p>
            <div className="mt-6 flex items-start gap-3 rounded-2xl border border-dashed border-gold bg-gold-soft/30 px-5 py-4">
              <Sparkles className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden />
              <p className="text-sm leading-relaxed text-muted-foreground">
                <span className="font-semibold text-primary">Why students love it: </span>
                From picture books for our youngest learners to advanced reference works for board
                and college preparation, the library grows with every student — nurturing readers
                who become confident, lifelong learners.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {HIGHLIGHTS.map((h) => (
            <article key={h.title} className="surface-3d rounded-3xl p-7">
              <span className="surface-navy mb-5 grid size-12 place-items-center rounded-2xl">
                <h.icon className="size-6 text-gold" aria-hidden />
              </span>
              <h2 className="text-lg font-semibold text-primary">{h.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{h.text}</p>
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
          <BookOpen className="mt-0.5 size-6 shrink-0 text-gold" aria-hidden />
          <p className="text-sm leading-relaxed text-muted-foreground">
            <span className="font-semibold text-primary">Reading culture. </span>
            Students who finish the most books each term are honoured in the morning assembly, and
            parents are welcome to visit the library on open days to see what their children are
            reading.
          </p>
        </div>
      </div>
    </main>
  );
}

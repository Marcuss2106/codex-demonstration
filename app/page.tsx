import Image from "next/image";
import type { CSSProperties, ReactNode } from "react";
import NewsletterSignup from "@/components/newsletter-signup";

const heroLeaves = [
  { src: "leaf-lime-1.svg", left: 80, top: 213, width: 52, height: 21 },
  { src: "leaf-lilac-1.svg", left: 137, top: 191, width: 48, height: 20 },
  { src: "leaf-lime-2.svg", left: 166, top: 218, width: 47, height: 19 },
  { src: "leaf-lilac-2.svg", left: 245, top: 208, width: 49, height: 20 },
  { src: "leaf-lime-3.svg", left: 329, top: 195, width: 50, height: 20 },
  { src: "leaf-lilac-3.svg", left: 402, top: 216, width: 49, height: 19 },
  { src: "leaf-lime-4.svg", left: 280, top: 179, width: 47, height: 18 },
];

const storyPlants = [
  { left: 123, top: 115, color: "lime" },
  { left: 186, top: 136, color: "lilac" },
  { left: 262, top: 116, color: "lime" },
  { left: 451, top: 88, color: "lilac" },
  { left: 525, top: 105, color: "lime" },
  { left: 600, top: 83, color: "lilac" },
  { left: 674, top: 114, color: "lime" },
];

const storyLeaves = [
  { src: "plant-leaf-lime.svg", left: 99, top: 149, width: 49, height: 18 },
  { src: "plant-leaf-lilac.svg", left: 124, top: 173, width: 45, height: 17 },
  { src: "plant-leaf-lime-2.svg", left: 162, top: 170, width: 49, height: 18 },
  { src: "plant-leaf-lilac-2.svg", left: 187, top: 194, width: 45, height: 17 },
  { src: "plant-leaf-lime.svg", left: 238, top: 150, width: 49, height: 18 },
  { src: "plant-leaf-lilac.svg", left: 263, top: 174, width: 45, height: 17 },
  { src: "plant-leaf-lime-2.svg", left: 427, top: 122, width: 49, height: 18 },
  { src: "plant-leaf-lilac-2.svg", left: 452, top: 146, width: 45, height: 17 },
  { src: "plant-leaf-lime.svg", left: 501, top: 139, width: 49, height: 18 },
  { src: "plant-leaf-lilac.svg", left: 526, top: 163, width: 45, height: 17 },
  { src: "plant-leaf-lime-2.svg", left: 576, top: 117, width: 49, height: 18 },
  { src: "plant-leaf-lilac-2.svg", left: 601, top: 141, width: 45, height: 17 },
  { src: "plant-leaf-lime.svg", left: 650, top: 148, width: 49, height: 18 },
  { src: "plant-leaf-lilac.svg", left: 675, top: 172, width: 45, height: 17 },
];

const programs = [
  {
    number: "01",
    title: "Garden Seed Fund",
    description:
      "Small startup grants and planning support to help turn an idea into a cared-for place.",
    link: "Explore garden support",
    href: "/get-support",
  },
  {
    number: "02",
    title: "Grow Together Schools",
    description:
      "Outdoor learning shaped with educators, students, and school communities.",
    link: "See school programs",
    href: "/programs",
  },
  {
    number: "03",
    title: "Shared Tools",
    description:
      "Borrow tools and basic supplies to keep a shared space thriving.",
    link: "Browse the tool shed",
    href: "/programs",
  },
];

const upcomingEvents = [
  {
    date: "2026-11-07",
    month: "NOV",
    day: "07",
    weekday: "Saturday",
    time: "10:00 AM–12:00 PM",
    title: "Fall bed prep on Juniper Street",
    location: "Juniper Street Garden · East Ward",
    description:
      "Clear finished plants and refresh the raised beds together.",
    note: "Tools and warm cider provided. All ages welcome with a grown-up.",
  },
  {
    date: "2026-11-14",
    month: "NOV",
    day: "14",
    weekday: "Saturday",
    time: "1:00–3:00 PM",
    title: "Seed saving for next season",
    location: "Bellwether Learning Garden · Northside",
    description:
      "Learn how to collect, label, and store seeds from this year’s harvest.",
    note: "Bring a small envelope; seeds and supplies are provided.",
  },
  {
    date: "2026-11-21",
    month: "NOV",
    day: "21",
    weekday: "Saturday",
    time: "9:30–11:30 AM",
    title: "School garden winterizing",
    location: "Maple Street School · West Ward",
    description:
      "Help students tuck in the beds and prepare the garden for winter.",
    note: "Youth volunteers welcome with an accompanying adult.",
  },
  {
    date: "2026-12-05",
    month: "DEC",
    day: "05",
    weekday: "Saturday",
    time: "2:00–3:30 PM",
    title: "Neighborhood garden planning circle",
    location: "Bellwether Community Room · Downtown",
    description:
      "Share ideas for next year’s growing season over tea and snacks.",
    note: "Indoor gathering; step-free entrance available.",
  },
];

function Asset({
  src,
  width,
  height,
  className,
  style,
}: {
  src: string;
  width: number;
  height: number;
  className: string;
  style?: CSSProperties;
}) {
  return (
    <Image
      aria-hidden="true"
      alt=""
      className={className}
      height={height}
      src={`/illustrations/${src}`}
      style={style}
      width={width}
    />
  );
}

function PrimaryLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a className="button button-primary" href={href}>
      {children}
    </a>
  );
}

function SecondaryLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <a className="button button-secondary" href={href}>
      {children}
    </a>
  );
}

function GardenIllustration() {
  return (
    <div
      aria-label="Illustration of a neighborhood garden with raised beds and young plants"
      className="garden-art"
      role="img"
    >
      <Asset
        className="garden-halo"
        height={154}
        src="lilac-halo.svg"
        width={154}
      />
      <Asset
        className="garden-halo-cutout"
        height={110}
        src="halo-cutout.svg"
        width={110}
      />
      <span className="garden-art-title">
        GROWING
        <br />
        TOGETHER
      </span>
      <Asset
        className="garden-sun"
        height={82}
        src="sun.svg"
        width={82}
      />
      <span className="garden-ground" />
      <span className="garden-bed garden-bed-back">
        <span className="garden-soil garden-soil-back" />
      </span>
      <span className="garden-bed garden-bed-front">
        <span className="garden-soil garden-soil-front" />
      </span>
      <span className="garden-stem stem-one" />
      <span className="garden-stem stem-two" />
      <span className="garden-stem stem-three" />
      <span className="garden-stem stem-four" />
      <span className="garden-stem stem-five" />
      <span className="garden-stem stem-six" />
      {heroLeaves.map((leaf) => (
        <Asset
          className="garden-leaf"
          height={leaf.height}
          key={leaf.src}
          src={leaf.src}
          width={leaf.width}
          style={{
            height: `${(leaf.height / 480) * 100}%`,
            left: `${(leaf.left / 574) * 100}%`,
            top: `${(leaf.top / 480) * 100}%`,
            width: `${(leaf.width / 574) * 100}%`,
          }}
        />
      ))}
      <span className="garden-crop-row garden-crop-one" />
      <span className="garden-crop-row garden-crop-two" />
      <span className="garden-crop-row garden-crop-three" />
      <span className="garden-crop-row garden-crop-four" />
      <span className="garden-path" />
      <span className="garden-caption">JUNIPER STREET · EAST WARD</span>
    </div>
  );
}

function CommunityGardenIllustration() {
  return (
    <div
      aria-label="Illustration of two community garden beds with seedlings"
      className="community-art"
      role="img"
    >
      <Asset
        className="story-sun"
        height={77}
        src="story-sun.svg"
        width={77}
      />
      <span className="community-ground" />
      <span className="community-bed community-bed-left">
        <span className="community-soil community-soil-left" />
      </span>
      <span className="community-bed community-bed-right">
        <span className="community-soil community-soil-right" />
      </span>
      {storyPlants.map((plant) => (
        <span
          aria-hidden="true"
          className={`community-stem community-stem-${plant.color}`}
          key={`${plant.left}-${plant.top}`}
          style={{
            backgroundColor:
              plant.color === "lime" ? "var(--lime)" : "var(--lilac)",
            height: `${(122 / 490) * 100}%`,
            left: `${(plant.left / 756) * 100}%`,
            top: `${(plant.top / 490) * 100}%`,
            width: `${(9 / 756) * 100}%`,
          }}
        />
      ))}
      {storyLeaves.map((leaf, index) => (
        <Asset
          className="community-leaf"
          height={leaf.height}
          key={`${leaf.src}-${index}`}
          src={leaf.src}
          width={leaf.width}
          style={{
            height: `${(leaf.height / 490) * 100}%`,
            left: `${(leaf.left / 756) * 100}%`,
            top: `${(leaf.top / 490) * 100}%`,
            width: `${(leaf.width / 756) * 100}%`,
          }}
        />
      ))}
      <span className="community-crop-row crop-row-one" />
      <span className="community-crop-row crop-row-two" />
      <span className="community-crop-row crop-row-three" />
      <span className="community-crop-row crop-row-four" />
      <span className="community-crop-row crop-row-five" />
      <span className="community-crop-row crop-row-six" />
      <span className="community-crop-row crop-row-seven" />
      <span className="community-crop-row crop-row-eight" />
      <span className="community-crop-row crop-row-nine" />
      <span className="community-crop-row crop-row-ten" />
      <span className="community-caption">
        MADE WITH JUNIPER STREET NEIGHBORS
      </span>
    </div>
  );
}

export default function Home() {
  return (
    <main className="home-page">
      <div className="announcement-bar">
        <div className="announcement-inner page-width">
          <span className="eyebrow">Bellwether, together</span>
          <span>Shared green spaces, built neighbor by neighbor.</span>
        </div>
      </div>

      <header className="site-header">
        <div className="header-inner page-width">
          <a aria-label="Harborlight Commons home" className="brand" href="#top">
            <span className="brand-mark">
              <Asset
                className="brand-mark-image"
                height={36}
                src="brand-mark.svg"
                width={36}
              />
              <Asset
                className="brand-leaf-image"
                height={26}
                src="brand-leaf.svg"
                width={14}
              />
            </span>
            <span className="brand-copy">
              <span className="brand-name">Harborlight</span>
              <span className="brand-subtitle">Commons</span>
            </span>
          </a>

          <nav aria-label="Main navigation" className="desktop-nav">
            <a href="#programs">Programs</a>
            <a href="#projects">Projects</a>
            <a href="#events">Events</a>
            <a href="#about">About</a>
          </nav>

          <div className="header-actions">
            <SecondaryLink href="/donate">Donate</SecondaryLink>
            <PrimaryLink href="/get-support">Get support</PrimaryLink>
          </div>

          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
            </summary>
            <nav aria-label="Mobile navigation" className="mobile-nav">
              <a href="#programs">Programs</a>
              <a href="#projects">Projects</a>
              <a href="#events">Events</a>
              <a href="#about">About</a>
              <a href="/donate">Donate</a>
              <a href="/get-support">Get support</a>
            </nav>
          </details>
        </div>
      </header>

      <section aria-labelledby="hero-title" className="hero" id="top">
        <div className="hero-inner page-width">
          <div className="hero-copy">
            <p className="eyebrow hero-kicker">
              Gardens · learning · neighborhood
            </p>
            <h1 className="display-heading" id="hero-title">
              A little more
              <br />
              room to grow.
            </h1>
            <p className="hero-description">
              We help Bellwether neighbors turn overlooked lots into gardens,
              outdoor classrooms, and places to gather.
            </p>
            <div className="hero-actions">
              <PrimaryLink href="/get-support">Start a garden</PrimaryLink>
              <SecondaryLink href="#ways-to-help">
                Find your way to help
              </SecondaryLink>
            </div>
            <p className="hero-note">
              Small grants <span>·</span> shared tools <span>·</span> hands-on
              support
            </p>
          </div>
          <GardenIllustration />
        </div>
      </section>

      <section aria-labelledby="impact-title" className="impact page-width">
        <div className="section-rule" />
        <h2 className="eyebrow" id="impact-title">
          A snapshot of what we make together
        </h2>
        <dl className="impact-list">
          <div className="impact-item">
            <dt>12</dt>
            <dd>shared green spaces</dd>
          </div>
          <div className="impact-item">
            <dt>6</dt>
            <dd>school partners</dd>
          </div>
          <div className="impact-item">
            <dt>1,900</dt>
            <dd>neighbor volunteer hours</dd>
          </div>
        </dl>
      </section>

      <section
        aria-labelledby="story-title"
        className="story-section"
        id="projects"
      >
        <div className="story-inner page-width">
          <div className="story-copy">
            <p className="eyebrow story-kicker">A place taking root</p>
            <h2 className="display-heading" id="story-title">
              The block made
              <br />
              room for one more.
            </h2>
            <p className="story-description">
              On Juniper Street, neighbors started with three raised beds and a
              simple question: what could this lot become if everyone had a
              hand in it?
            </p>
            <blockquote>
              <p>
                “Now the kids come by after school to see what changed
                overnight.”
              </p>
              <cite>— Nia Brooks, Juniper Street neighbor</cite>
            </blockquote>
            <SecondaryLink href="/projects/juniper-street">
              Visit the garden story
            </SecondaryLink>
          </div>
          <CommunityGardenIllustration />
        </div>
        <div className="page-width">
          <div className="section-rule story-rule" />
        </div>
      </section>

      <section
        aria-labelledby="programs-title"
        className="programs-section page-width"
        id="programs"
      >
        <p className="eyebrow programs-kicker">
          Practical support, shared generously
        </p>
        <h2 className="display-heading section-heading" id="programs-title">
          Good things grow with a little help.
        </h2>
        <p className="section-intro">
          Choose a place to begin. We’ll figure out the next step together.
        </p>
        <div className="program-grid">
          {programs.map((program, index) => (
            <article className="program-card" key={program.number}>
              <span
                aria-hidden="true"
                className={`card-accent card-accent-${index + 1}`}
              />
              <span className="program-number">{program.number}</span>
              <h3>{program.title}</h3>
              <p>{program.description}</p>
              <a className="text-link" href={program.href}>
                {program.link} <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </section>

      <section
        aria-labelledby="event-title"
        className="event-section page-width"
        id="events"
      >
        <div className="events-heading">
          <div>
            <p className="eyebrow">Gather, grow, and lend a hand</p>
            <h2 className="display-heading" id="event-title">
              Coming up in Bellwether
            </h2>
          </div>
          <p className="events-sample-label">Sample calendar · 2026</p>
        </div>
        <ol aria-label="Upcoming sample events" className="events-list">
          {upcomingEvents.map((event) => (
            <li className="event-item" key={event.date}>
              <time className="event-date" dateTime={event.date}>
                <span>{event.month}</span>
                <span>{event.day}</span>
              </time>
              <div className="event-details">
                <p className="event-meta">
                  {event.weekday} <span>·</span> {event.time}
                </p>
                <h3>{event.title}</h3>
                <p className="event-location">{event.location}</p>
                <p className="event-description">{event.description}</p>
                <p className="event-note">{event.note}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      <section
        aria-labelledby="ways-title"
        className="ways-section page-width"
        id="ways-to-help"
      >
        <div className="ways-copy">
          <h2 className="display-heading" id="ways-title">
            There’s room for you here.
          </h2>
          <p>
            Start something, lend a hand, or help keep a good thing growing.
          </p>
        </div>
        <div className="ways-actions">
          <PrimaryLink href="/get-support">Start a garden</PrimaryLink>
          <SecondaryLink href="/volunteer">Volunteer</SecondaryLink>
          <SecondaryLink href="/donate">Donate</SecondaryLink>
        </div>
      </section>

      <footer className="site-footer" id="about">
        <div className="footer-inner page-width">
          <div className="footer-main">
            <div className="footer-brand-block">
              <a aria-label="Harborlight Commons home" className="footer-brand" href="#top">
                <Asset
                  className="footer-mark-image"
                  height={29}
                  src="footer-mark.svg"
                  width={29}
                />
                <span>Harborlight Commons</span>
              </a>
              <p>Shared green space, close to home.</p>
            </div>
            <div className="footer-contact">
              <h2 className="eyebrow">Say hello</h2>
              <a href="mailto:hello@harborlightcommons.org">
                hello@harborlightcommons.org
              </a>
              <p>Bellwether, MA</p>
            </div>
            <div className="footer-newsletter">
              <h2 className="eyebrow">Notes from the garden</h2>
              <p>A seasonal note, about once a month.</p>
              <NewsletterSignup />
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              © 2026 Harborlight Commons <span>·</span> A Bellwether community
              nonprofit
            </p>
            <nav aria-label="Footer navigation">
              <a href="/privacy">Privacy</a>
              <span aria-hidden="true">·</span>
              <a href="/accessibility">Accessibility</a>
              <span aria-hidden="true">·</span>
              <a href="https://www.instagram.com/">Instagram</a>
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}

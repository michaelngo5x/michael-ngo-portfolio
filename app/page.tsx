import SiteHeader from "./SiteHeader";

const skills = [
  "Bid & proposal management",
  "RFP and solicitation analysis",
  "Business intelligence",
  "Dashboard and KPI design",
  "Bid / no-bid strategy",
  "Post-bid analysis",
  "Workflow improvement",
  "Executive reporting",
];
const credentials = [
  ["Project Management", "Google Professional Certificate"],
  ["Global Procurement & Sourcing", "Rutgers University"],
  ["Data Analytics", "Google Professional Certificate"],
  ["AI-Powered Proposal Engineer", "Proposal Industry Experts"],
  ["Cybersecurity GRC", "Macquarie University"],
  ["Energy Production & Safety", "University at Buffalo"],
];

export default function Home() {
  return (
    <main>
      <SiteHeader className="home-site-header" />

      <section className="hero" id="top">
        <div>
          <p className="eyebrow">Hello, I’m Michael Ngo</p>
          <h1>
            Bid manager, proposal strategist, and{" "}
            <em>systems-minded problem solver.</em>
          </h1>
          <p className="lede">
            I help teams make sense of complicated solicitations, coordinate
            strong responses, and build clearer ways to manage and learn from
            the bid process.
          </p>
          <div className="actions">
            <a className="pill dark" href="#work">
              View selected work ↓
            </a>
            <a className="pill outline" href="/resume">
              Download resume
            </a>
          </div>
          <div className="role-line">
            <span>Currently</span>
            <strong>Bid Manager at Quality Facility Solutions</strong>
            <small>Brooklyn, New York</small>
          </div>
        </div>
        <div className="hero-portrait">
          <div className="portrait-frame">
            <img src="/images/michael-ngo.jpg" alt="Michael Ngo" />
          </div>
          <div className="portrait-caption">
            <b>Michael Ngo</b>
            <span>Bid Management · Proposals · Procurement</span>
          </div>
        </div>
      </section>

      <section className="statement section">
        <p className="eyebrow">01 · What I bring</p>
        <h2>I work across the full pursuit lifecycle.</h2>
        <p>
          My experience connects procurement analysis, proposal development,
          reporting, and process improvement. I can move from reading the
          solicitation to organizing the response, supporting the decision, and
          documenting what the team learned.
        </p>
      </section>

      <section className="work section" id="work">
        <Heading
          number="02"
          label="Selected work"
          title="A closer look at how I work."
          text="Three connected portfolio projects that make the strategy, systems, writing, and judgment behind my resume visible."
        />
        <article className="project">
          <div>
            <span className="flag">Flagship work sample</span>
            <h3>Bid Intelligence Portfolio</h3>
            <p>
              I created this fictional Excel portfolio sample to demonstrate how
              I organize the full bid lifecycle: opportunity review, bid/no-bid
              decisions, active pursuits, workflow delays, outcomes, and
              post-bid learning.
            </p>
            <ul>
              <li>60 original fictional opportunities</li>
              <li>Executive, pipeline, no-bid, post-bid, and workflow views</li>
              <li>Formula-driven KPIs and reporting-period selectors</li>
              <li>Created as a work sample, not a commercial product</li>
            </ul>
            <div className="actions">
              <a className="pill blue" href="/projects/bid-intelligence">
                Explore the interactive dashboard
              </a>
              <a
                className="text-link"
                href="/downloads/Michael-Ngo-Bid-Intelligence-Portfolio.xlsx"
                download
              >
                Download the Excel sample ↗
              </a>
            </div>
          </div>
          <WorkSamplePreview />
        </article>
        <article className="qta-project">
          <div className="qta-intro">
            <div>
              <span className="flag">End-to-end procurement case study</span>
              <h3>Queensboro Transit Authority</h3>
            </div>
            <div>
              <p>
                A completely fictional procurement package showing how I move
                from solicitation requirements to structured analysis and a
                responsive technical proposal.
              </p>
              <a className="pill dark qta-cta" href="/projects/qta-case-study">
                Explore the complete case study ↗
              </a>
            </div>
          </div>
          <div className="qta-flow">
            <DocumentCard
              step="01"
              type="Source document"
              title="Fictional RFP"
              text="A detailed public-sector solicitation for multi-site custodial and facility support services."
              href="/downloads/Queensboro-Transit-Authority-Fictional-RFP-QTA-26-117.docx"
            />
            <DocumentCard
              step="02"
              type="Procurement update"
              title="Addendum & Q&A"
              text="Clarifications and revisions affecting scope, staffing, security clearances, bonding, and schedule."
              href="/downloads/Queensboro-Transit-Authority-Fictional-Addendum-1-QTA-26-117.docx"
            />
            <DocumentCard
              step="03"
              type="My analysis"
              title="RFP Procurement Analysis"
              text="My structured review of requirements, risks, deadlines, compliance, strategy, and bid/no-bid considerations."
              href="/downloads/Michael-Ngo-RFP-Procurement-Analysis-Portfolio-Sample.docx"
            />
            <DocumentCard
              step="04"
              type="Response document"
              title="Technical Proposal"
              text="A complete fictional technical response demonstrating solution design, visual communication, compliance, and evaluator-focused writing."
              href="/downloads/Northstar-Facility-Partners-Fictional-Proposal-QTA-26-117.docx"
              featured
            />
          </div>
          <div className="qta-foot">
            <strong>One opportunity. Four connected documents.</strong>
            <span>
              The agency, bidder, procurement, pricing, personnel, and operating
              details are entirely fictional.
            </span>
          </div>
        </article>
        <article className="arcade-project" id="arcade">
          <div className="arcade-copy">
            <span className="flag">Interactive learning experience</span>
            <p className="arcade-label">Bid Desk Arcade · Game 01</p>
            <h3>It’s a Bid!</h3>
            <p>
              Five fictional opportunities. Three possible recommendations. One
              question: can you separate a promising pursuit from an expensive
              distraction?
            </p>
            <ul>
              <li>Bid, No-Bid, or Need More Info</li>
              <li>Immediate decision feedback</li>
              <li>Eligibility and qualification hard stops</li>
              <li>A final Bid Desk Judgment score</li>
            </ul>
            <div className="actions">
              <a
                className="pill arcade-cta"
                href="https://bid-desk-arcade.michaelngo5x.chatgpt.site"
                target="_blank"
                rel="noreferrer"
              >
                Play the arcade ↗
              </a>
              <span className="arcade-note">
                About two minutes · No sign-in required
              </span>
            </div>
          </div>
          <ArcadePreview />
        </article>
      </section>

      <section className="case section" id="case-study">
        <p className="eyebrow">03 · Behind the work</p>
        <h2>Turning fragmented bid activity into a management system.</h2>
        <div className="case-grid">
          <Case n="01" title="Business problem">
            Bid information often lives across emails, documents, trackers, and
            individual notes. That makes priorities, delays, outcomes, and
            decision history difficult to see.
          </Case>
          <Case n="02" title="My approach">
            I organized each opportunity around what the team knew, why it made
            a decision, where the work stood, and what the final result could
            teach us.
          </Case>
          <Case n="03" title="Solution">
            A central Excel register feeding focused views for leadership
            reporting, active pursuits, declined opportunities, competitive
            results, and workflow timing.
          </Case>
          <Case n="04" title="What it demonstrates">
            Bid management, data architecture, KPI development, procurement
            analysis, executive reporting, and practical process improvement.
          </Case>
        </div>
        <div className="note">
          <strong>Fictional and confidentiality-safe.</strong>
          <span>
            Every organization, opportunity, price, result, and narrative in
            these portfolio samples was created from scratch. No employer
            records were copied or renamed.
          </span>
        </div>
      </section>

      <section className="experience section" id="experience">
        <Heading
          number="04"
          label="Experience"
          title="Built across both sides of procurement."
          text="I have developed responses as a bidder and structured requirements within a public-sector environment."
          light
        />
        <div className="timeline">
          <Job
            date="2026 — Present"
            title="Bid Manager"
            org="Quality Facility Solutions"
          >
            Lead end-to-end bid management for commercial facility-services
            opportunities, including sourcing, evaluation, bid strategy,
            proposal development, reporting, and submission coordination.
          </Job>
          <Job
            date="2024 — 2025"
            title="Scope Writer"
            org="New York City Housing Authority"
          >
            Supported enterprise-scale procurements through RFI and RFP
            documentation, evaluation frameworks, vendor Q&A, governance
            materials, and cross-functional coordination.
          </Job>
          <Job
            date="2017 — 2023"
            title="Proposal Specialist & Consultant"
            org="Once Upon an RFP · Charter Spectrum · Stellar Services"
          >
            Managed and supported public- and private-sector proposals across
            government, infrastructure, telecommunications, and professional
            services.
          </Job>
        </div>
      </section>

      <section className="capabilities section">
        <p className="eyebrow">05 · Capabilities</p>
        <h2>How I contribute.</h2>
        <div className="skill-grid">
          {skills.map((s, i) => (
            <span key={s}>
              <b>{String(i + 1).padStart(2, "0")}</b>
              {s}
            </span>
          ))}
        </div>
      </section>

      <section className="credentials section" id="credentials">
        <div className="cred-intro">
          <div>
            <p className="eyebrow">06 · Credentials</p>
            <h2>
              Continuous learning,
              <br />
              applied to real work.
            </h2>
          </div>
          <p>
            My professional development connects procurement, project
            management, data, AI, governance, and infrastructure knowledge.
          </p>
        </div>
        <div className="cred-grid">
          {credentials.map(([name, org]) => (
            <article key={name}>
              <i>✓</i>
              <div>
                <h3>{name}</h3>
                <p>{org}</p>
              </div>
            </article>
          ))}
        </div>
        <a className="pill outline" href="/credentials">
          Explore credentials ↗
        </a>
      </section>

      <section className="about section">
        <div className="about-mark">MN</div>
        <div>
          <p className="eyebrow">07 · A little more about me</p>
          <h2>Professional, but still a person.</h2>
          <p>
            I am a systems-minded bid manager in Brooklyn who likes making
            complicated work clearer. I am also a Knicks optimist, an aquarium
            regular, an anime fan, and someone who plays considerably more ARAM
            Mayhem than any responsible adult should.
          </p>
          <p>
            The work matters, but this is the part of the site where I stop
            pretending a person can be summarized entirely through
            accomplishments and bullet points.
          </p>
          <a className="text-link" href="/about">
            Meet the person behind the portfolio ↗
          </a>
        </div>
      </section>

      <section className="contact section" id="contact">
        <p className="eyebrow">08 · Let’s connect</p>
        <h2>Interested in working together?</h2>
        <p>
          I’m interested in opportunities involving bid management, proposal
          development, procurement analysis, business intelligence, and process
          improvement.
        </p>
        <div className="contact-options">
          <a className="contact-option" href="mailto:MichaelNgo5x@gmail.com">
            <div>
              <span>Email</span>
              <strong>MichaelNgo5x@gmail.com</strong>
            </div>
            <i>↗</i>
          </a>
          <a
            className="contact-option"
            href="https://www.linkedin.com/in/MichaelNgo5x"
            target="_blank"
            rel="noreferrer"
          >
            <div>
              <span>LinkedIn</span>
              <strong>Connect with Michael</strong>
            </div>
            <i>↗</i>
          </a>
        </div>
        <div className="contact-availability">
          <span>Based in Brooklyn, New York</span>
          <span>Open to hybrid and remote opportunities</span>
        </div>
      </section>
      <footer>
        <span>© 2026 Michael Ngo</span>
        <span>Bid Management · Proposal Strategy · Business Intelligence</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}

function Heading({
  number,
  label,
  title,
  text,
  light = false,
}: {
  number: string;
  label: string;
  title: string;
  text: string;
  light?: boolean;
}) {
  return (
    <div className={`heading ${light ? "light" : ""}`}>
      <div>
        <p className="eyebrow">
          {number} · {label}
        </p>
        <h2>{title}</h2>
      </div>
      <p>{text}</p>
    </div>
  );
}
function Case({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      <span>{n}</span>
      <h3>{title}</h3>
      <p>{children}</p>
    </article>
  );
}
function Job({
  date,
  title,
  org,
  children,
}: {
  date: string;
  title: string;
  org: string;
  children: React.ReactNode;
}) {
  return (
    <article>
      <div>
        <time>{date}</time>
        <h3>{title}</h3>
        <p>{org}</p>
      </div>
      <p>{children}</p>
    </article>
  );
}
function WorkSamplePreview() {
  return (
    <div className="sample-preview">
      <div className="excel-icon">
        <span>×</span>
      </div>
      <p className="sample-type">Microsoft Excel work sample</p>
      <h4>
        Michael Ngo
        <br />
        Bid Intelligence Portfolio
      </h4>
      <p>
        Fictional demonstration of bid management, reporting, analysis, and
        process design.
      </p>
      <div className="sample-tabs">
        <span>Executive</span>
        <span>Pipeline</span>
        <span>No-Bid</span>
        <span>Post-Bid</span>
      </div>
      <a href="/downloads/Michael-Ngo-Bid-Intelligence-Portfolio.xlsx" download>
        Open workbook ↗
      </a>
    </div>
  );
}
function ArcadePreview() {
  return (
    <div className="arcade-preview" aria-label="Preview of the Bid Desk Arcade">
      <div className="arcade-preview-top">
        <b>MN</b>
        <span>BID DESK ARCADE</span>
        <small>01 / 04</small>
      </div>
      <div className="arcade-preview-title">
        <small>OPPORTUNITY EVALUATION</small>
        <strong>
          IT’S A
          <br />
          <em>BID!</em>
        </strong>
      </div>
      <div className="arcade-preview-games">
        <span className="active">
          01<small>PLAY</small>
        </span>
        <span>
          02<small>LOCKED</small>
        </span>
        <span>
          03<small>LOCKED</small>
        </span>
        <span>
          04<small>LOCKED</small>
        </span>
      </div>
      <div className="arcade-preview-foot">
        <span>PLAY THE BID PROCESS.</span>
        <i>●</i>
      </div>
    </div>
  );
}
function DocumentCard({
  step,
  type,
  title,
  text,
  href,
  featured = false,
}: {
  step: string;
  type: string;
  title: string;
  text: string;
  href: string;
  featured?: boolean;
}) {
  return (
    <article className={`document-card ${featured ? "featured" : ""}`}>
      <div className="document-top">
        <span>{step}</span>
        <small>{type}</small>
      </div>
      <h4>{title}</h4>
      <p>{text}</p>
      <a href={href} download>
        Download Word document ↗
      </a>
    </article>
  );
}

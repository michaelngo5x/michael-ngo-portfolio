import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";
import FormatSwitch from "./FormatSwitch";

export const metadata: Metadata = {
  title: "Blog | Lessons From the Bid Desk | Michael Ngo",
  description: "Lessons From the Bid Desk: field notes on proposal strategy, information design, bid management, and the occasional questionable teaching device.",
};

export default function LessonsPage() {
  return (
    <main className="lessons-page blog-redesign" id="top">
      <SiteHeader />
      <div className="blog-masthead"><span>MICHAEL NGO / THE BLOG</span><span>LESSONS, OBSERVATIONS & WORKING IDEAS</span><span>EST. 2026</span></div>
      <div className="blog-ticker" aria-label="Blog themes"><span>IDEAS WORTH KEEPING</span><b>✳</b><span>PROPOSAL DESIGN</span><b>✳</b><span>BAD JOKES, GOOD LESSONS</span><b>✳</b><span>THE HUMAN SIDE OF BID MANAGEMENT</span><b>✳</b><span>NOT EVERYTHING NEEDS TO BE A TABLE</span></div>
      <section className="blog-hero">
        <div className="blog-hero-copy">
          <span className="blog-issue-stamp">THE BID DESK CHRONICLES <b>VOL. 01</b></span>
          <p className="eyebrow"><span className="blog-live-dot" /> Notes from the working world</p>
          <h1>Lessons from<br />the <em>Bid Desk.</em></h1>
          <p className="blog-hero-deck">Actual proposal lessons. <i>Questionable teaching devices.</i></p>
          <p className="blog-hero-body">A place for the ideas, mistakes, and unexpected connections that make proposal work more interesting. Part practical playbook, part personal notebook.</p>
          <div className="blog-hero-actions">
            <a className="blog-primary-action" href="#latest">Explore the latest lesson <span>↘</span></a>
            <span>01 published entry · More in the works</span>
          </div>
        </div>
        <div className="blog-desk-art" aria-label="Illustration of a desk with a proposal notebook and scattered notes" role="img">
          <div className="blog-desk-grid" aria-hidden="true" />
          <div className="blog-sticky blog-sticky-one" aria-hidden="true"><span>THINK</span><strong>What does the<br/>reader need?</strong><i>↗</i></div>
          <div className="blog-sticky blog-sticky-two" aria-hidden="true"><span>REMINDER</span><strong>Clarity beats<br/>complexity.</strong></div>
          <div className="blog-notebook" aria-hidden="true">
            <div className="blog-notebook-top"><span>FIELD NOTES</span><span>NO. 001</span></div>
            <div className="blog-notebook-title">Ideas from<br/>the <em>bid desk.</em></div>
            <div className="blog-notebook-rule"/><div className="blog-notebook-rule short"/>
            <div className="blog-notebook-foot"><span>OBSERVE</span><span>QUESTION</span><span>IMPROVE</span></div>
          </div>
          <span className="blog-pencil" aria-hidden="true" />
          <div className="blog-art-label" aria-hidden="true">THE DESK IS A WORK IN PROGRESS ↗</div>
          <span className="blog-doodle blog-doodle-one" aria-hidden="true">✳</span><span className="blog-doodle blog-doodle-two" aria-hidden="true">↗</span>
        </div>
      </section>

      <section className="blog-latest" id="latest">
        <div className="blog-section-heading"><div><p className="eyebrow">The reading list</p><h2>Fresh from the desk<span className="blog-period">.</span></h2></div><span>ISSUE 01 / 2026</span></div>
        <article className="blog-feature-story">
          <div className="blog-feature-copy">
            <div className="blog-feature-meta"><span className="blog-issue-pill">01 / FEATURED ESSAY</span><span>PROPOSAL DESIGN</span><span>6 MIN READ</span></div>
            <h3>Not Everything<br/>Needs to Be<br/><em>a Table.</em></h3>
            <p>I love tables. Probably too much. But the best way to organize information isn&apos;t always the best way to communicate an idea.</p>
            <p className="blog-feature-subline">Featuring practical examples, an interactive comparison, and a wrestling reference that probably made more sense in my head.</p>
            <a className="blog-read-link" href="/lessons/not-everything-needs-to-be-a-table">Read the full lesson <span>↗</span></a>
          </div>
          <div className="blog-feature-visual blog-wrestling-visual">
            <div className="blog-visual-top"><span>THE VISUAL ARGUMENT</span><span>EXHIBIT A ↘</span></div>
            <div className="blog-gif-poster">
              <div className="blog-gif-sticker">MY FIRST INSTINCT:</div>
              <div className="blog-gif-screen"><iframe title="Big Show with a table — the wrestling reference from the first blog post" src="https://tenor.com/embed/1549388650773727459" loading="lazy" allowFullScreen /></div>
              <div className="blog-gif-headline">PUT IT IN<br/><em>A TABLE.</em></div>
              <div className="blog-gif-footnote"><span>ACTUAL DESIGN PHILOSOPHY, CIRCA TOO MANY RFPs</span><span>↗</span></div>
            </div>
            <div className="blog-visual-bottom">LESSON 01 <span>SOMETIMES THE TABLE STAYS UNDER THE RING.</span></div>
          </div>
        </article>
        <div className="blog-playground">
          <div className="blog-playground-intro"><span className="blog-playground-label">↳ A LITTLE EXPERIMENT</span><h3>Same information.<br/><em>Different impact.</em></h3><p>The first essay is about how presentation changes understanding. Don&apos;t just take my word for it. Try switching between two ways of showing the exact same plan.</p><a href="/lessons/not-everything-needs-to-be-a-table">Go deeper into the lesson ↗</a></div>
          <div className="blog-playground-widget"><FormatSwitch /><span className="blog-playground-scribble">GO ON, PRESS THE BUTTONS ↗</span></div>
        </div>
        <div className="blog-bottom-grid">
          <div className="blog-up-next">
            <div className="blog-up-top"><span>ON THE WHITEBOARD</span><span>COMING NEXT</span></div>
            <span className="blog-next-index">02</span>
            <h3>Bid Management<br/>Is a <em>Team Sport.</em></h3>
            <p>Coordination, handoffs, and why the best play sometimes belongs to someone who never gets the highlight.</p>
            <div className="blog-next-note">A future entry, featuring one very useful Knicks tip-in.</div>
          </div>
          <div className="blog-topic-board">
            <div className="blog-up-top"><span>THINGS I KEEP THINKING ABOUT</span><span>THE THEMES</span></div>
            <div className="blog-topic"><span>01</span><div><strong>Proposal craft</strong><p>Making the response easier to read, understand, and remember.</p></div><b>↗</b></div>
            <div className="blog-topic"><span>02</span><div><strong>Bid decisions</strong><p>Knowing what to pursue, and when walking away is the smarter move.</p></div><b>↗</b></div>
            <div className="blog-topic"><span>03</span><div><strong>Systems & people</strong><p>The dashboards, workflows, and team habits behind good work.</p></div><b>↗</b></div>
            <p className="blog-topic-footer">More entries will join the shelf as they&apos;re written.</p>
          </div>
        </div>
      </section>
      <section className="blog-outro"><div><p className="eyebrow">A note from the author</p><h2>Still figuring<br/><em>things out.</em></h2></div><p>There&apos;s no perfect playbook for the work. This is where I keep the lessons worth remembering, including the ones I learned the hard way.</p><a href="/projects">Explore my projects ↗</a></section>
      <footer><span>© 2026 Michael Ngo</span><span>Lessons From the Bid Desk</span><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}

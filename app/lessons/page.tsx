import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Lessons From the Bid Desk | Michael Ngo",
  description: "Useful proposal and bid lessons, usually introduced through something Michael probably watched instead of going to sleep.",
};

export default function LessonsPage(){
  return <main className="lessons-page" id="top">
    <SiteHeader />
    <section className="lessons-hero">
      <p className="eyebrow">Lessons From the Bid Desk</p>
      <h1>Actual proposal lessons.<br/><em>Questionable teaching devices.</em></h1>
      <p>Short notes about proposal strategy, information design, bid management, and the strange things you notice after spending enough time around solicitations.</p>
    </section>
    <section className="lesson-index">
      <a className="lesson-feature" href="/lessons/not-everything-needs-to-be-a-table">
        <div className="lesson-number"><span>Entry</span><strong>01</strong></div>
        <div><span className="lesson-tag">Proposal design · 6 minute read</span><h2>Not Everything Needs to Be a Table</h2><p>A wrestling-assisted argument for choosing the format that makes the meaning—not merely the information—easiest to understand.</p><b>Read the lesson ↗</b></div>
        <div className="lesson-table-mark" aria-hidden="true"><i/><i/><i/><i/><i/><i/></div>
      </a>
      <div className="lesson-next"><span>Coming next</span><h3>Bid Management Is a Team Sport</h3><p>Featuring one very useful Knicks tip-in.</p></div>
    </section>
    <footer><span>© 2026 Michael Ngo</span><span>Lessons From the Bid Desk</span><a href="#top">Back to top ↑</a></footer>
  </main>
}

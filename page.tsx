import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Lessons From the Bid Desk | Michael Ngo",
  description: "Practical lessons about proposal strategy, information design, and bid management, with an occasional questionable teaching device.",
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
      <a className="lesson-feature lesson-feature-second" href="/lessons/when-the-proposal-checklist-keeps-growing">
        <div className="lesson-number"><span>Entry</span><strong>02</strong></div>
        <div><span className="lesson-tag">Proposal operations · 4 minute read</span><h2>When the Proposal Checklist Keeps Growing</h2><p>A coffee-fueled guide to managing dependencies, prioritizing blockers, and keeping an RFP response moving toward submission.</p><b>Read the lesson ↗</b></div>
        <div className="lesson-meme-thumb"><img src="/images/lessons/bid-desk-this-is-fine.png" alt="This is fine: a dog calmly sipping coffee in a chaotic RFP office" loading="lazy" /></div>
      </a>
      <div className="lesson-next"><span>Ideas for another day</span><h3>Bid Management Is a Team Sport</h3><p>Featuring one very useful Knicks tip-in.</p></div>
    </section>
    <footer><span>© 2026 Michael Ngo</span><span>Lessons From the Bid Desk</span><a href="#top">Back to top ↑</a></footer>
  </main>
}

import type { Metadata } from "next";
import SiteHeader from "../../SiteHeader";

export const metadata: Metadata = {
  title: "When the Proposal Checklist Keeps Growing | Michael Ngo",
  description: "Five practical ways to manage RFP deadlines, dependencies, and proposal priorities before the checklist takes over.",
};

const principles = [
  { number: "01", title: "Identify critical dependencies", text: "Determine which outstanding items could delay, compromise, or invalidate the submission. Prioritize mandatory requirements, pricing assumptions, and decisions that affect downstream work." },
  { number: "02", title: "Establish clear ownership", text: "Every major deliverable needs an accountable owner, a target date, and a next step. ‘Pricing pending’ is a status. ‘Pricing assigned, with confirmation required before final review’ is actionable." },
  { number: "03", title: "Work backward from the deadline", text: "The submission deadline should not also be the internal completion deadline. Build milestones for document collection, pricing, drafting, quality assurance, approvals, and submission." },
  { number: "04", title: "Track blockers, not just tasks", text: "A useful tracker identifies what is incomplete, why it is incomplete, who can resolve it, and when resolution is needed. A long checklist is manageable when the bottlenecks are visible." },
  { number: "05", title: "Escalate before urgency becomes an emergency", text: "When a critical dependency threatens the timeline, communicate the risk early. Explain the impact and identify the information or decision needed to keep the response moving." },
];

const priorities = [
  { task: "Mandatory qualification unresolved", priority: "Critical", reason: "Could make the proposal nonresponsive", className: "critical" },
  { task: "Pricing assumptions unconfirmed", priority: "Critical", reason: "Blocks reliable final pricing", className: "critical" },
  { task: "Required reference documentation pending", priority: "High", reason: "May affect compliance", className: "high" },
  { task: "Final formatting adjustments", priority: "Medium", reason: "Usually manageable after core content is settled", className: "medium" },
  { task: "Optional graphic enhancements", priority: "Low", reason: "Limited impact on submission readiness", className: "low" },
];

export default function ChecklistLesson() {
  return <main className="bid-desk-article checklist-lesson" id="top">
    <SiteHeader />
    <article>
      <header className="checklist-hero">
        <p className="eyebrow">Lessons From the Bid Desk · Entry 02</p>
        <h1>When the Proposal Checklist <em>Keeps Growing.</em></h1>
        <p className="article-deck">A practical lesson in managing RFP dependencies, prioritizing the work that matters, and keeping deadlines from turning into emergencies.</p>
        <div className="article-meta"><span>By Michael Ngo</span><span>Proposal operations &amp; workflow management</span><span>4 minute read</span></div>
      </header>
      <figure className="checklist-meme">
        <img src="/images/lessons/bid-desk-this-is-fine.png" alt="Cartoon dog calmly drinking coffee in a burning proposal office, surrounded by RFP binders, pricing, checklists, and a submission deadline." width="1536" height="1024" />
        <figcaption>Every proposal manager has met this checklist. Hopefully not all at once.</figcaption>
      </figure>
      <section className="article-copy checklist-intro">
        <p>The RFP has been reviewed. The deadline is on the calendar. The checklist is ready.</p>
        <p>Then the checklist starts growing.</p>
        <p>Pricing needs clarification. A required attachment is missing. Someone identifies another compliance requirement. A reference needs updating. The proposal is progressing, but somehow the number of outstanding items keeps increasing.</p>
        <p className="checklist-fine">This is fine. <span aria-hidden="true">☕</span></p>
      </section>
      <section className="checklist-thesis">
        <p className="eyebrow">The actual problem</p>
        <h2>A checklist is a starting point. <em>Not a strategy.</em></h2>
        <p>Proposal checklists are essential for organizing requirements, assigning responsibilities, and reducing omissions. But a checklist tells you <strong>what needs to be completed</strong>, not necessarily <strong>what needs attention first.</strong></p>
        <p>A missing insurance certificate, an unresolved pricing assumption, and an unfinished cover page might all be incomplete tasks. Their urgency, dependencies, and consequences are not the same.</p>
        <p>Treating every item as equally important can create the appearance of progress while critical issues remain unresolved.</p>
      </section>
      <section className="checklist-principles">
        <div className="checklist-section-head"><p className="eyebrow">A better way to manage the work</p><h2>Five ways to keep the fire contained.</h2><p>Not a magic fix. Just a more useful way to decide what needs attention next.</p></div>
        <div className="checklist-principle-grid">{principles.map(p => <div className="checklist-principle" key={p.number}><span>{p.number}</span><h3>{p.title}</h3><p>{p.text}</p></div>)}</div>
      </section>
      <section className="checklist-priority">
        <div className="checklist-section-head"><p className="eyebrow">What prioritization looks like</p><h2>Not every unchecked box carries the same risk.</h2><p>A simple illustration of how a proposal team might triage outstanding work. Actual priorities depend on the solicitation and its requirements.</p></div>
        <div className="checklist-table-wrap"><table><thead><tr><th scope="col">Outstanding item</th><th scope="col">Priority</th><th scope="col">Why it matters</th></tr></thead><tbody>{priorities.map(p => <tr key={p.task}><td>{p.task}</td><td><span className={`checklist-priority-badge ${p.className}`}>{p.priority}</span></td><td>{p.reason}</td></tr>)}</tbody></table></div>
      </section>
      <section className="article-copy checklist-conclusion">
        <p className="eyebrow">The real lesson</p>
        <h2>A growing checklist doesn&apos;t automatically mean a poorly managed proposal.</h2>
        <p>Complex submissions involve changing requirements, multiple contributors, and unexpected complications. What matters is whether the team can recognize which issues need immediate attention and which can move through the normal workflow.</p>
        <blockquote>A good proposal tracker tells you what remains to be done. <strong>A good proposal process tells you what needs attention next.</strong></blockquote>
        <p>And when the checklist inevitably grows?</p>
        <p>At least make sure the coffee is ready.</p>
        <p className="checklist-fine">This is fine. <span aria-hidden="true">☕</span></p>
      </section>
      <nav className="article-footer-nav"><a href="/lessons/not-everything-needs-to-be-a-table">← Previous: Not Everything Needs to Be a Table</a><a href="/lessons">All Bid Desk lessons ↗</a></nav>
    </article>
    <footer><span>© 2026 Michael Ngo</span><span>Lessons From the Bid Desk</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}

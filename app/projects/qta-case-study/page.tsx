import type { Metadata } from "next";
import SiteHeader from "../../SiteHeader";

export const metadata: Metadata = {
  title: "QTA Procurement Case Study | Michael Ngo",
  description: "A fictional end-to-end procurement case study demonstrating Michael Ngo's approach to solicitation analysis, bid strategy, addendum review, and proposal development.",
};

const documents = [
  {
    step: "01",
    label: "Source document",
    title: "Fictional RFP",
    image: "/images/qta-case-study/rfp-cover.webp",
    alt: "Cover of the fictional Queensboro Transit Authority RFP",
    summary: "I created a realistic public-sector solicitation with enough operational and contractual complexity to support a meaningful analysis.",
    focus: ["20 operating locations", "631,500 square feet", "Three-year base term", "Best-value evaluation"],
    href: "/downloads/Queensboro-Transit-Authority-Fictional-RFP-QTA-26-117.docx",
  },
  {
    step: "02",
    label: "Procurement update",
    title: "Addendum & Q&A",
    image: "/images/qta-case-study/addendum-cover.webp",
    alt: "Cover of fictional QTA Addendum Number 1",
    summary: "The addendum introduces material changes that a responsive bidder must identify, interpret, and incorporate throughout the response.",
    focus: ["24 questions addressed", "Revised proposal deadline", "Updated staffing minimums", "Bonding and deduction changes"],
    href: "/downloads/Queensboro-Transit-Authority-Fictional-Addendum-1-QTA-26-117.docx",
  },
  {
    step: "03",
    label: "My analysis",
    title: "RFP Procurement Analysis",
    image: "/images/qta-case-study/analysis-cover.webp",
    alt: "Cover of Michael Ngo's fictional RFP and Procurement Analysis",
    summary: "I translated the solicitation into a structured decision tool covering requirements, deadlines, compliance, operational feasibility, risk, and bid strategy.",
    focus: ["Conditional-pursue recommendation", "Moderate-high risk profile", "Compliance matrix", "Clarification and action register"],
    href: "/downloads/Michael-Ngo-RFP-Procurement-Analysis-Portfolio-Sample.docx",
    featured: true,
  },
  {
    step: "04",
    label: "Response document",
    title: "Technical Proposal",
    image: "/images/qta-case-study/proposal-cover.webp",
    alt: "Cover of the fictional Northstar Facility Partners technical proposal",
    summary: "The final response converts the analysis into a coherent operating solution with staffing, mobilization, quality, safety, reporting, and compliance commitments.",
    focus: ["18-page technical response", "45-day mobilization", "Critical-post coverage", "Addendum fully incorporated"],
    href: "/downloads/Northstar-Facility-Partners-Fictional-Proposal-QTA-26-117.docx",
  },
];

export default function QTACaseStudy() {
  return <main className="project-page">
    <SiteHeader />

    <section className="project-hero">
      <div className="project-kicker"><span>Portfolio case study</span><i>Entirely fictional</i></div>
      <h1>From solicitation to <em>responsive proposal.</em></h1>
      <p className="project-lede">A connected procurement demonstration showing how I review complex requirements, structure a pursuit decision, respond to material changes, and translate analysis into a clear technical solution.</p>
      <div className="project-facts">
        <Fact value="20" label="Operating locations" />
        <Fact value="631,500" label="Square feet" />
        <Fact value="4" label="Connected work products" />
        <Fact value="Conditional" label="Pursuit recommendation" />
      </div>
    </section>

    <section className="project-overview">
      <div className="project-overview-title"><p className="eyebrow">The assignment</p><h2>Make the thinking visible.</h2></div>
      <div className="project-overview-copy"><p>Proposal professionals are often evaluated by the final document, even though much of the value is created before writing begins. This case study makes that hidden work visible.</p><p>I built one coherent fictional procurement environment, then followed the opportunity from the agency’s original requirements through clarification, analysis, strategy, and response development.</p></div>
      <aside><strong>My role</strong><span>Solicitation architect · Procurement analyst · Bid strategist · Proposal developer</span></aside>
    </section>

    <section className="project-method">
      <div className="method-heading"><p className="eyebrow">My approach</p><h2>Four documents.<br/>One decision trail.</h2><p>Each work product has a different purpose, but every one connects to the same underlying requirements and strategic choices.</p></div>
      <div className="method-list">
        {documents.map((doc) => <DocumentStage key={doc.step} {...doc} />)}
      </div>
    </section>

    <section className="analysis-spotlight">
      <div><p className="eyebrow">Analysis spotlight</p><h2>A recommendation with conditions, not a reflexive yes.</h2><p>The analysis recommends pursuing the opportunity only after validating the areas most likely to affect operational readiness and commercial risk.</p></div>
      <div className="decision-card">
        <span>Recommendation</span><strong>Conditional Pursue</strong><p>Strong strategic and service alignment, subject to operational validation of critical staffing, security-clearance timing, mobilization capacity, and final pricing assumptions.</p>
        <div className="decision-tags"><i>Moderate-high risk</i><i>Operational validation required</i><i>Best-value opportunity</i></div>
      </div>
    </section>

    <section className="judgment section">
      <div><p className="eyebrow">What the exercise demonstrates</p><h2>More than document production.</h2></div>
      <div className="judgment-grid">
        <article><span>01</span><h3>Requirement interpretation</h3><p>Separating mandatory obligations, evaluation priorities, assumptions, and issues requiring clarification.</p></article>
        <article><span>02</span><h3>Commercial judgment</h3><p>Balancing opportunity value and strategic fit against delivery complexity, compliance exposure, and resource demands.</p></article>
        <article><span>03</span><h3>Change control</h3><p>Tracing addendum revisions into staffing, bonding, pricing, schedule, and proposal commitments.</p></article>
        <article><span>04</span><h3>Response strategy</h3><p>Turning the analysis into a proposal that addresses the actual operating environment rather than relying on generic claims.</p></article>
      </div>
    </section>

    <section className="project-disclaimer">
      <strong>Confidentiality-safe by design.</strong>
      <p>Queensboro Transit Authority, Northstar Facility Partners, the procurement, pricing, personnel, requirements, and operating details are entirely fictional. The case study was created from scratch to demonstrate professional methods without reproducing employer or client information.</p>
    </section>

    <section className="project-next">
      <p className="eyebrow">Continue exploring</p><h2>See the system behind the pursuits.</h2><p>Explore the Bid Intelligence Portfolio to see how opportunity decisions, workflow stages, outcomes, and post-bid learning become measurable management information.</p><div className="actions center"><a className="pill white" href="/#work">View Bid Intelligence Portfolio ↗</a><a className="text-link" href="/downloads/Michael-Ngo-Bid-Intelligence-Portfolio.xlsx" download>Download Excel work sample ↗</a></div>
    </section>

    <footer className="project-footer"><span>© 2026 Michael Ngo</span><a href="/">Return to portfolio ↑</a></footer>
  </main>;
}

function Fact({value,label}:{value:string,label:string}) { return <div><strong>{value}</strong><span>{label}</span></div>; }

function DocumentStage({step,label,title,image,alt,summary,focus,href,featured=false}:{step:string,label:string,title:string,image:string,alt:string,summary:string,focus:string[],href:string,featured?:boolean}) {
  return <article className={`stage ${featured ? "stage-featured" : ""}`}>
    <div className="stage-copy"><div className="stage-label"><span>{step}</span><small>{label}</small></div><h3>{title}</h3><p>{summary}</p><ul>{focus.map((item)=><li key={item}>{item}</li>)}</ul><a className="text-link" href={href} download>Download full document ↗</a></div>
    <a className="stage-preview" href={href} download aria-label={`Download ${title}`}><img src={image} alt={alt}/><span>Open document ↗</span></a>
  </article>;
}

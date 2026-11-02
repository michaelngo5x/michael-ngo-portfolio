import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "Recruiter Desk | Michael Ngo",
  description: "Resume, certification portfolio, proposal writing samples and interactive procurement work by Michael Ngo.",
};

const documents = [
  { number: "01", type: "CAREER PROFILE", title: "Professional Resume", detail: "Final 2026 proposal resume: RFx leadership, Salesforce workflow design, bid analytics and public-sector procurement.", href: "/downloads/Michael-Ngo-Resume-2026.pdf", action: "Open resume", download: true },
  { number: "02", type: "VERIFIED LEARNING", title: "Certification Portfolio", detail: "13-page certification portfolio with supporting certificates and verification information.", href: "/downloads/Michael-Ngo-Certification-Portfolio-2026.pdf", action: "Open credentials", download: true },
  { number: "03", type: "WRITING & STRATEGY", title: "Technical Proposal Sample", detail: "20-page Tidemark Civil infrastructure proposal: methodology, phasing, diagrams, utility conflict response and controlled technical procedure.", href: "/downloads/Michael-Ngo-Technical-Proposal-Sample-2026.pdf", action: "Open sample", download: true },
  { number: "04", type: "ANALYSIS", title: "Procurement Analysis", detail: "A fictional RFP analysis covering requirements, risks and bid/no-bid considerations.", href: "/downloads/Michael-Ngo-RFP-Procurement-Analysis-Portfolio-Sample.docx", action: "Open analysis", download: true },
];

export default function RecruiterPage() {
  return <main className="recruiter">
    <SiteHeader />
    <section className="recruiter-hero">
      <div className="recruiter-glow" aria-hidden="true" />
      <div className="recruiter-inner">
        <div className="recruiter-overline"><span className="recruiter-dot" /> MICHAEL NGO / RECRUITER DESK <span>2026 EDITION</span></div>
        <div className="recruiter-hero-grid">
          <div>
            <p className="recruiter-kicker">A clearer way to evaluate my work.</p>
            <h1>Everything you need.<br/><em>Nothing to hunt for.</em></h1>
            <p className="recruiter-lede">Ten years across proposals, bids and procurement. The documents, work samples and interactive projects behind that experience — collected in one place.</p>
            <div className="recruiter-actions"><a className="recruiter-button primary" href="#documents">Explore documents <span>↗</span></a><a className="recruiter-button secondary" href="/projects/bid-intelligence">See the work <span>↗</span></a></div>
          </div>
          <aside className="recruiter-signal">
            <span className="signal-top">PROFESSIONAL PROFILE <span>● AVAILABLE FOR OPPORTUNITIES</span></span>
            <div className="signal-monogram">MN<span>↗</span></div>
            <div className="signal-name">Michael Ngo</div>
            <div className="signal-role">Bid Manager / Proposal Strategist</div>
            <div className="signal-line"><span>FOCUS</span><b>Proposals · Procurement · Analytics</b></div>
            <div className="signal-line"><span>LOCATION</span><b>Brooklyn, New York</b></div>
            <div className="signal-line"><span>WORK STYLE</span><b>Remote / Hybrid</b></div>
          </aside>
        </div>
        <div className="recruiter-index"><span>01 / DOCUMENT LIBRARY</span><span>02 / SELECTED SYSTEMS</span><span>03 / CONTACT</span></div>
      </div>
    </section>
    <section className="recruiter-library" id="documents">
      <div className="recruiter-section-head"><div><p className="recruiter-kicker">01 — READY TO REVIEW</p><h2>Your shortlist, <em>already organized.</em></h2></div><p>Four direct links. No account required. The featured technical proposal and procurement case studies are fictional demonstration work; resume and certifications document real experience.</p></div>
      <div className="recruiter-doc-grid">{documents.map(doc=><article className="recruiter-doc" key={doc.number}>
        <div className="recruiter-doc-top"><span>{doc.number} / {doc.type}</span><span aria-hidden="true">↗</span></div>
        <div className="recruiter-doc-symbol" aria-hidden="true">{doc.number==="01"?"▤":doc.number==="02"?"✳":doc.number==="03"?"¶":"◈"}</div>
        <h3>{doc.title}</h3><p>{doc.detail}</p>
        <a href={doc.href} target="_blank" rel="noopener noreferrer">{doc.action} <span>↗</span></a>
      </article>)}</div>
    </section>
    <section className="recruiter-showcase" id="selected-work">
      <div className="recruiter-section-head"><div><p className="recruiter-kicker">02 — PROOF OF WORK</p><h2>More than a <em>list of skills.</em></h2></div><p>Explore systems and deliverables built to make complicated pursuit decisions easier to understand.</p></div>
      <div className="recruiter-feature">
        <div className="recruiter-feature-copy"><span>FEATURED / INTERACTIVE SYSTEM</span><h3>Bid Intelligence<br/>Portfolio</h3><p>A fictional, formula-driven workbook and interactive dashboard following 60 opportunities across the pursuit lifecycle.</p><a className="recruiter-button primary" href="/projects/bid-intelligence">Explore dashboard ↗</a></div>
        <div className="recruiter-visual" aria-label="Stylized data visualization preview">
          <div className="visual-header">BID INTELLIGENCE <span>DEMONSTRATION DATA</span></div>
          <div className="visual-metrics"><div><small>OPPORTUNITIES</small><strong>60</strong></div><div><small>WORKFLOW</small><strong>360°</strong></div><div><small>DATA SOURCE</small><strong>FICTIONAL</strong></div></div>
          <div className="visual-bars">{[37,55,43,74,58,89,68,96,76,62,83,100].map((height,i)=><i key={i} style={{height:height+"%"}} />)}</div>
          <div className="visual-footer">SOURCING → DECISION → SUBMISSION → LEARNING</div>
        </div>
      </div>
      <a className="recruiter-case-link" href="/projects/qta-case-study"><span>02 / END-TO-END CASE STUDY</span><strong>Queensboro Transit Authority — fictional procurement package</strong><span>Explore four connected documents ↗</span></a>
    </section>
    <section className="recruiter-close" id="contact"><p className="recruiter-kicker">03 — LET'S CONNECT</p><h2>Have a role in mind?<br/><em>Let's talk.</em></h2><a href="mailto:MichaelNgo5x@gmail.com">MichaelNgo5x@gmail.com ↗</a><p><a href="/resume">Full career history</a> · <a href="/credentials">Verify credentials</a> · <a href="/">Main portfolio</a></p></section>
    <style>{`
      .recruiter{background:#f4f5f3;color:#142332;font-family:Arial,Helvetica,sans-serif}.recruiter *{box-sizing:border-box}.recruiter-hero{background:#071522;color:#f5f7f5;position:relative;overflow:hidden}.recruiter-glow{position:absolute;right:-15%;top:-40%;width:75vw;height:75vw;background:radial-gradient(circle,#1e796c55,transparent 65%);pointer-events:none}.recruiter-inner,.recruiter-library,.recruiter-showcase{max-width:1500px;margin:auto;padding:65px clamp(22px,6vw,100px)}.recruiter-overline,.recruiter-index,.signal-top,.recruiter-kicker,.recruiter-doc-top,.recruiter-feature-copy>span,.visual-header,.visual-footer,.recruiter-case-link>span{font-size:11px;letter-spacing:.14em;font-weight:700}.recruiter-overline{display:flex;gap:12px;align-items:center;color:#a2c5c0}.recruiter-overline>span:last-child{margin-left:auto;color:#6d8992}.recruiter-dot{width:8px;height:8px;border-radius:50%;background:#78e2c5}.recruiter-hero-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:6vw;align-items:center;padding:85px 0}.recruiter-kicker{color:#38bca5;text-transform:uppercase}.recruiter h1{font-size:clamp(50px,6.7vw,105px);line-height:.98;letter-spacing:-.07em;margin:25px 0}.recruiter h1 em,.recruiter h2 em,.recruiter-close h2 em{color:#65d9c3;font-style:normal}.recruiter-lede{max-width:640px;font-size:18px;line-height:1.7;color:#b1c0c7}.recruiter-actions{display:flex;flex-wrap:wrap;gap:12px;margin-top:34px}.recruiter-button{display:inline-flex;align-items:center;justify-content:space-between;gap:35px;padding:16px 20px;border-radius:7px;font-size:13px;font-weight:700}.recruiter-button.primary{background:#64dfc5;color:#07232a}.recruiter-button.secondary{border:1px solid #527078;color:#effaf7}.recruiter-signal{border:1px solid #52707888;background:#102635b0;padding:28px;box-shadow:0 35px 80px #0005;transform:rotate(1deg)}.signal-top{display:flex;justify-content:space-between;gap:12px;color:#a2bfc0}.signal-top span{color:#65d9c3;font-size:9px}.signal-monogram{font-size:clamp(80px,12vw,160px);font-weight:900;letter-spacing:-.14em;color:#64dfc5;line-height:1.4}.signal-monogram span{font-size:25px;vertical-align:top;margin-left:22px}.signal-name{font-size:26px;font-weight:700}.signal-role{color:#9bb8bd;margin:8px 0 28px}.signal-line{border-top:1px solid #ffffff26;display:flex;justify-content:space-between;gap:12px;padding:14px 0;font-size:11px}.signal-line span{color:#819ca4}.signal-line b{text-align:right}.recruiter-index{display:flex;gap:30px;flex-wrap:wrap;border-top:1px solid #ffffff28;padding-top:24px;color:#789ca3}.recruiter-library,.recruiter-showcase{padding-top:110px;padding-bottom:110px}.recruiter-section-head{display:flex;justify-content:space-between;align-items:end;gap:40px;margin-bottom:45px}.recruiter-section-head h2{font-size:clamp(35px,4.7vw,68px);letter-spacing:-.055em;line-height:1.06;margin:18px 0 0}.recruiter-section-head h2 em{color:#138f7c}.recruiter-section-head>p{max-width:350px;color:#5f6e79;line-height:1.65}.recruiter-doc-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.recruiter-doc{background:#fff;border:1px solid #dce4e4;border-radius:12px;min-height:345px;padding:24px;display:flex;flex-direction:column;transition:transform .2s,box-shadow .2s}.recruiter-doc:hover{transform:translateY(-6px);box-shadow:0 20px 40px #122a301b}.recruiter-doc-top{display:flex;justify-content:space-between;color:#637982;font-size:9px}.recruiter-doc-symbol{font-size:62px;color:#168f80;margin:30px 0 15px}.recruiter-doc h3{font-size:22px;letter-spacing:-.04em;margin:0 0 8px}.recruiter-doc p{color:#6b7881;font-size:13px;line-height:1.6;margin:0 0 24px}.recruiter-doc a{border-top:1px solid #e1e8e8;padding-top:16px;display:flex;justify-content:space-between;font-size:12px;font-weight:700;margin-top:auto;color:#137f73}.recruiter-showcase{max-width:none;background:#e7eeec}.recruiter-showcase>.recruiter-section-head,.recruiter-feature,.recruiter-case-link{max-width:1300px;margin-left:auto;margin-right:auto}.recruiter-feature{display:grid;grid-template-columns:.8fr 1.2fr;background:#091c2b;border-radius:18px;overflow:hidden;color:#fff}.recruiter-feature-copy{padding:clamp(25px,4vw,65px)}.recruiter-feature-copy>span{color:#70d9c5}.recruiter-feature-copy h3{font-size:clamp(35px,4vw,62px);line-height:1.02;letter-spacing:-.06em}.recruiter-feature-copy p{color:#a9bfc5;line-height:1.7;margin-bottom:28px}.recruiter-visual{margin:35px;background:#112f3b;border:1px solid #426b70;padding:24px;border-radius:10px;display:flex;flex-direction:column}.visual-header{display:flex;justify-content:space-between;color:#a5d7d0}.visual-header span{font-size:9px;color:#6d9b9e}.visual-metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin:25px 0}.visual-metrics>div{background:#ffffff0b;padding:14px}.visual-metrics small{display:block;font-size:9px;color:#94b5b7}.visual-metrics strong{font-size:clamp(18px,2.5vw,34px);display:block;margin-top:12px}.visual-bars{height:165px;display:flex;align-items:flex-end;gap:7px;border-bottom:1px solid #ffffff35}.visual-bars i{flex:1;background:linear-gradient(#68dfc8,#2e817c);border-radius:3px 3px 0 0}.visual-footer{font-size:9px;color:#8bb6b8;margin-top:16px}.recruiter-case-link{display:flex;justify-content:space-between;align-items:center;gap:20px;padding:28px 0;margin-top:30px;border-top:1px solid #b4c6c3;border-bottom:1px solid #b4c6c3}.recruiter-case-link strong{font-size:18px}.recruiter-case-link>span{color:#137f73}.recruiter-close{text-align:center;padding:110px 24px;background:#071522;color:#fff}.recruiter-close h2{font-size:clamp(45px,6vw,85px);line-height:1;letter-spacing:-.06em}.recruiter-close>a{display:inline-block;color:#6be0c8;font-size:clamp(18px,2vw,26px);border-bottom:1px solid #6be0c8;padding-bottom:9px}.recruiter-close p:last-child{color:#a6bec1;margin-top:40px;font-size:13px}.recruiter-close p:last-child a{text-decoration:underline;text-underline-offset:5px}@media(max-width:950px){.recruiter-hero-grid,.recruiter-feature{grid-template-columns:1fr}.recruiter-doc-grid{grid-template-columns:repeat(2,1fr)}.recruiter-section-head{display:block}.recruiter-signal{transform:none}.recruiter-feature .recruiter-visual{margin:20px}}@media(max-width:550px){.recruiter-inner,.recruiter-library,.recruiter-showcase{padding:55px 20px}.recruiter-hero-grid{padding:50px 0}.recruiter-doc-grid{grid-template-columns:1fr}.recruiter-doc{min-height:260px}.recruiter-index{gap:12px;font-size:9px}.recruiter-case-link{flex-direction:column;align-items:flex-start}.recruiter-signal{padding:20px}.recruiter-feature-copy{padding:28px}.visual-header{font-size:9px}.recruiter-visual{padding:15px}}
      @media(prefers-reduced-motion:reduce){.recruiter-doc{transition:none}.recruiter-doc:hover{transform:none}}
    `}</style>
  </main>;
}

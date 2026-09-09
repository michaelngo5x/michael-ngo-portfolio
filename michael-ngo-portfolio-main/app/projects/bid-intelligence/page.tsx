import type { Metadata } from "next";
import DashboardClient from "./DashboardClient";
import SiteHeader from "../../SiteHeader";

export const metadata: Metadata = {
  title: "Bid Intelligence Dashboard | Michael Ngo",
  description: "An interactive fictional bid-management dashboard demonstrating Michael Ngo's approach to KPI design, pursuit reporting, and executive insight.",
};

export default function BidIntelligencePage() {
  return <main className="bid-page">
    <SiteHeader className="bid-nav" />
    <section className="bid-intro"><div><div className="project-kicker"><span>Interactive work sample</span><i>Entirely fictional</i></div><h1>Executive bid <em>intelligence.</em></h1><p>I designed this management view to turn a fragmented pursuit process into a readable operating picture—what entered the pipeline, what the team pursued, what it won, and where value remains active.</p></div><aside><span>My role</span><strong>System designer · Data architect · Bid manager · Analyst</strong><p>Use the reporting-period control below to see how the same management questions change month by month.</p></aside></section>
    <DashboardClient />
    <section className="bid-story"><div><p className="eyebrow">Behind the dashboard</p><h2>The value is in the management logic.</h2></div><div className="bid-story-grid"><article><span>01</span><h3>One source of truth</h3><p>A central opportunity register separates workflow stage, pursuit decision, submission status, and final outcome so each metric has a defensible definition.</p></article><article><span>02</span><h3>Decision-ready metrics</h3><p>Win rate uses decided bids only. Active value includes work still moving through pricing, proposal, submission, or award review—not closed records.</p></article><article><span>03</span><h3>Designed for action</h3><p>The view pairs portfolio totals with deadlines and concise observations, helping a manager move from “what happened?” to “what needs attention?”</p></article></div></section>
    <section className="project-disclaimer"><strong>Confidentiality-safe by design.</strong><p>All 60 opportunities, clients, prices, results, and narratives were created from scratch. The interface demonstrates my reporting and process-design approach without reproducing employer information.</p></section>
    <section className="bid-download"><div><p className="eyebrow">Go deeper</p><h2>Explore the complete Excel system.</h2><p>The workbook adds active-pipeline, bid/no-bid, post-bid, workflow, and opportunity-detail views behind this executive overview.</p></div><a className="pill white" href="/downloads/Michael-Ngo-Bid-Intelligence-Portfolio.xlsx" download>Download the Excel work sample ↗</a></section>
    <footer className="project-footer"><span>© 2026 Michael Ngo</span><a href="/">Return to portfolio ↑</a></footer>
  </main>;
}

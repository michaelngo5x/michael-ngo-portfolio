import type { Metadata } from "next";
import SiteHeader from "../../SiteHeader";

export const metadata: Metadata = {
  title: "Bid Desk Arcade | AI-Built Apps & Experiments | Michael Ngo",
  description: "An AI-assisted, fictional four-game procurement training experience with an interactive project brief.",
};

const games = [
  ["It's a Bid!", "Practice bid/no-bid judgment against competing priorities."],
  ["Red Flag Hunt", "Spot solicitation requirements and risks before they become surprises."],
  ["Scope Creep", "Explore how shifting requirements affect a proposed approach."],
  ["Capacity Crunch", "Balance deadlines, resources, and competing bid requests."],
];

export default function ArcadeProjectPage() {
  return (
    <main className="arcade-detail-page">
      <SiteHeader />
      <div className="arcade-project-layout">
        <section className="arcade-app" aria-labelledby="arcade-title">
          <a className="back" href="/projects">← AI-Built Apps & Experiments</a>
          <span className="eyebrow">AI-assisted interactive experiment / fictional scenarios</span>
          <h1 id="arcade-title">Bid Desk <em>Arcade</em></h1>
          <p>Four bite-sized procurement games that turn everyday bid-management trade-offs into interactive decisions. Choose a challenge, play through the scenario, and reflect on the result.</p>
          <div className="game-grid">
            {games.map(([name,description],i) => <article key={name}><span>0{i+1} / CHALLENGE</span><h2>{name}</h2><p>{description}</p></article>)}
          </div>
          <a className="launch" href="https://bid-desk-arcade.michaelngo5x.chatgpt.site" target="_blank" rel="noopener noreferrer">Launch the interactive arcade ↗</a>
          <p className="external">The game opens in a new tab on its existing external host.</p>
        </section>
        <aside className="project-brief" aria-label="Project scope and instructions">
          <span className="brief-kicker">PROJECT BRIEF / 002</span>
          <h2>About this app</h2>
          <section className="brief-section"><h3>Purpose</h3><p>Make procurement decision-making more approachable through short, interactive, consequence-based exercises.</p></section><section className="brief-section"><h3>Intended audience</h3><p>Proposal coordinators, bid managers, procurement professionals, and anyone curious about bid strategy.</p></section><section className="brief-section"><h3>How it works</h3><p>Four separate games present fictional dilemmas. Players choose responses and explore outcomes rather than work with live procurement records.</p></section><section className="brief-section"><h3>Try it yourself</h3><ol><li>Launch the arcade.</li><li>Select one of the four challenges.</li><li>Read the scenario and choose an action.</li><li>Review the result and replay to compare decisions.</li></ol></section><section className="brief-section"><h3>Prototype scope</h3><p>Independently conceived AI-assisted training experiment; not a production learning-management system or validated assessment.</p></section><section className="brief-section"><h3>What this demonstrates</h3><p>Process communication · Scenario design · Interactive learning · Procurement judgment · AI-assisted prototyping</p></section>
        </aside>
      </div>
      <style>{`
        .arcade-detail-page{min-height:100vh;background:radial-gradient(circle at 5% 10%,#26355d,transparent 40%),linear-gradient(140deg,#0b1024,#1e1034);color:#f5edff}
        .arcade-detail-page .site-header{background:#11162c;color:#fff;border-bottom:1px solid #39334f}
        .arcade-project-layout{max-width:1480px;margin:auto;padding:42px clamp(18px,4vw,60px) 90px;display:grid;grid-template-columns:minmax(0,1fr) minmax(350px,390px);gap:32px;align-items:start}
        .arcade-app{min-width:0}.arcade-app .back{display:inline-block;color:#d5b7ff;margin-bottom:25px;font-size:13px}
        .arcade-app .eyebrow{color:#ff8edc;letter-spacing:.13em;font-size:11px;font-weight:800;text-transform:uppercase}
        .arcade-app h1{font-size:clamp(42px,5vw,76px);margin:18px 0;line-height:1.08}.arcade-app h1 em{font-style:normal;color:#ff8edc}
        .arcade-app>p{max-width:710px;color:#b9b7d0;line-height:1.8}.game-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin:35px 0}
        .game-grid article{padding:25px;border-radius:17px;border:1px solid #68417b;background:#241735}
        .game-grid article span{font-size:10px;letter-spacing:.13em;color:#f5a7e4}.game-grid h2{font-size:23px;margin:14px 0}.game-grid p{font-size:13px;color:#c6bfd3;line-height:1.65}
        .launch{display:inline-flex;padding:17px 22px;background:#ff70c8;color:#1a0a26;border-radius:12px;font-weight:800}
        .arcade-app .external{font-size:12px;margin-top:15px}
        .project-brief{position:sticky;top:20px;padding:24px;border:1px solid #d9e1ed;border-radius:18px;background:#f7f9fc;color:#14233c;box-shadow:0 20px 55px #0006}
        .brief-kicker{font-size:11px;color:#406a9f;letter-spacing:.11em;font-weight:800}.project-brief h2{font-size:27px;line-height:1.15;color:#14233c;margin:12px 0 22px}
        .project-brief h3{font-size:12px;text-transform:uppercase;letter-spacing:.04em;color:#263d5e;margin:0 0 8px}
        .project-brief p,.project-brief li{font-size:13px;line-height:1.65;color:#33445e}.project-brief ol{padding-left:20px;margin:0}.project-brief .brief-section{border-radius:12px;padding:14px 16px;margin:0 0 10px;border:1px solid #e3e8f0;background:#fff}.project-brief .brief-section:nth-of-type(1){background:#eaf2fa}.project-brief .brief-section:nth-of-type(2){background:#edf6f1}.project-brief .brief-section:nth-of-type(3){background:#f0effa}.project-brief .brief-section:nth-of-type(4){background:#fcf5e9}.project-brief .brief-section:nth-of-type(5){background:#faf0f5}.project-brief .brief-section:nth-of-type(6){background:#eef1f5}.project-brief .brief-section p{margin:0}.project-brief .brief-section li+li{margin-top:5px}
        @media(max-width:1050px){.arcade-project-layout{grid-template-columns:1fr}.project-brief{position:static}}
        @media(max-width:550px){.game-grid{grid-template-columns:1fr}}
      `}</style>
    </main>
  );
}

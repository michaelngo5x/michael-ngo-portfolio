import type { Metadata } from "next";
import SiteHeader from "../SiteHeader";

export const metadata: Metadata = {
  title: "About Michael Ngo | Professional, but still a person",
  description: "The person behind Michael Ngo's professional portfolio: systems thinker, Knicks fan, anime watcher, aquarium visitor, and reluctant League of Legends player.",
};

const anime = [
  ["01", "Cowboy Bebop", "Style, melancholy, jazz, and the occasional reminder that whatever happens, happens."],
  ["02", "Blue Lock", "An aggressively dramatic argument for ego, competition, and scoring the goal yourself."],
  ["03", "Death Note", "A perfectly reasonable story about what happens when smart people refuse to log off."],
  ["04", "The Dangers in My Heart", "Quietly one of the sweetest character-growth stories I have watched."],
  ["05", "SPY x FAMILY", "Found family, secret identities, and Anya carrying the entire operation."],
];

export default function AboutPage() {
  return <main className="personal-about-page" id="top">
    <SiteHeader className="personal-about-nav" />

    <section className="personal-about-hero">
      <div className="personal-about-copy">
        <p className="eyebrow">About me · The non-resume version</p>
        <h1>I take the work seriously.<br/><em>Myself, slightly less so.</em></h1>
        <p className="personal-about-lede">I am Michael Ngo: a bid manager, proposal strategist, habitual organizer, and the person most likely to respond to a recurring inconvenience by building a tracker for it.</p>
        <p>I like work that combines writing, analysis, strategy, problem-solving, and creativity. I also think a professional website should prove that its owner has interests beyond optimizing workflows, so this page is intentionally less impressive and considerably more specific.</p>
      </div>
      <aside className="personal-id-card" aria-label="Quick facts about Michael">
        <span className="personal-id-label">Unofficial personnel file</span>
        <div className="personal-id-photo"><img src="/images/michael-ngo.jpg" alt="Michael Ngo"/></div>
        <h2>Michael Ngo</h2>
        <p>Brooklyn, New York</p>
        <dl><div><dt>Current status</dt><dd>Knicks in 5! 🏆</dd></div><div><dt>Likely location</dt><dd>Near a fish tank</dd></div><div><dt>Known weakness</dt><dd>“One more” ARAM</dd></div></dl>
      </aside>
    </section>

    <section className="personal-operating-manual">
      <div><p className="eyebrow">How I tend to operate</p><h2>If a problem happens twice, I start wondering whether it needs a system.</h2></div>
      <div className="personal-manifesto">
        <p>I naturally become the person who knows where something stands, what is missing, and how the pieces connect. Sometimes that means building a dashboard. Sometimes it means translating a 200-page solicitation into five things people actually need to know.</p>
        <p>I have also learned that coordination is not the same thing as managing everyone. Much of my work involves helping different people move toward the same deadline, protecting the team’s capacity when necessary, and making sure competence does not become an excuse to give someone infinite work.</p>
        <blockquote>Good leadership occasionally sounds like: “My team does not have capacity for that right now.”</blockquote>
        <p>Curiosity is usually responsible for the rest. It has pulled me into analytics, AI, procurement, project management, cybersecurity, energy, and eventually website development. I thought an interactive portfolio could explain my work better than another PDF, so I figured out what I needed to build one.</p>
      </div>
    </section>

    <section className="personal-favorites">
      <div className="personal-section-heading"><div><p className="eyebrow">Extremely important credentials</p><h2>Top five anime.</h2></div><p>This ranking is authoritative, permanent, and absolutely not subject to change the next time I watch something good.</p></div>
      <ol className="anime-ranking">{anime.map(([n,title,note])=><li key={title}><span>{n}</span><div><h3>{title}</h3><p>{note}</p></div></li>)}</ol>
    </section>

    <section className="personal-field-notes">
      <div className="personal-section-heading light"><div><p className="eyebrow">Additional context nobody requested</p><h2>A few things that explain a lot.</h2></div></div>
      <div className="personal-note-grid">
        <article className="knicks-card"><span>🏀</span><small>Permanent optimism department</small><h3>Huge Knicks fan.</h3><p>Every postseason begins with careful analysis and eventually arrives at the same conclusion: Knicks in 5! 🏆</p></article>
        <article><span>🤼</span><small>Long-term storytelling</small><h3>Wrestling fan.</h3><p>I appreciate athleticism, ridiculous commitment to a premise, and a storyline that somehow survives for twenty years.</p></article>
        <article className="lol-card"><span>🎮</span><small>Time-management exception</small><h3>Unfortunately plays far too much LoL ARAM Mayhem.</h3><p>I enjoy strategy, adaptation, teamwork, and apparently being launched into five-person fights with very little warning.</p></article>
        <article><span>🐠</span><small>Preferred decompression method</small><h3>Fish-tank time.</h3><p>I can sit beside an aquarium for hours doing absolutely nothing. This may be the only part of my life that has no tracker.</p></article>
        <article><span>🏛️</span><small>Ideal day out</small><h3>Museums and aquariums.</h3><p>Give me a quiet afternoon, something unexpectedly fascinating, and enough time to read every sign.</p></article>
        <article><span>🦸</span><small>Unaccredited subject expertise</small><h3>Basically every superhero movie.</h3><p>I have seen enough of them to recognize that “we should assemble a team” is rarely followed by a simple implementation plan.</p></article>
      </div>
    </section>

    <section className="personal-close">
      <p className="eyebrow">The point, if there has to be one</p>
      <h2>I am serious about doing good work. I just do not think being good at work requires becoming a LinkedIn post in human form.</h2>
      <p>The professional pages show what I have built. This page is here because the person you work with matters too.</p>
      <div className="actions center"><a className="pill white" href="/#work">See the actual work ↗</a><a className="text-link" href="/resume">View my career</a></div>
    </section>
    <footer><span>© 2026 Michael Ngo</span><span>Bid Manager · Knicks Believer · Aquarium Observer</span><a href="#top">Back to top ↑</a></footer>
  </main>;
}

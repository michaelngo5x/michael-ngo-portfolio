import SiteHeader from "../SiteHeader";

const games = ["It's a Bid!", "Red Flag Hunt", "Scope Creep", "Capacity Crunch"];

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <SiteHeader />
      <section className="projects-world" aria-labelledby="projects-heading">
        <div className="world-orb orb-one" aria-hidden="true" />
        <div className="world-orb orb-two" aria-hidden="true" />
        <div className="projects-intro">
          <span className="projects-kicker">MICHAEL NGO / INTERACTIVE WORKSPACE</span>
          <h1 id="projects-heading"><span aria-hidden="true">▱</span> Projects &amp; Interactive Work<span className="blink">_</span></h1>
          <p>Selected case studies, interactive tools, and creative experiments exploring procurement, proposals, and practical problem-solving.</p>
          <span className="projects-status"><i /> 03 EXPERIENCES · CHOOSE A PROJECT TO EXPLORE</span>
        </div>
        <div className="experience-grid">
          <article className="experience-card tidemark-card"><span className="featured-sticker" aria-label="Featured project">★ FEATURED PROJECT</span>
            <a className="experience-card-overlay" href="https://tidemark-civil.vercel.app" target="_blank" rel="noopener noreferrer" aria-label="Explore Tidemark Civil interactive procurement case study" />
            <div className="tidemark-visual" aria-hidden="true">
              <div className="tidemark-topline"><span>PROJECT 001</span><span>CASE STUDY</span></div>
              <div className="tidemark-title">TIDEMARK <span>CIVIL</span></div>
              <div className="tidemark-subtitle">ONE PROJECT. TWO PERSPECTIVES.</div>
              <div className="tidemark-perspectives"><span>01 / PROCUREMENT AGENCY</span><span>02 / BIDDER</span></div>
              <div className="tidemark-flow"><span>RFP DEVELOPMENT</span><b>→</b><span>TECHNICAL PROPOSAL</span><b>→</b><span>EVALUATION &amp; AWARD</span></div>
            </div>
            <div className="experience-copy tidemark-copy">
              <div className="experience-eyebrow">PROCUREMENT / PROPOSALS / TECHNICAL WRITING</div>
              <h2>Tidemark Civil<br /><em>One Project. Two Perspectives.</em></h2>
              <p>An interactive public-sector procurement case study following a fictional infrastructure project from both sides: the agency developing and evaluating an RFP, and the bidder preparing a compliant technical proposal.</p>
              <div className="project-chips"><span>RFP development</span><span>Proposal management</span><span>Technical writing</span><span>Interactive case study</span></div>
              <a className="experience-action tidemark-action" href="https://tidemark-civil.vercel.app" target="_blank" rel="noopener noreferrer">EXPLORE THE CASE STUDY <span aria-hidden="true">↗</span></a>
              <small>Original fictional portfolio project. Opens the interactive experience in a new tab.</small>
            </div>
          </article>
          <article className="experience-card lab-card">
            <a className="experience-card-overlay" href="/projects/opportunity-intelligence" aria-label="Open Bid Inbox Manager Prototype" />
            <div className="lab-heading"><span className="mini-led" /> SYSTEMS LAB <span className="lab-number">PROJECT 002</span></div>
            <div className="lab-screen">
              <div className="lab-screen-top"><span>BID INBOX MANAGER</span><span>● ● ●</span></div>
              <div className="lab-data">
                <div className="lab-chart" aria-hidden="true">
                  <span style={{height:"32%"}} /><span style={{height:"52%"}} /><span style={{height:"44%"}} /><span style={{height:"75%"}} /><span style={{height:"60%"}} /><span style={{height:"90%"}} /><span style={{height:"68%"}} />
                </div>
                <div className="lab-gauge"><strong>87</strong><span>DEMO SCORE</span></div>
              </div>
              <div className="lab-terminal"><span>&gt; intake received</span><span>&gt; rules evaluated</span><span>&gt; human review required<span className="cursor">_</span></span></div>
            </div>
            <div className="experience-copy">
              <div className="experience-eyebrow">ANALYZE / PRIORITIZE / DECIDE / ROUTE</div>
              <h2>Bid Inbox<br /><em>Manager Prototype</em></h2>
              <p>Explore a fictional, cross-industry procurement inbox. Review notices, qualification rules, duplicate detection, human approvals, simulated routing, and illustrative planning values.</p>
              <div className="project-chips"><span>5-stage workflow</span><span>Human-in-the-loop</span><span>Interactive demo</span></div>
              <a className="experience-action lab-action" href="/projects/opportunity-intelligence">EXPLORE THE PROTOTYPE <span aria-hidden="true">↗</span></a>
              <small>Fictional examples and transparent rule-based logic. Not connected to live AI or employer systems.</small>
            </div>
          </article>
          <article className="experience-card arcade-card">
            <a className="experience-card-overlay" href="/projects/arcade" aria-label="Open Bid Management Arcade project and instructions" />
            <div className="arcade-marquee"><span className="pixel-star">✦</span><div><span>BID MANAGEMENT</span><strong>ARCADE</strong></div><span className="pixel-star">✦</span></div>
            <div className="cabinet">
              <div className="cabinet-screen">
                <div className="arcade-skyline" aria-hidden="true"><span/><span/><span/><span/><span/><span/><span/><span/></div>
                <div className="game-screen-content"><span className="game-instruction">★ SELECT YOUR CHALLENGE ★</span>{games.map((game,i)=><div className="game-option" key={game}><span>{String(i+1).padStart(2,"0")}</span>{game}</div>)}</div>
              </div>
              <div className="arcade-controls" aria-hidden="true"><span className="joystick"><i/></span><span className="control-buttons"><b/><b/><b/><b/></span><span className="coin-slot">INSERT CURIOSITY ↗</span></div>
            </div>
            <div className="experience-copy arcade-copy">
              <div className="experience-eyebrow">FOUR GAMES / UNLIMITED RETRIES</div>
              <h2>Ready,<br /><em>bid, play.</em></h2>
              <p>Bid/no-bid calls, hidden red flags, changing requirements, and impossible capacity decisions. The procurement world, now with a high-score mentality.</p>
              <a className="experience-action arcade-action" href="/projects/arcade">VIEW APP &amp; INSTRUCTIONS <span aria-hidden="true">↗</span></a>
              <small>View the project brief, then launch the four-game arcade.</small>
            </div>
          </article>
        </div>
        <div className="projects-outro"><span>◉ THREE EXPERIENCES. ONE CREATIVE WORKSPACE.</span><a href="/#work">← BACK TO SELECTED WORK</a></div>
      </section>
      <style>{`
        .projects-page{background:#080d1d;color:#eaf6ff;min-height:100vh}.projects-page .site-header{position:relative;z-index:5;background:#0c1325;color:#f1f6ff;border-bottom:1px solid #27304b}.projects-page .site-header a{color:inherit}
        .projects-world{position:relative;isolation:isolate;overflow:hidden;min-height:calc(100vh - 90px);padding:80px clamp(20px,5vw,84px) 64px;background:radial-gradient(ellipse at 10% 20%,#12385b 0,transparent 36%),radial-gradient(ellipse at 90% 40%,#3b1558 0,transparent 42%),linear-gradient(145deg,#080e20,#0b0e24 50%,#150e29)}
        .projects-world:before{content:"";position:absolute;inset:0;z-index:-1;background-image:linear-gradient(#ffffff06 1px,transparent 1px),linear-gradient(90deg,#ffffff06 1px,transparent 1px);background-size:45px 45px;mask-image:linear-gradient(to bottom,transparent 0%,#000 30%,#000 95%)}.world-orb{position:absolute;pointer-events:none;filter:blur(80px);border-radius:50%;opacity:.35;z-index:-1}.orb-one{width:360px;height:360px;background:#0bc8f2;top:120px;left:-220px}.orb-two{width:420px;height:420px;background:#ff35b8;bottom:0;right:-230px}
        .projects-intro{text-align:center;max-width:900px;margin:0 auto 56px}.projects-kicker{font-size:11px;letter-spacing:.28em;color:#82c6e9;font-weight:800}.projects-intro h1{font-size:clamp(54px,7vw,94px);line-height:1.05;letter-spacing:-.065em;margin:15px 0 18px;text-shadow:0 0 35px #36bdfd66}.projects-intro h1>span:first-child{font-weight:400;color:#31d5ff}.blink{color:#43e6ff;animation:blink 1.5s steps(1) infinite}@keyframes blink{50%{opacity:0}}.projects-intro p{font-size:clamp(16px,2vw,21px);color:#b7c6df;line-height:1.65;margin:0 auto 22px;max-width:700px}.projects-status{font:700 11px ui-monospace,monospace;letter-spacing:.14em;color:#8f9db8}.projects-status i{display:inline-block;width:8px;height:8px;border-radius:50%;background:#38e6b5;box-shadow:0 0 12px #38e6b5;margin-right:7px}
        .experience-grid{max-width:1300px;margin:auto;display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:stretch}.experience-card{min-width:0;border-radius:26px;overflow:hidden;position:relative;display:flex;flex-direction:column;transition:transform .3s ease,box-shadow .3s ease}.experience-card:hover{transform:translateY(-9px)}.experience-card-overlay{position:absolute;inset:0;z-index:2;border-radius:inherit;cursor:pointer}.experience-card-overlay:focus-visible{outline:3px solid #fff;outline-offset:-5px}.experience-action{position:relative;z-index:3}.tidemark-card{grid-column:1/-1;border:1px solid #c4a36d;background:linear-gradient(140deg,#142739,#0c172a 70%);box-shadow:0 24px 80px #0008,0 0 35px #bda06b20;display:grid;grid-template-columns:1.05fr 1fr}.tidemark-card:hover{box-shadow:0 24px 90px #0009,0 0 50px #d6ad6b40}.tidemark-visual{padding:30px;min-height:420px;display:flex;flex-direction:column;justify-content:center;background:radial-gradient(circle at 25% 50%,#1e5a70 0,transparent 52%),linear-gradient(135deg,#102b3a,#0b1428);border-right:1px solid #426276;overflow:hidden}.tidemark-topline{display:flex;justify-content:space-between;gap:12px;color:#e6c990;font:800 10px ui-monospace,monospace;letter-spacing:.16em;margin-bottom:auto}.tidemark-title{font-size:clamp(35px,4.5vw,70px);font-weight:900;line-height:1;letter-spacing:-.06em;color:#f6f2e8;margin-top:60px}.tidemark-title span{color:#d6ac70}.tidemark-subtitle{color:#c8d9e3;letter-spacing:.17em;font:800 12px ui-monospace,monospace;margin:14px 0 40px}.tidemark-perspectives{display:grid;grid-template-columns:1fr 1fr;gap:10px}.tidemark-perspectives span{padding:15px 10px;border-radius:10px;border:1px solid #3c829d;background:#123a51;color:#9fe4fa;text-align:center;font:800 11px ui-monospace,monospace}.tidemark-perspectives span+span{border-color:#b57a43;background:#4b2d20;color:#ffd3a3}.tidemark-flow{display:flex;align-items:center;justify-content:space-between;gap:7px;color:#a8c6d5;font:700 9px ui-monospace,monospace;letter-spacing:.05em;margin-top:26px}.tidemark-flow b{color:#d6ac70;font-size:17px}.tidemark-copy{padding:38px}.tidemark-copy .experience-eyebrow{color:#e2bd84}.tidemark-copy h2 em{color:#d6ac70;font-size:.65em;line-height:1.25;display:inline-block}.tidemark-copy .project-chips span{border-color:#65533d;background:#29291f;color:#e6cda3}.tidemark-action{background:#d6ac70;color:#1a2330}.tidemark-copy small{color:#a5adba}.lab-card{border:1px solid #2878a6;background:linear-gradient(160deg,#10243d,#0a142b 65%);box-shadow:0 24px 80px #0008,0 0 30px #00cfff12}.lab-card:hover{box-shadow:0 24px 90px #0009,0 0 45px #00cfff4d}.arcade-card{border:1px solid #b635a7;background:linear-gradient(160deg,#26133d,#140c2b 65%);box-shadow:0 24px 80px #0008,0 0 30px #ff3bd71a}.arcade-card:hover{box-shadow:0 24px 90px #0009,0 0 45px #ff3bd759}
        .lab-heading{display:flex;align-items:center;gap:10px;font:800 11px ui-monospace,monospace;letter-spacing:.2em;color:#82f5ff;padding:25px 28px 17px}.mini-led{width:8px;height:8px;background:#28f6c9;border-radius:50%;box-shadow:0 0 13px #28f6c9}.lab-number{margin-left:auto;color:#6e9eb6;font-size:10px}.lab-screen{margin:0 28px;background:#051223;border:1px solid #268ab0;border-radius:16px;box-shadow:inset 0 0 35px #06c6ff12,0 0 26px #00c7ff2a;overflow:hidden;transform:perspective(900px) rotateX(1deg)}.lab-screen-top{display:flex;justify-content:space-between;padding:14px 17px;border-bottom:1px solid #194a66;color:#60eaff;font:700 11px ui-monospace,monospace;letter-spacing:.12em}.lab-screen-top span:last-child{color:#3d7899}.lab-data{height:190px;display:flex;align-items:center;justify-content:space-around;gap:22px;padding:22px}.lab-chart{height:120px;flex:1;display:flex;gap:9px;align-items:flex-end;border-bottom:1px solid #24516b;background:repeating-linear-gradient(to top,#11334a 0 1px,transparent 1px 30px)}.lab-chart span{flex:1;max-width:32px;background:linear-gradient(#58ecff,#1969bd);border-radius:4px 4px 0 0;box-shadow:0 0 15px #18cfff4a;transition:height .4s}.lab-card:hover .lab-chart span:nth-child(2n){height:80%!important}.lab-gauge{width:120px;height:120px;flex-shrink:0;border-radius:50%;border:9px solid #24d4c5;border-left-color:#14445e;display:flex;align-items:center;justify-content:center;flex-direction:column;box-shadow:0 0 24px #20dfc83b}.lab-gauge strong{font-size:37px;line-height:1}.lab-gauge span{font:700 8px ui-monospace,monospace;color:#9eddd8;letter-spacing:.07em}.lab-terminal{display:flex;flex-direction:column;gap:5px;background:#04101d;padding:12px 17px 16px;font:11px ui-monospace,monospace;color:#55e4c2}.cursor{animation:blink 1s steps(1) infinite}
        .experience-copy{padding:30px 34px 34px;display:flex;flex-direction:column;flex:1}.experience-eyebrow{font:800 10px ui-monospace,monospace;letter-spacing:.17em;color:#56d7ed}.experience-copy h2{font-size:clamp(32px,3.3vw,50px);letter-spacing:-.055em;line-height:1.05;margin:13px 0 17px}.experience-copy h2 em{font-style:normal;color:#63e7f5}.experience-copy p{color:#b6c7da;font-size:15px;line-height:1.7;margin:0 0 20px}.project-chips{display:flex;flex-wrap:wrap;gap:7px;margin-bottom:22px}.project-chips span{border:1px solid #295875;background:#102d43;border-radius:100px;padding:7px 10px;font-size:11px;color:#9ee7e7}.experience-action{display:flex;align-items:center;justify-content:space-between;text-decoration:none;font:800 13px ui-monospace,monospace;letter-spacing:.1em;padding:18px 20px;border-radius:13px;margin-top:auto;transition:transform .2s,filter .2s}.experience-action:hover{transform:translateY(-3px);filter:brightness(1.15)}.experience-action span{font-size:22px}.lab-action{background:#13d5ee;color:#042238;box-shadow:0 0 25px #00dfff36}.experience-copy small{font-size:11px;color:#809bb2;line-height:1.5;margin-top:14px}
        .arcade-marquee{margin:23px 28px 0;padding:13px 14px 15px;min-height:99px;border:3px solid #ff66d9;border-radius:15px 15px 6px 6px;background:radial-gradient(ellipse at 50% 0,#442c93,#160a36);box-shadow:0 0 25px #ff32b966,inset 0 0 15px #fb49d12e;display:flex;align-items:center;justify-content:space-around;text-align:center}.arcade-marquee div{display:flex;flex-direction:column;line-height:1.05}.arcade-marquee div span{font:900 clamp(13px,1.7vw,21px) ui-monospace,monospace;letter-spacing:.07em;color:#e8e9ff}.arcade-marquee div strong{font:1000 clamp(30px,4vw,48px) ui-monospace,monospace;color:#ffcb47;text-shadow:3px 3px #fa3b84,0 0 22px #ff46a5;letter-spacing:.08em}.pixel-star{color:#ffd54f;font-size:24px}.cabinet{margin:0 42px;background:#190d36;border-left:10px solid #6b279a;border-right:10px solid #6b279a;border-bottom:10px solid #6b279a;padding:20px 17px 12px;border-radius:0 0 18px 18px;box-shadow:inset 0 0 30px #000a,0 10px 25px #0008}.cabinet-screen{height:215px;position:relative;overflow:hidden;border:9px solid #080820;border-radius:18px;background:linear-gradient(#151d6b,#352369 55%,#111b3f);box-shadow:inset 0 0 40px #0009,0 0 15px #e94ef833}.arcade-skyline{position:absolute;inset:auto 0 0;height:75px;display:flex;align-items:flex-end;justify-content:space-around;opacity:.6}.arcade-skyline span{background:#101533;width:10%;height:50%;box-shadow:inset 3px 0 #5b3880}.arcade-skyline span:nth-child(2n){height:85%}.arcade-skyline span:nth-child(3n){height:65%}.game-screen-content{position:relative;z-index:1;max-width:300px;margin:19px auto;padding:10px 17px;background:#0a0d32de;border:2px solid #fe65bc;border-radius:9px;box-shadow:0 0 20px #fb4fc44d}.game-instruction{display:block;color:#ffd76d;text-align:center;font:800 11px ui-monospace,monospace;margin-bottom:10px}.game-option{font:700 12px ui-monospace,monospace;color:#f7e9ff;padding:5px 3px;border-bottom:1px solid #ffffff19}.game-option span{color:#ff7bce;margin-right:12px}.game-option:first-of-type{color:#ffda6b}.arcade-controls{display:flex;align-items:center;justify-content:space-between;padding:17px 10px 4px}.joystick{height:25px;width:50px;border-radius:50%;background:#0a0b25;position:relative;border:3px solid #6c459a}.joystick i{position:absolute;left:20px;top:-14px;height:21px;width:9px;background:#d1c1ec;border-radius:7px;transform:rotate(-12deg)}.joystick i:before{content:"";position:absolute;width:21px;height:21px;border-radius:50%;background:#f73573;top:-12px;left:-6px;box-shadow:0 0 12px #f73573}.control-buttons{display:flex;gap:8px}.control-buttons b{width:17px;height:17px;background:#ffce4a;border-radius:50%;box-shadow:0 3px #9a5d2b}.control-buttons b:nth-child(2){background:#ff4f91}.control-buttons b:nth-child(3){background:#28c5ff}.control-buttons b:nth-child(4){background:#7cf2ae}.coin-slot{font:700 9px ui-monospace,monospace;color:#ac7fca}.arcade-copy .experience-eyebrow{color:#ff85d8}.arcade-copy h2 em{color:#ff89dd}.arcade-action{background:#fa4dc5;color:#230928;box-shadow:0 0 25px #ff43cf36}.arcade-copy small{color:#a58daf}.projects-outro{max-width:1300px;margin:36px auto 0;display:flex;justify-content:space-between;gap:15px;color:#8b9fbd;font:700 11px ui-monospace,monospace;letter-spacing:.13em}.projects-outro a{color:#a6d9f2;text-decoration:none}.projects-outro a:hover{text-decoration:underline}
        @media(max-width:900px){.tidemark-card{grid-column:auto;grid-template-columns:1fr}.tidemark-visual{min-height:320px;border-right:0;border-bottom:1px solid #426276}.experience-grid{grid-template-columns:1fr;max-width:610px}.projects-world{padding-top:55px}.projects-intro{margin-bottom:36px}.arcade-marquee div strong{font-size:40px}.projects-outro{max-width:610px}}
        @media(max-width:520px){.tidemark-visual{padding:22px;min-height:290px}.tidemark-title{font-size:39px;margin-top:35px}.tidemark-subtitle{font-size:10px;margin-bottom:26px}.tidemark-perspectives span{font-size:9px;padding:12px 6px}.tidemark-flow{font-size:7px}.tidemark-copy{padding:24px 22px 26px}.projects-world{padding:45px 14px 35px}.projects-kicker{font-size:9px}.experience-grid{gap:24px}.experience-card{border-radius:20px}.lab-heading{padding:20px 16px 14px}.lab-screen{margin:0 16px}.lab-data{height:155px;padding:14px;gap:14px}.lab-chart{height:100px;gap:5px}.lab-gauge{width:90px;height:90px;border-width:7px}.lab-gauge strong{font-size:28px}.experience-copy{padding:24px 22px 26px}.arcade-marquee{margin:16px 16px 0;min-height:84px}.arcade-marquee div strong{font-size:32px}.arcade-marquee div span{font-size:13px}.cabinet{margin:0 24px;padding:12px 9px;border-left-width:6px;border-right-width:6px}.cabinet-screen{height:195px;border-width:6px}.game-screen-content{margin:16px 8px;padding:8px}.game-option{font-size:11px}.coin-slot{font-size:7px}.projects-outro{flex-direction:column;line-height:1.7}}

        /* Three equal horizontal cards on desktop; the first has a distinct earthy civil-engineering identity. */
        .experience-grid{max-width:1460px;grid-template-columns:repeat(3,minmax(0,1fr));gap:22px;align-items:stretch}
        .experience-card{border-radius:22px}
        .tidemark-card{grid-column:auto;display:flex;flex-direction:column;overflow:visible;position:relative;border:1px solid #927755;background:linear-gradient(165deg,#2b342c,#1c2726 56%,#1b2526);box-shadow:0 20px 65px #0008,0 0 24px #c3a46c1a}
        .tidemark-card:hover{box-shadow:0 24px 70px #0009,0 0 38px #c9a46a55}
        .tidemark-visual{min-height:270px;padding:25px 22px 23px;border-right:0;border-bottom:1px solid #71644b;background:radial-gradient(ellipse at 20% 0%,#68705265,transparent 55%),repeating-linear-gradient(165deg,transparent 0 27px,#c9b18b0c 28px 29px),linear-gradient(145deg,#434938,#283e3b 65%,#35342b);border-radius:21px 21px 0 0}
        .tidemark-topline{color:#e8d5b2;font-size:9px;letter-spacing:.12em}
        .tidemark-title{font-size:clamp(30px,3vw,46px);margin-top:46px;line-height:1.03;color:#f5eddd;letter-spacing:-.06em}
        .tidemark-title span{color:#d8b47d}
        .tidemark-subtitle{color:#e1d8c8;font-size:9px;margin:12px 0 24px;letter-spacing:.12em}
        .tidemark-perspectives{gap:7px}
        .tidemark-perspectives span{font-size:9px;padding:12px 5px;border:1px solid #8d9b81;background:#334b43;color:#e0e9d5}
        .tidemark-perspectives span+span{border-color:#bd9868;background:#624831;color:#f7dec0}
        .tidemark-flow{font-size:8px;margin-top:19px;color:#e4d6bd}
        .tidemark-copy{padding:28px 27px 30px}
        .tidemark-copy .experience-eyebrow{color:#dfbd8e}
        .tidemark-copy h2 em{color:#d9b883;font-size:.72em}
        .tidemark-copy .project-chips span{background:#384037;border-color:#6c735e;color:#e8ddc6}
        .tidemark-action{background:#c9a477;color:#242d27}
        .featured-sticker{position:absolute;z-index:4;top:-13px;left:19px;padding:9px 14px;border-radius:7px;transform:rotate(-3deg);background:#ead2a2;color:#3a392d;box-shadow:0 5px 15px #0008;font:900 10px ui-monospace,monospace;letter-spacing:.08em;pointer-events:none}
        .lab-heading{padding:23px 19px 15px}
        .lab-screen{margin:0 18px}
        .lab-data{height:155px;padding:14px;gap:10px}
        .lab-chart{height:105px;gap:5px}
        .lab-gauge{width:90px;height:90px;border-width:7px}
        .lab-gauge strong{font-size:29px}
        .arcade-marquee{margin:20px 18px 0;min-height:78px}
        .arcade-marquee div strong{font-size:clamp(25px,2.8vw,38px)}
        .arcade-marquee div span{font-size:13px}
        .cabinet{margin:0 24px;padding:12px 10px;border-left-width:7px;border-right-width:7px}
        .cabinet-screen{height:175px;border-width:6px}
        .game-screen-content{margin:11px auto;padding:8px 12px}
        .game-option{font-size:10px;padding:4px 2px}
        .experience-copy{padding:28px 25px 29px}
        .experience-copy h2{font-size:clamp(29px,2.6vw,39px)}
        .experience-copy p{font-size:14px;line-height:1.65}
        .experience-action{font-size:11px;letter-spacing:.06em;padding:16px}
        .projects-outro{max-width:1460px}
        @media(max-width:1050px){.experience-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.tidemark-card{grid-column:auto}.tidemark-visual{min-height:270px}.experience-copy h2{font-size:35px}}
        @media(max-width:700px){.experience-grid{grid-template-columns:1fr;max-width:530px}.tidemark-card{grid-column:auto}.tidemark-visual{min-height:265px}.projects-world{padding-top:55px}.projects-intro{margin-bottom:40px}.experience-copy h2{font-size:36px}}
        @media(max-width:520px){.tidemark-visual{padding:24px 19px;min-height:255px}.tidemark-title{font-size:39px}.tidemark-copy{padding:25px 22px}.experience-copy{padding:25px 22px}.tidemark-perspectives span{font-size:9px}.tidemark-flow{font-size:7px}.featured-sticker{font-size:9px}}
        @media(prefers-reduced-motion:reduce){.experience-card,.experience-action{transition:none}.blink,.cursor{animation:none}}
      `}</style>
    </main>
  );
}

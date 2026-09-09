"use client";

import { useMemo, useState } from "react";

type Period = {month:string;reviewed:number;approved:number;submitted:number;wins:number;losses:number;noBids:number;awaiting:number;submittedValue:number;activeValue:number;avgValue:number};

const periods: Period[] = [
  {month:"Sep 2025",reviewed:5,approved:2,submitted:2,wins:0,losses:2,noBids:3,awaiting:0,submittedValue:356800,activeValue:0,avgValue:155060},
  {month:"Oct 2025",reviewed:5,approved:3,submitted:3,wins:0,losses:3,noBids:2,awaiting:0,submittedValue:1812100,activeValue:0,avgValue:877580},
  {month:"Nov 2025",reviewed:5,approved:3,submitted:3,wins:0,losses:3,noBids:2,awaiting:0,submittedValue:6343400,activeValue:0,avgValue:1429100},
  {month:"Dec 2025",reviewed:5,approved:3,submitted:3,wins:0,losses:3,noBids:2,awaiting:0,submittedValue:3518100,activeValue:0,avgValue:1065140},
  {month:"Jan 2026",reviewed:5,approved:3,submitted:3,wins:1,losses:2,noBids:2,awaiting:0,submittedValue:7359500,activeValue:0,avgValue:1577800},
  {month:"Feb 2026",reviewed:5,approved:3,submitted:3,wins:1,losses:2,noBids:2,awaiting:0,submittedValue:2310600,activeValue:0,avgValue:672680},
  {month:"Mar 2026",reviewed:5,approved:2,submitted:2,wins:1,losses:1,noBids:3,awaiting:0,submittedValue:163100,activeValue:0,avgValue:299620},
  {month:"Apr 2026",reviewed:5,approved:4,submitted:4,wins:0,losses:4,noBids:1,awaiting:0,submittedValue:11291000,activeValue:0,avgValue:2261800},
  {month:"May 2026",reviewed:5,approved:2,submitted:2,wins:0,losses:2,noBids:3,awaiting:0,submittedValue:611800,activeValue:0,avgValue:1119980},
  {month:"Jun 2026",reviewed:5,approved:3,submitted:3,wins:0,losses:3,noBids:2,awaiting:0,submittedValue:173400,activeValue:0,avgValue:434560},
  {month:"Jul 2026",reviewed:5,approved:4,submitted:2,wins:0,losses:1,noBids:1,awaiting:0,submittedValue:146900,activeValue:4108700,avgValue:927640},
  {month:"Aug 2026",reviewed:5,approved:5,submitted:3,wins:0,losses:0,noBids:0,awaiting:2,submittedValue:2727000,activeValue:3429600,avgValue:685920},
];

const active = [
  ["BID-053","Beacon Preparatory Schools","Integrated Facility Operations","Pricing","$2.13M","High"],
  ["BID-054","Wayne Municipal Services","Districtwide School Cleaning","Proposal Development","$1.85M","Low"],
  ["BID-055","Emerald City Administrative Center","Campus Landscape Program","Submitted","$128.9K","Medium"],
  ["BID-056","Beacon Preparatory Schools","Carpet and Floor Renewal","Awaiting Award","$216.4K","Low"],
  ["BID-057","Wayne Municipal Services","Integrated Pest Management","Proposal Development","$54K","Low"],
  ["BID-058","Emerald City Administrative Center","Renovation Closeout Cleaning","Submitted","$307.4K","Low"],
  ["BID-059","Keystone Civic Complex","Civic Center Custodial Program","Awaiting Award","$2.20M","Low"],
  ["BID-060","Gotham Public Schools","Municipal Grounds Care","Proposal Development","$648.6K","Medium"],
];

const money = (n:number) => n >= 1000000 ? `$${(n/1000000).toFixed(n>=10000000?1:2)}M` : `$${Math.round(n/1000)}K`;

export default function DashboardClient() {
  const [selected,setSelected] = useState("All Periods");
  const d = useMemo<Period>(() => selected === "All Periods" ? {month:selected,reviewed:60,approved:37,submitted:33,wins:3,losses:26,noBids:23,awaiting:2,submittedValue:36813700,activeValue:7538300,avgValue:958907} : periods.find(p=>p.month===selected)!,[selected]);
  const winRate = d.wins + d.losses ? d.wins/(d.wins+d.losses) : 0;
  const insights = selected === "All Periods" ? ["37 of 60 reviewed opportunities advanced, preserving resources through 23 documented no-bid decisions.","The active pipeline contains $7.54M across pricing, proposal development, submission, and award review.","Three wins from 29 decided submissions produce a 10.3% decided win rate—and a clear case for post-bid learning."] : [`${d.approved} of ${d.reviewed} opportunities advanced during ${d.month}, a ${Math.round(d.approved/d.reviewed*100)}% pursuit rate.`,d.activeValue ? `${money(d.activeValue)} remained active from opportunities identified in this period.` : `${money(d.submittedValue)} was submitted from opportunities identified in this period.`,d.wins+d.losses ? `${d.wins+d.losses} decided bid${d.wins+d.losses===1?"":"s"} produced a ${Math.round(winRate*100)}% win rate.` : "Awards are still developing; closed-result performance is not yet measurable for this period."];
  return <section className="dashboard-shell" aria-label="Interactive executive bid intelligence dashboard">
    <div className="dashboard-toolbar"><div><span className="live-dot"/>Interactive portfolio demonstration</div><label><span className="selector-cue">Try the filter <b>→</b></span><span className="selector-label">Reporting period</span><select value={selected} onChange={e=>setSelected(e.target.value)} aria-label="Select reporting period"><option>All Periods</option>{periods.map(p=><option key={p.month}>{p.month}</option>)}</select></label></div>
    <div className="dashboard-title"><div><span>EXECUTIVE VIEW</span><h2>Portfolio performance and pipeline</h2></div><p>Fictional data · Sep 2025–Aug 2026</p></div>
    <div className="dashboard-kpis"><Kpi label="Opportunities reviewed" value={String(d.reviewed)} note={`${d.approved} approved pursuits`}/><Kpi label="Submitted" value={String(d.submitted)} note={`${Math.round(d.submitted/d.reviewed*100)}% submission rate`}/><Kpi label="Wins" value={String(d.wins)} note={`${d.wins+d.losses} decided bids`}/><Kpi label="Decided win rate" value={`${(winRate*100).toFixed(1)}%`} note="Wins ÷ wins + losses"/><Kpi label="Submitted value" value={money(d.submittedValue)} note="Known submitted pricing"/><Kpi label="Active pipeline" value={money(d.activeValue)} note={`${d.awaiting} awaiting award`}/></div>
    <div className="dashboard-grid">
      <article className="dash-card activity-card"><header><div><span>ACTIVITY</span><h3>Monthly pursuit volume</h3></div><div className="legend"><i className="reviewed"/>Reviewed <i className="submitted"/>Submitted</div></header><div className="bar-chart">{periods.map(p=>{const dim=selected!=="All Periods"&&selected!==p.month;return <button key={p.month} className={dim?"dim":""} onClick={()=>setSelected(selected===p.month?"All Periods":p.month)} aria-label={`Filter to ${p.month}`}><div><i style={{height:`${p.reviewed/5*100}%`}}/><b style={{height:`${p.submitted/5*100}%`}}/></div><span>{p.month.split(" ")[0]}</span></button>})}</div></article>
      <article className="dash-card outcome-card"><header><div><span>OUTCOMES</span><h3>Portfolio disposition</h3></div></header><div className="outcome-visual"><div className="outcome-ring" style={{background:`conic-gradient(#2b6ed2 0 ${d.reviewed?d.wins/d.reviewed*100:0}%, #7e9bc5 0 ${d.reviewed?(d.wins+d.losses)/d.reviewed*100:0}%, #d5a53e 0 ${d.reviewed?(d.wins+d.losses+d.awaiting)/d.reviewed*100:0}%, #b8c0ca 0 ${d.reviewed?(d.wins+d.losses+d.awaiting+d.noBids)/d.reviewed*100:0}%, #e9edf2 0)`}}><div><b>{d.reviewed}</b><small>reviewed</small></div></div><ul><li><i className="won"/>Won <b>{d.wins}</b></li><li><i className="lost"/>Lost <b>{d.losses}</b></li><li><i className="awaiting"/>Awaiting <b>{d.awaiting}</b></li><li><i className="nobid"/>No-bid <b>{d.noBids}</b></li></ul></div></article>
      <article className="dash-card insight-card"><header><div><span>MANAGEMENT READOUT</span><h3>What the data says</h3></div></header><ol>{insights.map((x,i)=><li key={x}><b>0{i+1}</b><p>{x}</p></li>)}</ol></article>
    </div>
    <article className="pipeline-card"><header><div><span>ACTIVE PIPELINE</span><h3>Current opportunities requiring attention</h3></div><small>8 open records · $7.54M estimated total value</small></header><div className="pipeline-table"><div className="pipeline-head"><span>ID</span><span>Client / opportunity</span><span>Stage</span><span>Value</span><span>Risk</span></div>{active.slice(0,5).map(r=><div className="pipeline-row" key={r[0]}><span>{r[0]}</span><span><b>{r[1]}</b><small>{r[2]}</small></span><span><i className="stage-chip">{r[3]}</i></span><span>{r[4]}</span><span><i className={`risk ${r[5].toLowerCase()}`}>{r[5]}</i></span></div>)}</div><p className="pipeline-note">Showing five priority records from the full fictional workbook.</p></article>
  </section>;
}

function Kpi({label,value,note}:{label:string;value:string;note:string}) { return <article><span>{label}</span><strong>{value}</strong><small>{note}</small></article>; }

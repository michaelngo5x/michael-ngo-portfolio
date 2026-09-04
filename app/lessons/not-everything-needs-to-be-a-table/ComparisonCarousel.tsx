"use client";

import { useState } from "react";

const examples = [
  {title:"Operational proximity",lesson:"The table gives distance. The map gives context.",headers:["Service location","Distance"],rows:[["Ridgeview Library","2.3 miles"],["Northgate Senior Center","3.7 miles"],["Cedar Park Offices","5.5 miles"],["Lakeside Public Works","6.6 miles"]],question:"How far away are our locations?",meaning:"Why does this opportunity make operational sense?",type:"map"},
  {title:"Employee readiness",lesson:"The table lists training. The process shows readiness.",headers:["Training topic","Owner"],rows:[["Company orientation","HR"],["Site procedures","Supervisor"],["Equipment methods","Trainer"],["Safety and chemicals","Safety lead"]],question:"What training is required?",meaning:"How does a new employee become site-ready?",type:"process"},
  {title:"Quality assurance",lesson:"The table records activities. The cycle shows follow-through.",headers:["Activity","Purpose"],rows:[["Inspect","Review work"],["Identify","Record issue"],["Correct","Resolve gap"],["Verify","Confirm result"]],question:"What are the QA activities?",meaning:"How does an issue become an improvement?",type:"cycle"},
  {title:"Communication flow",lesson:"The table assigns roles. The hierarchy shows escalation.",headers:["Role","Responsibility"],rows:[["Onsite crew","Report issues"],["Client contact","Set priorities"],["Field supervisor","Coordinate response"],["Operations lead","Resolve escalation"]],question:"Who is responsible?",meaning:"Where does an issue go, and who owns it?",type:"hierarchy"},
  {title:"Contract transition",lesson:"The table records tasks. The timeline creates confidence.",headers:["Task","Target"],rows:[["Confirm contacts","Day 1"],["Validate site plan","Day 3"],["Prepare staff","Day 7"],["Launch service","Day 14"]],question:"What needs to happen?",meaning:"How does the team move from award to launch?",type:"timeline"},
];

export default function ComparisonCarousel(){
  const [active,setActive]=useState(0); const item=examples[active];
  const move=(step:number)=>setActive((active+step+examples.length)%examples.length);
  return <div className="comparison-carousel" aria-roledescription="carousel" aria-label="Table and graphic comparisons">
    <div className="carousel-toolbar"><button onClick={()=>move(-1)} aria-label="Previous comparison">←</button><div><span>Example {active+1} of {examples.length}</span><strong>{item.title}</strong></div><button onClick={()=>move(1)} aria-label="Next comparison">→</button></div>
    <p className="carousel-lesson">{item.lesson}</p>
    <div className="carousel-pair" key={item.title}>
      <section><span>The table</span><h3>{item.title}</h3><table><thead><tr><th>{item.headers[0]}</th><th>{item.headers[1]}</th></tr></thead><tbody>{item.rows.map(([a,b])=><tr key={a}><td>{a}</td><td>{b}</td></tr>)}</tbody></table><p>{item.question}</p></section>
      <section><span>The graphic</span><h3>{item.title}</h3><Graphic type={item.type}/><p>{item.meaning}</p></section>
    </div>
    <div className="carousel-dots" aria-label="Choose comparison">{examples.map((x,i)=><button key={x.title} className={i===active?"active":""} onClick={()=>setActive(i)} aria-label={`Show ${x.title}`} aria-current={i===active?"true":undefined}/>)}</div>
  </div>
}

function Graphic({type}:{type:string}){
  if(type==="map") return <div className="carousel-graphic proximity-map"><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-pin opportunity">★<small>Opportunity</small></div><div className="map-pin pin-a">A<small>2.3 mi</small></div><div className="map-pin pin-b">B<small>3.7 mi</small></div><div className="map-pin pin-c">C<small>5.5 mi</small></div><div className="map-pin pin-d">D<small>6.6 mi</small></div><strong>All locations are within approximately 2–7 miles</strong></div>;
  if(type==="process") return <div className="carousel-graphic step-graphic">{["Orient","Site","Equip","Safety","Ready"].map((x,i)=><div key={x}><b>{i+1}</b><span>{x}</span></div>)}</div>;
  if(type==="cycle") return <div className="carousel-graphic cycle-graphic"><strong>QA</strong>{["Inspect","Identify","Correct","Verify","Improve"].map((x,i)=><div key={x} style={{transform:`rotate(${i*72}deg) translateX(95px) rotate(${-i*72}deg)`}}><b>{i+1}</b><span>{x}</span></div>)}</div>;
  if(type==="hierarchy") return <div className="carousel-graphic hierarchy-graphic">{["Onsite crew","Client contact","Field supervisor","Operations lead"].map((x,i)=><div key={x}><b>{i+1}</b><span>{x}</span>{i<3&&<i>↓</i>}</div>)}</div>;
  return <div className="carousel-graphic timeline-graphic">{[["1","Award"],["3","Setup"],["7","Prepare"],["14","Launch"],["30","Review"]].map(([d,x],i)=><div key={x}><b>{i+1}</b><span>{x}</span><small>Day {d}</small></div>)}</div>;
}

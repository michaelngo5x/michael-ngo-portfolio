"use client";

import { useState } from "react";

const locations = [["Ridgeview Library","2.3 miles"],["Northgate Senior Center","3.7 miles"],["Cedar Park Offices","5.5 miles"],["Lakeside Public Works","6.6 miles"]];

export default function ComparisonSlider(){
  const [position,setPosition]=useState(50);
  return <div className="comparison-slider">
    <div className="slider-stage">
      <div className="slider-view slider-table-view"><span>The table</span><h3>Existing service locations</h3><table><thead><tr><th>Service location</th><th>Distance</th></tr></thead><tbody>{locations.map(([n,d])=><tr key={n}><td>{n}</td><td>{d}</td></tr>)}</tbody></table><p className="panel-question">How far away are our locations?</p></div>
      <div className="slider-view slider-graphic-view" style={{clipPath:`inset(0 0 0 ${position}%)`}}><span>The graphic</span><h3>Operational proximity</h3><div className="proximity-map"><div className="map-road road-one"/><div className="map-road road-two"/><div className="map-pin opportunity">★<small>Opportunity</small></div><div className="map-pin pin-a">A<small>2.3 mi</small></div><div className="map-pin pin-b">B<small>3.7 mi</small></div><div className="map-pin pin-c">C<small>5.5 mi</small></div><div className="map-pin pin-d">D<small>6.6 mi</small></div><strong>All locations are within approximately 2–7 miles</strong></div><p className="panel-question">Why does this opportunity make operational sense?</p></div>
      <div className="slider-divider" style={{left:`${position}%`}} aria-hidden="true"><i>↔</i></div>
      <input aria-label="Compare the table and graphic" type="range" min="4" max="96" value={position} onChange={e=>setPosition(Number(e.target.value))}/>
    </div>
    <div className="slider-labels"><span>← Table</span><strong>Drag to compare</strong><span>Graphic →</span></div>
  </div>
}

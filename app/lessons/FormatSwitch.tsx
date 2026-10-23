"use client";

import { useState } from "react";

const facts = [
  { step: "01", task: "Site walkthrough", when: "Week 1", owner: "Project lead" },
  { step: "02", task: "Staff orientation", when: "Week 2", owner: "Site supervisor" },
  { step: "03", task: "Service launch", when: "Week 3", owner: "Operations" },
];

export default function FormatSwitch() {
  const [mode, setMode] = useState<"table" | "graphic">("graphic");

  return (
    <div className="blog-format-demo">
      <div className="blog-format-top">
        <span>THE SAME FACTS. TWO DIFFERENT JOBS.</span>
        <div className="blog-format-tabs" role="group" aria-label="Preview the information as a table or graphic">
          <button type="button" aria-pressed={mode === "table"} className={mode === "table" ? "active" : ""} onClick={() => setMode("table")}>Table</button>
          <button type="button" aria-pressed={mode === "graphic"} className={mode === "graphic" ? "active" : ""} onClick={() => setMode("graphic")}>Graphic</button>
        </div>
      </div>
      <div className="blog-format-stage" aria-live="polite">
        {mode === "table" ? (
          <table className="blog-demo-table">
            <thead><tr><th>Phase</th><th>Task</th><th>Timing</th><th>Lead</th></tr></thead>
            <tbody>{facts.map((fact) => <tr key={fact.step}><td>{fact.step}</td><td>{fact.task}</td><td>{fact.when}</td><td>{fact.owner}</td></tr>)}</tbody>
          </table>
        ) : (
          <div className="blog-demo-timeline" aria-label="Three-step transition timeline">
            {facts.map((fact) => <div className="blog-demo-step" key={fact.step}>
              <span className="blog-demo-number">{fact.step}</span>
              <div><small>{fact.when}</small><strong>{fact.task}</strong><span>{fact.owner}</span></div>
            </div>)}
          </div>
        )}
      </div>
      <div className="blog-format-caption">
        <span>{mode === "table" ? "Best for looking up exact responsibilities." : "Best for understanding the sequence at a glance."}</span>
        <a href="/lessons/not-everything-needs-to-be-a-table">See why it matters ↗</a>
      </div>
    </div>
  );
}

import React from "react";

const differentiators = [
  {
    title: "Branding that feels global",
    description:
      "Your brand shouldn’t feel ‘local-agency made’. We design identity and touchpoints that look at home in any market.",
  },
  {
    title: "Strategy before tactics",
    description:
      "No more random hacks. We build a clear growth strategy first, then choose channels and experiments that compound.",
  },
  {
    title: "Clear, direct communication",
    description:
      "No corporate theatre, no buzzword soup. You get simple language, sharp thinking, and calls that actually move work forward.",
  },
  {
    title: "Polish in every detail",
    description:
      "From copy to creatives to reporting, we sweat the small stuff so your brand comes across as considered, credible, and premium.",
  },
];

const ACCENT =
  "linear-gradient(135deg, hsl(210 40% 55%), hsl(210 40% 45%))";

export function Differentiators() {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <div className="max-w-xl mb-16">
          <h2 className="text-headline">What makes us different</h2>
        </div>

        <ul className="diff-stack">
          {differentiators.map((item, index) => (
            <li
              key={item.title}
              className="diff-card"
              style={
                {
                  "--i": index + 1,
                  "--card-accent": ACCENT,
                } as React.CSSProperties
              }
            >
              <div className="diff-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

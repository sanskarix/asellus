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
      "No scatter-gun hacks. We build a clear growth strategy first – then pick the channels and experiments that actually compound.",
  },
  {
    title: "Clear, direct communication",
    description:
      "No corporate theatre. You get straightforward thinking, honest numbers, and calls that actually move growth work forward.",
  },
  {
    title: "Polish in every detail",
    description:
      "From copy to creatives to performance reports, we sweat the details so your brand always looks considered, credible, and premium.",
  },
];

export function Differentiators() {
  return (
    <section className="editorial-section">
      <div className="editorial-container">
        <div className="max-w-xl mb-8 md:mb-16 text-center md:text-left mx-auto md:mx-0">
          <h2 className="text-headline">What makes us different</h2>
        </div>

        <ul className="diff-stack">
          {differentiators.map((item, index) => (
            <li
              key={item.title}
              className="diff-card"
              style={{ "--i": index + 1 } as React.CSSProperties}
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

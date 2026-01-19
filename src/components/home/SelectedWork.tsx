import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const works = [
  {
    client: "Frido",
    category: "D2C Growth",
    description: "Scaled a comfort brand from ₹2Cr to ₹25Cr ARR in 18 months through performance marketing and content systems.",
    image: "/placeholder.svg",
  },
  {
    client: "mCaffeine",
    category: "Launch Strategy",
    description: "Orchestrated a product launch that generated 10,000+ orders in the first 48 hours with zero paid media.",
    image: "/placeholder.svg",
  },
  {
    client: "Tokyo Laundry",
    category: "Brand Repositioning",
    description: "Repositioned a legacy retail brand for the digital-first generation. 340% increase in online revenue.",
    image: "/placeholder.svg",
  },
];

export function SelectedWork() {
  return (
    <section className="editorial-section bg-cream">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div className="max-w-xl">
            <p className="text-subheadline mb-4">Selected work</p>
            <h2 className="text-headline">
              Results, not references
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 text-sm font-medium link-underline"
          >
            View all projects
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>

        <div className="space-y-16">
          {works.map((work, index) => (
            <motion.article
              key={work.client}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center"
            >
              <div className={`aspect-[4/3] bg-muted overflow-hidden ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="w-full h-full bg-gradient-to-br from-muted to-muted-foreground/20 flex items-center justify-center">
                  <span className="text-4xl font-serif text-muted-foreground/40">{work.client}</span>
                </div>
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <p className="text-subheadline mb-2">{work.category}</p>
                <h3 className="text-3xl md:text-4xl font-serif mb-4">{work.client}</h3>
                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                  {work.description}
                </p>
                <Link
                  to="/work"
                  className="inline-flex items-center gap-2 text-sm font-medium link-underline"
                >
                  View case study
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

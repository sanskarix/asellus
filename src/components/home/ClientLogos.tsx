import { motion } from "framer-motion";

const clients = [
  { name: "Frido", id: 1 },
  { name: "mCaffeine", id: 2 },
  { name: "Tokyo Laundry", id: 3 },
  { name: "Wylo", id: 4 },
];

export function ClientLogos() {
  return (
    <section className="py-16 relative">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="glass-panel py-12 px-8"
        >
          <p className="text-subheadline text-center mb-12">
            Trusted by brands that get it
          </p>
          
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-2xl md:text-3xl font-serif text-muted-foreground hover:text-foreground transition-all duration-300 cursor-default hover:drop-shadow-[0_0_20px_hsl(210_50%_50%/0.3)]"
              >
                {client.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";

const clients = [
  { name: "Frido", id: 1 },
  { name: "mCaffeine", id: 2 },
  { name: "Tokyo Laundry", id: 3 },
  { name: "Wylo", id: 4 },
];

export function ClientLogos() {
  return (
    <section className="py-12 relative z-10">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-center text-sm text-muted-foreground mb-8">
            Trusted by brands that get it
          </p>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {clients.map((client, index) => (
              <motion.div
                key={client.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card px-6 py-3"
              >
                <span className="text-lg font-semibold text-foreground">
                  {client.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
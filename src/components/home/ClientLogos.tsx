import { motion } from "framer-motion";

const clients = [
  { name: "Frido", logo: "/logos/frido.svg", id: 1 },
  { name: "mCaffeine", logo: "/logos/mcaffeine.svg", id: 2 },
  { name: "Tokyo Laundry", logo: "/logos/tokyo-laundry.svg", id: 3 },
  { name: "Wylo", logo: "/logos/wylo.svg", id: 4 },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94] as const,
    },
  },
};

export function ClientLogos() {
  return (
    <section className="py-2 md:py-20 relative overflow-hidden">
      <div className="editorial-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="py-12 px-6 md:py-16 md:px-8 rounded-xl"
          style={{
            background: "hsl(220 20% 6% / 0.4)",
            border: "1px solid hsl(0 0% 100% / 0.04)",
          }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-subheadline text-center mb-8 md:mb-14"
          >
            Supercharging the best teams
          </motion.p>

          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 items-center justify-items-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {clients.map((client) => (
              <motion.div
                key={client.id}
                variants={itemVariants}
                className="relative group w-full flex items-center justify-center p-4 rounded-xl"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="h-12 md:h-16 w-auto object-contain transition-all duration-500 group-hover:scale-105"
                  style={{ filter: "drop-shadow(0 0 0px transparent)" }}
                  onMouseEnter={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 16px rgba(255,255,255,0.25))"}
                  onMouseLeave={(e) => e.currentTarget.style.filter = "drop-shadow(0 0 0px transparent)"}
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
const clients = [{
  name: "Frido",
  id: 1
}, {
  name: "mCaffeine",
  id: 2
}, {
  name: "Tokyo Laundry",
  id: 3
}, {
  name: "Wylo",
  id: 4
}];
const containerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1
    }
  }
};
const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};
export function ClientLogos() {
  return <section className="py-20 relative overflow-hidden">
      <div className="editorial-container">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.6
      }} className="glass-panel py-16 px-8 group">
          <motion.p initial={{
          opacity: 0
        }} whileInView={{
          opacity: 1
        }} viewport={{
          once: true
        }} className="text-subheadline text-center mb-14">Supercharing the best teams </motion.p>

          <motion.div className="flex flex-wrap justify-center items-center gap-12 md:gap-20" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            {clients.map(client => <motion.div key={client.id} variants={itemVariants} whileHover={{
            scale: 1.08,
            y: -4
          }} transition={{
            duration: 0.3
          }} className="text-2xl md:text-3xl font-serif text-muted-foreground hover:text-primary transition-all duration-300 cursor-default">
                {client.name}
              </motion.div>)}
          </motion.div>
        </motion.div>
      </div>
    </section>;
}
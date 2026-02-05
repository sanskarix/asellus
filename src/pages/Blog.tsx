 import { motion } from "framer-motion";
 import { Layout } from "@/components/layout/Layout";
 import { Link } from "react-router-dom";
 import { ArrowRight, Clock } from "lucide-react";
 
 const blogPosts = [
   {
     slug: "performance-marketing-2024",
     title: "The State of Performance Marketing in 2024",
     excerpt: "What's working, what's not, and where smart brands are investing their ad spend this year.",
     category: "Performance Marketing",
     readTime: "8 min read",
     date: "Jan 15, 2024",
     featured: true,
   },
   {
     slug: "content-systems-scale",
     title: "Building Content Systems That Actually Scale",
     excerpt: "How to create a content engine that grows with your brand without burning out your team.",
     category: "Content Strategy",
     readTime: "6 min read",
     date: "Jan 10, 2024",
     featured: true,
   },
   {
     slug: "d2c-funnel-optimization",
     title: "D2C Funnel Optimization: From Click to Customer",
     excerpt: "A practical guide to building conversion journeys that don't feel pushy.",
     category: "Funnel Architecture",
     readTime: "10 min read",
     date: "Jan 5, 2024",
     featured: false,
   },
   {
     slug: "launch-strategy-playbook",
     title: "The Launch Strategy Playbook",
     excerpt: "Lessons from orchestrating 50+ product launches for D2C brands.",
     category: "Launch Strategy",
     readTime: "12 min read",
     date: "Dec 28, 2023",
     featured: false,
   },
   {
     slug: "roas-myths-debunked",
     title: "5 ROAS Myths That Are Killing Your Growth",
     excerpt: "Why chasing a 4x ROAS might be the worst thing for your business.",
     category: "Performance Marketing",
     readTime: "5 min read",
     date: "Dec 20, 2023",
     featured: false,
   },
   {
     slug: "brand-positioning-framework",
     title: "The Brand Positioning Framework We Use With Every Client",
     excerpt: "A simple but powerful approach to finding your brand's unique position in the market.",
     category: "Brand Strategy",
     readTime: "7 min read",
     date: "Dec 15, 2023",
     featured: false,
   },
 ];
 
 const BlogPage = () => {
   const featuredPosts = blogPosts.filter((post) => post.featured);
   const regularPosts = blogPosts.filter((post) => !post.featured);
 
   return (
     <Layout>
       <section className="editorial-section">
         <div className="editorial-container">
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="max-w-3xl mb-16"
           >
             <h1 className="text-display mb-4">Insights</h1>
             <p className="text-body-large">
               Thoughts on growth, marketing, and building brands that last.
             </p>
           </motion.div>
 
           {/* Featured Posts */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
             {featuredPosts.map((post, index) => (
               <motion.article
                 key={post.slug}
                 initial={{ opacity: 0, y: 30 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ delay: index * 0.1, duration: 0.5 }}
               >
                 <Link
                   to={`/blog/${post.slug}`}
                   className="glass-card-hover p-8 h-full flex flex-col group block"
                 >
                   <span className="text-xs font-medium px-3 py-1 rounded-full bg-muted text-muted-foreground w-fit mb-4">
                     {post.category}
                   </span>
                   <h2 className="text-xl md:text-2xl font-semibold mb-3 group-hover:text-foreground/80 transition-colors">
                     {post.title}
                   </h2>
                   <p className="text-muted-foreground text-sm leading-relaxed flex-1 mb-4">
                     {post.excerpt}
                   </p>
                   <div className="flex items-center justify-between text-sm text-muted-foreground">
                     <div className="flex items-center gap-2">
                       <Clock size={14} />
                       {post.readTime}
                     </div>
                     <span>{post.date}</span>
                   </div>
                 </Link>
               </motion.article>
             ))}
           </div>
 
           {/* Regular Posts */}
           <div className="space-y-4">
             {regularPosts.map((post, index) => (
               <motion.article
                 key={post.slug}
                 initial={{ opacity: 0, y: 20 }}
                 whileInView={{ opacity: 1, y: 0 }}
                 viewport={{ once: true }}
                 transition={{ delay: index * 0.05, duration: 0.4 }}
               >
                 <Link
                   to={`/blog/${post.slug}`}
                   className="glass-card-hover p-6 flex flex-col md:flex-row md:items-center gap-4 group block"
                 >
                   <div className="flex-1">
                     <div className="flex items-center gap-3 mb-2">
                       <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-muted text-muted-foreground">
                         {post.category}
                       </span>
                       <span className="text-xs text-muted-foreground">{post.date}</span>
                     </div>
                     <h3 className="text-lg font-semibold mb-1 group-hover:text-foreground/80 transition-colors">
                       {post.title}
                     </h3>
                     <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                   </div>
                   <div className="flex items-center gap-2 text-sm text-muted-foreground shrink-0">
                     <Clock size={14} />
                     {post.readTime}
                   </div>
                 </Link>
               </motion.article>
             ))}
           </div>
 
           {/* Newsletter CTA */}
           <motion.div
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="mt-16"
           >
             <div className="glass-panel p-10 text-center">
               <h3 className="text-headline mb-3">Stay in the loop</h3>
               <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                 Get our latest insights on growth and marketing delivered to your inbox.
               </p>
               <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                 <input
                   type="email"
                   placeholder="Enter your email"
                   className="glass-input flex-1"
                 />
                 <button type="submit" className="btn-primary">
                   Subscribe
                   <ArrowRight size={14} />
                 </button>
               </form>
             </div>
           </motion.div>
         </div>
       </section>
     </Layout>
   );
 };
 
 export default BlogPage;
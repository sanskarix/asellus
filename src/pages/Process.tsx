import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { useRef } from "react";

/* ─── Data ─── */
const steps = [
    {
        number: "01",
        title: "Discovery",

        headline: "We listen before we leap.",
        description:
            "Before we touch a brief, we get obsessive about your world. Your goals, your constraints, your customers. We learn the business first, then figure out the marketing.",
        deliverables: ["Stakeholder interviews", "Market & competitor audit", "Audience persona mapping", "Opportunity assessment"],
        accent: "hsl(210 50% 55%)",
        accentLight: "hsl(210 50% 65% / 0.12)",
    },
    {
        number: "02",
        title: "Strategy",

        headline: "The blueprint, not the buffet.",
        description:
            "One page. Clear priorities, realistic timelines, measurable milestones. No 90-slide decks. Just a sharp plan you can actually execute.",
        deliverables: ["Channel strategy", "Budget allocation", "KPI framework", "Growth roadmap"],
        accent: "hsl(195 70% 50%)",
        accentLight: "hsl(195 70% 55% / 0.12)",
    },
    {
        number: "03",
        title: "Build",

        headline: "Infrastructure for growth.",
        description:
            "Tracking, attribution, creative systems, team alignment. The boring stuff that separates amateur campaigns from profitable machines. We set it all up so nothing breaks when you scale.",
        deliverables: ["Tracking & analytics setup", "Creative production", "Platform configuration", "Attribution modelling"],
        accent: "hsl(260 45% 60%)",
        accentLight: "hsl(260 45% 65% / 0.12)",
    },
    {
        number: "04",
        title: "Launch & Learn",

        headline: "Execute fast, learn faster.",
        description:
            "Every campaign is a test. Every test teaches us something. We launch fast, measure relentlessly, and optimise in real-time. No vanity metrics, only signals that matter.",
        deliverables: ["Campaign deployment", "A/B testing", "Real-time optimization", "Weekly performance reports"],
        accent: "hsl(150 50% 45%)",
        accentLight: "hsl(150 50% 50% / 0.12)",
    },
    {
        number: "05",
        title: "Scale",

        headline: "Pour fuel on what works.",
        description:
            "Find what works, grow it. Kill what doesn't. Methodical, sustainable scaling instead of reckless spending. We compound your wins and expand into new channels, audiences, and markets.",
        deliverables: ["Channel expansion", "Budget scaling", "New market entry", "Continuous iteration"],
        accent: "hsl(25 80% 55%)",
        accentLight: "hsl(25 80% 60% / 0.12)",
    },
];



/* ─── Abstract SVG illustrations per step ─── */
function StepIllustration({ index, accent }: { index: number; accent: string }) {
    const illustrations = [
        // 01 Discovery — Magnifying glass / radar
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            <motion.circle cx="90" cy="90" r="50" stroke={accent} strokeWidth="1.5" strokeDasharray="6 4" opacity="0.4"
                animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
            <motion.circle cx="90" cy="90" r="35" stroke={accent} strokeWidth="1" opacity="0.25"
                animate={{ rotate: -360 }} transition={{ duration: 15, repeat: Infinity, ease: "linear" }} />
            <motion.circle cx="90" cy="90" r="4" fill={accent} opacity="0.8"
                animate={{ scale: [1, 1.5, 1] }} transition={{ duration: 2, repeat: Infinity }} />
            <motion.line x1="125" y1="125" x2="170" y2="170" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.5"
                animate={{ opacity: [0.3, 0.7, 0.3] }} transition={{ duration: 3, repeat: Infinity }} />
            <motion.circle cx="90" cy="90" r="65" stroke={accent} strokeWidth="0.5" opacity="0.15"
                strokeDasharray="2 8" animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} />
            {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                const rad = (angle * Math.PI) / 180;
                return <motion.circle key={i} cx={90 + Math.cos(rad) * 50} cy={90 + Math.sin(rad) * 50} r="2" fill={accent} opacity="0.3"
                    animate={{ opacity: [0.2, 0.6, 0.2] }} transition={{ duration: 2, delay: i * 0.3, repeat: Infinity }} />
            })}
        </svg>,

        // 02 Strategy — Grid / chess-like
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            {[40, 80, 120, 160].map((x, i) =>
                <motion.line key={`v${i}`} x1={x} y1="30" x2={x} y2="170" stroke={accent} strokeWidth="0.5" opacity="0.15"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: i * 0.2 }} />
            )}
            {[50, 90, 130, 170].map((y, i) =>
                <motion.line key={`h${i}`} x1="30" y1={y} x2="170" y2={y} stroke={accent} strokeWidth="0.5" opacity="0.15"
                    initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, delay: i * 0.2 + 0.1 }} />
            )}
            <motion.path d="M40 130 L80 90 L120 110 L160 50" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" opacity="0.6"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 2, delay: 0.8 }} />
            {[[40, 130], [80, 90], [120, 110], [160, 50]].map(([cx, cy], i) =>
                <motion.circle key={i} cx={cx} cy={cy} r="4" fill={accent} opacity="0.7"
                    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 + i * 0.2, type: "spring" }} />
            )}
            <motion.rect x="55" y="55" width="30" height="30" rx="4" stroke={accent} strokeWidth="1" opacity="0.2" fill={accent} fillOpacity="0.05"
                animate={{ opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 3, repeat: Infinity }} />
        </svg>,

        // 03 Build — Structural / hexagonal
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            {[[100, 60], [60, 85], [140, 85], [60, 125], [140, 125], [100, 150]].map(([cx, cy], i) =>
                <motion.polygon key={i}
                    points={hexPoints(cx, cy, 22)}
                    stroke={accent} strokeWidth="1" fill={accent} fillOpacity={i === 0 ? "0.08" : "0.03"}
                    opacity={0.3 + i * 0.1}
                    initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 0.3 + i * 0.1 }}
                    transition={{ delay: i * 0.15, duration: 0.6, type: "spring" }} />
            )}
            <motion.line x1="100" y1="60" x2="100" y2="150" stroke={accent} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -16] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            <motion.line x1="60" y1="85" x2="140" y2="125" stroke={accent} strokeWidth="0.8" opacity="0.2" strokeDasharray="4 4"
                animate={{ strokeDashoffset: [0, -16] }} transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: 0.5 }} />
            <motion.circle cx="100" cy="105" r="6" fill={accent} opacity="0.5"
                animate={{ scale: [1, 1.3, 1] }} transition={{ duration: 2.5, repeat: Infinity }} />
        </svg>,

        // 04 Launch & Learn — Dashboard / pulse monitor with feedback loops
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            {/* Monitor frame */}
            <motion.rect x="30" y="35" width="140" height="95" rx="6" stroke={accent} strokeWidth="1.2" opacity="0.35"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
            <motion.line x1="80" y1="130" x2="120" y2="130" stroke={accent} strokeWidth="1.5" opacity="0.3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.2 }} />
            <motion.line x1="100" y1="130" x2="100" y2="138" stroke={accent} strokeWidth="1.5" opacity="0.3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.3, delay: 1.5 }} />
            <motion.line x1="75" y1="138" x2="125" y2="138" stroke={accent} strokeWidth="2" strokeLinecap="round" opacity="0.35"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 0.5, delay: 1.6 }} />

            {/* Heartbeat / pulse line */}
            <motion.path
                d="M40 80 L55 80 L60 65 L68 95 L75 55 L82 85 L88 75 L95 80 L110 80 L115 70 L120 90 L125 60 L132 80 L160 80"
                stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.7"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }} />

            {/* Scanning line */}
            <motion.line x1="40" y1="45" x2="40" y2="120" stroke={accent} strokeWidth="0.8" opacity="0.3"
                animate={{ x1: [40, 160, 40], x2: [40, 160, 40] }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />

            {/* Data points on pulse */}
            {[[75, 55], [125, 60], [68, 95]].map(([cx, cy], i) =>
                <motion.circle key={i} cx={cx} cy={cy} r="3" fill={accent} opacity="0.6"
                    initial={{ scale: 0 }} animate={{ scale: [0, 1.2, 1] }}
                    transition={{ delay: 2.2 + i * 0.3, duration: 0.5 }} />
            )}

            {/* Floating metric labels */}
            {[[52, 50, 18], [115, 50, 22], [82, 105, 15]].map(([x, y, w], i) =>
                <motion.rect key={`m${i}`} x={x} y={y} width={w} height="6" rx="2" fill={accent} opacity="0.15"
                    initial={{ opacity: 0 }} animate={{ opacity: [0.1, 0.25, 0.1] }}
                    transition={{ duration: 2.5, delay: i * 0.8, repeat: Infinity }} />
            )}

            {/* Feedback loop arrows below */}
            <motion.path d="M60 155 C60 170, 140 170, 140 155" stroke={accent} strokeWidth="1" strokeDasharray="4 3" opacity="0.25"
                fill="none" animate={{ strokeDashoffset: [0, -14] }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
            <motion.path d="M137 157 L140 155 L143 157" stroke={accent} strokeWidth="1" opacity="0.3" strokeLinecap="round" />
            <motion.text x="92" y="175" fill={accent} fontSize="6" opacity="0.25" fontFamily="Inter, sans-serif"
                textAnchor="middle">iterate</motion.text>
        </svg>,

        // 05 Scale — Rocket ship launching upward
        <svg viewBox="0 0 200 200" fill="none" className="w-full h-full">
            {/* Rocket body */}
            <motion.path
                d="M100 30 C100 30, 85 55, 85 90 L85 130 L115 130 L115 90 C115 55, 100 30, 100 30Z"
                stroke={accent} strokeWidth="1.5" fill={accent} fillOpacity="0.08" opacity="0.7"
                initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 0.7 }}
                transition={{ duration: 1, type: "spring" }} />
            {/* Nose cone highlight */}
            <motion.path d="M100 30 C100 30, 93 48, 92 65" stroke={accent} strokeWidth="0.8" opacity="0.3"
                initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.3 }} />

            {/* Window */}
            <motion.circle cx="100" cy="75" r="8" stroke={accent} strokeWidth="1.2" fill={accent} fillOpacity="0.1" opacity="0.6"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.5, type: "spring" }} />
            <motion.circle cx="100" cy="75" r="4" fill={accent} opacity="0.25"
                animate={{ opacity: [0.15, 0.35, 0.15] }} transition={{ duration: 2, repeat: Infinity }} />

            {/* Fins */}
            <motion.path d="M85 115 L65 140 L85 130Z" stroke={accent} strokeWidth="1" fill={accent} fillOpacity="0.06" opacity="0.5"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.6, type: "spring" }} />
            <motion.path d="M115 115 L135 140 L115 130Z" stroke={accent} strokeWidth="1" fill={accent} fillOpacity="0.06" opacity="0.5"
                initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.7, type: "spring" }} />

            {/* Exhaust nozzle */}
            <motion.path d="M90 130 L88 140 L112 140 L110 130" stroke={accent} strokeWidth="1" fill={accent} fillOpacity="0.05" opacity="0.4" />

            {/* Exhaust flames */}
            <motion.path d="M92 140 Q100 170, 108 140" stroke={accent} strokeWidth="1.5" fill={accent} fillOpacity="0.12" opacity="0.5"
                animate={{ d: ["M92 140 Q100 170, 108 140", "M92 140 Q100 178, 108 140", "M92 140 Q100 170, 108 140"] }}
                transition={{ duration: 0.8, repeat: Infinity }} />
            <motion.path d="M95 140 Q100 160, 105 140" stroke={accent} strokeWidth="1" fill={accent} fillOpacity="0.2" opacity="0.6"
                animate={{ d: ["M95 140 Q100 160, 105 140", "M95 140 Q100 165, 105 140", "M95 140 Q100 160, 105 140"] }}
                transition={{ duration: 0.6, repeat: Infinity }} />

            {/* Exhaust particles */}
            {[0, 1, 2, 3, 4, 5].map((i) => (
                <motion.circle key={`exhaust${i}`}
                    cx={95 + Math.random() * 10} cy={155}
                    r="1.5" fill={accent} opacity="0.4"
                    animate={{ y: [0, 25 + i * 5], opacity: [0.4, 0], x: [(i % 2 === 0 ? -1 : 1) * (3 + i * 2), 0] }}
                    transition={{ duration: 1.2, delay: i * 0.2, repeat: Infinity }} />
            ))}

            {/* Speed lines */}
            {[[-25, 60], [-30, 85], [-28, 110], [25, 55], [30, 80], [27, 105]].map(([xOff, y], i) => (
                <motion.line key={`speed${i}`}
                    x1={100 + xOff} y1={y} x2={100 + xOff} y2={y + 12}
                    stroke={accent} strokeWidth="0.8" strokeLinecap="round" opacity="0.2"
                    animate={{ y: [0, 8, 0], opacity: [0.1, 0.3, 0.1] }}
                    transition={{ duration: 1.5, delay: i * 0.25, repeat: Infinity }} />
            ))}

            {/* Stars / trajectory dots */}
            {[[50, 35], [145, 45], [40, 100], [160, 90], [55, 150], [150, 155]].map(([cx, cy], i) => (
                <motion.circle key={`star${i}`} cx={cx} cy={cy} r="1" fill={accent} opacity="0.2"
                    animate={{ opacity: [0.1, 0.4, 0.1] }}
                    transition={{ duration: 2, delay: i * 0.4, repeat: Infinity }} />
            ))}
        </svg>,
    ];

    return (
        <div className="relative w-full aspect-square max-w-[220px]">
            {/* Ambient glow behind illustration */}
            <div
                className="absolute inset-0 rounded-full blur-[60px] opacity-20"
                style={{ background: accent }}
            />
            <div className="relative z-10">
                {illustrations[index]}
            </div>
        </div>
    );
}

function hexPoints(cx: number, cy: number, r: number): string {
    return Array.from({ length: 6 }, (_, i) => {
        const angle = (Math.PI / 3) * i - Math.PI / 2;
        return `${cx + r * Math.cos(angle)},${cy + r * Math.sin(angle)}`;
    }).join(" ");
}

/* ─── Timeline Connector ─── */
function TimelineConnector() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start center", "end center"],
    });

    const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <div ref={ref} className="absolute left-[27px] md:left-[31px] top-0 bottom-0 w-px">
            {/* Track */}
            <div className="absolute inset-0 bg-border/20" />
            {/* Progress fill */}
            <motion.div
                className="absolute top-0 left-0 right-0 origin-top"
                style={{
                    height,
                    background: "hsl(210 50% 55%)",
                    opacity: 0.6,
                    boxShadow: "0 0 6px hsl(210 50% 55% / 0.25)",
                }}
            />
        </div>
    );
}

/* ─── Step Node (dot on timeline) ─── */
function TimelineNode({ accent, index }: { accent: string; index: number }) {
    return (
        <div className="relative flex-shrink-0">
            {/* Outer pulse */}
            <motion.div
                className="absolute -inset-2 rounded-full"
                style={{ background: accent }}
                animate={{ scale: [1, 1.8, 1], opacity: [0.15, 0, 0.15] }}
                transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
            />
            {/* Core dot */}
            <div
                className="w-[14px] h-[14px] md:w-[18px] md:h-[18px] rounded-full border-2 relative z-10"
                style={{ borderColor: accent, background: `hsl(220 30% 4%)` }}
            >
                <div
                    className="absolute inset-[3px] rounded-full"
                    style={{ background: accent, opacity: 0.6 }}
                />
            </div>
        </div>
    );
}

/* ─── Individual Step ─── */
function ProcessStep({ step, index }: { step: (typeof steps)[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const isInView = useInView(ref, { once: true, margin: "-15%" });

    return (
        <motion.div
            ref={ref}
            className="relative grid grid-cols-[auto_1fr] gap-6 md:gap-10 pb-32 md:pb-44 last:pb-0"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
        >
            {/* Timeline Column */}
            <div className="flex flex-col items-center pt-2">
                <TimelineNode accent={step.accent} index={index} />
            </div>

            {/* Content Column */}
            <div className="relative">
                {/* Giant watermark number */}
                <motion.span
                    className="absolute -top-8 -left-2 md:-top-12 md:-left-6 text-[8rem] md:text-[12rem] font-serif font-bold leading-none select-none pointer-events-none"
                    style={{ color: step.accent, opacity: 0.04 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 0.04, x: 0 } : {}}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    {step.number}
                </motion.span>


                {/* Title */}
                <motion.h2
                    className="text-3xl md:text-5xl lg:text-6xl font-serif font-semibold tracking-tight leading-[1.05] mb-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {step.title}
                </motion.h2>

                {/* Content grid: Description + Illustration */}
                <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-start">
                    <div>
                        {/* Description */}
                        <motion.p
                            className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl"
                            initial={{ opacity: 0, y: 15 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.35 }}
                        >
                            {step.description}
                        </motion.p>

                        {/* Deliverables */}
                        <motion.div
                            className="border-t pt-6"
                            style={{ borderColor: `${step.accent}15` }}
                            initial={{ opacity: 0 }}
                            animate={isInView ? { opacity: 1 } : {}}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            <p className="text-subheadline mb-4" style={{ color: step.accent }}>
                                Deliverables
                            </p>
                            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {step.deliverables.map((item, i) => (
                                    <motion.li
                                        key={item}
                                        className="flex items-center gap-3 text-sm text-muted-foreground"
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                                        transition={{ duration: 0.4, delay: 0.45 + i * 0.08 }}
                                    >
                                        <span
                                            className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                                            style={{ background: step.accent, opacity: 0.6 }}
                                        />
                                        {item}
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>

                    {/* Illustration */}
                    <motion.div
                        className="hidden md:flex items-start justify-center"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.8, delay: 0.3, type: "spring", stiffness: 100 }}
                    >
                        <StepIllustration index={index} accent={step.accent} />
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}





/* ─── Main Page ─── */
const ProcessPage = () => {
    return (
        <Layout>
            {/* HERO */}
            <section className="editorial-section pt-36">
                <div className="editorial-container">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-20"
                    >
                        <p className="text-subheadline mb-4">Our process</p>
                        <h1 className="text-display mb-6">
                            How to turn ideas into strategy
                        </h1>
                        <p className="max-w-3xl text-body-large text-muted-foreground">
                            Creativity without strategy is art. Creativity with strategy is advertising.
                            We don't just make things look good, we make them work. Here's how.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* TIMELINE PROCESS */}
            <section className="editorial-section pt-0">
                <div className="editorial-container">
                    <div className="max-w-6xl mx-auto relative">
                        {/* Timeline line */}
                        <TimelineConnector />

                        {/* Steps */}
                        <div className="relative">
                            {steps.map((step, index) => (
                                <ProcessStep key={step.number} step={step} index={index} />
                            ))}
                        </div>
                    </div>
                </div>
            </section>


        </Layout>
    );
};

export default ProcessPage;
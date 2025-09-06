import * as motion from "motion/react-client"

// import { motion } from "framer-motion";

export function About() {
  return (
    <section
      id="about"
      className="relative py-20 px-6 overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Animated background elements */}
      <motion.div
        animate={{
          background: [
            "radial-gradient(circle at 10% 20%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 90% 80%, rgba(99, 102, 241, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 70% 30%, rgba(5, 150, 105, 0.15) 0%, transparent 50%)",
            "radial-gradient(circle at 30% 70%, rgba(16, 185, 129, 0.15) 0%, transparent 50%)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute inset-0 dark:opacity-100 opacity-100"
      />

      {/* Floating bubble animations */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
        className="absolute top-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl"
      />

      <motion.div
        animate={{
          y: [0, 25, 0],
          x: [0, -15, 0],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-1/4 right-1/3 w-32 h-32 bg-gradient-to-br from-secondary/25 to-primary/25 rounded-full blur-2xl"
      />

      <motion.div
        animate={{
          y: [0, -15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 4,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute top-1/2 left-1/6 w-20 h-20 bg-gradient-to-br from-emerald-400/30 to-blue-400/30 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 15,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-2xl"
      />

      <div className="container mx-auto max-w-4xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2
            id="about-heading"
            className="text-4xl lg:text-5xl font-bold text-balance"
          >
            About <span className="text-primary">Me</span>
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg md:text-xl italic font-normal md:font-medium text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed md:leading-loose px-4 md:px-0"
          >
            A
            <motion.span
              className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-green-500 text-foreground rounded-md transform -rotate-2 mx-2 my-2"
              animate={{
                backgroundColor: [
                  "rgba(255,255,255,0.1)",
                  "rgba(134,239,172,0.1)",
                  "rgba(255,255,255,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Front-End Developer
            </motion.span>
            with 3+ years of experience building
            <motion.span
              className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-green-500 text-foreground rounded-md transform -rotate-2 mx-2 my-2"
              animate={{
                backgroundColor: [
                  "rgba(255,255,255,0.1)",
                  "rgba(134,239,172,0.1)",
                  "rgba(255,255,255,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              responsive
            </motion.span>
            and modern web applications. My expertise lies in
            <motion.span
              className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-green-500 text-foreground rounded-md transform -rotate-2 mx-2 my-2"
              animate={{
                backgroundColor: [
                  "rgba(255,255,255,0.1)",
                  "rgba(134,239,172,0.1)",
                  "rgba(255,255,255,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              React
            </motion.span>
            ,
            <motion.span
              className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-green-500 text-foreground rounded-md transform -rotate-2 mx-2 my-2"
              animate={{
                backgroundColor: [
                  "rgba(255,255,255,0.1)",
                  "rgba(134,239,172,0.1)",
                  "rgba(255,255,255,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              TypeScript
            </motion.span>
            , and
            <motion.span
              className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-green-500 text-foreground rounded-md transform -rotate-2 mx-2 my-2"
              animate={{
                backgroundColor: [
                  "rgba(255,255,255,0.1)",
                  "rgba(134,239,172,0.1)",
                  "rgba(255,255,255,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Next.js
            </motion.span>
            . I elevate user experiences by implementing fluid and dynamic
            animations with
            <motion.span
              className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm border border-green-500 text-foreground rounded-md transform -rotate-2 mx-2 my-2"
              animate={{
                backgroundColor: [
                  "rgba(255,255,255,0.1)",
                  "rgba(134,239,172,0.1)",
                  "rgba(255,255,255,0.1)",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              Framer Motion
            </motion.span>
            , transforming static interfaces into engaging products. I am
            committed to writing clean code and delivering high-quality
            solutions.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

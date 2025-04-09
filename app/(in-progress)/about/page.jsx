"use client"
import { motion, useTransform, useScroll } from "framer-motion"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export default function About() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Large HELLO */}
      <section className="relative min-h-screen flex items-center px-4 md:px-20 py-20">
        <div className="w-full max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative">
              <h1 className="text-[130px] md:text-[200px] font-bold leading-none tracking-tighter text-neutral-800 flex items-center">
                HELL
                <motion.span
                  animate={{
                    y: [0, -30, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }}
                  className="text-blue-600"
                >
                  O
                </motion.span>
              </h1>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                className="absolute -top-8 right-24 w-12 h-12 text-yellow-400 animate-pulse"
              >
                ✦
              </motion.div>
            </div>
            
            <div className="mt-12 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-6"
              >
                <motion.p 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-blue-600 font-medium text-xl tracking-wide"
                >
                  Frontend Developer & Creative Designer
                </motion.p>
                <div className="space-y-4">
                  <p className="text-3xl md:text-4xl text-neutral-600 max-w-2xl font-light leading-tight">
                    Hi, I'm <span className="font-normal text-neutral-800">Ranjith Kumar</span>. 
                  </p>
                  <p className="text-3xl md:text-4xl text-neutral-600 max-w-2xl font-light leading-tight">
                    I craft 
                    <motion.span
                      animate={{
                        opacity: [1, 0.7, 1],
                        scale: [1, 1.02, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Number.POSITIVE_INFINITY,
                      }}
                      className="mx-2 text-blue-600 font-normal"
                    >
                      immersive digital experiences
                    </motion.span> 
                    through code and creativity.
                  </p>
                </div>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-xl text-neutral-500 max-w-2xl leading-relaxed border-l-4 border-blue-600 pl-6"
              >
                Specializing in fluid animations and intuitive interactions, 
                I transform ideas into captivating websites that leave a lasting impression.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="pt-6"
              >
                <a 
                  href="#contact" 
                  className="text-lg text-neutral-800 hover:text-blue-600 transition-colors flex items-center gap-2 group"
                >
                  Let's create something amazing 
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          </motion.div>

          {/* Right side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[600px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-neutral-50 rounded-2xl" />
            <Image
              src="/your-profile-image.jpg"
              alt="Profile"
              fill
              className="object-cover rounded-2xl mix-blend-overlay"
              priority
            />
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
              }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue-100/20 to-transparent rounded-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 md:px-20 bg-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] md:text-[130px] font-bold text-neutral-800 leading-none tracking-tighter mb-24 flex items-baseline gap-4"
          >
            I can help you with
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-blue-600"
            >
              ...
            </motion.span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {/* Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-8"
            >
              <div className="text-neutral-500 text-lg">01</div>
              <h3 className="text-3xl font-normal text-neutral-800">Design</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                With a solid track record in designing websites, I deliver strong and user-friendly digital designs.
                (Since 2024 only in combination with development)
              </p>
            </motion.div>

            {/* Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="space-y-8"
            >
              <div className="text-neutral-500 text-lg">02</div>
              <h3 className="text-3xl font-normal text-neutral-800">Development</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations,
                transitions and interaction. Building with Next.js and modern web technologies.
              </p>
            </motion.div>

            {/* Full Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-8"
            >
              <div className="text-neutral-500 text-lg">03</div>
              <h3 className="text-3xl font-normal text-neutral-800">✦ The full package</h3>
              <p className="text-lg text-neutral-600 leading-relaxed">
                A complete website from concept to implementation, that's what makes me stand out. My great sense for
                design and my development skills enable me to create kick-ass projects.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modern Development Section */}
      <section className="py-32 relative bg-white">
        <div className="max-w-[1400px] mx-auto px-4">
          {/* Main Title - Left Aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="mb-32"
          >
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-[60px] md:text-[130px] font-bold text-neutral-800 leading-none tracking-tighter flex items-baseline"
            >
              Develop<span className="text-neutral-300">ment</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-neutral-600 text-xl mt-8 max-w-2xl"
            >
              Creating exceptional digital experiences with clean, efficient, and maintainable code.
            </motion.p>
          </motion.div>

          {/* Skills Display - New Layout */}
          <div className="grid grid-cols-1 gap-24">
            {/* Frontend Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Title */}
                <div className="md:w-1/4">
                  <h3 className="text-4xl font-bold mb-2">Frontend</h3>
                  <p className="text-neutral-400 text-lg">Architecture</p>
                </div>
                {/* Skills */}
                <div className="md:w-1/2 grid grid-cols-2 gap-6">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="relative"
                    >
                      <span className="text-lg text-neutral-600">{skill}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Progress */}
                <div className="md:w-1/4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm text-neutral-400">95%</span>
                  </div>
                  <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "95%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-black rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Backend Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Title */}
                <div className="md:w-1/4">
                  <h3 className="text-4xl font-bold mb-2">Backend</h3>
                  <p className="text-neutral-400 text-lg">Development</p>
                </div>
                {/* Skills */}
                <div className="md:w-1/2 grid grid-cols-2 gap-6">
                  {["FastAPI", "Python", "Node.js", "REST APIs"].map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="relative"
                    >
                      <span className="text-lg text-neutral-600">{skill}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Progress */}
                <div className="md:w-1/4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm text-neutral-400">90%</span>
                  </div>
                  <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "90%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-black rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Database Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                {/* Title */}
                <div className="md:w-1/4">
                  <h3 className="text-4xl font-bold mb-2">Database</h3>
                  <p className="text-neutral-400 text-lg">Management</p>
                </div>
                {/* Skills */}
                <div className="md:w-1/2 grid grid-cols-2 gap-6">
                  {["MongoDB", "PostgreSQL", "Database Design", "Data Modeling"].map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      className="relative"
                    >
                      <span className="text-lg text-neutral-600">{skill}</span>
                    </motion.div>
                  ))}
                </div>
                {/* Progress */}
                <div className="md:w-1/4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm text-neutral-400">85%</span>
                  </div>
                  <div className="h-1 w-full bg-neutral-100 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: "85%" }}
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className="h-full bg-black rounded-full"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

"use client"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export default function About() {
  const { scrollYProgress } = useScroll()
  const x = useTransform(scrollYProgress, [0, 1], [0, -1000])

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section with Large HELLO */}
      <section className="relative flex min-h-screen items-center px-4 py-20 md:px-20">
        <div className="mx-auto max-w-[1400px] px-4">
        <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-8 md:grid-cols-2">
          {/* Left side - Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10"
          >
            <div className="relative">
                <h1 className="flex items-center text-[130px] font-bold leading-none tracking-tighter text-neutral-800 md:text-[200px]">
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
                  className="text-sky-500"
              >
                O
              </motion.span>
            </h1>
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.5, type: "spring" }}
                  className="absolute -top-8 right-24 animate-pulse size-12 text-yellow-400"
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
                  className="font-medium text-xl tracking-wide text-sky-500"
                >
                  Frontend Developer & Creative Designer
              </motion.p>
                <div className="space-y-4">
                  <p className="text-3xl md:text-4xl text-neutral-600 max-w-2xl font-light leading-tight">
                      I&apos;m <span className="font-normal text-neutral-800">Ranjith Kumar</span>. 
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
                        className="mx-2 text-sky-500 font-normal"
                      >
                        immersive digital experiences
                      </motion.span> 
                      through code and creativity.
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-neutral-500 max-w-2xl leading-relaxed border-l-4 border-sky-500 pl-6"
                >
                  Building
                  powerful
                  digital
                  solutions
                  from
                  front
                  to
                  back.
                  Together
                  we&apos;ll
                  create
                  seamless
                  experiences.
                  Always
                  embracing
                  innovation
                  and
                  modern
                  technologies.
                  As a full stack developer, my expertise in both frontend and backend development allows me to craft complete, scalable applications that make a real impact.
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="pt-6"
                >
                  <a 
                    href="#contact" 
                    className="group flex items-center gap-2 text-lg text-neutral-800 transition-colors hover:text-sky-500"
                  >
                    Let&apos;s create something amazing 
                    <ArrowRight className="size-5 group-hover:translate-x-1 transition-transform" />
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
              <div className="absolute inset-0 bg-gradient-to-br from-sky-50 to-neutral-50 rounded-2xl" />
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
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-sky-100/20 to-transparent rounded-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 px-4 md:px-20 bg-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[60px] md:text-[130px] font-bold leading-none tracking-tighter mb-24 flex items-baseline gap-4"
          >
            I can help you
            <span className="text-neutral-300">with</span>
            <div className="text-sky-500 flex gap-1">
              <motion.span
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0
                }}
              >
                .
              </motion.span>
              <motion.span
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.2
                }}
              >
                .
              </motion.span>
              <motion.span
                animate={{
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 0.4
                }}
              >
                .
              </motion.span>
            </div>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20">
            {/* Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="group relative"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-bold text-neutral-200">01</span>
                  <motion.span 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="text-yellow-400 text-xl"
                  >
                    ✦
                  </motion.span>
                </div>
                
                <motion.div
                  className="relative rounded-xl border border-neutral-200 bg-neutral-50 p-4 transition-all duration-300 group hover:border-sky-500"
                >
                  <h3 className="text-4xl font-normal text-neutral-800">Design</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    With a solid track record in designing websites, I deliver strong and user-friendly digital designs.
                    <span className="block mt-2 text-neutral-400">(Since 2024 only in combination with development)</span>
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="group relative"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-bold text-neutral-200">02</span>
                </div>
                
                <motion.div
                  className="relative rounded-xl border border-neutral-200 bg-neutral-50 p-4 transition-all duration-300 group hover:border-sky-500"
                >
                  <h3 className="text-4xl font-normal text-neutral-800">Development</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    I build scalable websites from scratch that fit seamlessly with design. My focus is on micro animations,
                    transitions and interaction. Building with Next.js and modern web technologies.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* Full Package */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="group relative"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-7xl font-bold text-neutral-200">03</span>
                  <span className="text-xl">✦</span>
                </div>
                
                <motion.div
                  className="relative rounded-xl border border-neutral-200 bg-neutral-50 p-4 transition-all duration-300 group hover:border-sky-500"
                >
                  <h3 className="text-4xl font-normal text-neutral-800">The Full Package</h3>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    A complete website from concept to implementation, that&apos;s what makes me stand out. My great sense for
                    design and my development skills enable me to create kick-ass projects.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>

          {/* Loading Line */}
          <div className="w-full h-px bg-neutral-200 mt-32 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-500 via-neutral-800 to-sky-500"
            />
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
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  {["React", "Next.js", "TypeScript", "Tailwind CSS"].map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative bg-neutral-50 border border-neutral-200 rounded-xl p-4 group hover:border-neutral-800 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-lg text-neutral-800 group-hover:text-white transition-colors duration-300 relative z-10">
                          {skill}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="text-neutral-800 group-hover:text-white text-sm transition-colors duration-300 relative z-10"
                        >
                          →
                        </motion.span>
                      </div>
                      <div className="absolute inset-0 bg-neutral-50/0 group-hover:bg-neutral-800 rounded-xl transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
                {/* Progress */}
                <div className="md:w-1/4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm text-neutral-400">95%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
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
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  {["FastAPI", "Python", "Node.js", "REST APIs"].map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative bg-neutral-50 border border-neutral-200 rounded-xl p-4 group hover:border-neutral-800 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-lg text-neutral-800 group-hover:text-white transition-colors duration-300 relative z-10">
                          {skill}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="text-neutral-800 group-hover:text-white text-sm transition-colors duration-300 relative z-10"
                        >
                          →
                        </motion.span>
                      </div>
                      <div className="absolute inset-0 bg-neutral-50/0 group-hover:bg-neutral-800 rounded-xl transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
                {/* Progress */}
                <div className="md:w-1/4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm text-neutral-400">90%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
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
                <div className="md:w-1/2 grid grid-cols-2 gap-4">
                  {["MongoDB", "PostgreSQL", "Database Design", "Data Modeling"].map((skill) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      whileHover={{ scale: 1.05 }}
                      className="relative bg-neutral-50 border border-neutral-200 rounded-xl p-4 group hover:border-neutral-800 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-medium text-lg text-neutral-800 group-hover:text-white transition-colors duration-300 relative z-10">
                          {skill}
                        </span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          className="text-neutral-800 group-hover:text-white text-sm transition-colors duration-300 relative z-10"
                        >
                          →
                        </motion.span>
                      </div>
                      <div className="absolute inset-0 bg-neutral-50/0 group-hover:bg-neutral-800 rounded-xl transition-colors duration-300" />
                    </motion.div>
                  ))}
                </div>
                {/* Progress */}
                <div className="md:w-1/4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Proficiency</span>
                    <span className="text-sm text-neutral-400">85%</span>
                  </div>
                  <div className="h-1 w-full overflow-hidden rounded-full bg-neutral-100">
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

          {/* Loading Line */}
          <div className="w-full h-px bg-neutral-200 mt-32 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-500 via-neutral-800 to-sky-500"
            />
          </div>
        </div>
      </section>

      {/* Experience & Education Section */}
      <section className="py-32 px-4 md:px-20 bg-neutral-100">
        <div className="max-w-[1400px] mx-auto">
          {/* Experience Title */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[60px] md:text-[130px] font-bold text-neutral-800 leading-none tracking-tighter flex items-baseline mb-24"
          >
            Experi<span className="text-neutral-300">ence</span>
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-yellow-400 text-xl ml-4"
            >
              ✦
            </motion.span>
          </motion.h2>

          {/* Experience Timeline */}
          <div className="grid grid-cols-1 gap-20 mb-32">
            {/* Experience Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/4">
                  <div className="sticky top-20 space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-7xl font-bold text-neutral-200">01</span>
                    </motion.div>
                    <div className="space-y-2">
                      <span className="text-sky-500 font-medium text-lg">2022 - Present</span>
                      <h3 className="text-3xl font-bold text-neutral-800">Senior Frontend Developer</h3>
                      <p className="text-neutral-400 text-lg">Company Name</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4 relative">
                  <div className="absolute -left-8 h-full w-1 bg-neutral-200 rounded-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="w-full bg-gradient-to-b from-sky-500 to-neutral-800 rounded-full"
                    />
                  </div>
                  <div className="space-y-8">
                    <p className="text-xl text-neutral-600 leading-relaxed">
                      Led the development of multiple high-impact web applications using Next.js and React.
                      Implemented complex animations and interactive features that enhanced user engagement.
                      Mentored junior developers and established best practices for the frontend team.
                    </p>
                    <div className="pt-6">
                      <div className="text-sm text-neutral-400 mb-3">Technologies Used</div>
                      <div className="flex flex-wrap gap-2">
                        {["Next.js", "React", "TypeScript", "Framer Motion", "TailwindCSS", "Node.js"].map((tech, index) => (
                          <motion.span
                            key={tech}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-xl hover:border-sky-500 hover:text-sky-500 transition-all duration-300"
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Add more experience items here */}
          </div>

          {/* Education Title */}
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[60px] md:text-[130px] font-bold text-neutral-800 leading-none tracking-tighter flex items-baseline mb-24"
          >
            Edu<span className="text-neutral-300">cation</span>
            <motion.span 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="text-sky-500 text-xl ml-4"
            >
              ✦
            </motion.span>
          </motion.h2>

          {/* Education Timeline */}
          <div className="grid grid-cols-1 gap-20">
            {/* Education Item */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="relative group"
            >
              <div className="flex flex-col md:flex-row gap-8 md:gap-16">
                <div className="md:w-1/4">
                  <div className="sticky top-20 space-y-4">
                    <motion.div 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      className="flex items-center gap-4"
                    >
                      <span className="text-7xl font-bold text-neutral-200">01</span>
                    </motion.div>
                    <div className="space-y-2">
                      <span className="text-sky-500 font-medium text-lg">2018 - 2022</span>
                      <h3 className="text-3xl font-bold text-neutral-800">Bachelor of Technology</h3>
                      <p className="text-neutral-400 text-lg">University Name</p>
                    </div>
                  </div>
                </div>
                <div className="md:w-3/4 relative">
                  <div className="absolute -left-8 h-full w-1 bg-neutral-200 rounded-full">
                    <motion.div 
                      initial={{ height: 0 }}
                      whileInView={{ height: "100%" }}
                      transition={{ duration: 1.5 }}
                      className="w-full bg-gradient-to-b from-sky-500 to-neutral-800 rounded-full"
                    />
                  </div>
                  <div className="space-y-8">
                    <p className="text-xl text-neutral-600 leading-relaxed">
                      Computer Science and Engineering with focus on Web Technologies and Software Architecture
                    </p>
                    <div className="pt-6">
                      <div className="text-sm text-neutral-400 mb-3">Key Courses</div>
                      <div className="flex flex-wrap gap-2">
                        {["Web Development", "Data Structures", "Algorithms", "Database Management", "System Design", "UI/UX"].map((course, index) => (
                          <motion.span
                            key={course}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ delay: index * 0.1 }}
                            className="px-4 py-2 bg-white border border-neutral-200 text-neutral-600 rounded-xl hover:border-sky-500 hover:text-sky-500 transition-all duration-300"
                          >
                            {course}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Loading Line */}
          <div className="w-full h-px bg-neutral-200 mt-32 overflow-hidden">
            <motion.div
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-sky-500 via-neutral-800 to-sky-500"
            />
          </div>
        </div>
      </section>
    </div>
  )
}

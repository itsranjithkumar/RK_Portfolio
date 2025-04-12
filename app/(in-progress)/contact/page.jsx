"use client"
import { motion } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone, Twitter } from "lucide-react"

export default function Contact() {
  return (
    <div className="min-h-screen bg-black text-white">
      <section className="relative py-20 px-4 sm:px-8 md:px-12 lg:px-20">
        <div className="max-w-[1400px] mx-auto">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-32"
          >
            <h1 className="text-[60px] md:text-[120px] lg:text-[180px] font-bold leading-none tracking-tight mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gradient-to-b from-white via-neutral-300 to-neutral-400 bg-clip-text text-transparent"
              >
                Let&apos;s
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-gradient-to-b from-neutral-400 via-neutral-500 to-neutral-600 bg-clip-text text-transparent"
              >
                work
              </motion.div>
            </h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl md:text-2xl text-neutral-400 max-w-2xl font-light"
            >
              Have a project in mind? Let&apos;s create something extraordinary together.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="space-y-6">
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="text"
                  placeholder="Your Name"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-neutral-600 transition-all"
                />
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-neutral-600 transition-all"
                />
                <motion.textarea
                  whileFocus={{ scale: 1.01 }}
                  rows={6}
                  placeholder="Tell me about your project"
                  className="w-full bg-neutral-950 border border-neutral-800 rounded-xl px-6 py-4 text-lg focus:outline-none focus:border-neutral-600 transition-all resize-none"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center gap-2 bg-white text-black px-8 py-4 rounded-full text-lg font-medium"
              >
                Send Message
                <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform" />
              </motion.button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                {[
                  { icon: Mail, label: "Email", value: "hello@example.com", href: "mailto:hello@example.com" },
                  { icon: Phone, label: "Phone", value: "+1 (234) 567-890", href: "tel:+1234567890" },
                  { icon: MapPin, label: "Location", value: "San Francisco, CA" }
                ].map((item) => (
                  <motion.div 
                    key={item.label}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center gap-6 bg-neutral-950 border border-neutral-800 rounded-xl p-6 hover:border-neutral-600 transition-all"
                  >
                    <div className="p-3 bg-neutral-900 rounded-lg">
                      <item.icon className="w-6 h-6 text-neutral-400" />
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 mb-1">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="text-lg text-neutral-200 hover:text-white transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-lg text-neutral-200">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-sm text-neutral-500 mb-4">Follow Me</h3>
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: Twitter, label: "Twitter" },
                    { icon: Github, label: "GitHub" },
                    { icon: Linkedin, label: "LinkedIn" }
                  ].map((social) => (
                    <motion.a
                      key={social.label}
                      href="#"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-4 bg-neutral-950 border border-neutral-800 rounded-xl hover:border-neutral-600 transition-all"
                    >
                      <social.icon className="w-5 h-5 text-neutral-400" />
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

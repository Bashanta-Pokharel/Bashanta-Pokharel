import React from 'react'
import { motion } from 'framer-motion'

const StatCard = ({ value, label, meta }) => (
  <motion.div
    className="flex-1 bg-neutral-800/60 p-6 rounded-lg shadow-lg text-center"
    initial={{ y: 20, opacity: 0 }}
    whileInView={{ y: 0, opacity: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
  >
    <div className="text-4xl font-bold text-indigo-300">{value}</div>
    <div className="mt-2 text-neutral-300">{label}</div>
    {meta && <div className="mt-3 text-sm text-green-400">{meta}</div>}
  </motion.div>
)

export default function Stats() {
  return (
    <div className="bg-neutral-800/30 p-6 rounded-lg shadow max-w-3xl mx-auto">
      <div className="flex gap-6 items-center">
        <StatCard value={551} label="Total Contributions" meta="Aug 11, 2025 - Present" />
        <div className="w-px bg-neutral-700 h-36" />
        <div className="flex-1 flex items-center justify-center">
          <motion.div
            className="w-36 h-36 rounded-full border-8 border-indigo-600/40 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.06, 1] }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-3xl font-extrabold text-violet-300">16</div>
          </motion.div>
        </div>
        <div className="w-px bg-neutral-700 h-36" />
        <StatCard value={18} label="Longest Streak" meta="May 30 - Jun 16" />
      </div>
    </div>
  )
}

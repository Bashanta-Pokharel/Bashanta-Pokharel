import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Stats from './components/Stats'
import Snake from './components/Snake'

export default function App() {
  const [dark, setDark] = useState(true)
  return (
    <div className={dark ? 'dark' : ''}>
      <div className="min-h-screen bg-neutral-900 text-neutral-100 p-6 transition-colors duration-500">
        <header className="max-w-4xl mx-auto text-center py-8">
          <motion.h1
            className="text-4xl font-extrabold tracking-tight"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            🚀 Bashanta Pokharel
          </motion.h1>
          <p className="mt-3 text-neutral-300">Clean, maintainable, scalable and enjoyable software.</p>
          <div className="mt-4">
            <button
              onClick={() => setDark(!dark)}
              className="px-4 py-2 rounded bg-gradient-to-r from-indigo-500 to-pink-500 text-white shadow"
            >
              Toggle {dark ? 'Light' : 'Dark'}
            </button>
          </div>
        </header>

        <main className="max-w-4xl mx-auto">
          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">📊 GitHub Analytics</h2>
            <Stats />
          </section>

          <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">🐍 Contribution Snake</h2>
            <Snake />
          </section>

          <footer className="mt-16 text-center text-neutral-500">Built with React, Tailwind & Framer Motion</footer>
        </main>
      </div>
    </div>
  )
}

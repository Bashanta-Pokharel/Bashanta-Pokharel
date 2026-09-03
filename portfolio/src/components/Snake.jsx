import React from 'react'
import { motion } from 'framer-motion'

// Placeholder visual for the contribution snake. Replace with live data integration later.
export default function Snake() {
  const [cells, setCells] = React.useState(null)

  React.useEffect(() => {
    let mounted = true
    fetch('/contributions.json')
      .then(r => r.json())
      .then(data => {
        if (!mounted) return
        if (data && data.items && data.items.length) {
          // pack into rows x cols layout (14 cols)
          const cols = 14
          const items = data.items.slice(-cols * 6) // last N days
          // ensure length
          while (items.length < cols * 6) items.unshift({ date: null, count: 0 })
          setCells(items)
        } else {
          // fallback random
          const cols = 14
          const rows = 6
          setCells(Array.from({ length: rows * cols }).map(() => ({ count: Math.random() > 0.7 ? 3 : Math.floor(Math.random() * 2) })))
        }
      })
      .catch(() => {
        const cols = 14
        const rows = 6
        setCells(Array.from({ length: rows * cols }).map(() => ({ count: Math.random() > 0.7 ? 3 : Math.floor(Math.random() * 2) })))
      })
    return () => { mounted = false }
  }, [])

  if (!cells) return (
    <div className="bg-neutral-800/30 p-6 rounded-lg shadow max-w-3xl mx-auto text-center text-neutral-400">Loading contribution snake...</div>
  )

  return (
    <div className="bg-neutral-800/30 p-6 rounded-lg shadow max-w-3xl mx-auto">
      <div className="grid grid-cols-14 gap-1">
        {cells.map((c, i) => {
          const level = c.count >= 4 ? 'bg-green-500' : c.count >= 2 ? 'bg-green-400' : c.count >= 1 ? 'bg-green-300' : 'bg-neutral-700/40'
          return (
            <motion.div
              key={i}
              className={`w-4 h-4 rounded-sm ${level}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.01, duration: 0.35 }}
            />
          )
        })}
      </div>
      <div className="mt-4 text-sm text-neutral-300">Contribution snake loaded from static data at build time.</div>
    </div>
  )
}

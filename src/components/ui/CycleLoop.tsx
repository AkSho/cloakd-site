import { motion } from 'framer-motion';

const steps = [
  { label: 'Infestation', sub: 'Active population present', color: '#c96a3a' },
  { label: 'Treatment',   sub: 'Poison / traps deployed',   color: '#d4a843' },
  { label: 'Empty territory', sub: 'Rodents removed',       color: '#6b7280' },
  { label: 'New colony',  sub: 'Surrounding rats move in',  color: '#d4a843' },
  { label: 'Infestation', sub: 'Back to baseline. Again.',  color: '#c96a3a' },
];

export default function CycleLoop() {
  return (
    <div className="relative">
      {/* Desktop: horizontal chain */}
      <div className="hidden md:flex items-start gap-0">
        {steps.map(({ label, sub, color }, i) => (
          <div key={i} className="flex items-start flex-1">
            <motion.div
              className="flex-1 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ type: 'spring', stiffness: 260, damping: 26, delay: i * 0.12 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-3 border-2"
                style={{
                  borderColor: color,
                  color: i === 4 ? '#faf8f4' : color,
                  backgroundColor: i === 4 ? color : 'transparent',
                }}
              >
                {i === 4 ? '↺' : i + 1}
              </div>
              <p className="text-base font-semibold text-[#1c1814]/90 leading-tight mb-1">{label}</p>
              <p className="text-sm text-[#1c1814]/60 leading-snug px-2">{sub}</p>
            </motion.div>

            {/* Arrow connector */}
            {i < steps.length - 1 && (
              <motion.div
                className="flex items-center pt-5 px-1 flex-shrink-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2 }}
              >
                <svg width="24" height="12" viewBox="0 0 24 12" fill="none">
                  <path d="M0 6h20M15 1l5 5-5 5" stroke="#1c1814" strokeOpacity="0.2" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: vertical chain */}
      <div className="flex md:hidden flex-col gap-0">
        {steps.map(({ label, sub, color }, i) => (
          <div key={i} className="flex items-start gap-4">
            <div className="flex flex-col items-center flex-shrink-0">
              <motion.div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 flex-shrink-0"
                style={{
                  borderColor: color,
                  color: i === 4 ? '#faf8f4' : color,
                  backgroundColor: i === 4 ? color : 'transparent',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {i === 4 ? '↺' : i + 1}
              </motion.div>
              {i < steps.length - 1 && (
                <div className="w-px h-8 bg-[#1c1814]/10 my-1" />
              )}
            </div>
            <motion.div
              className="pt-2 pb-4"
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <p className="text-base font-semibold text-[#1c1814]/90">{label}</p>
              <p className="text-sm text-[#1c1814]/60 mt-0.5">{sub}</p>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Loop indicator */}
      <motion.div
        className="mt-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c96a3a]/30 bg-[#c96a3a]/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7 }}
      >
        <span className="text-xs text-[#c96a3a] font-semibold">Repeats every 6 to 8 weeks</span>
        <span className="text-xs text-[#1c1814]/55">indefinitely, until the breeding rate changes</span>
      </motion.div>
    </div>
  );
}

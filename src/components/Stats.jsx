import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Users, ShieldCheck, AlertTriangle, FileText } from 'lucide-react';

const StatCard = ({ icon, endValue, suffix, label, delay }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        const easeProgress = currentStep === steps ? 1 : 1 - Math.pow(2, -10 * progress);
        setCount(Math.floor(endValue * easeProgress));

        if (currentStep === steps) {
          clearInterval(timer);
          setCount(endValue);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, endValue]);

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className="premium-card text-center flex flex-col items-center justify-center gap-2"
    >
      <div className="text-gold mb-2">{icon}</div>
      <h3 className="text-oxford" style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1 }}>
        {count.toLocaleString()}{suffix}
      </h3>
      <p style={{ color: '#666', fontSize: '1.1rem', fontWeight: 500 }}>{label}</p>
    </motion.div>
  );
};

const Stats = () => {
  return (
    <section className="bg-ivory section-padding relative z-10">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatCard icon={<ShieldCheck size={40} />} endValue={124500} suffix="+" label="Verifications Done" delay={0.1} />
          <StatCard icon={<Users size={40} />} endValue={89} suffix=".3%" label="Legitimate Schemes" delay={0.2} />
          <StatCard icon={<AlertTriangle size={40} />} endValue={12847} suffix="" label="Frauds Prevented" delay={0.3} />
          <StatCard icon={<FileText size={40} />} endValue={500} suffix="+" label="Schemes Monitored" delay={0.4} />
        </div>
      </div>

      <style>{`
        .grid-cols-1 { grid-template-columns: repeat(1, minmax(0, 1fr)); }
        @media (min-width: 640px) {
          .sm\\:grid-cols-2 { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .lg\\:grid-cols-4 { grid-template-columns: repeat(4, minmax(0, 1fr)); }
        }
      `}</style>
    </section>
  );
};

export default Stats;

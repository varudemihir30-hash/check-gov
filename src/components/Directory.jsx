import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Info } from 'lucide-react';
import { Link } from 'react-router-dom';

const schemes = [
  { id: 1, title: 'PM Kisan Samman Nidhi', state: 'Central', category: 'Agriculture' },
  { id: 2, title: 'Ayushman Bharat Yojana', state: 'Central', category: 'Health' },
  { id: 3, title: 'Pradhan Mantri Awas Yojana', state: 'Central', category: 'Housing' },
  { id: 4, title: 'Ujjwala Yojana', state: 'Central', category: 'Energy' },
  { id: 5, title: 'Mudra Yojana', state: 'Central', category: 'Finance' },
  { id: 6, title: 'Beti Bachao Beti Padhao', state: 'Central', category: 'Women & Child' },
  { id: 7, title: 'Sukanya Samriddhi Yojana', state: 'Central', category: 'Finance' },
  { id: 8, title: 'Atal Pension Yojana', state: 'Central', category: 'Pension' },
  { id: 9, title: 'Fasal Bima Yojana', state: 'Central', category: 'Agriculture' },
  { id: 10, title: 'Swachh Bharat Mission', state: 'Central', category: 'Sanitation' },
  { id: 11, title: 'Jan Dhan Yojana', state: 'Central', category: 'Finance' },
  { id: 12, title: 'PM SVANidhi', state: 'Central', category: 'Finance' },
  { id: 13, title: 'Jal Jeevan Mission', state: 'Central', category: 'Water' },
  { id: 14, title: 'PM Vishwakarma', state: 'Central', category: 'Skill' },
  { id: 15, title: 'Kaushal Vikas Yojana', state: 'Central', category: 'Skill' },
  { id: 16, title: 'PMSBY', state: 'Central', category: 'Insurance' },
  { id: 17, title: 'PMJJBY', state: 'Central', category: 'Insurance' },
  { id: 18, title: 'Digital India', state: 'Central', category: 'Technology' },
  { id: 19, title: 'Saubhagya Yojana', state: 'Central', category: 'Energy' },
  { id: 20, title: 'Skill India', state: 'Central', category: 'Skill' }
];

const Directory = ({ initialQuery = '' }) => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const [query, setQuery] = useState(initialQuery);

  const filteredSchemes = schemes.filter((scheme) => {
    if (!query.trim()) return true;
    const q = query.trim().toLowerCase();
    return scheme.title.toLowerCase().includes(q) || scheme.category.toLowerCase().includes(q);
  });

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
    }
    
    const handleResize = () => {
      if (containerRef.current) {
        setWidth(containerRef.current.scrollWidth - containerRef.current.offsetWidth);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [filteredSchemes.length]);

  return (
    <section id="directory" className="bg-oxford section-padding overflow-hidden">
      <div className="container mb-8">
        <div className="flex justify-between items-end flex-wrap gap-4">
          <div>
            <h2 className="text-gold hindi-text" style={{ fontSize: '2.5rem', marginBottom: '0.2rem', lineHeight: 1.2 }}>योजना निर्देशिका</h2>
            <h3 className="text-white" style={{ fontSize: '1.8rem', opacity: 0.9 }}>Real Schemes Directory</h3>
          </div>
          <div className="flex items-center gap-2 text-white" style={{ opacity: 0.7 }}>
            <ArrowRight size={20} />
            <span>Drag to explore</span>
          </div>
        </div>
      </div>

      <div className="container mb-6" style={{ position: 'relative' }}>
        <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <div style={{ flex: '1 1 320px', minWidth: 0 }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.85)', fontWeight: 700, marginBottom: '0.4rem' }}>
              Search schemes
            </label>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Type a scheme name or category..."
              className="w-full"
              style={{
                background: 'rgba(248,246,240,0.08)',
                borderColor: 'rgba(255,255,255,0.18)',
                color: 'var(--white)',
                padding: '0.75rem 1rem',
                border: '1px solid rgba(255,255,255,0.18)',
                borderRadius: 8,
                outline: 'none',
                fontFamily: 'var(--font-body)',
              }}
            />
          </div>
          <div style={{ flex: '0 0 auto', color: 'rgba(255,255,255,0.8)', fontWeight: 600 }}>
            {filteredSchemes.length} result{filteredSchemes.length === 1 ? '' : 's'}
          </div>
        </div>
      </div>

      <div ref={containerRef} className="ml-safe pl-safe" style={{ cursor: 'grab' }}>
        <motion.div 
          drag="x" 
          dragConstraints={{ right: 0, left: -width }} 
          className="flex gap-4 px-4"
          style={{ width: 'max-content', paddingLeft: 'max(1.5rem, calc((100vw - 1200px) / 2))', paddingRight: '2rem' }}
          whileTap={{ cursor: 'grabbing' }}
        >
          {filteredSchemes.length === 0 ? (
            <div
              style={{
                padding: '1.75rem',
                textAlign: 'center',
                color: 'rgba(255,255,255,0.85)',
                fontWeight: 600,
              }}
            >
              No schemes found. Try a different name or category.
            </div>
          ) : (
            filteredSchemes.map((scheme) => (
            <motion.div 
              key={scheme.id}
              className="bg-white rounded p-6 flex flex-col justify-between"
              style={{ minWidth: '300px', height: '180px', borderRadius: '8px', borderTop: '4px solid var(--imperial-gold)', boxShadow: '0 10px 15px -3px rgba(0,0,0,0.1)' }}
              whileHover={{ y: -5 }}
            >
              <div>
                <div className="flex justify-between items-start mb-2">
                  <span className="bg-ivory text-oxford px-2 py-1 rounded text-xs font-bold uppercase tracking-wider">
                    {scheme.category}
                  </span>
                  <Info size={18} className="text-gold" style={{ opacity: 0.5 }} />
                </div>
                <h4 className="text-oxford font-bold" style={{ fontSize: '1.25rem', lineHeight: 1.3, marginBottom: '0.5rem' }}>
                  {scheme.title}
                </h4>
              </div>
              <div className="flex justify-between items-center text-sm" style={{ color: '#666', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '0.75rem' }}>
                <span>{scheme.state}</span>
                <Link
                  to="/#verify"
                  className="text-gold font-bold hover-underline"
                  style={{ textDecoration: 'none' }}
                >
                  Verify
                </Link>
              </div>
            </motion.div>
            ))
          )}
        </motion.div>
      </div>
      
      <style>{`
        .overflow-hidden { overflow: hidden; }
        .mb-8 { margin-bottom: 2rem; }
        .flex-wrap { flex-wrap: wrap; }
        .px-4 { padding-left: 1rem; padding-right: 1rem; }
        .px-2 { padding-left: 0.5rem; padding-right: 0.5rem; }
        .py-1 { padding-top: 0.25rem; padding-bottom: 0.25rem; }
        .p-6 { padding: 1.5rem; }
        .text-xs { font-size: 0.75rem; }
        .text-sm { font-size: 0.875rem; }
        .font-bold { font-weight: 700; }
        .uppercase { text-transform: uppercase; }
        .tracking-wider { letter-spacing: 0.05em; }
        .rounded { border-radius: 4px; }
        .hover-underline:hover { text-decoration: underline; }
      `}</style>
    </section>
  );
};

export default Directory;

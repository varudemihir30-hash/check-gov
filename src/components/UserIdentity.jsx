import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ChevronDown, ChevronUp, Lock } from 'lucide-react';

const UserIdentity = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-ivory py-6" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
      <div className="container">
        <div className="premium-card mx-auto" style={{ maxWidth: '600px', padding: '1rem 1.5rem', borderTop: 'none', background: 'transparent', boxShadow: 'none' }}>
          <button 
            className="w-full flex justify-between items-center"
            style={{ background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', outline: 'none' }}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="flex items-center gap-3">
              <div className="bg-oxford text-gold" style={{ borderRadius: '50%', padding: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User size={20} />
              </div>
              <div>
                <h3 className="text-oxford hindi-text" style={{ fontSize: '1.2rem', marginBottom: '0.1rem', fontWeight: 600 }}>वैकल्पिक विवरण</h3>
                <h4 className="text-oxford" style={{ fontSize: '0.9rem', marginBottom: '0.1rem', opacity: 0.8 }}>Optional Details</h4>
                <p style={{ fontSize: '0.75rem', color: '#666' }}>For SMS verification results</p>
              </div>
            </div>
            {isOpen ? <ChevronUp className="text-oxford" /> : <ChevronDown className="text-oxford" />}
          </button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="mt-4"
                style={{ overflow: 'hidden', marginTop: '1.5rem', borderTop: '1px solid rgba(0,0,0,0.05)', paddingTop: '1.5rem' }}
              >
                <div className="flex flex-col md-flex-row gap-4">
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-oxford font-bold" style={{ fontSize: '0.9rem' }}>Full Name</label>
                    <input type="text" placeholder="e.g. Rahul Kumar" className="input-field" />
                  </div>
                  <div className="flex flex-col gap-2 flex-1">
                    <label className="text-oxford font-bold" style={{ fontSize: '0.9rem' }}>Mobile Number</label>
                    <div className="flex relative">
                      <span className="absolute text-oxford" style={{ left: '10px', top: '50%', transform: 'translateY(-50%)', fontWeight: 'bold' }}>+91</span>
                      <input type="tel" placeholder="98765 43210" className="input-field w-full" style={{ paddingLeft: '3rem' }} />
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gold rounded" style={{ padding: '0.75rem 1rem', background: 'rgba(0,33,71,0.05)', fontSize: '0.85rem', marginTop: '1.5rem' }}>
                  <Lock size={16} className="text-oxford" />
                  <span className="text-oxford" style={{ opacity: 0.8 }}>Your privacy is guaranteed. Data is encrypted and not stored.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <style>{`
        .input-field {
          padding: 0.75rem 1rem;
          border: 1px solid rgba(0,0,0,0.1);
          border-radius: 4px;
          font-family: var(--font-body);
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .input-field:focus {
          border-color: var(--imperial-gold);
        }
        .py-6 { padding-top: 1.5rem; padding-bottom: 1.5rem; }
        .mx-auto { margin-left: auto; margin-right: auto; }
        @media (min-width: 768px) {
          .md-flex-row { flex-direction: row; }
        }
      `}</style>
    </section>
  );
};

export default UserIdentity;

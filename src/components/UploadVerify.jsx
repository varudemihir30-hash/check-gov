import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FileUp, Link as LinkIcon, MessageSquare, QrCode, Search, ShieldCheck, User, ChevronDown, ChevronUp, Lock } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const indianStates = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand",
  "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur",
  "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab",
  "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
  "Uttar Pradesh", "Uttarakhand", "West Bengal",
  "Andaman and Nicobar Islands", "Chandigarh", 
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", 
  "Jammu and Kashmir", "Ladakh", "Lakshadweep", "Puducherry"
].sort();

const UploadVerify = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState('url');
  const [isDragging, setIsDragging] = useState(false);
  const [isVerifying, setIsVerifying] = useState(false);
  const [showOptional, setShowOptional] = useState(false);

  const tabs = [
    { id: 'url', icon: <LinkIcon size={16} />, label: t('tabUrl') },
    { id: 'file', icon: <FileUp size={16} />, label: t('tabFile') },
    { id: 'sms', icon: <MessageSquare size={16} />, label: t('tabSms') },
    { id: 'qr', icon: <QrCode size={16} />, label: t('tabQr') }
  ];

  const handleDragOver = (e) => { e.preventDefault(); setIsDragging(true); };
  const handleDragLeave = () => setIsDragging(false);
  const handleDrop = (e) => { e.preventDefault(); setIsDragging(false); };

  const handleVerify = () => {
    setIsVerifying(true);
    setTimeout(() => {
      setIsVerifying(false);
      window.dispatchEvent(new CustomEvent('show-verify-result', { detail: { type: 'success' } }));
      setTimeout(() => {
         document.getElementById('verification-result')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 100);
    }, 2000);
  };

  return (
    <section id="verify" className="relative z-20" style={{ marginTop: '-4rem', paddingBottom: '4rem' }}>
      <div className="container">
        <div
          className="premium-card mx-auto"
          style={{
            maxWidth: '750px',
            borderTop: '4px solid var(--imperial-gold)',
            padding: '2.25rem',
            borderRadius: '14px',
            boxShadow: '0 18px 42px -18px rgba(0, 0, 0, 0.35)',
            background: 'var(--white)',
          }}
        >
          
          <div className="text-center mb-6">
            <h2 className="text-oxford hindi-text" style={{ fontSize: '2rem', marginBottom: '0.2rem', fontWeight: 700 }}>{t('hubTitle')}</h2>
          </div>

          <div
            className="flex flex-nowrap gap-2 p-1 mx-auto mb-8 tab-wrapper"
            style={{
              background: '#F0EFEB',
              width: '100%',
              borderRadius: '999px',
              overflowX: 'auto',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
            }}
            role="tablist"
            aria-label="Verification methods"
          >
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                type="button"
                role="tab"
                aria-selected={activeTab === tab.id}
                className="flex items-center justify-center gap-2 transition-all tab-btn"
                style={{ 
                  background: activeTab === tab.id ? 'var(--white)' : 'transparent',
                  color: activeTab === tab.id ? 'var(--imperial-gold)' : 'var(--oxford-blue)',
                  fontWeight: activeTab === tab.id ? 700 : 500,
                  boxShadow: activeTab === tab.id ? '0 2px 10px rgba(0,0,0,0.08)' : 'none',
                  border: 'none', cursor: 'pointer', fontFamily: 'var(--font-heading)', 
                  fontSize: '0.95rem', padding: '0.6rem 1.25rem', borderRadius: '999px',
                  whiteSpace: 'nowrap',
                }}
              >
                {tab.icon}
                <span className="tab-label">{tab.label}</span>
              </button>
            ))}
          </div>

          <div className="main-form-area flex flex-col w-full">
            
            <div className="flex flex-col md-flex-row gap-5 mb-6 w-full">
              <div className="flex flex-col gap-2 flex-2 relative w-full" style={{ flex: 2 }}>
                <label className="text-oxford font-bold" style={{ fontSize: '0.95rem' }}>{t('schemeName')}</label>
                <div className="relative w-full">
                  <Search size={18} className="absolute text-gold" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="e.g. PM-Kisan Samman Nidhi"
                    aria-label="Scheme name"
                    className="custom-input w-full"
                    style={{ paddingLeft: '2.75rem' }}
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2 flex-1 w-full" style={{ flex: 1 }}>
                <label className="text-oxford font-bold" style={{ fontSize: '0.95rem' }}>{t('stateRegion')}</label>
                <select className="custom-input w-full" aria-label="State or region">
                  <option value="all">{t('regionAll')}</option>
                  {indianStates.map((state) => (
                    <option key={state} value={state.toLowerCase()}>
                      {state}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {activeTab === 'url' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-2 mb-6 w-full">
                  <label className="text-oxford font-bold" style={{ fontSize: '0.95rem' }}>{t('urlLabel')}</label>
                  <div className="relative w-full">
                    <LinkIcon size={18} className="absolute" style={{ left: '16px', top: '50%', transform: 'translateY(-50%)', color: '#999' }} />
                    <input
                      type="url"
                      placeholder={t('urlPlaceholder')}
                      aria-label="Scheme website URL"
                      className="custom-input bg-ivory w-full"
                      style={{ paddingLeft: '2.75rem' }}
                    />
                  </div>
                </motion.div>
              )}

              {activeTab === 'sms' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col gap-2 mb-6 w-full">
                  <label className="text-oxford font-bold" style={{ fontSize: '0.95rem' }}>{t('smsLabel')}</label>
                  <textarea
                    placeholder={t('smsPlaceholder')}
                    aria-label="SMS content"
                    className="custom-input bg-ivory w-full"
                    style={{ minHeight: '120px', resize: 'vertical' }}
                  />
                </motion.div>
              )}

              {activeTab === 'file' && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                  className={`relative mb-6 w-full ${isDragging ? 'dragging' : ''}`}
                  onDragOver={handleDragOver}
                  onDragLeave={handleDragLeave}
                  onDrop={handleDrop}
                  style={{ 
                    border: isDragging ? '2px dashed var(--imperial-gold)' : '2px dashed rgba(0,33,71,0.2)',
                    background: isDragging ? 'rgba(201,152,42,0.05)' : 'rgba(248,246,240,0.5)',
                    borderRadius: '12px', padding: '3rem 2rem', textAlign: 'center', transition: 'all 0.3s'
                  }}
                >
                  <motion.div
                    animate={{ rotate: isDragging || isVerifying ? 360 : 0 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    className="mx-auto mb-3"
                    style={{ width: '60px', height: '60px', opacity: isDragging || isVerifying ? 1 : 0.8 }}
                  >
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="50" cy="50" r="45" stroke={isDragging || isVerifying ? "#C9982A" : "#002147"} strokeWidth="3" opacity={isDragging || isVerifying ? 1 : 0.2}/>
                      {Array.from({length: 12}).map((_, i) => (
                        <line key={i} x1="50" y1="50" x2="50" y2="15" stroke={isDragging || isVerifying ? "#C9982A" : "#002147"} strokeWidth="3" opacity={isDragging || isVerifying ? 1 : 0.2} transform={`rotate(${i * 30} 50 50)`} />
                      ))}
                      <circle cx="50" cy="50" r="15" fill={isDragging || isVerifying ? "#C9982A" : "#002147"} opacity={isDragging || isVerifying ? 1 : 0.2} />
                    </svg>
                  </motion.div>
                  <h4 className="text-oxford" style={{ fontSize: '1.2rem', marginBottom: '0.4rem', fontWeight: 700 }}>{t('uploadPrompt')}</h4>
                  <p style={{ color: '#666', fontSize: '0.9rem' }}>{t('fileLimits')}</p>
                  <button className="btn btn-ghost mt-4" style={{ borderRadius: '50px', padding: '0.5rem 1rem', fontSize: '0.9rem' }}>{t('browseFiles')}</button>
                </motion.div>
              )}
              
              {activeTab === 'qr' && (
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="flex flex-col items-center justify-center gap-2 mb-6 w-full p-6" style={{ border: '2px dashed rgba(0,33,71,0.2)', borderRadius: '12px', background: 'rgba(248,246,240,0.5)' }}>
                  <QrCode size={56} style={{ color: 'var(--oxford-blue)', opacity: 0.5, marginBottom: '1rem' }} />
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mb-6 w-full" style={{ background: 'var(--white)', borderRadius: '12px', border: '1px solid rgba(0,33,71,0.1)', overflow: 'hidden', transition: 'all 0.3s', boxShadow: showOptional ? '0 10px 20px -5px rgba(0,33,71,0.06)' : '0 2px 5px rgba(0,33,71,0.02)' }}>
              <button 
                className="w-full flex justify-between items-center cursor-pointer outline-none"
                style={{ padding: '1rem 1.25rem', border: 'none', background: showOptional ? 'rgba(248,246,240,0.5)' : 'transparent', transition: 'background 0.2s' }}
                onClick={() => setShowOptional(!showOptional)}
                type="button"
                aria-expanded={showOptional}
              >
                <div className="flex items-center gap-4">
                  <div className="text-oxford flex items-center justify-center p-2.5 rounded-lg" style={{ background: 'rgba(0,33,71,0.05)' }}>
                    <User size={18} />
                  </div>
                  <div className="text-left">
                    <h3 className="text-oxford font-bold m-0" style={{ fontSize: '1rem', lineHeight: 1.2 }}>{t('optAlerts')}</h3>
                    <p className="m-0" style={{ fontSize: '0.85rem', color: '#666', marginTop: '0.2rem' }}>{t('optSub')}</p>
                  </div>
                </div>
                <div className="flex items-center justify-center" style={{ width: '32px', height: '32px', borderRadius: '50%', background: showOptional ? 'var(--oxford-blue)' : 'rgba(0,33,71,0.05)', color: showOptional ? 'var(--white)' : 'var(--oxford-blue)', transition: 'all 0.3s' }}>
                  {showOptional ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                </div>
              </button>

              <AnimatePresence>
                {showOptional && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} style={{ overflow: 'hidden' }}>
                    <div className="p-5 pt-0 w-full" style={{ background: 'rgba(248,246,240,0.5)' }}>
                      <div className="flex flex-col md-flex-row gap-4 w-full pt-4" style={{ borderTop: '1px dashed rgba(0,33,71,0.15)' }}>
                        <div className="flex flex-col gap-2 flex-1 w-full">
                          <label className="text-oxford font-bold" style={{ fontSize: '0.9rem' }}>{t('fullName')}</label>
                          <input type="text" placeholder="e.g. Rahul Kumar" className="custom-input bg-white w-full" style={{ padding: '0.8rem 1rem' }} />
                        </div>
                        <div className="flex flex-col gap-2 flex-1 w-full">
                          <label className="text-oxford font-bold" style={{ fontSize: '0.9rem' }}>{t('mobileNumber')}</label>
                          <div className="relative w-full">
                            <span className="absolute text-oxford font-bold" style={{ left: '12px', top: '50%', transform: 'translateY(-50%)', fontSize: '0.9rem' }}>+91</span>
                            <input type="tel" placeholder="98765 43210" className="custom-input bg-white w-full" style={{ padding: '0.8rem 1rem', paddingLeft: '3.25rem' }} />
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 mt-4 p-3 rounded-lg" style={{ background: 'rgba(201,152,42,0.1)', color: 'var(--oxford-blue)', fontSize: '0.85rem' }}>
                        <Lock size={14} className="text-gold" style={{ flexShrink: 0 }} />
                        <span style={{ opacity: 0.9, lineHeight: 1.4, fontWeight: 500 }}>{t('privacy')}</span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <button 
              type="button"
              className="w-full flex justify-center items-center gap-3 transition-transform" 
              style={{ 
                background: 'linear-gradient(135deg, #002147 0%, #001229 100%)',
                color: 'var(--imperial-gold)', fontSize: '1.05rem', padding: '1rem', 
                borderRadius: '8px', border: 'none', cursor: 'pointer',
                boxShadow: '0 8px 20px -5px rgba(0, 33, 71, 0.4)',
                fontFamily: 'var(--font-heading)',
                fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase',
                transform: isVerifying ? 'scale(0.99)' : 'scale(1)',
                opacity: isVerifying ? 0.9 : 1,
              }}
              onClick={handleVerify}
              disabled={isVerifying}
            >
              <ShieldCheck size={24} />
              {isVerifying ? t('btnVerifying') : t('btnVerify')}
            </button>
          </div>
        </div>
      </div>

      <style>{`
        .mx-auto { margin-left: auto; margin-right: auto; }
        .w-full { width: 100%; box-sizing: border-box; }
        .text-center { text-align: center; }
        .text-left { text-align: left; }
        .mb-10 { margin-bottom: 2.5rem; }
        .mb-8 { margin-bottom: 2rem; }
        .mb-6 { margin-bottom: 1.5rem; }
        .mb-4 { margin-bottom: 1rem; }
        .mb-3 { margin-bottom: 0.75rem; }
        .mt-6 { margin-top: 1.5rem; }
        .mt-5 { margin-top: 1.25rem; }
        .mt-4 { margin-top: 1rem; }
        .mt-3 { margin-top: 0.75rem; }
        .pt-6 { padding-top: 1.5rem; }
        .pt-5 { padding-top: 1.25rem; }
        .p-6 { padding: 1.5rem; }
        .p-4 { padding: 1rem; }
        .m-0 { margin: 0; }
        
        .custom-input {
          width: 100%;
          padding: 0.75rem 1rem 0.75rem 1rem;
          border: 1px solid rgba(0,33,71,0.14);
          border-radius: 8px;
          font-family: var(--font-body);
          font-size: 0.95rem;
          color: var(--oxford-blue);
          background: var(--white);
          outline: none;
          transition: all 0.2s;
          box-sizing: border-box;
        }
        .custom-input:focus { 
          border-color: var(--imperial-gold); 
          box-shadow: 0 0 0 3px rgba(201, 152, 42, 0.1);
        }
        .custom-input.bg-ivory { background: var(--warm-ivory); }

        .tab-wrapper::-webkit-scrollbar { display: none; }
        .tab-btn:focus-visible { outline: 3px solid rgba(201, 152, 42, 0.55); outline-offset: 2px; }

        @media (max-width: 640px) {
          .tab-wrapper { flex-direction: column; border-radius: 12px !important; padding: 0.5rem !important; width: 100% !important; }
          .tab-btn { justify-content: flex-start !important; padding: 0.75rem 1rem !important; border-radius: 8px !important; }
          .premium-card { padding: 1.25rem !important; }
        }
        @media (min-width: 768px) {
          .md-flex-row { flex-direction: row; display: flex; }
        }
      `}</style>
    </section>
  );
};

export default UploadVerify;


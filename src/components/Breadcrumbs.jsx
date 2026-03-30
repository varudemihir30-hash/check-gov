import React from 'react';
import { Link } from 'react-router-dom';

export default function Breadcrumbs({ items }) {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="breadcrumb" style={{ width: '100%' }}>
      <ol
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: '0.5rem',
          listStyle: 'none',
          padding: 0,
          margin: '0 0 1.5rem 0',
          opacity: 0.85,
          fontSize: '0.95rem',
        }}
      >
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={`${item.label}-${idx}`} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              {!isLast && item.href ? (
                <Link to={item.href} style={{ color: 'var(--oxford-blue)', textDecoration: 'none' }}>
                  {item.label}
                </Link>
              ) : (
                <span style={{ color: 'var(--oxford-blue)', fontWeight: 700 }}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}


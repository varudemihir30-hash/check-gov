import React from 'react';
import { Link } from 'react-router-dom';
import PageSEO from '../components/PageSEO';
import Breadcrumbs from '../components/Breadcrumbs';

export default function NotFoundPage() {
  return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '3rem' }}>
      <PageSEO
        title="Page Not Found - SachYojana"
        description="The page you are looking for does not exist on SachYojana."
        canonicalPath="/"
        ogType="website"
      />

      <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Not Found' }]} />

      <h1 style={{ fontSize: '2.3rem', marginBottom: '1rem' }}>Page Not Found</h1>
      <p style={{ marginBottom: '1.5rem', fontSize: '1.02rem' }}>
        The link may be broken or the page may have been moved.
      </p>

      <Link to="/" className="btn btn-gold" style={{ textDecoration: 'none', fontWeight: 900, padding: '0.9rem 1.2rem' }}>
        Return Home
      </Link>
    </div>
  );
}


import Link from 'next/link';
import React from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';


export default function NotFound() {
  return (
    <>
      <NavBar />
      <main style={{
        minHeight: 'calc(100vh - 200px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '4rem',
          fontWeight: 700,
          marginBottom: '1rem',
          background: 'linear-gradient(90deg, #d4af37, #b58f2a)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '1.5rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: 'var(--text-inv, #fff)'
        }}>
          Page Not Found
        </h2>
        <p style={{
          color: 'var(--muted, #9CA3AF)',
          marginBottom: '2rem',
          maxWidth: '500px'
        }}>
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          style={{
            padding: '12px 24px',
            borderRadius: '8px',
            background: 'linear-gradient(90deg, #d4af37, #b58f2a)',
            color: '#000',
            textDecoration: 'none',
            fontWeight: 600,
            display: 'inline-block',
            transition: 'transform 0.2s'
          }}
        >
          Go Home
        </Link>
      </main>
      <Footer />
    </>
  );
}

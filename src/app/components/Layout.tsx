/* eslint-disable */
// components/Layout.tsx
import React from 'react';
import Footer from './footer/Footer';

type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <main style={{ flex: 1 }}>{children}</main>
      <Footer />
    </div>
  );
}

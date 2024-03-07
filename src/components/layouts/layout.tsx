'use client';
import { useRouter } from 'next/router';
import Footer from '@/components/layouts/footer';
import Navbar from '@/components/layouts/navbar';
import React, { useEffect, useRef, useState } from 'react';
import ProgressBarProvider from '../providers/progress-bar-provider';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const router = useRouter();

  const containerRef = useRef(null);
  const cardRef = useRef(null);

  return (
    <ProgressBarProvider>
      <div className="h-screen relative">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </div>
    </ProgressBarProvider>
  );
};

export default Layout;

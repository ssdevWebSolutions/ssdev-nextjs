'use client';

import React from "react";
import { AnimatedLogo } from "./components/shared/AnimatedLogo";

export default function Loading() {
  return (
    <div style={{
      position: 'fixed', inset: 0, display: 'grid', placeItems: 'center',
      background: 'var(--bg)', color: 'var(--text-inv)', zIndex: 9999
    }}>
      <AnimatedLogo size={84} />
    </div>
  );
}



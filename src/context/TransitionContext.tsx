"use client";

import { createContext, useContext, useState, ReactNode } from 'react';
import { useRouter } from 'next/router';

interface TransitionContextType {
  isTransitioning: boolean;
  handleTransition: (path: string) => void;
}

const TransitionContext = createContext<TransitionContextType | undefined>(undefined);

export const TransitionProvider = ({ children }: { children: ReactNode }) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const router = useRouter();

  const handleTransition = (path: string) => {
    if (router.pathname === path) return;

    setIsTransitioning(true);

    setTimeout(() => {
      router.push(path);
      
      setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
    }, 500);
  };

  return (
    <TransitionContext.Provider value={{ isTransitioning, handleTransition }}>
      {children}
    </TransitionContext.Provider>
  );
};

export const useTransitionContext = () => {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransitionContext must be used within a TransitionProvider');
  }
  return context;
};
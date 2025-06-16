"use client"

import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DockHoverContextType {
  isHoveringDock: boolean;
  setIsHoveringDock: (isHovering: boolean) => void;
}

const DockHoverContext = createContext<DockHoverContextType | undefined>(undefined);

export function DockHoverProvider({ children }: { children: ReactNode }) {
  const [isHoveringDock, setIsHoveringDock] = useState(false);

  return (
    <DockHoverContext.Provider value={{ isHoveringDock, setIsHoveringDock }}>
      {children}
    </DockHoverContext.Provider>
  );
}

export function useDockHover() {
  const context = useContext(DockHoverContext);
  if (context === undefined) {
    throw new Error('useDockHover must be used within a DockHoverProvider');
  }
  return context;
} 
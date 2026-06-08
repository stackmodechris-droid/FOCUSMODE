"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

interface MobileMenuContextType {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

const MobileMenuContext = createContext<MobileMenuContextType | undefined>(undefined);

export function MobileMenuProvider({ children }: { children: ReactNode }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <MobileMenuContext.Provider value={{ mobileOpen, setMobileOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
}

export function useMobileMenu() {
  const ctx = useContext(MobileMenuContext);
  if (!ctx) throw new Error("useMobileMenu must be used within MobileMenuProvider");
  return ctx;
}

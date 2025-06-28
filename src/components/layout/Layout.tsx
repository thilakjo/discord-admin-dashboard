import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex h-screen overflow-hidden">
      {/* This component can be used if you want to compose layout elements here instead of directly in app/layout.tsx */}
      {children}
    </div>
  );
};

export default Layout;

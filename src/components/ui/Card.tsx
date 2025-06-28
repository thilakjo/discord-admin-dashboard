// Card.tsx - A generic Card component. Not strictly used by MetricCard in the current implementation,
// as MetricCard applies its own styling directly. You can keep this file empty or implement a generic card.

import React, { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <div className={`bg-discordDark p-6 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
};

export default Card;

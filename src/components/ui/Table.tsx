// Table.tsx - A generic Table component. Not strictly used in the current implementation,
// as the table rendering for Members page is directly in src/app/members/page.tsx.
// You can keep this file empty or implement a generic table component.

import React, { ReactNode } from "react";

interface TableProps {
  children: ReactNode;
  className?: string;
}

const Table = ({ children, className }: TableProps) => {
  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="min-w-full divide-y divide-discordLightGrey">
        {children}
      </table>
    </div>
  );
};

export default Table;

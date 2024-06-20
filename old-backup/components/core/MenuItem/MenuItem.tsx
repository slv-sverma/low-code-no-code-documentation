import classNames from "classnames";
import Link from "next/link";
import React, { ReactNode } from "react";
type ChildMenuType = {
  children: ReactNode;
  className?: string;
};

export const MenuItem = ({ children, className }: ChildMenuType) => {
  return (
    <div className="flex items-center gap-4 text-black font-[500] text-sm px-5 py-2 justify-between">
      {children}
    </div>
  );
};

import classNames from "classnames";
import Link from "next/link";
import React, { ReactNode } from "react";
type MenuLinkType = {
  children: ReactNode;
  link: string;
  className?: string;
  isActive?: boolean;
};
export const MenuLink = ({
  link,
  children,
  className,
  isActive,
}: MenuLinkType) => {
  return (
    <Link
      href={link || ""}
      className={classNames(
        "flex items-center gap-4  font-[500] text-sm",
        isActive ? "text-indigo-500" : "text-gray-950 hover:text-indigo-500",
        className
      )}
    >
      {children}
    </Link>
  );
};

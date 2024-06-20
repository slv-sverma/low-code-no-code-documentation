import classNames from "classnames";
import React, { ReactNode } from "react";

type AsType = "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "div" | "p";
type HeadingType = {
  as?: AsType;
  children: ReactNode;
  className?: string;
};
export const Heading = ({ as = "h2", children, className }: HeadingType) => {
  const Tag: any = as;
  const asStyle: Record<AsType, string> = {
    h1: "text-3xl font-[700] ",
    h2: "text-2xl font-[700] ",
    h3: "text-xl font-[700] ",
    h4: "text-lg font-[700] ",
    h5: "text-md font-[700] ",
    h6: "text-xs font-[700] ",
    p: "text-sm font-[700] ",
    div: "text-sm font-[700] ",
  };
  return (
    <Tag className={classNames("py-2", asStyle[as], className)}>{children}</Tag>
  );
};

import classNames from "classnames";
import React, { ReactNode } from "react";
type ParagraphType = {
  className?: string;
  children: ReactNode;
  as?: "div" | "p" | "span";
};
export const Paragraph = ({
  children,
  className,
  as = "div",
}: ParagraphType) => {
  const Tag = as;
  return <Tag className={classNames("mb-3", className)}>{children}</Tag>;
};

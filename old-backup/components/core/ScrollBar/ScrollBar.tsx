import React, { ReactNode } from "react";
import "./style.css";
import classNames from "classnames";
type ScrollBarType = {
  className?: string;
  children: ReactNode;
  as?: string;
  path?: "always-visible" | "visible-on-overflow";
  scrollDirection?: "vertical" | "horizontal" | "both" | "hidden";
};
export const ScrollBar = ({
  className,
  children,
  as,
  path = "always-visible",
  scrollDirection = "vertical",
}: ScrollBarType) => {
  const Tag: any = as || "div";
  const direction = {
    vertical:
      path === "always-visible" ? "overflow-x-scroll" : "overflow-x-auto",
    horizontal:
      path === "always-visible" ? "overflow-x-scroll" : "overflow-x-auto",
    both: path === "always-visible" ? "overflow-scroll" : "overflow-auto",
    hidden: "overflow-hidden",
  };

  return (
    <Tag
      className={classNames(
        "scrollbar scroll-smooth",
        direction[scrollDirection],
        className
      )}
    >
      {children}
    </Tag>
  );
};

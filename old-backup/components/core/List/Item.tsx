import classNames from "classnames";
import React, { ReactNode } from "react";

type TagType = "ul" | "ol";
type ItemType = {
  children: ReactNode;
  className?: string;
  as: TagType;
};
export const Item = ({ children, className, as }: ItemType) => {
  const Tag = as;
  const TagStyle: Record<TagType, string> = {
    ul: "",
    ol: "",
  };

  return (
    <li className={classNames("flex gap-2", TagStyle[as], className)}>
      {as === "ul" ? (
        <span className="size-[6px] inline-block rounded-full bg-slate-700 mt-2.5 ml-1"></span>
      ) : (
        "1"
      )}{" "}
      {children}
    </li>
  );
};

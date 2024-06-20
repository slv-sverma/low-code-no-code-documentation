import classNames from "classnames";
import React, { ReactNode } from "react";
import { Item } from "./Item";
type TagType = "ul" | "ol";
type ListType = {
  children: ReactNode;
  className?: string;
  as: TagType;
};
export const List = ({ children, className, as }: ListType) => {
  const Tag = as;
  const TagStyle: Record<TagType, string> = {
    ul: "",
    ol: "",
  };
  return (
    <Tag className={classNames("", TagStyle[as], className)}>{children}</Tag>
  );
};

List.Item = Item;

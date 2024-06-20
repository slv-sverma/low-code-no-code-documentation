"use client";
import React, { useMemo } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export const DocNavigation = ({ menu }: any) => {
  function flattenMenu(arr: any) {
    return arr;
  }

  console.log(menu);

  const pathName = usePathname();
  const getCurrentIndex = menu.findIndex((item: any) => item.link === pathName);
  console.log(getCurrentIndex);
  const prev = menu[getCurrentIndex - 1];
  const next = menu[getCurrentIndex + 1];
  console.log(pathName);
  return (
    <div className="flex justify-between">
      <div>
        {prev?.link ? (
          <div className="">
            Prev
            <Link href={prev.link}>{prev.label}</Link>
          </div>
        ) : null}
      </div>
      <div>
        {next?.link ? (
          <div className="flex flex-col min-max">
            Next
            <Link href={next.link}>{next.label}</Link>
          </div>
        ) : null}
      </div>
    </div>
  );
};

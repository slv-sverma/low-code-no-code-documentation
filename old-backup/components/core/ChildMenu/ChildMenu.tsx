"use client";
import React, { ReactNode, useState } from "react";
import { MenuItem } from "../MenuItem";
import { IconRender } from "../IconRender";
import { MenuLink } from "..";
import { usePathname } from "next/navigation";
type ChildMenuType = {
  children: ReactNode;
  menu: any;
  parent: any;
};
export const ChildMenu = ({ children, menu, parent }: ChildMenuType) => {
  const [active, setActive] = useState(false);
  const pathName = usePathname();
  return (
    <div>
      <MenuItem>
        <MenuLink link={parent.link}>{children}</MenuLink>
        <button onClick={() => setActive((prev) => !prev)}>
          <IconRender
            name={active ? "CircleMinus" : "CirclePlus"}
            size={18}
            className="tex-slate-500"
          />
        </button>
      </MenuItem>
      {active ? (
        <div className="pl-[34px] mb-3">
          {menu.map((item: any, index: number) => {
            const isActive = pathName === item.link;
            return (
              <div key={index}>
                {item?.childMenu ? (
                  <ChildMenu menu={item.childMenu} parent={item}>
                    {item.label}
                  </ChildMenu>
                ) : (
                  <MenuItem className="py-1">
                    <MenuLink isActive={isActive} link={item.link}>
                      {item.label}
                    </MenuLink>
                  </MenuItem>
                )}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

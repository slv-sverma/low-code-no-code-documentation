"use client";
import React from "react";
import { ChildMenu } from "../ChildMenu";
import { MenuItem } from "../MenuItem";
import { IconRender } from "../IconRender";
import { MenuLink } from "../MenuLink";
import { usePathname } from "next/navigation";
export const Menu = ({ menu }: any) => {
  const pathName = usePathname();

  return (
    <div className="w-full">
      {menu.map((item: any, index: number) => {
        const isActive = pathName === item.link;

        return (
          <div key={index}>
            {item?.childMenu ? (
              <ChildMenu menu={item.childMenu} parent={item}>
                {item?.icon ? (
                  <IconRender
                    className="text-slate-600"
                    size={18}
                    name={item.icon}
                  />
                ) : null}
                {item.label}
              </ChildMenu>
            ) : (
              <MenuItem>
                <MenuLink link={item.link} isActive={isActive}>
                  {item?.icon ? (
                    <IconRender
                      className="text-slate-600"
                      size={18}
                      name={item.icon}
                    />
                  ) : null}
                  {item.label}
                </MenuLink>
              </MenuItem>
            )}
          </div>
        );
      })}
    </div>
  );
};

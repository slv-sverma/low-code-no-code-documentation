import { Code, DocNavigation, Menu, ScrollBar } from "@/components/core";
import Image from "next/image";
import Link from "next/link";
import { IconRender } from "@/components/core";
import { ReactNode } from "react";

export default function Documentation({ children }: { children: ReactNode }) {
  const menu = [
    {
      label: "Flow of Application",
      icon: "Bookmark",
      link: "/docs/application-flow",
      childMenu: [
        {
          label: "Meta",
          icon: "Bookmark",
          link: "/docs/application-flow#meta",
        },
        {
          label: "Site Menu",
          icon: "Bookmark",
          link: "/docs/application-flow#site-menu",
        },
        {
          label: "Header",
          icon: "Bookmark",
          link: "/docs/application-flow#header",
        },
        {
          label: "Auth Menu Overview",
          icon: "Bookmark",
          link: "/docs/application-flow#auth-menu",
        },
        {
          label: "Admin Menu Overview",
          icon: "Bookmark",
          link: "/docs/application-flow#admin-menu",
        },
      ],
    },
    // {
    //   label: "Forum",
    //   icon: "Search",
    //   link: "/forum",
    //   childMenu: [
    //     {
    //       label: "Design",

    //       link: "/forum/home",
    //     },
    //     {
    //       label: "Develop",

    //       link: "/forum/develop",
    //     },
    //     {
    //       label: "Tools used",

    //       link: "/forum/tools-used",
    //     },
    //   ],
    // },
    // {
    //   label: "Header",
    //   icon: "Bookmark",
    //   link: "/docs/header",
    // },
    // {
    //   label: "Footer",
    //   icon: "Bookmark",
    //   link: "/docs/footer",
    // },
    {
      label: "Auth Menu",
      icon: "Bookmark",
      link: "/docs/auth-menu",
    },
    {
      label: "Dashboard",
      icon: "Bookmark",
      link: "/docs/dashboard",
    },

    // {
    //   label: "Site Menu",
    //   icon: "Bookmark",
    //   link: "/docs/site-menu",
    // },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex w-full border-b">
        <div className="md:min-w-[250px] md:max-w-[250px] flex  bg-[#f7f7f7] px-5 py-3">
          LoCode-NoCode
        </div>
        <div className="text-gray-700 leading-7 space-y-4 grow-1 px-[10]"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <ScrollBar
          as="aside"
          className="md:min-w-[250px] md:max-w-[250px] flex  bg-[#f7f7f7] pt-4 h-[calc(100dvh-49px)]"
        >
          <Menu menu={menu} />
        </ScrollBar>
        <ScrollBar
          as="main"
          className="text-[#4b5462] leading-7 space-y-4 grow-1 px-10 py-5  overflow-y-auto h-[calc(100dvh-49px)]"
        >
          {children}
          <DocNavigation menu={menu} />
        </ScrollBar>
      </div>
    </div>
  );
}

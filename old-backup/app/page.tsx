import { Code, Menu, ScrollBar } from "@/components/core";
import Image from "next/image";
import Link from "next/link";
import { IconRender } from "@/components/core";

export default function Home() {
  const menu = [
    {
      label: "Home",
      icon: "LayoutDashboard",
      link: "/home",
    },
    {
      label: "Forum",
      icon: "Search",
      link: "/forum",
      childMenu: [
        {
          label: "Design",

          link: "/forum/home",
        },
        {
          label: "Develop",

          link: "/forum/develop",
        },
        {
          label: "Tools used",

          link: "/forum/tools-used",
        },
      ],
    },
    {
      label: "Search Topic",
      icon: "CalendarRange",
      link: "/search-topic",
    },
    {
      label: "Archive",
      icon: "Bookmark",
      link: "/archive",
    },
  ];

  return (
    <div className="w-full h-full">
      <div className="flex w-full border-b">
        <div className="md:min-w-[250px] md:max-w-[250px] flex  bg-[#fcfcfe] px-5 py-3">
          LoCode-NoCode
        </div>
        <div className="text-gray-700 leading-7 space-y-4 grow-1 px-[10]"></div>
      </div>
      <div className="flex flex-col md:flex-row">
        <ScrollBar
          as="aside"
          className="md:min-w-[250px] md:max-w-[250px] flex  bg-[#fcfcfe] pt-4 h-[calc(100dvh-49px)]"
        >
          <Menu menu={menu} />
        </ScrollBar>
        <ScrollBar
          as="main"
          className="text-gray-700 leading-7 space-y-4 grow-1 px-10 py-5  overflow-y-auto h-[calc(100dvh-49px)]"
        >
          <h2 className="text-2xl font-[700] py-2">
            Search Topic - Develop Code
          </h2>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an{" "}
            <a className="text-indigo-500">unknown</a>
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries,{" "}
            <a className="text-indigo-500">but also the leap</a>
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an{" "}
            <a className="text-indigo-500">unknown</a>
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries,
            <a className="text-indigo-500">but also the leap</a> into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
          <Code />
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an{" "}
            <a className="text-indigo-500">unknown</a>
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries,{" "}
            <a className="text-indigo-500">but also the leap</a>
            into electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem
            Ipsum.
          </div>
          <div>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry s standard dummy text
            ever since the 1500s, when an{" "}
            <a className="text-indigo-500">unknown</a>
            printer took a galley of type and scrambled it to make a type
            specimen book. It has survived not only five centuries,
            <a className="text-indigo-500">but also the leap</a> into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </div>
        </ScrollBar>
      </div>
    </div>
  );
}

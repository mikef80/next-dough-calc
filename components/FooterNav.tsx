"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface LinkType {
  text: string;
  url: string;
}

const links: LinkType[] = [
  { text: "Calculator", url: "/calculator" },
  { text: "Recipes", url: "/recipes" },
];

const FooterNav = () => {
  const pathname = usePathname();

  return (
    <footer className='absolute bottom-0 w-full flex'>
      {links.map(({ text, url }, i) => {
        return (
          <Link
            key={i}
            href={url}
            className={clsx("grow flex justify-center p-6 bg-gray-400", {
              "bg-gray-600": pathname === url,
            })}>
            {text}
          </Link>
        );
      })}
    </footer>
  );
};

export default FooterNav;

"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type HeaderProps = {};
const links = [
  { name: "ПРО НАС", href: "/" },
  {
    name: "НАШІ ПРОЄКТИ",
    href: "/projects",
  },
  { name: "ЯК ДОПОМОГТИ", href: "/help" },
  { name: "НОВИНИ", href: "/news" },
];
export default function Header({}: HeaderProps) {
  const pathname = usePathname();
  return (
    <header className="flex w-full  px-3   justify-center ">
      <nav className="flex w-3/4 justify-between ">
        {links.map((link) => (
          <Link
            className={clsx("py-4", {
              "bg-sky-100 text-blue-600": pathname === link.href,
            })}
            href={link.href}
            key={link.name}
          >
            <p>{link.name}</p>
          </Link>
        ))}
      </nav>
    </header>
  );
}

"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface INavItem {
  title: string;
  href: string;
}

const NavItems = () => {
  const pathName = usePathname();
  const handleSetActiveLink = (linkUrl: string) => {
    if (linkUrl === pathName) {
      return "bg-blue-700 ";
    }
  };
  const navItems: INavItem[] = [
    { title: "Home", href: "/" },
    { title: "Events", href: "/eventList" },
    { title: "Services", href: "/serviceList" },
    { title: "Our Team", href: "/ourTeam" },
    { title: "Blogs", href: "/blogList" },
    { title: "About", href: "/about" },
    { title: "Contact Us", href: "/contactus" },
  ];
  return (
    <div style={{ display: "flex" }}>
      {navItems.map((item) => {
        return (
          <div
            key={item.title}
            style={{ margin: "2px 16px" }}
            className={handleSetActiveLink(item.href)}
          >
            <Link href={item.href}>{item.title}</Link>
          </div>
        );
      })}
    </div>
  );
};

export default NavItems;

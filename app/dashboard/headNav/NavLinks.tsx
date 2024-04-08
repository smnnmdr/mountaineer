"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
interface INavProps {
  url: string;
  name: string;
}
const NavLink = () => {
  const pathName = usePathname();
  const links: INavProps[] = [
    { url: "/dashboard", name: "Home" },
    { url: "/dashboard/invoices", name: "Invoices" },
    {
      url: "/dashboard/customers",
      name: "Customers",
    },
  ];
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignContent: "center",
      }}
    >
      {links.map((link) => {
        return (
          <>
            <Link
              className={
                pathName === link.url
                  ? "bg-sky-100 text-blue-600"
                  : "bg-inherit"
              }
              href={link.url}
            >
              {link.name}
            </Link>
          </>
        );
      })}
    </div>
  );
};

export default NavLink;

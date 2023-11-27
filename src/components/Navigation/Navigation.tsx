"use client";

import Link from "next/link";

// TODO: Add as props
const navItems = [
  ["expenses", "/expenses"],
  ["addNewExpense", "/expenses/add"],
];

export const Navigation = () => {
  return (
    <nav>
      <ul>
        {navItems.map(([label, href]) => (
          <li key={label + href}>
            <Link
              className="text-sm text-zinc-600 hover:text-zinc-900 transition"
              href={href}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";

// TODO: Add as props
const navItems = [
  ["expenses", "/expenses"],
  ["addNewExpense", "/expenses/add"],
];

export const Navigation = () => {
  const t = useTranslations("Navigation");

  return (
    <nav>
      <ul>
        {navItems.map(([label, href]) => (
          <li key={label + href}>
            <Link
              className="text-sm text-zinc-600 hover:text-zinc-900 transition"
              href={href}
            >
              {t(label)}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

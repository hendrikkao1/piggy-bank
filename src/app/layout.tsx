import { Inter } from "next/font/google";
import Link from "next/link";
import React from "react";
import type { Metadata } from "next";
import { Navigation } from "@/components/Navigation/Navigation";
import LoggedOut from "@/components/Auth/LoggedOut";
import LoggedIn from "@/components/Auth/LoggedIn";
import LogoutButton from "@/components/Auth/LogoutButton";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Piggy bank",
  description: "Track your daily expenses",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="h-full">
      <body className={`${inter.className} h-full bg-white antialiased`}>
        <div className="h-full ml-72">
          <header className="fixed flex inset-0">
            <div className="w-72 px-6 overflow-y-auto border-r border-zinc-900/20">
              <div className="flex items-center h-14 mb-6">
                <Link className="font-bold flex items-center gap-1.5" href="/">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-[#36b49f]"
                    viewBox="0 0 16 16"
                  >
                    <path d="M7.964 1.527c-2.977 0-5.571 1.704-6.32 4.125h-.55A1 1 0 0 0 .11 6.824l.254 1.46a1.5 1.5 0 0 0 1.478 1.243h.263c.3.513.688.978 1.145 1.382l-.729 2.477a.5.5 0 0 0 .48.641h2a.5.5 0 0 0 .471-.332l.482-1.351c.635.173 1.31.267 2.011.267.707 0 1.388-.095 2.028-.272l.543 1.372a.5.5 0 0 0 .465.316h2a.5.5 0 0 0 .478-.645l-.761-2.506C13.81 9.895 14.5 8.559 14.5 7.069c0-.145-.007-.29-.02-.431.261-.11.508-.266.705-.444.315.306.815.306.815-.417 0 .223-.5.223-.461-.026a.95.95 0 0 0 .09-.255.7.7 0 0 0-.202-.645.58.58 0 0 0-.707-.098.735.735 0 0 0-.375.562c-.024.243.082.48.32.654a2.112 2.112 0 0 1-.259.153c-.534-2.664-3.284-4.595-6.442-4.595Zm7.173 3.876a.565.565 0 0 1-.098.21.704.704 0 0 1-.044-.025c-.146-.09-.157-.175-.152-.223a.236.236 0 0 1 .117-.173c.049-.027.08-.021.113.012a.202.202 0 0 1 .064.199Zm-8.999-.65a.5.5 0 1 1-.276-.96A7.613 7.613 0 0 1 7.964 3.5c.763 0 1.497.11 2.18.315a.5.5 0 1 1-.287.958A6.602 6.602 0 0 0 7.964 4.5c-.64 0-1.255.09-1.826.254ZM5 6.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  <span>Piggy bank</span>
                </Link>
              </div>
              <Navigation>
                <ul>
                  <LoggedIn>
                    <li>
                      <Link href="/expenses">Expenses</Link>
                    </li>
                    <li>
                      <Link href="/expenses/add">Add new expense</Link>
                    </li>
                    <li>
                      <LogoutButton>Logout</LogoutButton>
                    </li>
                  </LoggedIn>
                  <LoggedOut>
                    <li>
                      <Link href="/login">Login</Link>
                    </li>
                  </LoggedOut>
                </ul>
              </Navigation>
            </div>
          </header>
          <main className="relative h-full">{children}</main>
        </div>
      </body>
    </html>
  );
}

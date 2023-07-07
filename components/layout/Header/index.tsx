import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="fixed w-full bg-gray-50 dark:bg-gray-900 top-0 left-0 z-10">
      <div className="flex justify-between items-center px-4 border-b border-black h-16">
        <Link href="/">
          <div className="text-black font-bold no-underline hover:underline">
            Peredelano Prices
          </div>
        </Link>
      </div>
    </header>
  );
};

export default Header;

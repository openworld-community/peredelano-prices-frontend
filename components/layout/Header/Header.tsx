import React from "react";
import Image from "next/image";
import Link from "next/link";

const NavBar = () => {
  return (
    <header className="h-[100px] navbar bg-base-300 border-b border-solid border-base-400">
      <div className="navbar-start ml-8">
        <Link href="/">
          <Image
            src="/images/logo.png"
            width={103}
            height={42}
            alt="Peredelano Prices Logo"
          />
        </Link>
      </div>
      <div className="navbar-end">
        <ul className="menu menu-horizontal bg-base-200 rounded-box mr-4"></ul>
      </div>
    </header>
  );
};

export default NavBar;

import React from "react";
import Image from "next/image";
import Link from "next/link";

import GlobeIcon from "/public/icons/globe.svg";
import ProfileIcon from "/public/icons/profile.svg";
import FavoritesIcon from "/public/icons/favorites.svg";
import LocationIcon from "/public/icons/location.svg";

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
        <ul className="menu menu-horizontal bg-base-200 mr-4 bg-transparent">
          <li>
            <a className="p-2">
              <LocationIcon />
            </a>
          </li>
          <li>
            <a className="p-2">
              <FavoritesIcon />
            </a>
          </li>
          <li>
            <a className="p-2">
              <ProfileIcon />
            </a>
          </li>
          <li>
            <a className="p-2">
              <GlobeIcon />
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;

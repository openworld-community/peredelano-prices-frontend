import React from "react";

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay"></label>
        <ul className="menu p-4">
          <li>First</li>
          <li>Second</li>
        </ul>
      </div>
      <div className="drawer-content">{children}</div>
    </div>
  );
};

export default HomeLayout;

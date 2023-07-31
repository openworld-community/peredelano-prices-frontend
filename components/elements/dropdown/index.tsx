import React, { HTMLAttributes } from "react";

import "./index.scss";

interface DropdownProps extends HTMLAttributes<HTMLDivElement> {
  triggerElement: React.ReactNode;
}

const index = ({ children, triggerElement }: DropdownProps) => {
  return (
    <div className="dropdown">
      <label tabIndex={0} className="btn p-0">
        {triggerElement}
      </label>
      {children}
    </div>
  );
};

export default index;

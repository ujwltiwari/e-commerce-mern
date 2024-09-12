import { headerItems, headerIcons } from "@/constants/header.js";
import React, { createElement } from "react";
import { Separator } from "@/components/ui/separator.jsx";
const Header = () => {
  return (
    <>
      <header className="flex justify-between">
        <div className="scroll-m-20 text-[25px] font-semibold tracking-tight">
          3legant
        </div>
        <div className="flex gap-12 items-center">
          {headerItems.map((item, idx) => (
            <p
              key={idx}
              className="leading-7 font-medium text-[14px] cursor-pointer"
            >
              {item.title}
            </p>
          ))}
        </div>
        <div className="flex gap-6 items-center cursor-pointer">
          {headerIcons.map((item, idx) => (
            <React.Fragment key={idx}>
              {createElement(item.icon, {
                width: 26,
                height: 26,
                size: 26,
              })}
            </React.Fragment>
          ))}
        </div>
      </header>
      <Separator className="my-4" />
    </>
  );
};

export default Header;

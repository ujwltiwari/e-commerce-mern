import React from "react";

// import component 👇
import Drawer from "react-modern-drawer";

//import styles 👇
import "react-modern-drawer/dist/index.css";
import { addProductSidebarMenu } from "@/constants/addProduct.js";
import { Button } from "@/components/ui/button.jsx";

const Sidebar = ({ className }) => {
  const [selectedIdx, setSelectedIdx] = React.useState();
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      {/*<button onClick={toggleDrawer}>Show</button>*/}
      {/*<Drawer*/}
      {/*  open={isOpen}*/}
      {/*  onClose={toggleDrawer}*/}
      {/*  direction="right"*/}
      {/*  className="bla bla bla"*/}
      {/*>*/}
      {/*  <div>Hello World</div>*/}
      {/*</Drawer>*/}
      <div className={`px-2 ${className ?? ""} shadow-lg h-[100vh]`}>
        <div className="flex flex-col gap-4">
          {addProductSidebarMenu.map((x, idx) => (
            <Button
              variant={selectedIdx === idx ? "default" : "ghost"}
              key={idx}
              onClick={() => setSelectedIdx(idx)}
              className="h-[50px]"
            >
              {x.title}
            </Button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;

import { React, useState } from "react";
import { SidebarData } from "./SidebarData";
import ImportProfile from "./ImportProfile";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [isHovering, setIsHovering] = useState(false);

  const [isModalOpen, setModalIsOpen] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const openModal = () => {
    setIsHovering(false);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <div
        className="Sidebar titlebar_none h-screen w-20 bg-Sidebar_dbg transition-[width] duration-300 relative shadow-md shadow-gray-900 hover:w-56"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        <ImportProfile modalIsOpen={isModalOpen} closeModal={closeModal} />
        <ul className="SidebarList pt-2">
          {SidebarData.map((val, key) => {
            return (
              <li
                key={key}
                className="row text-white h-full cursor-pointer hover:bg-slate-600 transition-colors duration-100"
              >
                <Link
                  className="sidebarlist pt-4 pb-4 ml-2 mr-2 transition-colors duration-100 flex rounded-md"
                  to={val.link}
                >
                  <div
                    id="icon"
                    className="stroke-white ml-5 justify-center items-center"
                  >
                    {val.icon}
                  </div>
                  <div
                    id="title"
                    className={
                      isHovering
                        ? isModalOpen
                          ? "whitespace-nowrap hidden"
                          : "whitespace-nowrap ml-5 delay-100"
                        : "hidden"
                    }
                  >
                    {val.title}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}

import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
import useConversation from "../../zustand/useConversation";
import { useState, useEffect } from "react";
import "./Sidebar.css"

const Sidebar = () => {
  const { selectedConversation } = useConversation();
  const [isMobile, setIsMobile] = useState(window.innerWidth<= 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 640);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div
      className={` sm:w-[320px] ${isMobile ? "" : "border-r"}
 border-slate-500 p-4 flex flex-col`}
      style={{
        display: selectedConversation && isMobile ? "none" : "",
        maxWidth: "90%",
      }}
    >
      <SearchInput />
      <div className="divider px-3"></div>
      <Conversations />
      <LogoutButton />
    </div>
  );
};
export default Sidebar;

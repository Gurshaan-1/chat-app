import MessageInput from "./MessageInput";
import Messages from "./Messages";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/authContext";
import { useEffect , useState} from "react";
import { MdArrowBackIos } from "react-icons/md";
// import "./messages.css"
const MessageContainer = () => {
 
const { selectedConversation, setSelectedConversation } = useConversation();
 const [isMobile, setIsMobile] = useState(window.innerWidth <= 640);

 useEffect(() => {
   const handleResize = () => setIsMobile(window.innerWidth <= 640);
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
 }, []);

const toggleSelectedConversation = () => {
  setSelectedConversation(null);
};
useEffect(() => {
  // cleanup function (unmounts)
  return () => setSelectedConversation(null);
}, [setSelectedConversation]);
	return (
    <div
      className="md:min-w-[450px] flex flex-col"
      style={{
        display: !selectedConversation&&isMobile ? "none" : "",
        maxWidth: "100%",
      }}
    >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          {/* Header */}
          <div className="bg-slate-700 px-4 py-2 mb-2 flex items-center">
            <span
              className="cursor-pointer"
              onClick={toggleSelectedConversation}
            >
              {" "}
              <MdArrowBackIos />{" "}
            </span>
            <span className="label-text">To:</span>{" "}
            <span className="text-white font-bold">
              {selectedConversation.fullName}
            </span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

const NoChatSelected = () => {
 const { authUser } = useAuthContext();
 return (
   <div className="flex items-center justify-center w-full h-full">
     <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
       <p>Welcome 👋 {authUser.fullName} ❄</p>
       <p>Select a chat to start messaging</p>
       <TiMessages className="text-3xl md:text-6xl text-center" />
     </div>
   </div>
 );
};
export default MessageContainer;

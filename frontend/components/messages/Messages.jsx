import Message from "./Message";
const Messages = () => {
  return (
    <div
      className="px-4 flex-1 overflow-auto "
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#121212 #555",
      }}
    >
      
     <Message></Message>
     <Message></Message>
     <Message></Message>
     <Message></Message>
     <Message></Message>
     <Message></Message>
     <Message></Message>
     <Message></Message>
     <Message></Message>
     <Message></Message>
     <Message></Message>
    </div>
  );
};

export default Messages;

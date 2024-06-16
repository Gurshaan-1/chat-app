import Conversation from "./Conversation";
import useGetConversations from "../../hooks/useGetConversations";
import {getRandomEmoji} from "../../utils/emojis";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div
      className="py-2 flex flex-col overflow-auto"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#121212 #555",
      }}
    >
      {conversations.map((conversation, idx) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          emoji={getRandomEmoji()}
          lastidx={idx === conversations.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner mx-auto"></span>
      ) : null}
    </div>
  );
};
export default Conversations;

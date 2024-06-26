import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";

export default function Message({ messages }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const fromeMe = messages.senderId === authUser._id;
  const chatClassName = fromeMe ? "chat-end" : "chat-start";
  const profilePic = fromeMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;
  const bubbleBgColor = fromeMe ? "bg-blue-500" : "";
  const shakeClass = messages.shouldShake ? "shake" : "";

  return (
    <div className={`chat ${chatClassName}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={profilePic} />
        </div>
      </div>
      <div
        className={`chat-bubble text-white ${bubbleBgColor} ${shakeClass} pb-2`}
      >
        {messages.message}
      </div>
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">
        {extractTime(messages.createdAt)}
      </div>
    </div>
  );
}

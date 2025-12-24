import React from "react";

const MessageItem = ({ message, isMine, avatarSrc }) => {
  return (
    <div className={`chat ${isMine ? "chat-end" : "chat-start"}`}>
      {!isMine && (
        <div className="chat-image avatar">
          <div className="size-5 rounded-full border">
            <img src={avatarSrc} alt="profile pic" />
          </div>
        </div>
      )}

      <div className="chat-bubble flex flex-col">
        {message.image && (
          <img
            src={message.image}
            alt="Attachment"
            className="sm:max-w-[200px] rounded-md mb-2"
          />
        )}

        {message.text && (
          <p className="break-words whitespace-pre-wrap max-w-full">
            {message.text}
          </p>
        )}
      </div>
    </div>
  );
};

export default React.memo(MessageItem);

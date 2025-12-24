import React, { forwardRef } from "react";
import { MessageCircle } from "lucide-react";
import MessageItem from "./MessageItem ";
import { formatMessageTime, isSameGroup } from "../../lib/utils";

const MessagesList = forwardRef(
  ({ messages = [], authUser, selectedUser }, ref) => {
    if (!messages || messages.length === 0) {
      return (
        <div ref={ref} className="flex-1 overflow-y-auto p-4">
          <div className="h-full flex flex-col items-center justify-center text-center text-zinc-400 select-none">
            <div className="mb-3">
              <MessageCircle className="w-12 h-12 opacity-40" />
            </div>
            <p className="text-sm">No messages here yet</p>
            <p className="text-xs opacity-70">
              Say hello and start chatting 👋
            </p>
          </div>
        </div>
      );
    }

    return (
      <div ref={ref} className="flex-1 overflow-y-auto p-4">
        <div className="space-y-2">
          {messages.map((message, index) => {
            const prevMessage = messages[index - 1];
            const isMine = message.senderId === authUser._id;
            const isGrouped = isSameGroup(message, prevMessage);
            const avatarSrc = isMine
              ? authUser.profilePic || "/avatar.png"
              : selectedUser?.profilePic || "/avatar.png";

            return (
              <React.Fragment key={message._id}>
                {!isGrouped && (
                  <div className="flex justify-center my-4">
                    <span className="px-3 py-1 rounded-full bg-base-200 text-xs">
                      {formatMessageTime(message.createdAt)}
                    </span>
                  </div>
                )}

                <MessageItem
                  message={message}
                  isMine={isMine}
                  avatarSrc={avatarSrc}
                />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    );
  }
);
MessagesList.displayName = "MessagesList";

export default React.memo(MessagesList);

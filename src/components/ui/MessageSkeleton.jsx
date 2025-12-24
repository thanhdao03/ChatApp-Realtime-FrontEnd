const MessageSkeleton = () => {
  const skeletonMessages = Array.from({ length: 7 });

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="space-y-2">
        {skeletonMessages.map((_, idx) => {
          const isMine = idx % 2 !== 0;

          return (
            <div
              key={idx}
              className={`chat ${isMine ? "chat-end" : "chat-start"}`}
            >
              {!isMine && (
                <div className="chat-image avatar">
                  <div className="size-5 rounded-full">
                    <div className="skeleton w-full h-full rounded-full" />
                  </div>
                </div>
              )}
              <div className={`chat-bubble bg-transparent p-0`}>
                <div className="skeleton h-10 w-[180px] rounded-2xl" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MessageSkeleton;

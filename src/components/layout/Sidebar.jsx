import { useEffect, useState } from "react";
import { useChatStore } from "../../store/useChatStore";
import { useAuthStore } from "../../store/useAuthStore";
import SidebarSkeleton from "../ui/SidebarSkeleton";
import { Users } from "lucide-react";
import { useUi } from "../../context/UiContext";

const Sidebar = () => {
  const {
    getUsers,
    users = [],
    selectedUser,
    setSelectedUser,
    isUsersLoading,
  } = useChatStore();
  
  const { onlineUsers = [] } = useAuthStore();
  const { isSidebarOpen, closeSidebar } = useUi();

  const [showOnlineOnly, setShowOnlineOnly] = useState(false);

  useEffect(() => {
    getUsers();
  }, [getUsers]);

  const filteredUsers = showOnlineOnly
    ? users.filter((u) => onlineUsers.includes(u._id))
    : users;

  if (isUsersLoading) return <SidebarSkeleton />;

  return (
    <>
      {/* Overlay: only visible on small screens when sidebar open */}
      {isSidebarOpen && (
        <button
          aria-label="Close sidebar"
          onClick={closeSidebar}
          className="fixed inset-0 z-20 md:hidden bg-black/30"
        />
      )}

      {/* Sidebar: slide in/out on mobile, static on md+ */}
      <aside
        aria-label="Contacts"
        className={`
          fixed left-0 z-30 h-screen w-72
          bg-base-100 border-r border-base-300
          transform transition-transform duration-300 ease-[cubic-bezier(.15,.72,.08,.99)]
          md:static md:translate-x-0
          ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >
        <div className="border-b border-base-300 w-full p-5">
          <div className="flex items-center gap-2">
            <Users className="size-6" />
            <span className="font-medium ">Contacts</span>
          </div>
          {/* TODO: Online filter toggle */}
          <div className="mt-3 flex items-center gap-2">
            <label className="cursor-pointer flex items-center gap-2">
              <input
                type="checkbox"
                checked={showOnlineOnly}
                onChange={(e) => setShowOnlineOnly(e.target.checked)}
                className="checkbox checkbox-sm"
              />
              <span className="text-sm">Show online only</span>
            </label>
            <span className="text-xs text-zinc-500">
              ({onlineUsers.length - 1} online)
            </span>
          </div>
        </div>

        {/* List */}
        <div className="overflow-y-auto h-[calc(100vh-12rem)] p-2">
          {filteredUsers.length === 0 ? (
            <div className="text-center text-zinc-500 py-6">No users found</div>
          ) : (
            filteredUsers.map((user) => {
              const isOnline = onlineUsers.includes(user._id);
              const isActive = selectedUser?._id === user._id;

              return (
                <button
                  key={user._id}
                  onClick={() => {
                    setSelectedUser(user);
                    // close on mobile for better UX
                    closeSidebar();
                  }}
                  className={`
                    w-full px-3 py-2 flex items-center gap-3 h-[64px]
                    hover:bg-base-200 transition-colors text-left
                    ${isActive ? "bg-base-200 ring-1 ring-base-300" : ""}
                  `}
                >
                  {/* Avatar: fixed size, won't shrink */}
                  <div className="relative flex-shrink-0">
                    <div className="w-12 h-12 rounded-full overflow-hidden border">
                      <img
                        src={user.profilePic || "/avatar.png"}
                        alt={user.fullName || user.name}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {isOnline && (
                      <span
                        className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full ring-2 ring-zinc-900"
                        aria-hidden
                      />
                    )}
                  </div>

                  {/* Info: truncate, won't push avatar */}
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{user.fullName}</div>
                    <div className="text-sm text-zinc-400">
                      {isOnline ? "Online" : "Offline"}
                    </div>
                  </div>
                </button>
              );
            })
          )}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

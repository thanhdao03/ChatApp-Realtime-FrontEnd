import { Link, useLocation } from "react-router-dom";
import { ArrowLeft, LogOut, MessageSquare, Settings, User } from "lucide-react";
import { useAuthStore } from "../../store/useAuthStore";
import { useUi } from "../../context/UiContext";
import IconButton from "../ui/IconButton";

const Navbar = () => {
  const { logout, authUser } = useAuthStore();
  const { openSidebar, closeSidebar, isSidebarOpen } = useUi();
  const location = useLocation();

  const hideMenu = ["/settings", "/profile"].includes(location.pathname);

  const handleToggleSidebar = () => {
    if (isSidebarOpen) {
      closeSidebar();
    } else {
      openSidebar();
    }
  };
  return (
    <header
      className="bg-base-100 border-b border-base-300 fixed w-full top-0 z-40 
    backdrop-blur-lg bg-base-100/80"
    >
      <div className="mx-auto px-4 h-16">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center gap-2">
            {!hideMenu && (
              <IconButton addClass="md:hidden" onClick={handleToggleSidebar}>
                {isSidebarOpen ? (
                  <IconButton.IconClose />
                ) : (
                  <IconButton.IconOpen />
                )}
              </IconButton>
            )}
            <Link
              to="/"
              className="flex items-center gap-2.5 hover:opacity-80 transition-all"
            >
              {!hideMenu ? (
                <>
                  <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MessageSquare className="w-5 h-5 text-primary" />
                  </div>
                  <h1 className="text-lg font-bold">Chatty</h1>
                </>
              ) : (
                <>
                  <div className="size-9 rounded-lg bg-primary/10 flex items-center justify-center">
                    <ArrowLeft className="w-5 h-5 text-primary" />
                  </div>
                  <h1 className="text-lg font-bold">Back</h1>
                </>
              )}
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <Link
              to={"/settings"}
              className={`btn btn-sm gap-2 transition-colors`}
            >
              <Settings className="size-5" />
              <span className="hidden sm:inline">Settings</span>
            </Link>

            {authUser && (
              <>
                <Link to={"/profile"} className={`btn btn-sm gap-2`}>
                  <User className="size-5" />
                  <span className="hidden sm:inline">Profile</span>
                </Link>

                <button className="flex gap-2 items-center" onClick={logout}>
                  <LogOut className="size-5" />
                  <span className="hidden sm:inline">Logout</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};
export default Navbar;

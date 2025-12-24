import { SidebarClose, SidebarOpen } from "lucide-react";

function IconButton({ children, onClick, addClass = "" }) {
  return (
    <button
      onClick={onClick}
      className={`${addClass} relative z-50 flex flex-shrink-0 items-center justify-center btn btn-sm`}
    >
      {children}
    </button>
  );
}

function IconOpen() {
  return <SidebarOpen className="size-5" aria-label="IconOpen" />;
}

function IconClose() {
  return <SidebarClose className="size-5" aria-label="IconClose" />;
}

IconButton.IconOpen = IconOpen;
IconButton.IconClose = IconClose;

export default IconButton;
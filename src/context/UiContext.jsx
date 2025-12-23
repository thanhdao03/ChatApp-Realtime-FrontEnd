import { createContext, useContext, useReducer, useCallback } from "react";

const UiContext = createContext(null);

const initialState = {
  isSidebarOpen: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "OPEN_SIDEBAR":
      return { ...state, isSidebarOpen: true };

    case "CLOSE_SIDEBAR":
      return { ...state, isSidebarOpen: false };

    default:
      return state;
  }
}

function UiProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  /* ================= Sidebar ================= */
  const openSidebar = useCallback(() => {
    dispatch({ type: "OPEN_SIDEBAR" });
  }, []);

  const closeSidebar = useCallback(() => {
    dispatch({ type: "CLOSE_SIDEBAR" });
  }, []);


  const value = {
    // state
    isSidebarOpen: state.isSidebarOpen,
    // actions
    openSidebar,
    closeSidebar,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

function useUi() {
  const context = useContext(UiContext);
  if (!context) {
    throw new Error("useUi must be used within UiProvider");
  }
  return context;
}

export { UiProvider, useUi };

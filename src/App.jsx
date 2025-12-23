import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import LoginPage from "./pages/LoginPage";
import SettingsPage from "./pages/SettingsPage";
import ProfilePage from "./pages/ProfilePage";

import { Routes, Route } from "react-router-dom";
import { useThemeStore } from "./store/useThemeStore";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./components/routes/ProtectedRoute";
import AuthInitializer from "./components/routes/AllRoutesWrapper";
import AppLayout from "./components/layout/AppLayout";
import NotFound from "./components/ui/NotFound";
import PublicRoute from "./components/routes/PublicRoute";
import { UiProvider } from "./context/UiContext";

const App = () => {
  const { theme } = useThemeStore();

  return (
    <UiProvider>
      <div data-theme={theme}>
        <AuthInitializer>
          <Routes>
            <Route
              element={
                <ProtectedRoute>
                  <AppLayout />
                </ProtectedRoute>
              }
            >
              <Route path="/" element={<HomePage />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Route>

            <Route
              path="/signup"
              element={
                <PublicRoute>
                  <SignUpPage />
                </PublicRoute>
              }
            />

            <Route
              path="/login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Toaster
            position="bottom-right"
            toastOptions={{
              error: {
                duration: 1000,
              },
              style: {
                maxWidth: "500px",
              },
            }}
          />
        </AuthInitializer>
      </div>
    </UiProvider>
  );
};

export default App;

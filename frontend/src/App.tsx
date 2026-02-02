import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { AuthProvider, useAuth } from "./contexts/authContexts";
import { Login } from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import { OAuthCallback } from "./pages/Login/OAuthCallback";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  return isAuthenticated ? <>{children}</> : <Navigate to={"/login"} />;
};

const HomePage = () => {
  const { logout } = useAuth();
  return (
    <div>
      <h1>여행 계획</h1>
      <button onClick={logout}>로그아웃</button>
    </div>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="/oauth/callback" element={<OAuthCallback />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <HomePage />
              </ProtectedRoute>
            }
          />{" "}
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

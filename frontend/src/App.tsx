import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./contexts/authContexts";
import { Login } from "./pages/Login/LoginPage";
import RegisterPage from "./pages/Login/RegisterPage";
import { OAuthCallback } from "./pages/Login/OAuthCallback";
import { Layout } from "./components/Layout";
import { GlobalStyle } from "./styles/GlobalStyle";
import { theme } from "./styles/theme";
import TripPage from "./pages/Trip/TripPage";

export const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/oauth/callback" element={<OAuthCallback />} />
            <Route
              element={
                // <ProtectedRoute>
                <Layout />
                // </ProtectedRoute>
              }
            >
              <Route path="/" element={<TripPage />} />
            </Route>
          </Routes>
        </AuthProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import Exercises from "./pages/Exercises";
import Friends from "./pages/Friends";
import Chat from "./pages/Chat";
import FindUsers from "./pages/FindUsers";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Requests from "./pages/Requests";
import Settings from "./pages/Settings";
import PageNotFound from "./pages/PageNotFound";
import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "./ui/ProtectedRoute";
import ProtectAuth from "./ui/ProtectAuth";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: 0 },
  },
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route
            element={
              <ProtectedRoute>
                <AppLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/exercises" element={<Exercises />} />
            <Route path="/friends" element={<Friends />} />
            <Route path="/chat" element={<Chat />} />
            <Route path="/findUsers" element={<FindUsers />} />
            <Route path="/account" element={<Account />} />
            <Route path="/requests" element={<Requests />} />
            <Route path="/settings" element={<Settings />} />
          </Route>

          <Route
            path="/login"
            element={
              <ProtectAuth>
                <Login />
              </ProtectAuth>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

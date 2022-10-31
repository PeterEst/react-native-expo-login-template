import { AuthProvider } from "./src/context/AuthContext.js";
import AppNav from "./src/navigation/AppNav.js";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}
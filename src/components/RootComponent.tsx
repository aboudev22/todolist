import { useAuth } from "../hooks/useAuth";
import App from "../App";
import Home from "../pages/Home";

export default function RootComponent() {
  const { isConnected } = useAuth();
  return isConnected ? <Home /> : <App />;
}

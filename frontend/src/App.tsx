import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { getHealthCheck } from "./services/api";

function App() {
  const [healthStatus, setHealthStatus] = useState<string>("checking...");
  useEffect(() => {
    const checkHealth = async () => {
      try {
        const data = await getHealthCheck();
        console.log("Health Check:", data);
        setHealthStatus(data.status);
      } catch (err) {
        console.error("Health check failed:", err);
        setHealthStatus("unhealthy");
      }
    };
    checkHealth();
  }, []);

  return (
    <div>
      <div>
        <h1>Travel Planner</h1>
        <p>Backend Status : {healthStatus}</p>
      </div>
    </div>
  );
}

export default App;

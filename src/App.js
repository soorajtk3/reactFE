import "./App.css";
import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Register from "./Components/Register";
function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/auth/google/callback" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

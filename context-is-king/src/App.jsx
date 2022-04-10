import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Signup1 } from "./components/Signup1";
import { Signup2 } from "./components/Signup2";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/one" element={<Signup1 />} />
        <Route path="/two" element={<Signup2 />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </div>
  );
}

export default App;

import { useState } from "react";
import Dropdown from "./components/Dropdown";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <Dropdown />;
}

export default App;

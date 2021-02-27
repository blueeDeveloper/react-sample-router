import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./components/Routes";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div className="body">
      <Router>
        <Navbar />
        <Routes />
      </Router>
    </div>
  );
}

export default App;

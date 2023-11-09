import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Homepage from "./pages/Account/Homepage";
import { Admin } from "./pages/Admin/Admin";
import "./styles/sb-admin-2.min.css";

function App() {
  return (
    <Router>
      <div className="App" id="wrapper">
        {/* <Homepage /> */}
        <Admin />
      </div>
    </Router>
  );
}

export default App;

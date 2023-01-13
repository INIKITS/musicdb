import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Header, Footer} from "./components";
import "./index.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
      </div>
      <Footer className="App-footer" />
    </Router>
  );
}

export default App;

import "./index.css";
import Nav from "./componants/Nav";
import Footer from "./componants/Footer";
import Home from "./pages/Home"
import Books from "./pages/Books"
import { books } from "./data";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route path="/" exact component={Home} />
        <Route path="/books" render={() => <Books books={books}/>}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

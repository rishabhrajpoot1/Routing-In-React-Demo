import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Articles from "./components/Articles";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import "./stylesheet/style.css";
import Sidebar from "./components/Sidebar";
import Help from "./components/Help";
import Article from "./components/Article";
import FourOhFour from "./components/FourOhFour";

ReactDOM.render(
  <Router>
    <div className="container flex">
      <Sidebar />
      <main>
        
          <Route path="/articles" exact>
            <Articles />
          </Route>
          <Route path="/" exact>
            <App />
          </Route>
          <Route path="/help">
            <Help />
          </Route>
          <Route path="/articles/:slug">
            <Article />
          </Route>
          <Route path="/NotFound">
            <FourOhFour />
          </Route>
      </main>
    </div>
  </Router>,
  document.getElementById("root")
);
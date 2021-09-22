import React from "react";
import Home from "./screens/home/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./common/Login";
//import BookShow from "../screens/bookshow/BookShow";
//import Confirmation from "../screens/confirmation/Confirmation";

const Controller = () => {
  const baseUrl = "/api/v1/";

  return (
    <Router>
      <div className="main-container">
        <Route
          exact
          path="/"
          render={(props) => <Home {...props} baseUrl={baseUrl} />}
        />
        <Route
          exact
          path="/login"
          render={(props) => <Login {...props} baseUrl={baseUrl} />}
        />
      </div>
    </Router>
  );
};

export default Controller;
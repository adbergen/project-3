import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Dashboard from "./pages/Dashboard";
import Detail from "./pages/Detail";

import NoMatch from "./pages/NoMatch";
import NavBar from "./components/NavBar";
import Loading from "./components/Loading";
import Home from "./pages/Home";
import ExternalApi from "./views/external-api";

const App = () => {
  const { isLoading, isAuthenticated, user } = useAuth0();
  console.log(isAuthenticated, user, useAuth0());
  if (isLoading) {
    return <Loading />;
  }

  return (
    <Router>
      <div>
        <NavBar />
        <Switch>
          <Route exact path={["/", "/home"]}>
            <Home />
          </Route>
          {isAuthenticated && (
            <Route exact path={["/dashboard", "/games"]}>
              <Dashboard />
            </Route>
          )}
          {isAuthenticated && (
            <Route exact path="/dashboard/:id">
              <Detail />
            </Route>
          )}
          <Route exact path={"/external-api"}>
            <ExternalApi />
          </Route>
          <Route component={Home} />
          <Route>
            <NoMatch />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;

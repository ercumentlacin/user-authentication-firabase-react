import SignUp from "./SignUp";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import Login from "./Login";

function App() {
  return (
    <div className="container">
      <div className="row py-5">
        <Router>
          <AuthProvider>
            <Switch>
              {/* Dashboard page */}
              <Route exact path="/">
                <div className="col-sm-6 offset-sm-3 text-center">
                  <Dashboard />
                </div>
              </Route>
              {/* Register and Login page */}
              <Route path="/login">
                <div className="col-sm-6">
                  <Login />
                </div>
                <div className="col-sm-6">
                  <SignUp />
                </div>
              </Route>
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;

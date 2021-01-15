import SignUp from "./SignUp";
import { AuthProvider } from "../context/AuthContext";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Dashboard from "./Dashboard";
import UpdateProfile from "./UpdateProfile";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";
import PrivateRoute from "./PrivateRoute";

function App() {
  return (
    <div className="container">
      <div className="row py-5">
        <Router>
          <AuthProvider>
            <Switch>
              {/* Dashboard page */}
              <PrivateRoute exact path="/" component={Dashboard} />
              {/* update profile page */}
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              {/* Register and Login page */}
              <Route path="/login">
                <div className="col-sm-6">
                  <Login />
                </div>
                <div className="col-sm-6">
                  <SignUp />
                </div>
              </Route>
              <Route to="/forgot-password" component={ForgotPassword} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </div>
  );
}

export default App;

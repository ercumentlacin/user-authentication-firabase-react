import SignUp from "./SignUp";
import { AuthProvider } from "../context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <div className="container">
        <h1>Hello World!</h1>
        <div className="row">
          <div className="col-sm-6">
            <SignUp />
          </div>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;

import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory, Link } from "react-router-dom";

const ForgotPassword = () => {
  const userMail = useRef();
  const login = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      // await login(userMail.current.value, userPassword.current.value);
      history.push("/");
    } catch {
      setError("Giriş yaparken bir hata meydana geldi");
    }
    setLoading(false);
  };
  return (
    <div className="col-sm-6 offset-sm-3">
      <form onSubmit={handleSubmit}>
        <h3 className="mb-3 text-center">Şifreyi Sıfırla</h3>
        {error.length > 5 && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <hr />
        {/* User Mail */}
        <div className="mb-3">
          <label htmlFor="userMail" className="form-label d-none"></label>
          <input
            ref={userMail}
            placeholder="E-mail adresiniz"
            required
            type="email"
            className="form-control"
            aria-describedby="userMail"
          />
        </div>

        {/* Password Reset */}
        <div className="d-grid mb-3">
          <button disabled={loading} type="submit" className="btn btn-danger">
            Şifreyi Sıfırla
          </button>
        </div>
        {/* Go Login Page */}
        <div className="d-grid">
          <Link to="/login" className="btn btn-primary">
            Girş Yap
          </Link>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;

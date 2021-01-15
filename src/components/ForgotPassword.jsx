import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const userMail = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(userMail.current.value);
      setMessage("Mailinizi kontrol edeniniz");
    } catch {
      setError("Şifre sıfırlanırken bir hata meydana geldi");
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
        {message && (
          <div className="alert alert-success" role="alert">
            {message}
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

import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const Login = () => {
  const userMail = useRef();
  const userPassword = useRef();
  const login = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setError("");
      setLoading(true);
      await login(userMail.current.value, userPassword.current.value);
      history.push("/");
    } catch {
      setError("Giriş yaparken bir hata meydana geldi");
    }
    setLoading(false);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="mb-3 text-center">Üye Girişi</h3>
        {error.length > 5 && (
          <div class="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <hr />
        {/* User Mail */}
        <div className="mb-3">
          <label for="userMail" className="form-label d-none"></label>
          <input
            ref={userMail}
            placeholder="E-mail adresiniz"
            required
            type="email"
            className="form-control"
            aria-describedby="userMail"
          />
        </div>

        {/* User Password */}
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label d-none"
          ></label>
          <input
            ref={userPassword}
            placeholder="Şifreniz"
            required
            type="password"
            className="form-control"
          />
        </div>

        {/* Submit */}
        <div className="d-grid">
          <button disabled={loading} type="submit" className="btn btn-primary">
            Giriş Yap
          </button>
        </div>
      </form>
    </>
  );
};

export default Login;

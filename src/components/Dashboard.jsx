import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Dashboard = () => {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  const handleLogout = async () => {
    setError("");

    try {
      await logout();
      history.push("/login");
    } catch {
      setError("Çıkış yapılamadı");
    }
  };

  return (
    <div className="col-sm-6 offset-sm-3 text-center">
      <h3 className="mb-3 text-center">Profil</h3>
      {error.length > 5 && (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      )}
      <hr />
      {/* user info */}
      <div className="text-start">
        <p>
          <strong>Email:</strong> {currentUser.email}
        </p>
        <p>
          <Link className="btn btn-primary w-100" to="/update-profile">
            Profili Güncelle
          </Link>
        </p>
      </div>
      <hr />
      <div className="d-grid">
        <button
          variant="link"
          onClick={handleLogout}
          className="btn btn-danger"
        >
          Çıkış Yap
        </button>
      </div>
    </div>
  );
};

export default Dashboard;

import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, useHistory } from "react-router-dom";

const UpdateProfile = () => {
  const userName = useRef();
  const userSurname = useRef();
  const userMail = useRef();
  const userPhone = useRef();
  const userPassword = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    const promises = [];
    setLoading(true);
    setError("");
    if (userMail.current.value !== currentUser.email) {
      promises.push(updateEmail(userMail.current.value));
    }
    if (userPassword.current.value) {
      promises.push(updatePassword(userPassword.current.value));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Profil güncelleştirilemedi");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="col-sm-6 offset-sm-3">
      <form onSubmit={handleSubmit}>
        <h3 className="mb-3 text-center">Profili Güncelle</h3>
        {error.length > 5 && (
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        )}
        <hr />
        {/* User Name and User Surname */}
        <div className="mb-3 d-flex gap-3">
          <label htmlFor="userName" className="form-label d-none"></label>
          <input
            ref={userName}
            required
            type="text"
            className="form-control justify-self-start"
            id="userName"
            placeholder="Adınız"
          />
          <label htmlFor="userSurname" className="form-label d-none"></label>
          <input
            ref={userSurname}
            required
            type="text"
            className="form-control justify-self-end"
            id="userSurname"
            placeholder="Soyadınız"
          />
        </div>
        {/* User Mail */}
        <div className="mb-3">
          <label htmlFor="userMail" className="form-label d-none"></label>
          <input
            ref={userMail}
            placeholder="E-mail adresiniz"
            required
            type="email"
            className="form-control"
            id="userMail"
            aria-describedby="userMail"
            defaultValue={currentUser.email}
          />
        </div>
        {/* User Phone Number */}
        <div className="mb-3">
          <label htmlFor="userPhone" className="form-label d-none"></label>
          <input
            ref={userPhone}
            placeholder="Telefon Numaranız"
            required
            type="tel"
            className="form-control"
            id="userPhone"
            aria-describedby="userPhone"
          />
        </div>
        {/* User Sex */}
        <select
          className="form-select mb-3"
          aria-label="Default select example"
        >
          <option defaultValue>Cinsiyetiniz</option>
          <option value="male">Erkek</option>
          <option value="hidden">Belirtmek İstemiyorum</option>
          <option value="female">Kadın</option>
        </select>
        {/* User Password */}
        <div className="mb-3">
          <label
            htmlFor="exampleInputPassword1"
            className="form-label d-none"
          ></label>
          <input
            ref={userPassword}
            placeholder="Değiştirmek istemiyorsanız boş bırakın"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>

        {/* Submit */}
        <div className="d-grid">
          <button disabled={loading} type="submit" className="btn btn-primary">
            Profili Güncelle
          </button>
        </div>
      </form>
      <div className="d-flex justify-content-center mt-3">
        <Link to="/">İptal</Link>
      </div>
    </div>
  );
};

export default UpdateProfile;

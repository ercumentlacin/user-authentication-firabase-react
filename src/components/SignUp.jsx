import React, { useRef, useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useHistory } from "react-router-dom";

const SignUp = () => {
  const userName = useRef();
  const userSurname = useRef();
  const userMail = useRef();
  const userPhone = useRef();
  const userPassword = useRef();
  const { signup } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      signup(userMail.current.value, userPassword.current.value);
      console.log(signup);
      history.push("/");
    } catch {
      setError("Uyelik olusturulurken bir hata meydana geldi");
    }
    setLoading(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h3 className="mb-3 text-center">Üye Olun</h3>
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
            placeholder="Şifreniz"
            required
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* campaigns */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="campaigns" />
          <label className="form-check-label" htmlFor="campaigns">
            <p>
              <strong>
                Kampanyalardan haberdar olmak için Aydınlatma Metni kapsamında
                elektronik ileti almak istiyorum.
              </strong>
            </p>
          </label>
        </div>

        {/* Membership Conditions */}
        <div className="mb-3 form-check">
          <input
            required
            type="checkbox"
            className="form-check-input"
            id="Conditions"
          />
          <label className="form-check-label" htmlFor="Conditions">
            <p>
              <strong>
                Üyelik koşullarını ve kişisel verilerimin korunmasını kabul
                ediyorum.
              </strong>
            </p>
          </label>
        </div>
        {/* Submit */}
        <div className="d-grid">
          <button disabled={loading} type="submit" className="btn btn-primary">
            Üye Ol
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;

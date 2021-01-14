import React from "react";

const SignUp = () => {
  return (
    <>
      <form>
        {/* User Name and User Surname */}
        <div className="mb-3 d-flex gap-3">
          <label for="userName" className="form-label d-none"></label>
          <input
            type="text"
            className="form-control justify-self-start"
            id="userName"
            placeholder="Adınız"
          />
          <label for="userSurName" className="form-label d-none"></label>
          <input
            type="text"
            className="form-control justify-self-end"
            id="userSurName"
            placeholder="Soyadınız"
          />
        </div>
        {/* User Mail */}
        <div className="mb-3">
          <label for="userMail" className="form-label d-none"></label>
          <input
            placeholder="E-mail adresiniz"
            type="email"
            className="form-control"
            id="userMail"
            aria-describedby="userMail"
          />
        </div>
        {/* User Phone Number */}
        <div className="mb-3">
          <label for="userPhone" className="form-label d-none"></label>
          <input
            placeholder="Telefon Numaranız"
            type="tel"
            className="form-control"
            id="userPhone"
            aria-describedby="userPhone"
          />
        </div>
        {/* User Sex */}
        <select class="form-select mb-3" aria-label="Default select example">
          <option selected>Cinsiyetiniz</option>
          <option value="male">Erkek</option>
          <option value="hidden">Belirtmek İstemiyorum</option>
          <option value="female">Kadın</option>
        </select>
        {/* User Password */}
        <div className="mb-3">
          <label
            for="exampleInputPassword1"
            className="form-label d-none"
          ></label>
          <input
            placeholder="Şifreniz"
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        {/* campaigns */}
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="campaigns" />
          <label className="form-check-label" for="campaigns">
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
          <input type="checkbox" className="form-check-input" id="Conditions" />
          <label className="form-check-label" for="Conditions">
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
          <button type="submit" className="btn btn-primary">
            Üye Ol
          </button>
        </div>
      </form>
    </>
  );
};

export default SignUp;

import React, { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Register = () => {
  const { registerUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegistration = (event) => {
    event.preventDefault();
    // if (!/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/.test(password)) {
    //   setError("password not valid need 6 char ");
    //   return;
    //
    if ((name, email, photo, password)) {
      registerUser(email, password)
        .then((result) => {
          console.log(result.user);
        })
        .catch((err) => {
          setError("The password is less than 6 characters");
          console.log(err.message);
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className="border w-75 mt-5 m-auto text-center p-5">
              <p className="text-danger">{error}</p>
              <form>
                <input
                  onChange={(e) => setName(e.target.value)}
                  className=" p-2 m-2"
                  type="text"
                  placeholder="enter your Name"
                  required
                />
                <input
                  onChange={(e) => setPhoto(e.target.value)}
                  className=" p-2 m-2"
                  type="text"
                  placeholder="Photo URL"
                  required
                />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-2 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <div className="pass-container">
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    className="password p-2 m-2"
                    type="text"
                    placeholder="type your password"
                  />
                </div>
                <button
                  onClick={handleRegistration}
                  className="btn btn-dark w-50 p-2 mt-3 "
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* <SocialLoginBtn></SocialLoginBtn> */}
      </div>
    </div>
  );
};

export default Register;

import React, { useContext, useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaGoogle, FaGithub } from "react-icons/fa";

const Login = () => {
  // const { loginUser } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();
    if ((email, password)) {
      loginUser(email, password)
        .then((result) => {
          console.log(result.user);
          // navigate("/");
        })
        .catch((error) => {
          console.log(error.message);
        });
    }
  };
  return (
    <div>
      <div className="container">
        <div className=" row justify-content-center align-items-center">
          <div className="col-md-6 ">
            <div className=" border w-75 mt-5 m-auto text-center p-5 ">
              <form>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="email p-2 m-2"
                  type="email"
                  placeholder="enter your email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="password p-2 m-2"
                  type="password"
                  placeholder="enter your password"
                />
                <button
                  onClick={handleLogin}
                  className="btn btn-primary w-75 p-2 mt-3"
                >
                  Login
                </button>
              </form>
              <div className="d-flex me-5">
                <div className="mt-5">
                  <Button variant="outline-success">
                    <FaGoogle></FaGoogle> Google Sign-in
                  </Button>
                  <div className="mt-2 ms-1">
                    <Button variant="outline-secondary">
                      <FaGithub></FaGithub> Github Sign-in
                    </Button>
                  </div>
                </div>
                <div className="pt-2 mt-5 ms-5">
                  <Link to="/register">
                    <small>Register</small>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* <SocialLoginBtn></SocialLoginBtn> */}
        </div>
      </div>
    </div>
  );
};

export default Login;

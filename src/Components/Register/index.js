import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginStyles } from "../Login/styles";
import { register as reg } from "../../api/user";

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    reg(
      values.username,
      values.email,
      values.password,
      (res) => {
        if (res.status === 200) {
          navigate("/auth/google/callback");
        }
        reset();
      },
      (error) => console.log(error)
    );
  };
  const google = () => {
    window.open(`${process.env.REACT_APP_BASEURL}/auth/google`, "_self");
  };
  return (
    <LoginStyles>
      <div className="mainDiv">
        <h3 className="mainHead">Register</h3>
        <div>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <label>User name</label>

              <div>
                <input
                  className="inputField"
                  autoComplete="off"
                  type="text"
                  placeholder="Username"
                  {...register("username")}
                />
              </div>
              <label>Email</label>
              <div>
                <input
                  className="inputField"
                  autoComplete="off"
                  type="email"
                  placeholder="Email"
                  {...register("email", { required: true })}
                />
              </div>
              <label>Password</label>
              <div>
                <input
                  className="inputField"
                  autoComplete="off"
                  type="password"
                  placeholder="Password"
                  {...register("password", { required: true })}
                />
              </div>
              <div>
                <button className="submitBtn">Sign up</button>
              </div>
              <div>
                <button className="googleBtn" onClick={google}>
                  Sign in with Google
                </button>
              </div>
            </form>
            <div className="login">
              Already registered ?{" "}
              <span
                style={{ fontWeight: "600", cursor: "pointer" }}
                onClick={() => navigate("/login")}
              >
                Login
              </span>
            </div>
          </div>
        </div>
      </div>
    </LoginStyles>
  );
}

export default Register;

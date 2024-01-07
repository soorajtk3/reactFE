import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { LoginStyles } from "./styles";
import { login } from "../../api/user";
import LocalStorageService from "../../utils/LocalStorageService";
function Login() {
  const google = () => {
    window.open(`${process.env.REACT_APP_BASEURL}/auth/google`, "_self");
  };
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (values) => {
    login(
      values.username,
      values.password,
      (res) => {
        if (res.status === "success") {
          const access_token = res.data.accessToken;
          LocalStorageService.setToken(access_token);

          navigate("/auth/google/callback");
        }
        reset();
      },
      (error) => console.log(error)
    );
  };
  return (
    <LoginStyles>
      <div className="mainDiv">
        <h3 className="mainHead">Login</h3>
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
                <button className="submitBtn">Login</button>
              </div>
              <div>
                <button className="googleBtn" onClick={google}>
                  Sign in with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </LoginStyles>
  );
}

export default Login;

import axios from "./axios";

const login = (username, password, successCB, errorCB) => {
  return axios
    .post(`/users/login`, {
      username,
      password,
    })
    .then(
      (res) => {
        successCB(res.data);
        return res;
      },
      (error) => {
        errorCB(error.response);
        return error.response;
      }
    );
};

const register = (username, email, password, successCB, errorCB) => {
  return axios.post(`/users/register`, { username, email, password }).then(
    (res) => {
      successCB(res.data);
      return res;
    },
    (error) => {
      errorCB(error.response);
      return error.response;
    }
  );
};

const getUserDetails = async () => {
  const response = await axios.get(`/users/profile`);
  return response;
};
export { login, register, getUserDetails };

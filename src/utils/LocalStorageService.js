class LocalStorageService {
  static setToken = (access_token) => {
    localStorage.setItem("access_token", access_token);
  };
  static getAccessToken = () => {
    return localStorage.getItem("access_token");
  };
  static clearToken = () => {
    localStorage.removeItem("access_token");
  };
}
export default LocalStorageService;

import axios from "axios";

const fetchClient = axios.create({
  baseURL: "https://api.spotify.com/v1"
});

fetchClient.interceptors.request.use(function(config) {
  const token = `Bearer ${localStorage.getItem("@token-spotify")}`;
  config.headers.Authorization = token;
  return config;
});

fetchClient.interceptors.response.use(
  response => response.data,
  error => {
    if (
      error &&
      error.response &&
      error.response.status === 401 &&
      [/\/forgot-password/, /\/login/, /\/confirm/, /\/signup\/\./].every(
        route => !route.test(window.location.pathname)
      )
    ) {
      localStorage.removeItem("@token-spotify");
      window.location.href = "/login";
    } else {
      return Promise.reject(error);
    }
  }
);

export { fetchClient };

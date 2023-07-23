import communityApi from "../api/communityApi";
const AuthorizationInterceptor = (token: string) =>
  communityApi.interceptors.request.use(
    (config) => {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error) => Promise.reject(error)
  );
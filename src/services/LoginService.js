import { baseService } from "./baseService";
export const LoginService = {
  Login: (LoginInfor) => {
    return baseService.post(`/api/Users/signin`, LoginInfor);
  },
  Signup: (signupInfo) => {
    return baseService.post(`/api/Users/signup`, signupInfo);
  },
};

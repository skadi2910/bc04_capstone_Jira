import { baseService } from "./baseService";
export class LoginService extends baseService {
    constructor() {
        super();
    }
    login = (LoginInfor) => {
        return this.post(`/api/Users/signin`, LoginInfor);
    };
    signup = (signupInfo) => {
        return this.post(`/api/Users/signup`, signupInfo);
    };
}

export const loginService = new LoginService();

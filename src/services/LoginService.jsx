import { baseService } from "./baseService"
export class LoginService extends baseService {
    constructor() {
        super();
    }
    login = (LoginInfor) => {
        return this.post(`/api/Users/signin`, LoginInfor)
    }
}



export const loginService = new LoginService();
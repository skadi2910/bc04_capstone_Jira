import { baseService } from "./baseService";
export class UserService extends baseService {
    constructor() {
        super();
    }
    // login = (LoginInfor) => {
    //     return this.post(`/api/Users/signin`, LoginInfor);
    // };
    // signup = (signupInfo) => {
    //     return this.post(`/api/Users/signup`, signupInfo);
    // };
    getUserList = (userName) => {
        return this.get(`/api/Users/getUser?keyword=${userName}`)
    }
    deleteUser = (userID) => {
        return this.delete(`/api/Users/deleteUser?id=${userID}`);
    }
    editUser = (userEdited) => {
        return this.put(`/api/Users/editUser`, userEdited)
    }
}

export const userService = new UserService();
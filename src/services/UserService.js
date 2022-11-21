import { baseService } from "./baseService";
export const UserService = {
  // login = (LoginInfor) => {
  //     return this.post(`/api/Users/signin`, LoginInfor);
  // };
  // signup = (signupInfo) => {
  //     return this.post(`/api/Users/signup`, signupInfo);
  // };
  getUserList: (userName) => {
    return baseService.get(`api/Users/getUser?keyword=${userName}`);
  },
  deleteUser: (userID) => {
    return baseService.delete(`api/Users/deleteUser?id=${userID}`);
  },
  editUser: (userEdited) => {
    return baseService.put(`api/Users/editUser`, userEdited);
  },
  getUserFromProjectId: (projectId) => {
    const uri = `api/Users/getUserByProjectId?idProject=${projectId}`;
    return baseService.get(uri);
  },
};

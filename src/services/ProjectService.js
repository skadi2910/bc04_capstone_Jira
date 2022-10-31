import { baseService } from "./baseService";

export const ProjectService = {
  getProjectList: () => {
    let uri = `api/Project/getAllProject`;
    return baseService.get(uri);
  },
  getProjectDetail: (id) => {
    let uri = `api/Project/getProjectDetail?id=${id}`;
    return baseService.get(uri);
  },
  updateTaskStatus: (taskUpdated) => {
    let uri = `/api/Project/updateStatus`;
    return baseService.put(uri, taskUpdated);
  },
  getUserInformation: (userID) => {
    let uri = `/api/Users/getUser?keyword=${userID}`;
    return baseService.get(uri);
  },
  createProjectAuthorize: (projectDetail) => {
    let uri = `api/Project/createProjectAuthorize`;
    return baseService.post(uri, projectDetail);
  },
  updateProject: (projectId, projectDetail) => {
    const uri = `api/Project/updateProject?projectId=${projectId}`;
    return baseService.put(uri, projectDetail);
  },
  deleteProject: (projectId) => {
    const uri = `api/Project/deleteProject?projectId=${projectId}`;
    return baseService.delete(uri);
  },
  assignUserProject: (userProjectInfo) => {
    let uri = `api/Project/assignUserProject`;
    return baseService.post(uri, userProjectInfo);
  },
  removeUserFromProject: (userProjectInfo) => {
    let uri = `api/Project/removeUserFromProject`;
    return baseService.post(uri, userProjectInfo);
  },
};

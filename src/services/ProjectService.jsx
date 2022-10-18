import { baseService } from "./baseService";
export class ProjectService extends baseService {
    constructor() {
        super();
    }
    getProjectDetail = (projectID) => {
        return this.get(`/api/Project/getProjectDetail?id=${projectID}`)
    }
    updateTaskStatus = (taskUpdated) => {
        return this.put(`/api/Project/updateStatus`, taskUpdated)
    }
    getUserInformation = (userID) => {
        return this.get(`/api/Users/getUser?keyword=${userID}`)
    }
}

export const projectService = new ProjectService();
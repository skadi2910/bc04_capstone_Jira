import { baseService } from "./baseService";
export class ProjectService extends baseService {
    constructor() {
        super();
    }
    getProjectDetail = (projectID) => {
        return this.get(`/api/Project/getProjectDetail?id=${projectID}`)
    }

}

export const projectService = new ProjectService();
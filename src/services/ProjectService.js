import { baseService } from "./baseService";

const baseServices = new baseService();
export const ProjectService = {
  getProjectList: () => {
    let uri = `api/Project/getAllProject`;
    return baseServices.get(uri);
  },
  getProjectDetail: (id) => {
    let uri = `api/Project/getProjectDetail?id=${id}`;
    return baseServices.get(uri);
  },
};

import { baseService } from "./baseService";
const StatusService = {
  getAll: () => {
    const uri = `api/Status/getAll`;
    return baseService.get(uri);
  },
};
export default StatusService;

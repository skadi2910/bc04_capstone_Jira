import { baseService } from "./baseService";
const PriorityService = {
  getAll: () => {
    const uri = `api/Priority/getAll`;
    return baseService.get(uri);
  },
};
export default PriorityService;

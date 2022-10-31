import { baseService } from "./baseService";
const TaskTypeService = {
  getAll: () => {
    const uri = `api/TaskType/getAll`;
    return baseService.get(uri);
  },
};
export default TaskTypeService;

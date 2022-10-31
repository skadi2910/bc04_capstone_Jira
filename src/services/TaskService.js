import { baseService } from "./baseService";

const TaskService = {
  createTask: (taskDetail) => {
    const uri = `api/Project/createTask`;
    return baseService.post(uri, taskDetail);
  },
  getTaskDetail: (taskId) => {
    const uri = `api/Project/getTaskDetail?taskId=${taskId}`;
    return baseService.get(uri);
  },
  updateStatus: (detail) => {
    const uri = `api/Project/updateStatus`;
    return baseService.put(uri, detail);
  },
  updatePriority: (detail) => {
    const uri = `api/Project/updatePriority`;
    return baseService.put(uri, detail);
  },
  updateDescription: (detail) => {
    const uri = `api/Project/updateDescription`;
    return baseService.put(uri, detail);
  },
  updateTimeTracking: (detail) => {
    const uri = `api/Project/updateTimeTracking`;
    return baseService.put(uri, detail);
  },
  updateEstimate: (detail) => {
    const uri = `api/Project/updateEstimate`;
    return baseService.put(uri, detail);
  },
  assignUserTask: (detail) => {
    const uri = `api/Project/assignUserTask`;
    return baseService.post(uri, detail);
  },
  removeUserTask: (detail) => {
    const uri = `api/Project/removeUserFromTask`;
    return baseService.post(uri, detail);
  },
  deleteTask: (taskId) => {
    const uri = `api/Project/removeTask?taskId=${taskId}`;
    return baseService.delete(uri);
  },
  updateTask: (taskDetail) => {
    const uri = `api/Project/updateTask`;
    return baseService.post(uri, taskDetail);
  },
};

export default TaskService;

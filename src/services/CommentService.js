import { baseService } from "./baseService";

const CommentService = {
  getAll: (taskId) => {
    const uri = `api/Comment/getAll?taskId=${taskId}`;
    return baseService.get(uri);
  },
  insertComment: (detail) => {
    const uri = `api/Comment/insertComment`;
    return baseService.post(uri, detail);
  },
  updateComment: (id, detail) => {
    const uri = `api/Comment/updateComment?id=${id}&contentComment=${detail}`;
    return baseService.put(uri);
  },
  deleteComment: (id, detail) => {
    const uri = `api/Comment/deleteComment?idComment=${id}`;
    return baseService.delete(uri);
  },
};
export default CommentService;

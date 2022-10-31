import TaskService from "../../services/TaskService";
import PriorityService from "../../services/PriorityService";
import TaskTypeService from "../../services/TaskTypeService";
import StatusService from "../../services/StatusService";
import { notification } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import {
  GET_TASK_DETAIL,
  GET_TASK_PRIORITY,
  GET_TASK_STATUS,
  GET_TASK_TYPE,
} from "./types/TaskTypes";
export const getTaskTypeAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await TaskTypeService.getAll();
      dispatch({ type: GET_TASK_TYPE, payload: data.content });
    } catch (error) {}
  };
};
export const getTaskStatusAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await StatusService.getAll();
      dispatch({ type: GET_TASK_STATUS, payload: data.content });
    } catch (error) {}
  };
};
export const getTaskPriorityAction = () => {
  return async (dispatch) => {
    try {
      const { data } = await PriorityService.getAll();
      dispatch({ type: GET_TASK_PRIORITY, payload: data.content });
    } catch (error) {}
  };
};
export const createTaskAction = (taskDetail) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.createTask(taskDetail);
      const args = {
        message: `${data.message}`,
        description: "Create Task Success",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(34,197,94)",
          color: "white",
          fontWeight: 600,
        },
      };

      notification.success(args);
    } catch (error) {
      const argsError = {
        message: `${error.response.data.message}`,
        description: "Create Task Failed",
        duration: 2,
        placement: "topRight",
      };
      notification.error(argsError);
    }
  };
};
export const updateTaskAction = (taskDetail) => {
  return async () => {
    try {
      const { data } = await TaskService.updateTask(taskDetail);
      const args = {
        message: (
          <p className="text-white font-semibold uppercase">{data.message}</p>
        ),
        description: "Task has updated!!!",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(34,197,94)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CheckCircleOutlined style={{ color: "white" }} />,
      };
      notification.success(args);
    } catch (error) {
      const argsError = {
        message: (
          <p className="text-white font-semibold uppercase">
            {error.response.data.message}
          </p>
        ),
        description: "Update Task Failed",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(239,68,68)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CloseCircleOutlined style={{ color: "white" }} />,
      };
      notification.error(argsError);
    }
  };
};
export const getTaskDetail = (taskId) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.getTaskDetail(taskId);
      dispatch({ type: GET_TASK_DETAIL, payload: data.content });
    } catch (error) {}
  };
};
export const updateTaskStatusAction = (detail) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.updateStatus(detail);

      // const args = {
      //   message: `${data.message}`,
      //   description: "Update Task Success",
      //   duration: 2,
      //   placement: "topRight",
      // };
      // notification.success(args);
    } catch (error) {
      const argsError = {
        message: (
          <p className="text-white font-semibold uppercase">
            {error.response.data.message}
          </p>
        ),
        description: "Update Task Failed",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(239,68,68)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CloseCircleOutlined style={{ color: "white" }} />,
      };
      notification.error(argsError);
    }
  };
};
export const updateTaskPriorityAction = (detail) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.updatePriority(detail);
      const args = {
        message: (
          <p className="text-white font-semibold uppercase">{data.message}</p>
        ),
        description: "Task has updated!!!",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(34,197,94)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CheckCircleOutlined style={{ color: "white" }} />,
      };
      notification.success(args);
    } catch (error) {
      const argsError = {
        message: (
          <p className="text-white font-semibold uppercase">
            {error.response.data.message}
          </p>
        ),
        description: "Update Task Failed",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(239,68,68)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CloseCircleOutlined style={{ color: "white" }} />,
      };
      notification.error(argsError);
    }
  };
};
export const updateTaskDescriptionAction = (detail) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.updateDescription(detail);
      const args = {
        message: (
          <p className="text-white font-semibold uppercase">{data.message}</p>
        ),
        description: "Task has updated!!!",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(34,197,94)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CheckCircleOutlined style={{ color: "white" }} />,
      };
      notification.success(args);
    } catch (error) {
      const argsError = {
        message: (
          <p className="text-white font-semibold uppercase">
            {error.response.data.message}
          </p>
        ),
        description: "Update Task Failed",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(239,68,68)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CloseCircleOutlined style={{ color: "white" }} />,
      };
      notification.error(argsError);
    }
  };
};
export const updateTaskEstimatedAction = (detail) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.updateEstimate(detail);
    } catch (error) {}
  };
};

export const updateTaskTimeTrackingAction = (detail) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.updateEstimate(detail);
      const args = {
        message: (
          <p className="text-white font-semibold uppercase">{data.message}</p>
        ),
        description: "Task has updated!!!",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(34,197,94)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CheckCircleOutlined style={{ color: "white" }} />,
      };
      notification.success(args);
    } catch (error) {
      const argsError = {
        message: (
          <p className="text-white font-semibold uppercase">
            {error.response.data.message}
          </p>
        ),
        description: "Update Task Failed",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(239,68,68)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CloseCircleOutlined style={{ color: "white" }} />,
      };
      notification.error(argsError);
    }
  };
};
export const assignUserTask = (detail) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.assignUserTask(detail);
      const args = {
        message: `${data.message}`,
        description: "Update Task Success",
        duration: 2,
        placement: "topRight",
      };
      notification.success(args);
      console.log("data: ", data);
    } catch (error) {
      console.log("error: ", error);
    }
  };
};
export const removeUserTaskAction = (detail) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.removeUserTask(detail);
      const args = {
        message: (
          <p className="text-white font-semibold uppercase">{data.message}</p>
        ),
        description: "Task has updated!!!",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(34,197,94)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CheckCircleOutlined style={{ color: "white" }} />,
      };
      notification.success(args);
    } catch (error) {
      const argsError = {
        message: (
          <p className="text-white font-semibold uppercase">
            {error.response.data.message}
          </p>
        ),
        description: "Update Task Failed",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(239,68,68)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CloseCircleOutlined style={{ color: "white" }} />,
      };
      notification.error(argsError);
    }
  };
};
export const deleteTaskAction = (taskId) => {
  return async (dispatch) => {
    try {
      const { data } = await TaskService.deleteTask(taskId);
      const args = {
        message: (
          <p className="text-white font-semibold uppercase">{data.message}</p>
        ),
        description: "Task has deleted!!!",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(34,197,94)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CheckCircleOutlined style={{ color: "white" }} />,
      };
      notification.success(args);
    } catch (error) {
      const argsError = {
        message: (
          <p className="text-white font-semibold uppercase">
            {error.response.data.message}
          </p>
        ),
        description: "Delete Task Failed",
        duration: 2,
        placement: "topRight",
        style: {
          backgroundColor: "rgb(239,68,68)",
          color: "white",
          fontWeight: 600,
        },
        icon: <CloseCircleOutlined style={{ color: "white" }} />,
      };
      notification.error(argsError);
    }
  };
};

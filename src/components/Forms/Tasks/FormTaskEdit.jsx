import {
  Col,
  Input,
  Row,
  Space,
  Avatar,
  Comment,
  Form,
  InputNumber,
  Skeleton,
} from "antd";

import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import TrashIcon from "../../../assets/icons/TrashIcon";
import SendIcon from "../../../assets/icons/SendIcon";
import XMark from "../../../assets/icons/XMark";
import {
  assignUserTask,
  deleteTaskAction,
  getTaskPriorityAction,
  getTaskStatusAction,
  getTaskTypeAction,
  removeUserTaskAction,
  updateTaskAction,
  updateTaskDescriptionAction,
  updateTaskEstimatedAction,
  updateTaskPriorityAction,
  updateTaskStatusAction,
  updateTaskTimeTrackingAction,
} from "../../../redux/actions/TaskAction";
import { formats, modules } from "../../../util/settings/config";
import { closeModalAction } from "../../../redux/actions/ModalAction";
import {
  deleteCommentAction,
  insertCommentAction,
  updateCommentAction,
} from "../../../redux/actions/CommentAction";
import { CommentList, Editor } from "./Components/Comments";
import { useWatch } from "antd/lib/form/Form";
import TaskTypeSelector from "./Components/TaskTypeSelector";
import StatusSelector from "./Components/StatusSelector";
import PrioritySelector from "./Components/PrioritySelector";
import MemberSelector from "./Components/MemberSelector";
import TimeTrackingModal from "./Components/TimeTrackingModal";
import { getProjectDetailAction } from "../../../redux/actions/ProjectAction";
import TimeTrackingProgress from "./Components/TimeTrackingProgress";

const { TextArea } = Input;
const { Item } = Form;
const Title = ({ title }) => {
  return (
    <h4 className="text-slate-500 text-lg font-semibold uppercase space-y-3">
      {title}
    </h4>
  );
};
const TaskId = ({ name, data }) => {
  return (
    <Item name={name}>
      <span className="uppercase text-lg font-semibold ">
        - {data?.toString() || ""}
      </span>
    </Item>
  );
};
const TaskBar = ({ onSubmit, onDelete, onCancel }) => {
  return (
    <div className="flex flex-row align-middle items-end justify-end gap-4">
      <button
        onClick={onSubmit}
        className="p-1 flex hover:text-green-500 hover:scale-110 duration-300 font-semibold text-gray-600"
      >
        <SendIcon /> Update Task
      </button>
      <button
        onClick={onDelete}
        className="p-1 hover:text-red-600 flex hover:scale-110 duration-300 font-semibold text-gray-600"
      >
        <TrashIcon />
      </button>
      <button
        onClick={onCancel}
        className="p-1 flex hover:scale-110 duration-300 font-semibold text-gray-600"
      >
        <XMark />
      </button>
    </div>
  );
};

export default function FormTaskEdit() {
  const [form] = Form.useForm();
  const [openModal, setOpenModal] = useState(false);
  const [isEdit, setIsEdit] = useState({
    comment: -1,
    description: false,
  });
  const [contentComment, setContentComment] = useState("");
  const [editComment, setEditComment] = useState("");

  const { taskDetail, taskStatus, taskPriority, taskType } = useSelector(
    (state) => state.TaskReducer
  );
  const { userListByProject } = useSelector(
    (state) => state.ProjectListReducer
  );
  const { commentList } = useSelector((state) => state.CommentReducer);
  const { projectDetail } = useSelector((state) => state.ProjectDetailReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTaskTypeAction());
    dispatch(getTaskStatusAction());
    dispatch(getTaskPriorityAction());
    // SET DEFAULT INPUT
    form.setFieldsValue({
      taskId: taskDetail.taskId,
      projectId: taskDetail.projectId,
      taskName: taskDetail.taskName,
      description: taskDetail.description,
      priorityId: taskDetail.priorityTask?.priorityId,
      statusId: taskDetail.statusId,
      typeId: taskDetail.typeId,
      originalEstimate: taskDetail.originalEstimate,
      timeTrackingSpent: taskDetail.timeTrackingSpent,
      timeTrackingRemaining: taskDetail.timeTrackingRemaining,
      listUserAsign: taskDetail.assigness?.map(({ id }) => {
        return id;
      }),
    });
  }, [taskDetail, dispatch, form]);

  const timeTrackingSpent = useWatch("timeTrackingSpent", form);
  const timeTrackingRemaining = useWatch("timeTrackingRemaining", form);
  const descriptionWatch = useWatch("description", form);

  /************************ HANDLE INPUTS.... *****************************/

  // ********************** SUBMIT FORMS **************************//
  const handleTaskUpdate = () => {
    const taskInputDetail = form.getFieldsValue();
    dispatch(
      updateTaskAction({ ...taskInputDetail, projectId: taskDetail.projectId })
    );
    dispatch(getProjectDetailAction(taskDetail.projectId));
  };
  const handleTaskDelete = () => {
    dispatch(deleteTaskAction(taskDetail.taskId));
    dispatch(closeModalAction());
  };
  const handleTaskClose = () => {
    dispatch(closeModalAction());
  };
  // ********* */COMMENTS INSERT + EDIT + DELLETE + OPEN EDIT + CANCEL EDIT */ ********************
  const handleCommentSubmit = () => {
    if (!contentComment) return;
    setTimeout(() => {
      setContentComment("");
      dispatch(
        insertCommentAction({
          taskId: taskDetail.taskId,
          contentComment: contentComment,
        })
      );
    }, 300);
  };
  const handleCommentUpdate = (idComment, detail) => {
    if (!editComment) return;
    setTimeout(() => {
      dispatch(updateCommentAction(idComment, detail));
      setIsEdit({ ...isEdit, comment: -1 });
    }, 200);
  };
  const handleCommentDelete = (idComment) => {
    dispatch(deleteCommentAction(idComment));
  };
  const handleCommentEdit = (index) => {
    setIsEdit({ ...isEdit, comment: index });
  };
  const handleCommentEditCancel = () => {
    setIsEdit({ ...isEdit, comment: -1 });
  };
  //******************* */TIME TRACKING SUBMIT*/ **********************************
  const handleTimeTrackingSubmit = () => {
    const { timeTrackingSpent, timeTrackingRemaining } = form.getFieldValue();
    if (!timeTrackingSpent || !timeTrackingRemaining) return;
    setTimeout(() => {
      dispatch(
        updateTaskTimeTrackingAction({
          taskId: taskDetail.taskId,
          timeTrackingSpent: timeTrackingSpent,
          timeTrackingRemaining: timeTrackingRemaining,
        })
      );
      setOpenModal(false);
    }, 200);
  };
  //******************* */ DESCRIPTION EDIT + SUBMIT + CANCEL*/ **********************************
  const handleDescriptionEdit = () => {
    setIsEdit({ ...isEdit, description: true });
  };
  const handleDescriptionSubmit = () => {
    const { description } = form.getFieldValue();
    dispatch(
      updateTaskDescriptionAction({
        taskId: taskDetail.taskId,
        description,
      })
    );
    form.setFieldValue(description);
    setIsEdit({ ...isEdit, description: false });
  };
  const handleDescriptionCancel = () => {
    setIsEdit({ ...isEdit, description: false });
  };
  //******************* */STATUS SELECT */ ****************************
  const handleStatusUpdate = (option) => {
    dispatch(
      updateTaskStatusAction({
        taskId: taskDetail.taskId,
        statusId: option,
        currentStatusId: taskDetail.statusId,
        taskDetail: taskDetail,
      })
    );
    dispatch(getProjectDetailAction(taskDetail.projectId));
  };
  //******************* */PRIORITY SELECT */ ****************************
  const handlePriorityUpdate = (option) => {
    dispatch(
      updateTaskPriorityAction({
        taskId: taskDetail.taskId,
        priorityId: option,
      })
    );
    dispatch(getProjectDetailAction(taskDetail.projectId));
  };
  // //*************** */ASSIGNEES SELECT + DESELECT*/ ****************************
  const handleAssignUser = (option) => {
    dispatch(
      assignUserTask({
        taskId: taskDetail.taskId,
        userId: option,
      })
    );
    dispatch(getProjectDetailAction(taskDetail.projectId));
  };
  const handleRemoveUser = (option) => {
    dispatch(
      removeUserTaskAction({ taskId: taskDetail.taskId, userId: option })
    );
    dispatch(getProjectDetailAction(taskDetail.projectId));
  };
  /********************* RENDER CONTENT.... **************************/
  return (
    <>
      {!taskDetail ? (
        <Skeleton />
      ) : (
        <Form layout="vertical" form={form} size="large">
          <Row gutter={16}>
            {/* TASK TYPE + ID */}
            <Col span={14}>
              <div className="w-2/5 h-10 hover:bg-slate-100 duration-200">
                <div className="scale-110 flex flex-row align-middle items-center">
                  <TaskTypeSelector
                    name="typeId"
                    data={taskType}
                    bordered={false}
                    showArrow={false}
                  />
                  <TaskId name="taskId" data={taskDetail.taskId} />
                </div>
              </div>
            </Col>
            {/* TASKBAR */}
            <Col span={10}>
              <TaskBar
                onCancel={handleTaskClose}
                onDelete={handleTaskDelete}
                onSubmit={handleTaskUpdate}
              />
            </Col>
          </Row>
          <Row gutter={16}>
            {/* TASK NAME */}
            <Col span={14}>
              <div className="hover:bg-slate-200 rounded-md font-semibold overflow-auto duration-300">
                <Item name="taskName">
                  <TextArea
                    readOnly
                    autoSize
                    bordered={false}
                    style={{
                      fontSize: "24px",
                    }}
                  />
                </Item>
              </div>
            </Col>
            {/* STATUS */}
            <Col span={10}>
              <Title title="Status" />
              <div className="w-3/4 h-10">
                <StatusSelector
                  name="statusId"
                  data={taskStatus}
                  onSelect={(option) => {
                    handleStatusUpdate(option);
                  }}
                  bordered={false}
                  showArrow={false}
                />
              </div>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={14}>
              {/* DESCRIPTION */}
              <div className="my-5">
                <Title title="description" />
                <div
                  onClick={() => {
                    handleDescriptionEdit();
                  }}
                >
                  <Item name="description">
                    {isEdit.description ? (
                      <ReactQuill
                        modules={modules}
                        formats={formats}
                        theme="snow"
                      />
                    ) : (
                      <div
                        dangerouslySetInnerHTML={{
                          __html:
                            descriptionWatch ||
                            taskDetail.description?.toString(),
                        }}
                      />
                    )}
                  </Item>
                </div>
                <div
                  className={`${
                    isEdit.description ? "flex" : "hidden"
                  }  flex-row gap-5 my-3 ml-3`}
                >
                  <button
                    onClick={() => {
                      handleDescriptionSubmit();
                    }}
                    className="bg-blue-700 hover:scale-105 hover:bg-blue-600 duration-300 px-3 py-1 rounded-md"
                  >
                    <span className="text-white text-md">Save</span>
                  </button>
                  <button
                    onClick={() => {
                      handleDescriptionCancel();
                    }}
                    className="hover:scale-105 hover:bg-slate-200 duration-300 px-3 py-1 rounded-md"
                  >
                    <span className="text-md font-semibold ">Cancel</span>
                  </button>
                </div>
              </div>
              {/* COMMENTS */}
              <div className="my-5">
                <Title title="Comments" />
                <Comment
                  avatar={
                    <Avatar
                      src="https://joeschmoe.io/api/v1/random"
                      alt="Authors"
                    />
                  }
                  content={
                    <Editor
                      name="contentComment"
                      onChange={(e) => {
                        setContentComment(e.target.value);
                      }}
                      onReset={() => {
                        setContentComment("");
                      }}
                      onSubmit={handleCommentSubmit}
                      value={contentComment}
                    />
                  }
                />
                {commentList?.length > 0 && (
                  <CommentList
                    name="editComment"
                    data={commentList}
                    isEdit={isEdit.comment}
                    value={editComment}
                    setEditValue={(defaultInput) => {
                      setEditComment(defaultInput);
                    }}
                    onChange={(e) => {
                      setEditComment(e.target.value);
                    }}
                    onOpen={(index) => {
                      handleCommentEdit(index);
                    }}
                    onCancel={() => {
                      handleCommentEditCancel();
                    }}
                    onSubmit={(idComment, detail) => {
                      handleCommentUpdate(idComment, detail);
                    }}
                    onDelete={(idComment) => {
                      handleCommentDelete(idComment);
                    }}
                  />
                )}
              </div>
            </Col>
            <Col span={10}>
              {/* ASSIGNESS */}
              <div className="my-5">
                <Title title="Assignees" />
                <div className={` w-full `}>
                  <MemberSelector
                    name={"listUserAsign"}
                    data={userListByProject}
                    onSelect={(option) => {
                      handleAssignUser(option);
                    }}
                    onDeselect={(option) => {
                      handleRemoveUser(option);
                    }}
                    bordered={false}
                  />
                </div>
              </div>
              {/* REPORTER */}
              <div className="my-5">
                <Title title={"Reporter"} />
                <Space className="cursor-pointer gap-1 hover:bg-slate-200 p-1 rounded-md duration-300">
                  <Avatar src={"https://joeschmoe.io/api/v1/random"} />
                  <span className="font-semibold text-lg">
                    {projectDetail.creator.name || ""}
                  </span>
                </Space>
              </div>
              {/* PRIORITY */}
              <div className="my-5">
                <Title title={"priority"} />
                <div className="w-1/3">
                  <PrioritySelector
                    name="priorityId"
                    data={taskPriority}
                    onSelect={(option) => {
                      handlePriorityUpdate(option);
                    }}
                    bordered={false}
                    showArrow={false}
                  />
                </div>
              </div>
              {/* ORIGINAL ESTIMATE HOURS */}
              <div className="my-5">
                <Title title={"Original Estimated Hours"} />
                <div className="bg-slate-200 h-10">
                  <Item
                    name="originalEstimate"
                    rules={[{ required: true, message: "Can't be empty" }]}
                  >
                    <InputNumber
                      type={"number"}
                      bordered={false}
                      className="text-lg font-semibold rounded-sm"
                      style={{ width: "100%", height: "100%" }}
                      min={0}
                      onChange={(value) => {
                        dispatch(
                          updateTaskEstimatedAction({
                            taskId: taskDetail.taskId,
                            originalEstimate: value,
                          })
                        );
                      }}
                    />
                  </Item>
                </div>
              </div>
              {/* TIME TRACKING */}
              <div className="my-5">
                <Title title="Time Tracking" />
                <div
                  onClick={() => {
                    setOpenModal(true);
                  }}
                  className="hover:bg-slate-200 h-16 cursor-pointer rounded-lg px-1 duration-300"
                >
                  <TimeTrackingProgress
                    spentTime={
                      timeTrackingSpent || taskDetail.timeTrackingSpent
                    }
                    remainingTime={
                      timeTrackingRemaining || taskDetail.timeTrackingRemaining
                    }
                  />
                </div>
                <TimeTrackingModal
                  open={openModal}
                  onSubmit={handleTimeTrackingSubmit}
                  onCancel={() => {
                    setOpenModal(false);
                  }}
                  timeTrackingSpent={timeTrackingSpent}
                  timeTrackingRemaining={timeTrackingRemaining}
                  timeSpentName="timeTrackingSpent"
                  timeRemainingName="timeTrackingRemaining"
                />
              </div>
            </Col>
          </Row>
        </Form>
      )}
    </>
  );
}

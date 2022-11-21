import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderProjectDetail from "./HeaderProjectDetail/HeaderProjectDetail";

import { useDispatch, useSelector } from "react-redux";
import { selectedKeyAction } from "../../../redux/actions/SelectKeyAction";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { SmallDashOutlined } from "@ant-design/icons";
import { Avatar, message } from "antd";
import {
  editProjectDetailCreator,
  getProjectDetailAction,
} from "../../../redux/actions/ProjectAction";
import { openModalAction } from "../../../redux/actions/ModalAction";
import { getTaskDetail } from "../../../redux/actions/TaskAction";
import { getUserListByProject } from "../../../redux/actions/ProjectListAction";
import { getAllCommentAction } from "../../../redux/actions/CommentAction";
import { updateTaskStatusAction } from "../../../redux/actions/TaskAction";
import ArrowUp from "../../../assets/icons/ArrowUp";
import ArrowDown from "../../../assets/icons/ArrowDown";
import ExclamationCircle from "../../../assets/icons/ExclamationCircle";
import Bookmark from "../../../assets/icons/Bookmark";
import EditIcon from "../../../assets/icons/EditIcon";
import { EDIT_TASK } from "../../../redux/actions/types/TaskTypes";

export default function ProjectDetail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { projectDetail } = useSelector((state) => state.ProjectDetailReducer);

  const { lstTask, projectName } = projectDetail;

  const key = 0; //! key để sidebar tự động update thứ tự
  useEffect(() => {
    dispatch(selectedKeyAction(key)); //! chinh key cho sidebar
    dispatch(getProjectDetailAction(id)); //! gọi API lấy dữ liệu project detail
  }, []);
  const handleDragEnd = (result) => {
    const { source, destination } = result;

    // ! start logic: loại trừ các trường hợp ngoại lệ
    if (!result.destination) return;
    if (
      source.index === destination.index &&
      source.droppableId === destination.droppableI
    )
      return;
    // ! end logic: loại trừ các trường hợp ngoại lệ

    // ! start logic: xử lý drag drop ở reducer trước để web mượt hơn
    // ! Đem xử lý lên reducer
    const sourceDroppableID = parseInt(result.source.droppableId) - 1;
    const sourceDroppableIndex = result.source.index * 1;
    const destinationDropableID = parseInt(result.destination.droppableId) - 1;
    const destinationDroppableIndex = result.destination.index * 1;
    dispatch(
      editProjectDetailCreator({
        sourceDroppableID,
        sourceDroppableIndex,
        destinationDropableID,
        destinationDroppableIndex,
      })
    );
    // ! end logic: xử lý drag drop ở reducer trước để web mượt hơn

    // !start logic: gửi dữ liệu lên API nhưng không hiển thị thông báo ở màn hình
    const taskUpdated = {
      taskId: result.draggableId,
      statusId: destination.droppableId,
    };
    dispatch(updateTaskStatusAction(taskUpdated));

    // !end logic: gửi dữ liệu lên API nhưng không hiển thị thông báo ở màn hình
  };

  const renderListTask = () => {
    return (
      <DragDropContext onDragEnd={handleDragEnd}>
        {lstTask?.map((task, index) => {
          return (
            <Droppable key={task.statusId} droppableId={task.statusId}>
              {(provided) => {
                return (
                  //glassMorphismBackground custom-scrollbar
                  <div className="rounded-lg overflow-hidden bg-gray-200  ">
                    <div className="task-header  px-3 mt-3 rounded-md min-h-[1rem] lg:min-h-[2rem] ">
                      <div className="flex justify-between">
                        <p className="text-xs lg:text-sm 2xl:text-md  text-gray-500">
                          {task.statusName} {task.lstTaskDeTail.length}
                        </p>
                        <div
                          className="pr-2"
                          onClick={() => {
                            message.success("Chức năng đang được xây dựng");
                          }}
                        >
                          <SmallDashOutlined className="custom-hover-icon p-2 rounded-lg" />
                        </div>
                      </div>
                    </div>
                    {/* height: "calc(100vh  - 13rem)", */}
                    <ul
                      // style={{
                      //   height: "calc(100vh  - 13rem)",
                      // }}
                      // h-[40rem]
                      className="overflow-y-hidden min-h-48 overflow-x-hidden "
                      {...provided.droppableProps}
                      ref={provided.innerRef}
                      key={index.toString() + task.statusId}
                    >
                      {task.lstTaskDeTail?.map((taskDetail, indexDetail) => {
                        let priorityClass = "";
                        switch (taskDetail.priorityTask.priorityId) {
                          case 1:
                            priorityClass = "text-red-500";
                            break;
                          case 2:
                            priorityClass = "text-orange-500";
                            break;
                          case 3:
                            priorityClass = "text-green-600";
                            break;
                          case 4:
                            priorityClass = "text-green-400";
                            break;
                          default:
                            break;
                        }
                        return (
                          <Draggable
                            key={taskDetail.taskId.toString()}
                            draggableId={taskDetail.taskId.toString()}
                            index={indexDetail}
                            className=""
                          >
                            {(provided) => (
                              <li
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                ref={provided.innerRef}
                                //bodyTaskGlassMorphismm
                                className="task-body cursor-grabbing rounded-md shadow-md bg-gray-50 hover:bg-gray-300 duration-300 text-black font-semibold px-4 py-2 mx-2 my-1"
                              >
                                <div className="flex flex-row justify-between xl:align-baseline  md:items-center gap-3 my-2">
                                  <p className="text-xs lg:text-base capitalize">
                                    {taskDetail.taskName}
                                  </p>

                                  <div
                                    onClick={() => {
                                      dispatch(
                                        getUserListByProject(projectDetail?.id)
                                      );
                                      dispatch(
                                        getTaskDetail(taskDetail?.taskId)
                                      );
                                      dispatch(
                                        getAllCommentAction(taskDetail?.taskId)
                                      );
                                      dispatch(openModalAction(EDIT_TASK));
                                    }}
                                    className="text-end pr-2 "
                                  >
                                    <span className="cursor-pointer hover:text-green-500 duration-200">
                                      <EditIcon className="text-xs lg:text-base" />
                                    </span>
                                  </div>
                                </div>
                                <div className="flex flex-row justify-between align-baseline lg:items-baseline  md:items-center gap-3 mt-4">
                                  <div className="text-xs lg:text-base flex flex-row">
                                    {taskDetail.taskTypeDetail.id === 1 ? (
                                      <span className="text-red-500">
                                        <ExclamationCircle />
                                      </span>
                                    ) : (
                                      <span className="text-green-400">
                                        <Bookmark />
                                      </span>
                                    )}
                                    <span className={`${priorityClass}`}>
                                      {taskDetail.priorityTask.priorityId <=
                                      2 ? (
                                        <ArrowUp />
                                      ) : (
                                        <ArrowDown />
                                      )}
                                    </span>
                                  </div>
                                  <div>
                                    <div className="flex items-center">
                                      {taskDetail.assigness?.map(
                                        (person, index) => {
                                          return <Avatar src={person.avatar} />;
                                        }
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </li>
                            )}
                          </Draggable>
                        );
                      })}
                      {provided.placeholder}
                    </ul>
                  </div>
                );
              }}
            </Droppable>
          );
        })}
      </DragDropContext>
    );
  };
  return (
    <div className="mx-auto xl:-mx-0">
      <div
        // style={{
        //   backgroundImage: ` linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),url(${background})`,
        // }}
        className="h-screen text-black bg-white"
      >
        <HeaderProjectDetail
          members={projectDetail.members}
          projectName={projectName}
        />
        <div className="container grid xl:grid-cols-4 lg:grid-cols-5 md:grid-cols-4 xl:mx-1 lg:mx-4 md:mx-18 lg:gap-3 w-full gap-4 px-4 py-8">
          {renderListTask()}
        </div>
      </div>
    </div>
  );
}

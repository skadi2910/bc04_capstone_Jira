import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import HeaderProjectDetail from "./HeaderProjectDetail/HeaderProjectDetail";
import background from "../../../assets/img/bgProjectDetail.jpg";
import { useDispatch, useSelector } from "react-redux";
import { selectedKeyAction } from "../../../redux/actions/SelectKeyAction";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import {
    DragOutlined,
    SmallDashOutlined,
    HighlightOutlined,
    EditOutlined,
} from "@ant-design/icons";
import { message } from "antd";
import {
    editProjectDetailCreator,
    getProjectDetailAction,
    updateStatusTaskInProjectAction,
} from "../../../redux/actions/ProjectAction";
import Scrollbars from "react-custom-scrollbars";
export default function ProjectDetail() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { projectDetail } = useSelector((state) => state.ProjectReducer);
    const { lstTask } = projectDetail;
    useEffect(() => {
        dispatch(selectedKeyAction(key)); //! chinh key cho sidebar
        dispatch(getProjectDetailAction(id));
    }, []);
    const key = -1;
    const handleDragEnd = (result) => {
        const { source, destination } = result;
        // ! start logic: loại trừ các trường hợp ngoại lệ
        if (!result.destination) return;
        if (
            source.index === destination.index &&
            source.droppableId === destination.droppableId
        )
            return;
        // ! end logic: loại trừ các trường hợp ngoại lệ

        // ! start logic: xử lý drag drop ở reducer trước để web mượt hơn
        const originalProjectDetail = { ...projectDetail };
        const sourceDroppableID = parseInt(result.source.droppableId) - 1;
        const destinationDropableID = parseInt(result.destination.droppableId) - 1;
        const [ItemVuaKeo] = originalProjectDetail.lstTask[
            sourceDroppableID
        ].lstTaskDeTail.splice(result.source.index, 1); //! cấu trúc destructuring array
        originalProjectDetail.lstTask[destinationDropableID].lstTaskDeTail.splice(
            result.destination.index,
            0,
            ItemVuaKeo
        );
        dispatch(editProjectDetailCreator(originalProjectDetail));
        // ! end logic: xử lý drag drop ở reducer trước để web mượt hơn

        // !start logic: gửi dữ liệu lên API nhưng không hiển thị thông báo ở màn hình
        const taskUpdated = {
            taskId: result.draggableId,
            statusId: destination.droppableId,
        };
        dispatch(updateStatusTaskInProjectAction(taskUpdated));
        // !end logic: gửi dữ liệu lên API nhưng không hiển thị thông báo ở màn hình
    };
    const renderListTask = () => {
        return (
            <DragDropContext onDragEnd={handleDragEnd}>
                {lstTask?.map((task, index) => {
                    return (
                        <Droppable key={index} droppableId={task.statusId}>

                            {(provided) => {
                                return (
                                    <div className="rounded-lg  ">
                                        <div className="task-header glassMorphismBackground px-3 py-3 min-h-[3.5rem] lg:min-h-[5rem] ">
                                            <div className="flex justify-between">
                                                <p className="text-xs lg:text-base 2xl:text-lg font-bold">
                                                    {task.statusName}
                                                </p>
                                                <div className="pr-2">
                                                    <SmallDashOutlined className="custom-hover-icon p-2 rounded-lg" />
                                                </div>
                                            </div>
                                        </div>
                                        {/* height: "calc(100vh  - 13rem)", */}
                                        <ul
                                            style={{
                                                height: "calc(100vh  - 13rem)"
                                            }}
                                            // h-[40rem]
                                            className=" overflow-y-auto "
                                            {...provided.droppableProps}
                                            ref={provided.innerRef}
                                            key={index.toString() + task.statusId}
                                        >
                                            {task.lstTaskDeTail?.map((taskDetail, indexDetail) => {
                                                let priorityClass = ``;
                                                switch (taskDetail.priorityTask.priorityId) {
                                                    case 1:
                                                        priorityClass = `text-red-600`;
                                                        break;
                                                    case 2:
                                                        priorityClass = `text-yellow-600`;

                                                        break;
                                                    case 3:
                                                        priorityClass = `text-green-600`;

                                                        break;
                                                    case 4:
                                                        priorityClass = `text-blue-600`;

                                                        break;

                                                    default:
                                                        break;
                                                }
                                                return (
                                                    <Draggable
                                                        key={taskDetail.taskId.toString()}
                                                        draggableId={taskDetail.taskId.toString()}
                                                        index={indexDetail}
                                                    >
                                                        {(provided) => (
                                                            <li
                                                                {...provided.draggableProps}
                                                                {...provided.dragHandleProps}
                                                                ref={provided.innerRef}
                                                                className="task-body bodyTaskGlassMorphismm rounded-md  text-black  font-semibold  px-4 py-2  mx-2 my-3
                                                               
                                                                "
                                                            >
                                                                <div className="grid grid-cols-4 my-2">
                                                                    <div className="col-span-3">
                                                                        <p className="text-xs  lg:text-base">
                                                                            {taskDetail.taskName}
                                                                        </p>
                                                                    </div>
                                                                    <div className="col-span-1 text-end pr-2">
                                                                        <EditOutlined className="custom-hover-icon p-2 rounded-lg" />
                                                                    </div>
                                                                </div>
                                                                <div className="flex justify-between mt-4">
                                                                    <div
                                                                        className={`text-xs lg:text-base ${priorityClass} `}
                                                                    >
                                                                        {taskDetail.priorityTask.priority}
                                                                    </div>
                                                                    <div>
                                                                        <div className="flex items-center gap-2">
                                                                            {taskDetail.assigness?.map(
                                                                                (person, index) => {
                                                                                    return (
                                                                                        <img
                                                                                            style={{ borderRadius: "50%" }}
                                                                                            className="bodyTaskGlassMorphismm h-4 w-4 lg:h-8 lg:w-8  "
                                                                                            src={person.avatar}
                                                                                            alt="ok"
                                                                                        />
                                                                                    );
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
                style={{
                    backgroundImage: ` linear-gradient(
                    rgba(0, 0, 0, 0.7), 
                    rgba(0, 0, 0, 0.7)
                    ),url(${background})`,
                }}
                className="h-screen text-white"
            >
                <HeaderProjectDetail />
                <div className="grid grid-cols-4 gap-4 px-4 py-8 ">
                    {renderListTask()}
                </div>
            </div>
        </div>
    );
}

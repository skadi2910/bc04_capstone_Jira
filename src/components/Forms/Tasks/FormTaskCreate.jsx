import {
  Col,
  Form,
  Input,
  InputNumber,
  Progress,
  Row,
  Select,
  Space,
} from "antd";
import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import ClockIcon from "../../../assets/icons/ClockIcon";
import { getUserListByProject } from "../../../redux/actions/ProjectListAction";
import {
  getTaskPriorityAction,
  getTaskStatusAction,
  getTaskTypeAction,
} from "../../../redux/actions/TaskAction";
import { toolbarOptions } from "../../../util/settings/config";
import MemberSelector from "./Components/MemberSelector";
import PrioritySelector from "./Components/PrioritySelector";
import StatusSelector from "./Components/StatusSelector";
import TaskTypeSelector from "./Components/TaskTypeSelector";
import TimeTrackingProgress from "./Components/TimeTrackingProgress";
const { Option } = Select;
export default function TaskFormCreate({ form }) {
  const dispatch = useDispatch();
  const [spentTime, setSpentTime] = useState(0);

  const [estimateTime, setEstimateTime] = useState(0);
  const [remainingTime, setRemainingTime] = useState(0);
  const { projectList, userListByProject } = useSelector(
    (state) => state.ProjectListReducer
  );
  console.log("projectList: ", projectList);
  const { taskType, taskStatus, taskPriority } = useSelector(
    (state) => state.TaskReducer
  );
  const onEstimateTimeChange = (newValue) => {
    setEstimateTime(newValue);
  };
  const onSpentTimeChange = (newValue) => {
    setSpentTime(newValue);
  };
  const onRemainingTimeChange = (newValue) => {
    setRemainingTime(newValue);
  };
  useEffect(() => {
    dispatch(getTaskTypeAction());
    dispatch(getTaskStatusAction());
    dispatch(getTaskPriorityAction());
  }, [dispatch]);

  const renderProjectName = () =>
    projectList?.map((project, index) => {
      return (
        <Option key={project.id + index} value={project.id}>
          <span className="text-md font-semibold capitalize caret-transparent">
            {project.projectName}
          </span>
        </Option>
      );
    });

  return (
    <Form layout="vertical" form={form} size="large">
      {/* Project Name */}
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label={<h4 className="font-bold text-xl text-black">Project</h4>}
            name="projectId"
          >
            <Select
              placeholder="Chọn Project"
              style={{
                width: "100%",
              }}
              onSelect={(value) => {
                dispatch(getUserListByProject(value));
              }}
            >
              {renderProjectName()}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      {/* Task Name */}
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label={<h4 className="font-bold text-xl">Task Name</h4>}
            name="taskName"
            rules={[
              {
                required: true,
                message: "please enter Project name",
              },
            ]}
          >
            <Input row={2} placeholder="input placeholder" />
          </Form.Item>
        </Col>
      </Row>
      {/* Status */}
      <Row gutter={16}>
        <Col span={16}>
          <div className="w-3/4 scale-y-110">
            <StatusSelector
              label={<h4 className="font-bold text-xl">Status</h4>}
              name="statusId"
              data={taskStatus}
              bordered={true}
              showArrow={true}
            />
          </div>
        </Col>
      </Row>
      {/* Priority && Task Type */}
      <Row gutter={16}>
        <Col span={16}>
          <div className="w-3/4">
            <h4 className="font-bold text-xl">Priority</h4>
            <PrioritySelector
              name="priorityId"
              data={taskPriority}
              bordered={true}
              showArrow={true}
            />
          </div>
        </Col>
        <Col span={8}>
          <div className="w-full items-end">
            <h4 className="font-bold text-xl text-end items-end">Task Type</h4>
            <TaskTypeSelector
              name="typeId"
              data={taskType}
              bordered={true}
              showArrow={true}
            />
          </div>
        </Col>
      </Row>
      <Row gutter={16}>
        <Col span={16}>
          <Form.Item
            name="originalEstimate"
            label={
              <h4 className="font-bold text-xl">Original Estimated Time</h4>
            }
          >
            <InputNumber
              type="number"
              min={0}
              style={{
                margin: "0 16px",
              }}
              value={estimateTime}
              onChange={onEstimateTimeChange}
            />
          </Form.Item>
        </Col>
        <Col span={8}>
          <div className="flex flex-row  justify-between  w-full align-middle">
            <Form.Item
              name="timeTrackingSpent"
              label={<h4 className="font-bold text-lg">Time Spent</h4>}
            >
              <InputNumber
                type="number"
                min={0}
                style={{
                  margin: "0 16px",
                }}
                value={spentTime}
                onChange={onSpentTimeChange}
              />
            </Form.Item>
            <Form.Item
              name="timeTrackingRemaining"
              label={<h4 className="font-bold text-lg">Time Remaining</h4>}
            >
              <InputNumber
                type="number"
                min={0}
                style={{
                  margin: "0 16px",
                }}
                value={remainingTime}
                onChange={onRemainingTimeChange}
              />
            </Form.Item>
          </div>
        </Col>
      </Row>
      {/* Assignee && Time Tracking */}
      <Row gutter={16}>
        <Col span={16}>
          <div className="">
            <MemberSelector
              label={<h4 className="font-bold text-xl">Assignees</h4>}
              name="listUserAsign"
              bordered={false}
              data={userListByProject}
            />
          </div>
        </Col>
        <Col span={8}>
          <h4 className=" align-middle items-end font-bold text-xl text-end first-letter:font-extrabold first-letter:italic">
            Time Tracking
          </h4>
          <TimeTrackingProgress
            spentTime={spentTime}
            remainingTime={remainingTime}
          />
        </Col>
      </Row>

      {/* Description */}
      <Row gutter={16}>
        <Col span={24}>
          <Form.Item
            label={<h4 className="font-bold text-xl">Description</h4>}
            name="description"
          >
            <ReactQuill
              defaultValue="Write Summary Description "
              placeholder=""
              modules={{ toolbar: toolbarOptions }}
              className="min-h-52 overflow-auto"
              theme="snow"
            />
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
}

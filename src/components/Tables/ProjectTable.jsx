import {
  AutoComplete,
  Avatar,
  Button,
  Empty,
  Input,
  Pagination,
  Popconfirm,
  Popover,
  Space,
  Table,
  Tag,
} from "antd";
import {
  MinusOutlined,
  PlusOutlined,
  SmallDashOutlined,
  MinusCircleFilled,
} from "@ant-design/icons";
import EditIcon from "../../assets/icons/EditIcon";
import React, { useRef, useState, useEffect, Fragment } from "react";
import { useDispatch } from "react-redux";
import {
  assignUserProject,
  fetchProjectListData,
  getEditProject,
  getUserListByProject,
  removeUserFromProject,
  deleteProjectAction,
} from "../../redux/actions/ProjectListAction";
import { getUser } from "../../redux/actions/UserAction";
import { useSelector } from "react-redux";
import { openDrawerEditProjectForm } from "../../redux/actions/DrawerAction";
import { NavLink } from "react-router-dom";
import TrashIcon from "../../assets/icons/TrashIcon";
import RefreshIcon from "../../assets/icons/RefreshIcon";
import XMark from "../../assets/icons/XMark";
import ArchiveBoxXMark from "../../assets/icons/ArchiveBoxXMark";
const { Column } = Table;
export default function ProjectTable() {
  const { userListByProject } = useSelector(
    (state) => state.ProjectListReducer
  );
  const { projectList, isLoading } = useSelector(
    (state) => state.ProjectListReducer
  );
  const { userSearch } = useSelector((state) => state.UserReducer);
  const dispatch = useDispatch();
  // FILTER && SORT FEATURES
  const [sortedInfo, setSortedInfo] = useState({});
  const [filteredInfo, setFilteredInfo] = useState({});

  const clearAll = () => {
    setFilteredInfo({});
    setSortedInfo({});
  };
  const handleChange = (paginations, filters, sorter) => {
    setFilteredInfo(filters);
    setSortedInfo(sorter);
  };

  // POPOVERS CONTENT
  const [userSearchInput, setUserSearchInput] = useState("");
  const searchRef = useRef(null);

  //TABLE ACTIONS
  const handleEdit = (id) => {
    dispatch(getEditProject(id));
    dispatch(openDrawerEditProjectForm());
  };
  const handleDelete = (id) => {
    dispatch(deleteProjectAction(id));
  };
  const collumns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: "5%",
      // ...getColumnSearchProps("id"),
      sorter: {
        compare: (a, b) => a.id - b.id,
      },
      sortOrder: sortedInfo.columnKey === "id" ? sortedInfo.order : null,
    },
    {
      title: "Project Name",
      dataIndex: "projectName",
      key: "projectName",
      sorter: {
        compare: (a, b) => {
          if (a.projectName?.toLowerCase() < b.projectName?.toLowerCase())
            return 1;
          if (a.projectName?.toLowerCase() > b.projectName?.toLowerCase())
            return -1;
          return 0;
        },
      },
      sortOrder:
        sortedInfo.columnKey === "projectName" ? sortedInfo.order : null,
      width: "25%",
      render: (text, record, index) => {
        return (
          <Space className=" align-baseline items-baseline ">
            <NavLink
              to={`/projectdetail/${record?.id}`}
              onClick={() => {
                dispatch({ type: "SET_CURRENTID", payload: record?.id });
              }}
            >
              <p className="text-md font-semibold text-black hover:underline">
                {text}
              </p>
            </NavLink>
          </Space>
        );
      },
      // ...getCollumnSearchProps("projectName", "Project Name"),
    },
    {
      title: "Category",
      dataIndex: "categoryName",
      key: "categoryName",
      render: (text, record) => {
        let color = record?.categoryId === 1 ? "volcano" : "green";
        if (record?.categoryId === 3) {
          color = "geekblue";
        }
        return (
          <>
            <Tag color={color}>{text}</Tag>
          </>
        );
      },
      filters: [
        {
          text: "Dự án web",
          value: 1,
        },
        {
          text: "Dự án phần mềm",
          value: 2,
        },
        {
          text: "Dự án di động",
          value: 3,
        },
      ],
      filteredValue: filteredInfo.categoryName || null,
      onFilter: (value, record) => record?.categoryId === value,
      width: "10%",
    },
    {
      title: "Creator",
      dataIndex: "creator",
      key: "creator",
      render: (text, record) => {
        return (
          <p className="text-md font-semibold italic capitalize">
            {record.creator?.name}
          </p>
        );
      },
      width: "15%",
    },
    {
      title: "Team Members",
      dataIndex: "members",
      key: "members",
      render: (text, project, index) => {
        return (
          <div className="flex flex-row gap-2">
            <div className="grid grid-cols-4">
              {project.members?.slice(0, 3).map((member, index) => {
                console.log("member: ", member);
                return (
                  <Avatar
                    className="cursor-pointer"
                    src={member.avatar}
                    key={member.userId.toString() + member.name}
                  />
                );
              })}
              {project.members?.length > 0 ? (
                <Popover
                  title="Remove User"
                  placement="topRight"
                  trigger="click"
                  content={
                    <Table
                      dataSource={userListByProject}
                      size="small"
                      pagination={{ position: ["bottomCenter"], pageSize: "5" }}
                    >
                      <Column title="ID" dataIndex="userId" key={`userId+1`} />
                      <Column
                        title="Avatar"
                        render={(_, userInfo) => (
                          <Avatar src={userInfo.avatar} />
                        )}
                      />
                      <Column title="Name" dataIndex="name" key="name+1" />
                      <Column
                        title="Remove"
                        key="remove+1"
                        render={(_, userInfo) => (
                          <Popconfirm
                            title="Are you sure ?"
                            onConfirm={() => {
                              dispatch(
                                removeUserFromProject({
                                  projectId: project.id,
                                  userId: userInfo.userId,
                                })
                              );
                            }}
                            onCancel={() => {}}
                            okText={<p className="hover:text-black">Yes</p>}
                            cancelText={<p className="hover:text-black">No</p>}
                          >
                            <Button
                              border
                              size="small"
                              danger
                              type="primary"
                              shape="circle"
                              icon={<MinusOutlined />}
                            ></Button>
                          </Popconfirm>
                        )}
                      />
                    </Table>
                  }
                >
                  {/* Button click vào gọi API GetUserListByProject + Mở Popover */}
                  <Button
                    shape="circle"
                    className=""
                    onClick={() => {
                      dispatch(getUserListByProject(project.id));
                    }}
                  >
                    {project.members?.length > 3 ? (
                      <span className="text-center">
                        +{project.members?.length - 3}
                      </span>
                    ) : (
                      "..."
                    )}
                  </Button>
                </Popover>
              ) : (
                ""
              )}
            </div>
            {/*Button Chức năng Add User Vào Project */}
            <div className="">
              <Popover
                title="Add User"
                placement="bottom"
                content={
                  <AutoComplete
                    value={userSearchInput}
                    dropdownMatchSelectWidth={500}
                    options={userSearch?.map((user) => {
                      return {
                        label: user.name,
                        value: user.userId.toString(),
                      };
                    })}
                    onChange={(input) => {
                      setUserSearchInput(input);
                    }}
                    onSelect={(value, option) => {
                      const userProjectInfo = {
                        projectId: project.id,
                        userId: value,
                      };
                      setUserSearchInput("");
                      dispatch(assignUserProject(userProjectInfo));
                    }}
                    onSearch={(value) => {
                      // Debounce Search
                      if (searchRef.current) {
                        clearTimeout();
                      }
                      searchRef.current = setTimeout(
                        dispatch(getUser(value)),
                        1000
                      );
                    }}
                    notFoundContent="Not found"
                    placeholder="input here"
                    style={{
                      width: 200,
                    }}
                  />
                }
                trigger="click"
              >
                <Button
                  shape="circle"
                  icon={<PlusOutlined style={{ color: "green" }} />}
                ></Button>
              </Popover>
            </div>
          </div>
        );
      },
      width: "30%",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <button
            onClick={() => {
              handleEdit(record.id);
            }}
            className="text-green-600 hover:scale-110 hover:text-green-500 duration-200"
          >
            <EditIcon />
          </button>
          <button
            onClick={() => {
              handleDelete(record.id);
            }}
            className="text-red-600  hover:text-red-500 hover:scale-110 duration-200"
          >
            <TrashIcon />
          </button>
        </Space>
      ),
      width: "15%",
    },
  ];
  return (
    <>
      <Space className="flex  justify-end items-center align-middle m-5  ">
        <button
          className="flex bg-blue-700 hover:bg-blue-600 hover:scale-105 duration-200 px-3 py-1 rounded-md align-middle items-center gap-1 text-white"
          onClick={() => {
            dispatch(fetchProjectListData());
          }}
        >
          <RefreshIcon />
          <span className="text-md">Refresh</span>
        </button>
        <button
          className="flex bg-red-600 hover:bg-red-500 hover:scale-105 duration-200 px-3 py-1 rounded-md align-middle items-center gap-1 text-white"
          onClick={clearAll}
        >
          <ArchiveBoxXMark />
          <span className="text-md">Clear All</span>
        </button>
      </Space>
      {isLoading === true || projectList?.length === 0 ? (
        <Empty />
      ) : (
        <Table
          columns={collumns}
          dataSource={projectList}
          pagination={{
            position: ["bottomLeft"],
          }}
          scroll={{
            x: "max-content",
            y: 500,
          }}
          onChange={handleChange}
        />
      )}
    </>
  );
}

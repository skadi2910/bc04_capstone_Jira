import { Button, Space, Table, Tag } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProjectDetailData } from "../../redux/features/ProjectDetail/ProjectDetailSlice";

const { Column } = Table;

export default function ProjectTable({ data }) {
  console.log("data: ", data);
  const { projectDetail, isLoading, error } = useSelector(
    (state) => state.projectDetailReducer
  );
  console.log("projectDetail: ", projectDetail);
  console.log("isLoading: ", isLoading);
  console.log("error: ", error);
  const dispatch = useDispatch();
  const handleEdit = async (id) => {
    console.log("id: ", id);
    dispatch(fetchProjectDetailData(id));
  };
  const handleDelete = () => {};
  return (
    <Table dataSource={data} pagination={{ position: "bottomRight" }}>
      <Column title="ID" dataIndex="id" key="id" width={100} />
      <Column
        title="Project"
        dataIndex="projectName"
        key="projectName"
        width={300}
      />
      <Column
        title="Category"
        dataIndex="categoryName"
        key="categoryName"
        render={(text) => {
          let color = text?.includes("phần mềm") ? "geekblue" : "green";
          if (text?.includes("di động")) {
            color = "volcano";
          }
          return (
            <>
              <Tag color={color}>{text}</Tag>
            </>
          );
        }}
        width={200}
      />
      <Column
        title="Creator"
        dataIndex="creator"
        key="creator"
        render={(creator) => {
          return <p>{creator.name}</p>;
        }}
        width={200}
      />
      <Column
        title="Team Members"
        dataIndex="members"
        key="members"
        render={(members) => {
          // <button className="bg-gray-500  rounded-full p-3">+</button>;
          return members?.map((member) => {
            return (
              <div className="flex align-middle ">
                <a className="text-blue-500">{member.name}, </a>
              </div>
            );
          });
        }}
        width={400}
      />
      <Column
        title="Action"
        key="action"
        render={(_, project) => (
          <Space size="middle">
            <Button
              onClick={() => {
                handleEdit(project.id);
              }}
              className="bg-blue-500"
            >
              Detail
            </Button>
            <Button onClick={handleDelete} className="bg-red-500">
              Delete
            </Button>
          </Space>
        )}
        width={200}
      />
    </Table>
  );
}

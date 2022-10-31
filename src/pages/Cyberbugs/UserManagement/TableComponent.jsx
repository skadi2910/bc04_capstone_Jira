import React, { useEffect } from "react";
import { Avatar, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteUserAction,
  getUserListAction,
} from "../../../redux/actions/UserAction";
import { openModalAction } from "../../../redux/actions/ModalAction";
import EditUser from "./EditUser/EditUser";
import { EDIT_USER } from "../../../redux/actions/types/UserTypes";

export default function TableComponent() {
  const { userList: data } = useSelector((state) => state.UserReducer); //! destructuring + đặt tên
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserListAction("")); //! khi user click vào thì lấy list user về render ra giao diện
  }, []);
  const handleDeleteUser = (userID) => {
    dispatch(deleteUserAction(userID));
  };
  const handleEditUser = (user) => {
    console.log("user: ", user);
    // console.log('userID: ', userID);
    dispatch({ type: EDIT_USER, payload: user });
    dispatch(openModalAction(EDIT_USER));
  };
  const columns = [
    {
      title: <p className="ml-4">Tên</p>,
      width: 100,
      align: "left",
      dataIndex: "name",
      key: "name",
      fixed: "left",
      render: (text, record, index) => {
        return (
          <div>
            <p className="ml-4 ">{text}</p>
          </div>
        );
      },
    },

    {
      title: "ID",
      width: 100,
      align: "center",
      dataIndex: "userId",
      key: "userId",
      // fixed: "left",
    },
    {
      title: "Avatar",
      width: 100,
      align: "center",
      dataIndex: "avatar",
      key: "avatar",
      render: (text, record, index) => {
        return <Avatar src={text} />;
      },
    },
    {
      title: "Số điện thoại",
      width: 200,
      dataIndex: "phoneNumber",
      align: "center",
      key: "phoneNumber",
    },
    {
      title: "Thao tác",
      key: "operation",
      fixed: "right",
      align: "center",
      width: 200,
      render: (text, record, index) => {
        return (
          <div>
            <button
              onClick={() => {
                console.log("text: ", record);
                handleEditUser(text);
              }}
              type="button"
              className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Sửa
            </button>
            <button
              onClick={() => {
                handleDeleteUser(text.userId);
              }}
              type="button"
              className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Xóa
            </button>
          </div>
        );
      },
    },
  ];
  return (
    <Table
      rowKey={(record) => record.userId}
      columns={columns}
      dataSource={data}
      scroll={{
        x: "max-content",
        y: 600,
      }}
    />
  );
}

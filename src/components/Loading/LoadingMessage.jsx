import { message } from "antd";
import React, { useEffect } from "react";

export default function LoadingMessage() {
  const { messageLoad } = useEffect((state) => state.LoadingReducer);
  console.log("messageLoad: ", messageLoad);
  const messageInfo = (messageInput = "") => {
    switch (messageLoad) {
      case "IDLE":
        return message.loading("...");
      case "SUCCESS":
        return message.success("Thành công");
      case "FAILED":
        return message.error("Failed!");
      default:
        break;
    }
  };
  return { messageInfo };
}

import React, { Fragment } from "react";
import { RingLoader } from "react-spinners";
export default function LoadingCircle() {
  return (
    <Fragment>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          zIndex: 99,
        }}
      >
        <RingLoader color="#36d7b7" />
      </div>
    </Fragment>
  );
}

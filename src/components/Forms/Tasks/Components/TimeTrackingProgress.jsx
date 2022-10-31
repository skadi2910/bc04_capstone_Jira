import { Progress } from "antd";
import React from "react";
import ClockIcon from "../../../../assets/icons/ClockIcon";

export default function TimeTrackingProgress({ spentTime, remainingTime }) {
  return (
    <div className="flex flex-row gap-1">
      <div className="scale-125 mt-1">
        <ClockIcon />
      </div>
      <div className="flex flex-col w-full">
        <Progress
          strokeColor={{
            "0%": "#108ee9",
            "100%": "#87d068",
          }}
          percent={(spentTime / (remainingTime + spentTime)) * 100}
          format={(percent) => {
            return (
              <span className="text-md font-semibold">
                {Math.round(percent)} %
              </span>
            );
          }}
          size="small"
        />
        <p className="flex flex-row justify-between align-middle mt-1 ">
          <span className="text-md font-semibold italic">
            {spentTime}h logged
          </span>
          <span className="text-md font-semibold italic">
            {remainingTime}h remaining
          </span>
        </p>
      </div>
    </div>
  );
}

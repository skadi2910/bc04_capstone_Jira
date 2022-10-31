import { Form, InputNumber, Modal, Progress } from "antd";
import ClockIcon from "../../../../assets/icons/ClockIcon";
import TimeTrackingProgress from "./TimeTrackingProgress";

const TimeTrackingModal = ({
  open,
  onCancel,
  onSubmit,
  timeTrackingSpent,
  timeTrackingRemaining,
  timeSpentName,
  timeRemainingName,
}) => {
  return (
    <Modal
      key="modal-edit-form"
      open={open}
      onCancel={onCancel}
      footer={[
        <button
          onClick={onSubmit}
          className={` bg-blue-700 text-white font-semibold rounded-md px-3 py-1 hover:scale-105 hover:bg-blue-600 duration-300`}
        >
          Done
        </button>,
      ]}
    >
      <h4 className="text-slate-500 align-middle items-end font-bold text-xl text-start first-letter:font-extrabold first-letter:italic">
        Time Tracking
      </h4>
      <TimeTrackingProgress
        spentTime={timeTrackingSpent}
        remainingTime={timeTrackingRemaining}
      />
      <div className="flex flex-row flex-shrink space-x-10 ml-3">
        <div className="">
          <h4 className="text-slate-500 text-md font-semibold">
            Time spent(hours)
          </h4>
          <div className="w-full h-10 bg-slate-200 rounded-md ">
            <Form.Item name={timeSpentName}>
              <InputNumber
                bordered={false}
                min={0}
                style={{ width: "100%", height: "100%" }}
                type="number"
              />
            </Form.Item>
          </div>
        </div>
        <div className="">
          <h4 className="text-slate-500 text-sm font-semibold text-end">
            Time Remaining(hours)
          </h4>
          <div className="w-full h-10 bg-slate-200 rounded-md mt-2">
            <Form.Item name={timeRemainingName}>
              <InputNumber
                bordered={false}
                min={0}
                style={{ width: "100%", height: "100%" }}
                type="number"
              />
            </Form.Item>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default TimeTrackingModal;

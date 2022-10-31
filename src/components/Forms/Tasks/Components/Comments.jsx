import { Comment, List } from "antd";
import TextArea from "antd/lib/input/TextArea";

export const CommentList = ({
  data,
  value,
  isEdit,
  setEditValue,
  onOpen,
  onCancel,
  onSubmit,
  onDelete,
  onChange,
  name,
}) => (
  <List
    dataSource={data.slice().reverse()}
    header={`${data?.length} ${data?.length > 1 ? "replies" : "reply"}`}
    itemLayout="horizontal"
    renderItem={(props, index) => (
      <Comment
        avatar={props.user?.avatar}
        author={<p className="">{props.user?.name}</p>}
        content={
          isEdit === props.id ? (
            <TextArea name={name} onChange={onChange} row={1} value={value} />
          ) : (
            <p>{props.contentComment || ""}</p>
          )
        }
        actions={[
          isEdit === props.id ? (
            <button
              onClick={() => {
                onSubmit(props.id, value);
              }}
              className="bg-blue-700 rounded-md py-1 px-3 mr-3 "
            >
              <span className="text-white font-semibold">Save</span>
            </button>
          ) : (
            <span
              onClick={() => {
                onOpen(props.id);
                setEditValue(props.contentComment);
              }}
              key="comment-nested-edit"
              className="text-black font-bold"
            >
              Edit
            </span>
          ),
          isEdit === props.id ? (
            <button
              onClick={() => {
                onCancel();
              }}
              className="bg-white hover:bg-slate-100 duration-100 rounded-md py-1 px-3"
            >
              <span className="text-black">Cancel</span>
            </button>
          ) : (
            <span
              onClick={() => {
                onDelete(props.id);
              }}
              key="comment-nested-delete"
              className="text-black font-bold"
            >
              Delete
            </span>
          ),
        ]}
      />
    )}
  />
);
export const Editor = ({ name, value, onChange, onSubmit, onReset }) => (
  <>
    <TextArea
      name={name}
      rows={2}
      onChange={onChange}
      value={value}
      style={{ width: "100%" }}
    />
    <button
      className="bg-blue-700 rounded-md py-1 px-3 mr-2 my-2 hover:scale-105 hover:bg-blue-600 duration-200 "
      onClick={onSubmit}
    >
      <span className="text-white font-semibold">Post</span>
    </button>
    <button
      className="bg-white hover:bg-slate-100 hover:scale-105 duration-200 rounded-md py-1 px-3"
      onClick={onReset}
    >
      <span className="text-black">Cancel</span>
    </button>
  </>
);

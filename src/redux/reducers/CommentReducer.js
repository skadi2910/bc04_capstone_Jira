import {
  DELETE_COMMENT,
  GET_ALL_COMMENTS,
  INSERT_COMMENT,
  UPDATE_COMMENT,
} from "../actions/types/CommentType";

const initialState = {
  commentList: [
    {
      alias: "",
      contentComment: "",
      deleted: false,
      id: null,
      taskId: null,
      user: {
        userId: 2701,
        name: "DatVu",
        avatar: "https://ui-avatars.com/api/?name=DatVu",
      },
      userId: 2701,
    },
  ],
};

export default function CommentReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case GET_ALL_COMMENTS:
      return { ...state, commentList: payload };
    case INSERT_COMMENT:
      return { ...state, commentList: [...state.commentList, payload] };
    case UPDATE_COMMENT: {
      const _commentList = [...state.commentList];
      const targetComment = _commentList.find(
        (comment) => comment.id === payload.id
      );
      const editComment = {
        ...targetComment,
        contentComment: payload.contentComment,
      };
      return {
        ...state,
        commentList: state.commentList.map((item) => {
          if (item.id !== editComment.id) {
            return item;
          }
          return { ...item, ...editComment };
        }),
      };
    }
    case DELETE_COMMENT:
      return {
        ...state,
        commentList: state.commentList.filter(
          (comment) => comment.id !== payload
        ),
      };
    default:
      return state;
  }
}

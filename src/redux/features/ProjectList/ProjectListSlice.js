import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { ProjectService } from "../../../services/ProjectService";

export const fetchProjectData = createAsyncThunk(
  "fetch/project",
  async (_, thunkAPI) => {
    try {
      const response = await ProjectService.getProjectList();
      const { data } = response;
      return data;
    } catch (error) {
      console.log("error: ", error);
      console.log("error.message: ", error.message);
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

const initialState = {
  projectList: [
    {
      id: "1",
      projectName: "abc",
      categoryName: "abc",
      creator: { id: 1, name: "Alice" },
      members: [],
    },
  ],
  isLoading: false,
  error: "",
};

const projectListSlice = createSlice({
  name: "project",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjectData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjectData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projectList = action.payload.content;
      state.error = "";
    });
    builder.addCase(fetchProjectData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.error;
    });
  },
});
// export const projectSelector = createSelector(
//   (state) => ({
//     projectList: state.projectList,
//     isLoading: state.isLoading,
//   }),
//   (state) => state
// );
export default projectListSlice.reducer;

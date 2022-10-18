import {
  createAsyncThunk,
  createSelector,
  createSlice,
} from "@reduxjs/toolkit";
import { ProjectService } from "../../../services/ProjectService";

export const fetchProjectDetailData = createAsyncThunk(
  "fetch/projectDetail",
  async (id, thunkAPI) => {
    try {
      const response = await ProjectService.getProjectDetail(id);
      const { data } = response;
      console.log("data: ", data);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
const initialState = {
  projectDetail: {},
  isLoading: false,
  error: "",
};

const ProjectDetailSlice = createSlice({
  name: "projectDetail",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjectDetailData.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchProjectDetailData.fulfilled, (state, action) => {
      state.isLoading = false;
      state.projectDetail = action.payload.content;
      console.log("action.payload.content: ", action.payload.content);
    });
    builder.addCase(fetchProjectDetailData.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export const selectProjectDetail = createSelector(
  (state) => ({
    projectDetail: state.projectDetail,
    loading: state.isLoading,
  }),
  (state) => state
);
export default ProjectDetailSlice.reducer;

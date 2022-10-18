import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingCircle from "../../../components/Loading/LoadingCircle";
import ProjectTable from "../../../components/Projects/ProjectTable";
import { fetchProjectListData } from "../../../redux/actions/ProjectListAction";
import { selectedKeyAction } from "../../../redux/actions/SelectKeyAction";

export default function ProjectManagement() {
  const dispatch = useDispatch();
  const key = 1;
  useEffect(() => {
    //! chinh key cho sidebar
    dispatch(selectedKeyAction(key));
    // dispatch lấy Project data từ API
    dispatch(fetchProjectListData());
  }, [dispatch]);
  const { isLoading, projectList } = useSelector(
    (state) => state.ProjectListReducer
  );

  const renderProjectList = () => {
    return isLoading === true ? (
      <LoadingCircle />
    ) : (
      <div className="outline-blue-500">
        <ProjectTable className="outline-green-500" data={projectList} />
      </div>
    );
  };
  return (
    <div>
      <div className="container mx-auto h-48 outline-red-500 px-20">
        {renderProjectList()}
      </div>
    </div>
  );
}

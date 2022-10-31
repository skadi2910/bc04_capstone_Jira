import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ProjectTable from "../../../components/Tables/ProjectTable";
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

  return (
    <div className="container xl:mx-auto xl:w-full lg:w-11/12 lg:mx-auto custom-scrollbar min-h-48 overflow-auto">
      <h3 className="text-start ml-5 mt-2 font-bold text-2xl">
        Project Management
      </h3>
      <ProjectTable />
    </div>
  );
}

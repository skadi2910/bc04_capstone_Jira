import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { getUserListAction } from "../../../redux/actions/UserAction";

export default function Search() {
    const dispatch = useDispatch();
    const searchRef = useRef(null);
    const handleSubmit = (event) => {
        event.preventDefault();
        const { value } = event.target;
        if (value) return dispatch(getUserListAction(value, true));
        return dispatch(getUserListAction("", true));

    };
    // ! logic: SEARCH: user nhập kí tự ==> lấy kí tự ==> dispatch action getUserList với kí tự đó
    const handleSearh = (event) => {
        const { value } = event.target;
        if (searchRef.current) {
            clearTimeout(searchRef.current);
        }
        searchRef.current = setTimeout(() => {
            dispatch(getUserListAction(value, true));
        }, 300);
    };

    return (
        <form className="mb-8" onSubmit={handleSubmit}>
            <label
                htmlFor="default-search"
                className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
                Search
            </label>
            <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-500 dark:text-gray-400"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                        />
                    </svg>
                </div>
                <input
                    onChange={handleSearh}
                    style={{
                        outline: "unset",
                    }}
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Tìm tên người dùng"
                />
                <button
                    type="submit"
                    className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                    Tìm kiếm
                </button>
            </div>
        </form>
    );
}

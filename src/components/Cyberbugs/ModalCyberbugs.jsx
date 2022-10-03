import React from 'react'
import { Select } from 'antd';
export default function ModalCyberbugs() {
    return (
        <>
            <div
                className="modal fade"
                id="searchModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="searchModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-search">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="search-block">
                                <input className="search" />
                                <i className="fa fa-search" />
                            </div>
                            <button
                                type="button"
                                className="close"
                                data-dismiss="modal"
                                aria-label="Close"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>RECENT ISSUES</p>
                            <div style={{ display: "flex" }}>
                                <div className="icon">
                                    <i className="fa fa-bookmark" />

                                    <span>taskDetailModal.taskName</span>
                                </div>
                                <div>
                                    <p>cyberlearn</p>
                                    <p>BUG-238066</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="modal fade"
                id="infoModal"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="infoModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-info">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="task-title">
                                <i className="fa fa-bookmark" />
                                <select name="typeId" value={"taskDetailModal.typeId"}
                                >

                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                </select>
                                <span>taskDetailModal.taskName</span>
                            </div>
                            <div style={{ display: "flex" }} className="task-click">
                                <div>
                                    <i className="fab fa-telegram-plane" />
                                    <span style={{ paddingRight: 20 }}>Give feedback</span>
                                </div>
                                <div>
                                    <i className="fa fa-link" />
                                    <span style={{ paddingRight: 20 }}>Copy link</span>
                                </div>
                                <i className="fa fa-trash-alt" style={{ cursor: "pointer" }} />
                                <button
                                    type="button"
                                    className="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-8">
                                        <p className="issue">This is an issue of type: Task.</p>
                                        <div className="description">
                                            <p>Description</p>
                                            <div>renderDescription</div>
                                        </div>
                                        <div style={{ fontWeight: 500, marginBottom: 10 }}>
                                            Jira Software (software projects) issue types:
                                        </div>
                                        <div className="title">
                                            <div className="title-item">
                                                <h3>
                                                    BUG <i className="fa fa-bug" />
                                                </h3>
                                                <p>
                                                    A bug is a problem which impairs or prevents the
                                                    function of a product.
                                                </p>
                                            </div>
                                            <div className="title-item">
                                                <h3>
                                                    STORY <i className="fa fa-book-reader" />
                                                </h3>
                                                <p>
                                                    A user story is the smallest unit of work that needs
                                                    to be done.
                                                </p>
                                            </div>
                                            <div className="title-item">
                                                <h3>
                                                    TASK <i className="fa fa-tasks" />
                                                </h3>
                                                <p>A task represents work that needs to be done</p>
                                            </div>
                                        </div>
                                        <div className="comment">
                                            <h6>Comment</h6>
                                            <div
                                                className="block-comment"
                                                style={{ display: "flex" }}
                                            >
                                                <div className="avatar">
                                                    <img
                                                        src={""}
                                                        alt="ok"
                                                    />
                                                </div>
                                                <div className="input-comment">
                                                    <input type="text" placeholder="Add a comment ..." />
                                                    <p>
                                                        <span style={{ fontWeight: 500, color: "gray" }}>
                                                            Protip:
                                                        </span>
                                                        <span>
                                                            press
                                                            <span
                                                                style={{
                                                                    fontWeight: "bold",
                                                                    background: "#ecedf0",
                                                                    color: "#b4bac6",
                                                                }}
                                                            >
                                                                M
                                                            </span>
                                                            to comment
                                                        </span>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="lastest-comment">
                                                <div className="comment-item">
                                                    <div
                                                        className="display-comment"
                                                        style={{ display: "flex" }}
                                                    >
                                                        <div className="avatar">
                                                            <img
                                                                src={""}
                                                                alt="ok"
                                                            />
                                                        </div>
                                                        <div>
                                                            <p style={{ marginBottom: 5 }}>
                                                                Lord Gaben <span>a month ago</span>
                                                            </p>
                                                            <p style={{ marginBottom: 5 }}>
                                                                Lorem ipsum dolor sit amet, consectetur
                                                                adipisicing elit. Repellendus tempora ex
                                                                voluptatum saepe ab officiis alias totam ad
                                                                accusamus molestiae?
                                                            </p>
                                                            <div>
                                                                <span style={{ color: "#929398" }}>Edit</span>•
                                                                <span style={{ color: "#929398" }}>Delete</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="status">
                                            <h6>STATUS</h6>
                                            <select
                                                name="statusId"
                                                className="custom-select"
                                                value="taskDetailModal.statusId"
                                                onChange={(event) => {
                                                }}

                                            >

                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                            </select>
                                        </div>
                                        <div className="assignees">
                                            <h6>ASSIGNEES</h6>
                                            <div className="row">
                                                <div className="col-6 mt-2 mb-2">
                                                    <div style={{ display: "flex" }} className="item"
                                                        key="{index.toString() + user}"
                                                    >
                                                        <div className="avatar">
                                                            <img src="" alt="" />
                                                        </div>
                                                        <p className="name mt-1 ml-1">
                                                            userName
                                                            <i
                                                                className="fa fa-times"
                                                                style={{ marginLeft: 5, cursor: "pointer" }}

                                                            />
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="col-6 mt-2 mb-2">
                                                    <Select

                                                        optionFilterProp="label"
                                                        style={{ width: "100%" }}
                                                        name="lstUser"
                                                        value="+ Add more "
                                                        className="form-control"
                                                    >

                                                    </Select>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="priority" style={{ marginBottom: 20 }}>
                                            <h6>PRIORITY</h6>
                                            <select
                                                className="form-control"
                                                name="priorityId"
                                                value="taskDetailModal.priorityId"

                                            >

                                                <option value="1">hello</option>
                                                <option value="2">hi</option>
                                            </select>
                                        </div>
                                        <div className="estimate">
                                            <h6>ORIGINAL ESTIMATE (HOURS)</h6>
                                            <input
                                                name="originalEstimate"
                                                type="text"
                                                className="estimate-hours"
                                                value="taskDetailModal.originalEstimate"
                                            />
                                        </div>
                                        <div className="time-tracking">
                                            <h6>TIME TRACKING</h6>
                                            <>
                                                <div style={{ display: "flex" }}>
                                                    <i className="fa fa-clock" />
                                                    <div style={{ width: "100%" }}>
                                                        <div className="progress">
                                                            <div
                                                                className="progress-bar"
                                                                role="progressbar"

                                                            />
                                                        </div>
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "space-between",
                                                            }}
                                                        >
                                                            <p className="logged">11h logged</p>
                                                            <p className="estimate-time">
                                                                11h estimated
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-6">
                                                        <input className="form-control" name="timeTrackingSpent" value={11} />
                                                    </div>
                                                    <div className="col-6">
                                                        <input className="form-control" name="timeTrackingRemaining" value={11} />
                                                    </div>
                                                </div>
                                            </>
                                        </div>
                                        <div style={{ color: "#929398" }}>
                                            Create at a month ago
                                        </div>
                                        <div style={{ color: "#929398" }}>
                                            Update at a few seconds ago
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

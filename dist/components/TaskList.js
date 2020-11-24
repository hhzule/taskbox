import React from "react";
import TaskComponent from "./TaskComponent";
const TaskList = ({ loading, tasks, onPinTask, onArchiveTask, onUnPinTask, }) => {
    const events = {
        onPinTask,
        onArchiveTask,
        onUnPinTask,
    };
    const LoadingRow = (React.createElement("div", { className: "loading-item" },
        React.createElement("span", { className: "glow-checkbox" }),
        React.createElement("span", { className: "glow-text" },
            React.createElement("span", null, "Loading"),
            " ",
            React.createElement("span", null, "cool"),
            " ",
            React.createElement("span", null, "state"))));
    if (loading) {
        return React.createElement("div", { className: "list-items" }, LoadingRow);
    }
    if ((tasks === null || tasks === void 0 ? void 0 : tasks.length) === 0) {
        return (React.createElement("div", { className: "list-items" },
            React.createElement("div", { className: "title-message" }, "Your task list is empty"),
            React.createElement("div", { className: "subtitle-message" }, "You may run some errands")));
    }
    const tasksInOrder = [
        ...tasks === null || tasks === void 0 ? void 0 : tasks.filter((t) => t.state === "TASK_PINNED"),
        ...tasks === null || tasks === void 0 ? void 0 : tasks.filter((t) => t.state !== "TASK_PINNED"),
    ];
    return (React.createElement("div", { className: "list-items" }, !!tasksInOrder &&
        tasksInOrder.map((task) => (React.createElement(TaskComponent, Object.assign({ key: task.id, task: task }, events))))));
};
export default TaskList;

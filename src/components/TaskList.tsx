import React from "react";
import TaskComponent from "./TaskComponent";
import { Task, TaskListprops } from "../types/task.types";

const TaskList: React.FC<TaskListprops> = ({
  loading,
  tasks,
  onPinTask,
  onArchiveTask,
  onUnPinTask,
}) => {
  const events = {
    onPinTask,
    onArchiveTask,
    onUnPinTask,
  };
  const LoadingRow = (
    <div className="loading-item">
      <span className="glow-checkbox" />
      <span className="glow-text">
        <span>Loading</span> <span>cool</span> <span>state</span>
      </span>
    </div>
  );

  if (loading) {
    return <div className="list-items">{LoadingRow}</div>;
  }

  if (tasks?.length === 0) {
    return (
      <div className="list-items">
        <div className="title-message">Your task list is empty</div>
        <div className="subtitle-message">You may run some errands</div>
      </div>
    );
  }
  const tasksInOrder = [
    ...tasks.filter((t) => t.state === "TASK_PINNED"),
    ...tasks.filter((t) => t.state !== "TASK_PINNED"),
  ];
  return (
    <div className="list-items">
      {!!tasksInOrder &&
        tasksInOrder.map((task) => (
          <TaskComponent key={task.id} task={task} {...events} />
        ))}
    </div>
  );
};

export default TaskList;

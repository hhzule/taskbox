import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinTask, unPinTask, archive } from "../store/store";
import { Task } from "../types/task.types";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const InboxScreen = () => {
  const task = useSelector((state: Task[]) => state);
  const dispatch = useDispatch();

  const onPinTask = (id: string) => {
    dispatch(pinTask({ id: id }));
  };
  const onArchiveTask = (id: string) => {
    dispatch(archive({ id: id }));
  };
  const onUnPinTask = (id: string) => {
    dispatch(unPinTask({ id: id }));
  };
  return (
    <div>
      <AddTask />
      <TaskList
        tasks={task as Task[]}
        onPinTask={onPinTask}
        onArchiveTask={onArchiveTask}
        onUnPinTask={onUnPinTask}
      />
    </div>
  );
};

export default InboxScreen;

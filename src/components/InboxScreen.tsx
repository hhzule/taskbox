import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinTask, unPinTask, archive } from "../store/store";
import { Task } from "../types/task.types";
import TaskList from "./TaskList";
import { addTask } from "../store/store";

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

  const [title, setTitle] = useState<string>("");
  const [error, setError] = useState<string | undefined>();

  const handleSubmit = () => {
    if (title !== "") {
      dispatch(addTask({ title }));
      setTitle("");
    } else {
      setError("Title is required");
    }
  };
  return (
    <>
      add task
      <p className="text-white">Title</p>
      <input
        className=""
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
      />
      {error && <p className="">{error}</p>}
      <button
        className="py-1 px-4 focus:outline-none bg-pink-600 text-white rounded my-3"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <TaskList
        tasks={task as Task[]}
        onPinTask={onPinTask}
        onArchiveTask={onArchiveTask}
        onUnPinTask={onUnPinTask}
      />
    </>
  );
};

export default InboxScreen;

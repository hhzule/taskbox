import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { pinTask, unPinTask, archive } from "../store/store";
import { Task } from "../types/task.types";
import TaskList from "./TaskList";
import { addTask } from "../store/store";
import "./inboxScreen.css";
import srcimg from "../task.webp";
import allinone from "../allinone.png";
import ts from "../sb.png";

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
      <div
        className="
      header-img
    "
      >
        {" "}
        <h1 className="head-title">Task List</h1>
        <br />
        <img src={allinone} className="allimg" alt="" />
        <img src={ts} className="sbimg" alt="" />
        <img className="img" src={srcimg} alt="" />
      </div>

      <p className="text-white">Title</p>
      <input
        className="add-task-input"
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
          setError("");
        }}
      />
      {error && <p className="">{error}</p>}
      <button className="main-add-btn" onClick={handleSubmit}>
        Add
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

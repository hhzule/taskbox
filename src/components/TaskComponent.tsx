import React, { FC } from "react";
import { Task } from "../types/task.types";

interface props {
  task: Task;
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
  onUnPinTask?: (id: string) => void;
}

const TaskComponent: FC<props> = ({
  task: { id, title, state },
  onArchiveTask,
  onPinTask,
  onUnPinTask,
}) => {
  return (
    <div className={`list-item ${state}`}>
      <label className="checkbox">
        <input
          type="checkbox"
          defaultChecked={state === "TASK_ARCHIVED"}
          disabled={true}
          name="checked"
        />
        <span
          className="checkbox-custom"
          // onClick={(e) => onArchiveTask(id)}
          onClick={(e) => {
            state !== "TASK_ARCHIVED"
              ? !!onPinTask && onPinTask(id)
              : !!onUnPinTask && onUnPinTask(id);
          }}
        />
      </label>
      <div className="title">
        <input
          type="text"
          value={title}
          readOnly={true}
          placeholder="Input title"
        />
      </div>

      <div className="actions" onClick={(event) => event.stopPropagation()}>
        {state !== "TASK_ARCHIVED" && (
          // eslint-disable-next-line jsx-a11y/anchor-is-valid
          <a onClick={() => !!onArchiveTask && onArchiveTask(id)}>
            <span className={`icon-star`} />
          </a>
        )}
      </div>
    </div>
  );
};

export default TaskComponent;

import React from "react";
import TaskComponent from "./TaskComponent";

export default {
  component: TaskComponent,
  title: "Task",
};

const TaskCom = (args: any) => <TaskComponent {...args} />;

export const Default: any = TaskCom.bind({});

Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

export const Pinned: any = TaskCom.bind({});

Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

export const Archived: any = TaskCom.bind({});

Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};

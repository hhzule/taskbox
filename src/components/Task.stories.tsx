import React from "react";
import TaskComponent from "./TaskComponent";
import { Meta } from "@storybook/react";

export default {
  component: TaskComponent,
  title: "Task",
} as Meta;

const TaskCom = (args: any) => <TaskComponent {...args} />;

const Default: any = TaskCom.bind({});

Default.args = {
  task: {
    id: "1",
    title: "Test Task",
    state: "TASK_INBOX",
    updatedAt: new Date(2018, 0, 1, 9, 0),
  },
};

const Pinned: any = TaskCom.bind({});

Pinned.args = {
  task: {
    ...Default.args.task,
    state: "TASK_PINNED",
  },
};

const Archived: any = TaskCom.bind({});

Archived.args = {
  task: {
    ...Default.args.task,
    state: "TASK_ARCHIVED",
  },
};
export { Default, Pinned, Archived };

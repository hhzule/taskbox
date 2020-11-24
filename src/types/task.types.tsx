export interface Task {
  id: string;
  title: string;
  state?: string;
}

export interface TaskProp {
  args: { task: { id: string; title: string; state: string; updatedAt: Date } };
  task: Task;
  onArchiveTask: boolean;
  onPinTask: boolean;
}
export interface TaskListprops {
  loading?: boolean;
  tasks: Task[];
  onPinTask?: (id: string) => void;
  onArchiveTask?: (id: string) => void;
  onUnPinTask?: (id: string) => void;
  error?: string;
}
export interface props {
  task: Task;
  onArchiveTask?: (id: string) => void;
  onPinTask?: (id: string) => void;
  onUnPinTask?: (id: string) => void;
}

export interface Day {
  number: number;
  tasks: [];
}

export interface Task {
  id: string;
  date: string;
  title: string;
  labels: string[];
  color: string;
}
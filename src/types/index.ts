export interface Day {
  number: number;
  tasks: [];
}

export interface TaskInterface {
  id: string;
  date: string;
  title: string;
  labels: Label[];
  color: string;
}

export interface Label {
  id: string;
  name: string;
  color: string;
}
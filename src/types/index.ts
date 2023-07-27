export interface Day {
  number: number;
  tasks: [];
}

export interface TaskInterface {
  id: string;
  index: number;
  date: string;
  title: string;
  labels: Label[];
  color: string;
}

export interface TaskProps extends TaskInterface {
  indexItem: number
}
export interface Label {
  id: string;
  name: string;
  color: string;
}

export interface DataForModalInterface {
  id?: string;
  date: string;
  title?: string;
  labels?: Label[];
  index: number;
}
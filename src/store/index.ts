import dayjs from 'dayjs'
import {create} from 'zustand'
import { Label, TaskInterface } from '../types';

interface DateStore {
  currentMonthIndex: number;
  tasks: TaskInterface[];
  isModalCreateOpen: boolean;
  dataForModal: string;
  labels: Label[];
  addLabels: (label: string) => void;
  setDataForModal: (value: string) => void;
  setIsModalCreateOpen: (value: boolean) => void;
  setCurrentMonthIndex: (index: number) => void;
  
  getTasksForCurrentDay: (day: string) => TaskInterface[] | void;
  createTask: (task: TaskInterface) => void;
  editTask: (id: string) => void;
  deleteTask: (id: string) => void;
  // filterTasks: (input: string) => void;
}

export const useDateStore = create<DateStore>((set) => ({
  labels: [{ name: 'Task', color: '201, 63, 255' }, { name: 'Improvement', color: '1, 176, 52' }, { name: 'Feature', color: '0, 150, 207'}, { name: 'Bug', color: '255, 59, 48' }],
  addLabels: (label: string) => set((state: any) => ({labels: [...state.labels, label]})),

  dataForModal: '',
  setDataForModal: (value: string) => set(() => ({dataForModal: value})),

  isModalCreateOpen: false,
  setIsModalCreateOpen: (value: boolean) => set(() => ({isModalCreateOpen: value})),

  currentMonthIndex: dayjs().month(),
  setCurrentMonthIndex: (index: any) => set((state: any) => ({currentMonthIndex: state.currentMonthIndex + index})),
  
  tasks: [],
  getTasksForCurrentDay: (day: string) => set((state: any) => state.tasks.filter((task: TaskInterface) => task.date === day)),
  createTask: (task: TaskInterface) => set((state: any) => ({tasks: [...state.tasks, task]})),
  editTask: (id: string) => set((state: any) => ({tasks: state.tasks.map((task: TaskInterface) => task.id === id)})),
  deleteTask: (id: string) => set((state: any) => ({tasks: state.tasks.filter((task: any) => task.id !== id)})),
  // filterTasks: (input: string) => set((state: any) => ({ tasks: state.tasks.filter((task: Task) => task.labels.includes(input))}))
}))
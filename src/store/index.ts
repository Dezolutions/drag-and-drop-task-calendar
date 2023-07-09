import dayjs from 'dayjs'
import {create} from 'zustand'
import { Task } from '../types';

interface DateStore {
  currentMonthIndex: number;
  tasks: Task[];
  isModalCreateOpen: boolean;
  dataForModal: string;
  labels: string[];
  addLabels: (label: string) => void;
  setDataForModal: (value: string) => void;
  setIsModalCreateOpen: (value: boolean) => void;
  setCurrentMonthIndex: (index: number) => void;
  
  getTasksForCurrentDay: (day: string) => Task[] | void;
  createTask: (task: Task) => void;
  deleteTask: (id: string) => void;
  filterTasks: (input: string) => void;
}

export const useDateStore = create<DateStore>((set) => ({
  labels: ['Main', 'Important', 'Work', 'Home', 'Study'],
  addLabels: (label: string) => set((state: any) => ({labels: [...state.labels, label]})),

  dataForModal: '',
  setDataForModal: (value: string) => set(() => ({dataForModal: value})),

  isModalCreateOpen: false,
  setIsModalCreateOpen: (value: boolean) => set(() => ({isModalCreateOpen: value})),

  currentMonthIndex: dayjs().month(),
  setCurrentMonthIndex: (index: any) => set((state: any) => ({currentMonthIndex: state.currentMonthIndex + index})),
  
  tasks: [],
  getTasksForCurrentDay: (day: string) => set((state: any) => state.tasks.filter((task: Task) => task.date === day)),
  createTask: (task: Task) => set((state: any) => ({tasks: [...state.tasks, task]})),
  deleteTask: (id: string) => set((state: any) => ({tasks: state.tasks.filter((task: any) => task.id !== id)})),
  filterTasks: (input: string) => set((state: any) => ({ tasks: state.tasks.filter((task: Task) => task.labels.includes(input))}))
}))
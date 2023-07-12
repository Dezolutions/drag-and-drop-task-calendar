import dayjs from 'dayjs'
import {create} from 'zustand'
import { DataForModalInterface, Label, TaskInterface } from '../types';

interface DateStore {

  currentMonthIndex: number;
  setCurrentMonthIndex: (index: number) => void;

  tasks: TaskInterface[];
  setTasks: (tasks: TaskInterface[]) => void;
  createTask: (task: TaskInterface) => void;
  editTask: (id: TaskInterface) => void;
  deleteTask: (id: string) => void;

  isModalCreateOpen: boolean;
  setIsModalCreateOpen: (value: boolean) => void;

  dataForModal: DataForModalInterface;
  setDataForModal: (value: DataForModalInterface) => void;

  labels: Label[];
  
  addLabel: (label: Label) => void;
  editLabel: (id: string, color: string, name: string) => void;
  
  searchValue: string;
  setSearchValue: (value: string) => void;
}

export const useDateStore = create<DateStore>((set) => ({
  labels: [
    {id: 'defaultlabel1', name: 'Task', color: '201, 63, 255' },
    {id: 'defaultlabel2', name: 'Improvement', color: '1, 176, 52' },
    {id: 'defaultlabel3', name: 'Feature', color: '0, 150, 207'},
    {id: 'defaultlabel4', name: 'Bug', color: '255, 59, 48' }
  ],
  addLabel: (label: Label) => set((state) => ({labels: [...state.labels, label]})),
  editLabel: (id: string, name: string, color: string,) => set((state) => ({labels: state.labels.map((item: Label) => {
    if(item.id === id) {
      item.color = color;
      item.name = name; 
    }
    return item;
  })})),

  dataForModal: {id: '', date: '', title: '', labels: [], index: 0},
  setDataForModal: (value: DataForModalInterface) => set(() => ({dataForModal: {...value}})),

  isModalCreateOpen: false,
  setIsModalCreateOpen: (value: boolean) => set(() => ({isModalCreateOpen: value})),

  currentMonthIndex: dayjs().month(),
  setCurrentMonthIndex: (index: any) => set((state) => ({currentMonthIndex: state.currentMonthIndex + index})),
  
  tasks: [],
  setTasks: (tasks: TaskInterface[]) => set(() => ({tasks})),
  createTask: (task: TaskInterface) => set((state) => ({tasks: [...state.tasks, task]})),
  editTask: (task: TaskInterface) => set((state) => ({
    tasks: state.tasks.map((taskItem: TaskInterface) => {
      if(taskItem.id === task.id) {
        return task
      }
      return taskItem
    })
  })),
  deleteTask: (id: string) => set((state) => ({tasks: state.tasks.filter((task: TaskInterface) => task.id !== id)})),

  searchValue: '',
  setSearchValue: (value: string) => set(() => ({searchValue: value})),
}))
import dayjs from 'dayjs'
import {create} from 'zustand'

interface DateStore {
  currentMonthIndex: number;
  setCurrentMonthIndex: (index: number) => void;

}
export const useDateStore = create<DateStore>((set) => ({
  currentMonthIndex: dayjs().month(),
  setCurrentMonthIndex: (index: any) => set((state: any) => ({currentMonthIndex: state.currentMonthIndex + index})),
}))
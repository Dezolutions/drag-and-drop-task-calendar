
import { useDateStore } from "../store"
import { dayNumberStyle, dayStyle } from "../stylesComponents"
import dayjs from 'dayjs'
import React from "react"
interface CalendarItemProps {
  day: string
  dayMonth: string
  index: number
}

const CalendarItem :React.FC<CalendarItemProps> = React.memo(({day,dayMonth, index}) => {
  const isCurrentDay = day === dayjs().format('DD');
  const isPreviousMonthDay = (index === 0 && +day > 7) || (index === 4 && +day < 23);
  const {setIsModalCreateOpen, setDataForModal, tasks} = useDateStore()
  const filteredTasks = tasks.filter((task) => task.date === `${day} ${dayjs(new Date(dayjs().year(), +dayMonth - 1)).format(  "MMMM YYYY")}  `)

  const onTaskCreate = () => {
    setIsModalCreateOpen(true)
    setDataForModal(`${day} ${dayjs(new Date(dayjs().year(), +dayMonth - 1)).format(  "MMMM YYYY")}  `)
  }
  return (
    <div onClick={onTaskCreate} css={dayStyle(isCurrentDay, isPreviousMonthDay)}>
      <p css={dayNumberStyle}>{day}</p>
      <div>{filteredTasks &&  filteredTasks.map((task) => <p key={task.id}>{task.labels}</p>)}</div>
    </div>
  )
})

export default CalendarItem
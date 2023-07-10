
import { useDateStore } from "../store"
import { dayNumberStyle, dayStyle, moreTasksMessageStyle, tasksBlockStyle } from "../stylesComponents"
import dayjs from 'dayjs'
import React from "react"
import Task from "./Task"
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
  const onMoreTasksClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    console.log('more tasks')
  }
  return (
    <div onClick={onTaskCreate} css={dayStyle(isCurrentDay, isPreviousMonthDay)}>
      <p css={dayNumberStyle}>{day}</p>
      <div css={tasksBlockStyle}>
        {
          filteredTasks &&  filteredTasks.slice(0,3).map((task) => 
            <Task key={task.id} {...task}/>
          )
          
        }
        {filteredTasks && filteredTasks.length > 3 && (
      <p css={moreTasksMessageStyle} onClick={onMoreTasksClick}>+{filteredTasks.length - 3} more</p>
    )}
      </div>
    </div>
  )
})

export default CalendarItem
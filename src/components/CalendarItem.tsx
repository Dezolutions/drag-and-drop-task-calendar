import React from 'react'
import { useDateStore } from "../store"
import { dayNumberStyle, dayStyle, moreTasksMessageStyle, tasksBlockStyle } from "../stylesComponents"
import dayjs from 'dayjs'
import Task from "./Task"
import { Droppable } from "react-beautiful-dnd"
interface CalendarItemProps {
  day: string
  dayMonth: string
  index: number
}

const CalendarItem :React.FC<CalendarItemProps> = React.memo(({day,dayMonth, index}) => {
  const isCurrentDay = day === dayjs().format('DD');
  const isPreviousMonthDay = (index === 0 && +day > 7) || (index === 4 && +day < 23);
  const {setIsModalCreateOpen, setDataForModal, tasks, searchValue} = useDateStore()

  const filteredTasks = tasks.filter((task) =>
    task.date === `${day} ${dayjs(new Date(dayjs().year(), +dayMonth - 1)).format("MMMM YYYY")}` &&
    task.title.toLowerCase().includes(searchValue.toLowerCase())
  ).sort((a, b) => a.index - b.index);
  console.log(filteredTasks)
  const onTaskCreate = () => {
    setIsModalCreateOpen(true)
    setDataForModal({date: `${day} ${dayjs(new Date(dayjs().year(), +dayMonth - 1)).format(  "MMMM YYYY")}`, index: filteredTasks.length})
  }
  const onMoreTasksClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    console.log('more tasks')
  }
  return (
    <div onClick={onTaskCreate} css={dayStyle(isCurrentDay, isPreviousMonthDay)}>
      <p css={dayNumberStyle}>{day}</p>
        <Droppable droppableId={day}>
          {(provided) =>
            <div css={tasksBlockStyle} ref={provided.innerRef} {...provided.droppableProps}>
              {
                filteredTasks &&  filteredTasks.slice(0,3).map((task, indexItem) => 
                  <Task key={task.id} indexItem={indexItem} {...task}/>
                )
              }
              {filteredTasks && filteredTasks.length > 3 && (
                <p css={moreTasksMessageStyle} onClick={onMoreTasksClick}>+{filteredTasks.length - 3} more</p>
              )}
              {provided.placeholder}
            </div>
          
          }
          
        </Droppable>
    </div>
  )
})

export default CalendarItem
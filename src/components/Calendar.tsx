import React from 'react'
import {getMonth} from '../utils/getMonth'
import DayNames from './DayNames'
import {useDateStore} from '../store'
import { gridStyle } from '../stylesComponents'
import CalendarItem from './CalendarItem'
import EventModal from './EventModal'
import { DragDropContext } from 'react-beautiful-dnd'
import { TaskInterface } from '../types'

const Calendar :React.FC<{refLink: React.RefObject<any>}> = ({refLink}) => {
  
  const {currentMonthIndex, isModalCreateOpen, tasks, editTask} = useDateStore()
  const [currentMonth, setCurrentMonth] = React.useState(getMonth(currentMonthIndex))

  React.useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  function handleOnDragEnd(result: any) {
    if (!result.destination) return;

      const task : TaskInterface[] = tasks.filter((task: TaskInterface) => task.id === result.draggableId)
      const filteredTasks : TaskInterface[] = tasks.filter((task: TaskInterface) => task.date == result.destination.droppableId && task.id !== result.draggableId)
      filteredTasks.splice(result.destination.index, 0, task[0])
      filteredTasks.map((taskItem: TaskInterface, index: number) => {
        editTask({
          id: taskItem.id,
          title: taskItem.title,
          labels: taskItem.labels,
          date: result.destination.droppableId,
          color: taskItem.color,
          index: index
        })
      }) 


  }

  return (
    <div ref={refLink}>
      {isModalCreateOpen && <EventModal/>}
      <DayNames/>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <div css={gridStyle}>
          {currentMonth && currentMonth.map((week: any, index: number) => (
            <React.Fragment key={index}>
              {week.map((day: any) => (
                <CalendarItem 
                  key={day.format('DD')} 
                  day={day.format('DD')}
                  dayMonth={day.format('MM')} 
                  index={index}
                />
              ))}
            </React.Fragment>
          ))}
        </div>
      </DragDropContext>
    </div>
  )
}

export default Calendar
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
    console.log(result)
    if (!result.destination) return;
    if(result.destination.droppableId !== result.source.droppableId) {
      const task : TaskInterface[] = tasks.filter((task) => task.id === result.draggableId)
      editTask({
        id: task[0].id,
        title: task[0].title,
        labels: task[0].labels,
        date: `${result.destination.droppableId} ${task[0].date.split(' ')[1]} ${task[0].date.split(' ')[2]}`,
        color: task[0].color,
        index: result.destination.index
      })
    } else {
    }

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
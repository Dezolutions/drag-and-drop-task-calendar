import React from 'react'
import {getMonth} from '../utils/getMonth'
import DayNames from './DayNames'
import {useDateStore} from '../store'
import {useEffect} from 'react'
import { gridStyle } from '../stylesComponents'
import CalendarItem from './CalendarItem'
import EventModal from './EventModal'

const Month = () => {
  const {currentMonthIndex, isModalCreateOpen} = useDateStore()
  const [currentMonth, setCurrentMonth] = React.useState(getMonth(currentMonthIndex))

  useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIndex));
  }, [currentMonthIndex]);

  return (
    <div>
      {isModalCreateOpen && <EventModal/>}
      <DayNames/>
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
    </div>
  )
}

export default Month
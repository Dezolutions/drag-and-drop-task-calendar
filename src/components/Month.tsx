import React from 'react'
import {getMonth} from '../utils/getMonth'
import DayNames from './DayNames'
import dayjs from 'dayjs'
import classNames from 'classnames'
import {useDateStore} from '../store'

const Month = () => {
  const {currentMonthIndex} = useDateStore()
  const [currentMonth, setCurrentMonth] = React.useState(getMonth(currentMonthIndex))
  console.log(currentMonth)
  return (
    <div>
      <DayNames/>
      <div className='calendar'>
        {currentMonth && currentMonth.map((week: any, index: number) => (
          <React.Fragment key={index}>
            {week.map((day: any, i: number) => (
              <div className={classNames('day', {
                  'current-day': day.format('DD') === dayjs().format('DD'),
                  'previous-month-day': index === 0 && +day.format('DD') !== 1,
                })} key={i}
              >
                <p className='day-number'>{day.format('DD')}</p>
              </div>
            ))}
          </React.Fragment>
        ))}
        
      </div>
    </div>
  )
}

export default Month
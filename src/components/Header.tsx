import dayjs from "dayjs"
import {useDateStore} from '../store'
import { headerStyle} from '../stylesComponents'
const Header :React.FC = () => {
  const {setCurrentMonthIndex, currentMonthIndex} = useDateStore()
  const onNext = () => {
    setCurrentMonthIndex(+1)
  }
  const onPrev = () => {
    setCurrentMonthIndex(-1)
  }
  return (
    <header css={headerStyle}>
      <h1>Task Calendar</h1>
      <div>Download calendar image</div>
      <div>Import</div>
      <div>Export</div>
      {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
          "MMMM YYYY"
        )}
      <div>
        <button onClick={onPrev}>Prev</button>
        <button onClick={onNext}>Next</button>
      </div>
    </header>
  )
}

export default Header
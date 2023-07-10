import dayjs from "dayjs"
import {useDateStore} from '../store'
import { downloadBtnStyle, headerCenterStyle, headerContentStyle, headerLeftStyle, headerRightStyle, headerStyle, headerTitleStyle, switchMonthBtnStyle} from '../stylesComponents'
import {TbFileExport, TbFileImport} from 'react-icons/tb'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import Container from "./Container"
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
      <Container>
          <div css={headerContentStyle}>
            <div css={headerLeftStyle}>
              <h1 css={headerTitleStyle}>Task Calendar</h1>
              <button css={downloadBtnStyle}>Download calendar image</button>
            </div>
            <div css={headerCenterStyle}>
              <button css={switchMonthBtnStyle} onClick={onPrev}><FaChevronLeft/></button>
              <button css={switchMonthBtnStyle} onClick={onNext}><FaChevronRight/></button>
              <p>
                {dayjs(new Date(dayjs().year(), currentMonthIndex)).format(
                  "MMMM YYYY"
                )}
              </p> 
            </div>
            <div css={headerRightStyle}>
              <div>Import <TbFileImport/></div>
              <div>Export <TbFileExport/></div>
              
            </div>
          </div>
      </Container>
    </header>
  )
}

export default Header
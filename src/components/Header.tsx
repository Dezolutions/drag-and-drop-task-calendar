import dayjs from "dayjs"
import {useDateStore} from '../store'
import { downloadBtnStyle, fileStyle, headerCenterStyle, headerContentStyle, headerLeftStyle, headerRightStyle, headerStyle, headerTitleStyle, switchMonthBtnStyle} from '../stylesComponents'
import {TbFileExport, TbFileImport} from 'react-icons/tb'
import {FaChevronLeft, FaChevronRight} from 'react-icons/fa'
import Container from "./Container"
import FileSaver from 'file-saver'

const Header :React.FC<{onClick: () => void}> = ({onClick}) => {

  const {tasks, setTasks,setCurrentMonthIndex, currentMonthIndex} = useDateStore()
  
  const onImageDownload = () => {
    onClick()
  }
  
  const onFileDownload = () => {
    const jsonTasks = JSON.stringify(tasks)
    const blobParts: BlobPart[] = [jsonTasks];
    const blob = new Blob(blobParts, {type: 'application/json'});
    FileSaver.saveAs(blob, 'tasks.json');
  }
  const handleFileRead = (event: any) => {
    const content = event.target.result;
    setTasks(JSON.parse(content));
  };
  
  const handleFileUpload = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = handleFileRead;
      reader.readAsText(file);
    }
  };

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
              <button onClick={onImageDownload} css={downloadBtnStyle}>Download calendar image</button>
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
              <label css={fileStyle}>
                Import <TbFileImport/>
                <input onChange={handleFileUpload} style={{position: 'absolute', top: '-100px'}} type="file" id="import-file" />
              </label>
              
              <div onClick={onFileDownload} css={fileStyle}>Export <TbFileExport/></div>
            </div>
          </div>
      </Container>
    </header>
  )
}

export default Header
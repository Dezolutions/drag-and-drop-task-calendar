import { taskStyle } from "../stylesComponents"
import { TaskInterface } from "../types"
import {BsCircleFill} from 'react-icons/bs'

const Task : React.FC<TaskInterface> = ({title, labels, color}) => {
  
  const onTaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }
  
  return (
    <div onClick={onTaskClick} css={taskStyle(labels.length === 1 ? labels[0].color : color)}>
      <BsCircleFill color={`rgb(${labels.length === 1 ? labels[0].color : color})`}/>
      <p>{title}</p>
    </div>
  )
}

export default Task
import { Draggable } from "react-beautiful-dnd"
import { useDateStore } from "../store"
import { taskOpenBtnStyle, taskStyle } from "../stylesComponents"
import { TaskProps } from "../types"
import {BsCircleFill} from 'react-icons/bs'
import { FiEdit3 } from "react-icons/fi";

const Task :React.FC<TaskProps> = ({title, labels, color, date, id, index, indexItem}) => {
  const {setIsModalCreateOpen, setDataForModal} = useDateStore()

  const onTaskClick = () => {
    setIsModalCreateOpen(true)
    setDataForModal({id, title, labels, date, index})
  }

  return (
    <Draggable draggableId={id} index={indexItem}>
      {(provided) => 
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={onTaskClick} css={taskStyle(labels.length === 1 ? labels[0].color : color)}>
          <BsCircleFill color={`rgb(${labels.length === 1 ? labels[0].color : color})`}/>
          <p>{title}</p>
          <button css={taskOpenBtnStyle} onClick={onTaskClick}><FiEdit3/></button>
        </div>
      }
    </Draggable>
  )
}

export default Task
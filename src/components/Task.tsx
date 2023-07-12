import { Draggable } from "react-beautiful-dnd"
import { useDateStore } from "../store"
import { taskStyle } from "../stylesComponents"
import { TaskInterface } from "../types"
import {BsCircleFill} from 'react-icons/bs'

const Task :React.FC<any> = ({title, labels, color, date, id, index, indexItem}) => {
  const {setIsModalCreateOpen, setDataForModal} = useDateStore()

  const onTaskClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setIsModalCreateOpen(true)
    setDataForModal({id, title, labels, date, index})
  }
  
  return (
    <Draggable draggableId={id} index={indexItem}>
      {(provided) => 
        <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps} onClick={onTaskClick} css={taskStyle(labels.length === 1 ? labels[0].color : color)}>
        <BsCircleFill color={`rgb(${labels.length === 1 ? labels[0].color : color})`}/>
        <p>{title}</p>
      </div>}
    </Draggable>
  )
}

export default Task
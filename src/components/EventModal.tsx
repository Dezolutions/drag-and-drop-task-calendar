import React,{ useState } from "react"
import { modalBtnCloseStyle, modalStyle, modalWrapperStyle } from "../stylesComponents"
import { useDateStore } from "../store"
import {IoClose} from 'react-icons/io5'

const EventModal = () => {
  const id = React.useId()
  const [title, setTitle] = useState<string>('')
  const {setIsModalCreateOpen, dataForModal, createTask, labels} = useDateStore()

  const onInputEvent = (e: any) => {
    setTitle(e.target.value)
  }

  const onCloseModal = () => {
    setIsModalCreateOpen(false)
  }
  const onCreateTask = () => {
    createTask({
      id: id,
      date: dataForModal,
      title: title,
      labels: ['Important'],
      color: 'red',
    })
    setIsModalCreateOpen(false)
  }
  return (
    <div css={modalWrapperStyle}>
      <div css={modalStyle}>
        <input type="text" placeholder="Add title" value={title} onInput={onInputEvent} />
        <p>{dataForModal}</p>
        <div className="colors">
          {labels && labels.map((label) => <p key={label}>{label}</p>)}
        </div>
        <button onClick={onCreateTask}>Save</button>
        <button css={modalBtnCloseStyle} onClick={onCloseModal}><IoClose fontSize={26}/></button>
      </div>
    </div>
  )
}

export default EventModal
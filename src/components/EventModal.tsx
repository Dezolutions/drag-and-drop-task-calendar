import React,{ useState } from "react"
import { LabelsPlaceholderStyle, addedLabelBtnStyle, addedLabelStyle, modalBtnCloseStyle, modalDateStyle, modalInputStyle, modalLabelBlockStyle, modalLabelStyle, modalLabelsInputStyle, modalLabelsStyle, modalSaveBtnStyle, modalStyle, modalWrapperStyle } from "../stylesComponents"
import { useDateStore } from "../store"
import {IoClose} from 'react-icons/io5'
import {BiCalendar} from 'react-icons/bi'
import {BsFillBookmarkFill} from 'react-icons/bs'
import { Label } from "../types"

const EventModal = () => {
  const id = React.useId()
  const [title, setTitle] = useState<string>('')
  const [labelInput, setLabelInput] = useState<Label[]>([])
  const {setIsModalCreateOpen, dataForModal, createTask, labels} = useDateStore()

  const onLabelClick = (label: Label): void => {
    if (!labelInput.find((item) => item.name === label.name)) {
      setLabelInput((prevLabels) => [...prevLabels, label]);
    }
  };
  const onDeleteLabel = (labelName: string) => {
 
    setLabelInput((prevLabels) =>
    prevLabels.filter((label) => label.name !== labelName)
  );
  }
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
      labels: labelInput,
      color: '96, 107, 110',
    })
    setIsModalCreateOpen(false)
  }
  return (
    <div css={modalWrapperStyle}>
      <div css={modalStyle}>
        <input css={modalInputStyle} type="text" placeholder="Add title" value={title} onInput={onInputEvent} />
        <div css={modalDateStyle}>
          <p><BiCalendar fontSize={25}/></p>
          <p>{dataForModal}</p>
        </div>
        <div css={modalLabelsStyle}>
          <p><BsFillBookmarkFill fontSize={25}/></p>
          <div css={modalLabelsInputStyle} >
            {labelInput.length
              ? labelInput.map((label, index) =>
              <div css={addedLabelStyle(label.color)} key={index}>
                <p>{label.name}</p>
                <button css={addedLabelBtnStyle} onClick={() => onDeleteLabel(label.name)} ><IoClose/></button>
              </div>) 
              : <p css={LabelsPlaceholderStyle}>Labels</p>
            }
          </div>
        </div>
        <div css={modalLabelBlockStyle}>
          
          {labels && labels.map((label, index) => 
            <button 
              disabled={labelInput.find(labelInput => labelInput.name === label.name) ? true : false}
              onClick={() => onLabelClick(label)} 
              css={modalLabelStyle(label.color)} 
              value={label.name} 
              key={index}>
                {label.name}
            </button>
          )}
        </div>
        <button css={modalSaveBtnStyle} onClick={onCreateTask}>Save</button>
        <button css={modalBtnCloseStyle} onClick={onCloseModal}><IoClose fontSize={26}/></button>
      </div>
    </div>
  )
}

export default EventModal
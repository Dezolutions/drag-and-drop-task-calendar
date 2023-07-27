import React from 'react'
import { editBtnStyle, mainBtnStyle, sidebarLabelColorItemStyle, sidebarLabelInputStyle, sidebarLabelStyle } from '../stylesComponents'
import { GiCancel, GiConfirmed } from 'react-icons/gi'
import { useDateStore } from '../store'
import { nanoid } from 'nanoid'
import { hexToRgb } from '../utils/hexToRgb'

const LabelCreate :React.FC = () => {
  const {addLabel} = useDateStore()
  const [nameValue, setNameValue] = React.useState<string>('')
  const [colorValue, setColorValue] = React.useState<string>('#000000')
  const [isCreateLabelOpen, setIsCreateLabelOpen] = React.useState<boolean>(false)
  const inputRef = React.useRef<HTMLInputElement>(null)

  const onCreateLabel = () => {
    setIsCreateLabelOpen(true)
  }

  const onChangeName = (e: any) => {
    setNameValue(e.target.value)
  }
  const onChangeColor = (e: any) => {
    setColorValue(e.target.value)
  }
  const onCancel = () => {
    setIsCreateLabelOpen(false)
  }
  const onConfirm = () => {
    addLabel({
      id: nanoid(),
      name: nameValue, 
      color: hexToRgb(colorValue)
    })
    setIsCreateLabelOpen(false)
    setColorValue('#000000')
    setNameValue('')
  }

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, [isCreateLabelOpen])

  return (
    <>
    {isCreateLabelOpen &&
        <div css={sidebarLabelStyle(false)}>
        <input type="color" value={colorValue} onChange={onChangeColor}  css={sidebarLabelColorItemStyle(false)} />
        <input ref={inputRef} value={nameValue} onChange={onChangeName} css={sidebarLabelInputStyle} type="text"  name="" id="" />
        <button css={editBtnStyle} onClick={onConfirm} ><GiConfirmed fontSize={16} color={'orange'}/></button>
        <button css={editBtnStyle} onClick={onCancel} ><GiCancel fontSize={16} color={'orange'}/></button>
      </div>
      }
      <button css={mainBtnStyle} onClick={onCreateLabel}>Create Label</button></>
  )
}

export default LabelCreate
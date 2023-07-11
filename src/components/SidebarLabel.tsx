import React from "react";
import { Label } from "../types"
import { editBtnStyle, sidebarLabelColorItemStyle, sidebarLabelInputStyle, sidebarLabelStyle } from "../stylesComponents";
import { FiEdit3 } from "react-icons/fi";
import { GiConfirmed, GiCancel } from "react-icons/gi";
import { rgbToHex } from "../utils/rgbToHex";
import { useDateStore } from "../store";
import { hexToRgb } from "../utils/hexToRgb";

const SidebarLabel :React.FC<Label> = ({color, name, id}) => {
  const [nameValue, setNameValue] = React.useState<string>(name)
  const [colorValue, setColorValue] = React.useState<string>(color)
  const [readOnly, setReadOnly] = React.useState<boolean>(true)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const colorRef = React.useRef<HTMLInputElement>(null)
  const {editLabel} = useDateStore()

  React.useEffect(() => {
    setColorValue(rgbToHex(color))
  }, [])

  const onEdit = () => {
    setReadOnly(false)
    inputRef?.current?.focus();
    colorRef?.current?.click();
  }
  const onChangeName = (e: any) => {
    setNameValue(e.target.value)
  }
  const onCancel = () => {
    setReadOnly(true)
    setNameValue(name)
    setColorValue(rgbToHex(color))
  }
  const onChangeColor = (e: any) => {
    setColorValue(e.target.value)
  }
  const onConfirm = () => {
    const rgbColor = hexToRgb(colorValue)
    setReadOnly(true)
    editLabel(id,nameValue,rgbColor)
  }

  return (
    <div css={sidebarLabelStyle(readOnly)}>
      <input ref={colorRef} type="color" disabled={readOnly} value={colorValue} onChange={onChangeColor} readOnly={readOnly} css={sidebarLabelColorItemStyle(readOnly)} />
      <input ref={inputRef} css={sidebarLabelInputStyle} type="text" value={nameValue} onChange={onChangeName} readOnly={readOnly} name="" id="" />
      {readOnly 
       ? <button css={editBtnStyle} onClick={onEdit}><FiEdit3 fontSize={16} color={'orange'}/></button>
       : <>
          <button css={editBtnStyle} onClick={onConfirm}><GiConfirmed fontSize={16} color={'orange'}/></button>
          <button css={editBtnStyle} onClick={onCancel}><GiCancel fontSize={16} color={'orange'}/></button>
        </>
       }
    </div>

  )
}

export default SidebarLabel
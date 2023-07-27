import { useDateStore } from "../store"
import { sidebarStyle } from "../stylesComponents"
import { Label } from "../types"
import Search from "./Search"
import SidebarLabel from "./SidebarLabel"
import React from "react"
import LabelCreate from "./LabelCreate"

const Sidebar :React.FC = () => {
  const {labels} = useDateStore()

  return (
    <div css={sidebarStyle}>
      <p>Filter tasks:</p>
      <Search />
      <p>Labels:</p>
      <div className="label-item">
        {labels && labels.map((label: Label) => <SidebarLabel key={label.name} {...label} /> )}
      </div>
      <LabelCreate/>
    </div>
  )
}

export default Sidebar
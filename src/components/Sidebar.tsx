import { useDateStore } from "../store"
import Search from "./Search"

const Sidebar = () => {
  const {labels} = useDateStore()
  return (
    <div>
      <p>Filter tasks:</p>
      <Search />
      <p>Labels:</p>
      <div className="label-item">
        {labels && labels.map((label) => <p key={label}>{label}</p>)}
      </div>
      <button>Create Label</button>
      <button>Edit Labels</button>
    </div>
  )
}

export default Sidebar
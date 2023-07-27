import { DebounceInput } from "react-debounce-input"
import { searchInputStyle } from "../stylesComponents"
import React from "react"
import { useDateStore } from "../store"

const Search :React.FC = () => {

  const {setSearchValue} = useDateStore()
  const [search, setSearch] = React.useState<string>('')
  console.log(search)

  const handleSearch = (e: any) => {
    console.log(e.target.value)
    setSearch(e.target.value)
    setSearchValue(e.target.value)
  }

  return (

    <>
      <DebounceInput
        css={searchInputStyle}
        minLength={1}
        debounceTimeout={300}
        placeholder="Enter task title..."
        type="text"
        value={search}
        onChange={handleSearch}
      />
    </>
  )
}

export default Search

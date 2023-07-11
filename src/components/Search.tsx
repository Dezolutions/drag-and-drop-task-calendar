import { DebounceInput } from "react-debounce-input"
import { searchInputStyle } from "../stylesComponents"
import React from "react"
import { useDateStore } from "../store"

const Search = () => {

  const {setSearchValue} = useDateStore()
  const [search, setSearch] = React.useState('')

  const handleSearch = (e: any) => {
    setSearch(e.target.value)
    setSearchValue(e.target.value)
  }

  return (

    <>
      <DebounceInput
        css={searchInputStyle}
        minLength={2}
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

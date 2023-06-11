import { useState } from "react"
import magnifier from "../../../assets/magnifier.png"

export function InputSearch({ setList, listDefault }) {

    const [search, setSearch] = useState("")

    const searchFunction = () => {
        if (search == "") {
            setList(listDefault)
        } else {
            const newList = listDefault.filter((element) => element.name.toUpperCase().includes(search.toUpperCase()))
            setList(newList)
        }

    }

    return (
        <div>
            <input onChange={(e) => { setSearch(e.target.value.toString()) }} type="text" />
            <button onClick={() => searchFunction()}><img src={magnifier} alt="Lupa branca" /></button>
        </div>
    )
}
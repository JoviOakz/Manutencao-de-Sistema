import { useState, useEffect } from 'react'
import { ApiCard } from '../components/ApiCard'
import { api } from "../api/rmApi"
import style from '../App.module.css'

export function ApiPage() {
  const [data, setData] = useState([])
  const [page, setPage] = useState("")
  const [name, setName] = useState("")

  useEffect(() => {
    api.get(`/character/?page=${page}&name=${name}`).then((response) => {
      if (!response.data.results) {
        console.log("Vazio")
      }
      setData(response.data.results)
    }).catch((error) => {
      if (error.response.status === 404) {
        console.log("Esta pagina nao contem este personagem")
      }
      console.error(error)
    })
  }, [page, name])

  return (
    <>
      <h2>Rick and Morty API</h2>
      <div>
        <input type="text" placeholder="1/43" value={page} onChange={(event) => setPage(event.target.value)} />
      </div>
      <div>
        <input type="text" placeholder="Name" value={name} onChange={(event) => setName(event.target.value)} />
      </div>
      <div className={style.wrapCardProducts}>
        {data.map((item) => {
          return (
            <div key={item.id}>
              <ApiCard {...item} />
              {/* <button onClick={() => {}}>Info</button> */}
            </div>
          )
        })}
      </div>
    </>
  )
}
import { useState, useEffect } from 'react'
import { Card } from './components/Card'
import { ApiCard } from './components/ApiCard'
import produtos from './constants/produtos.json'
import { api } from "./api/rmApi"
import style from './App.module.css'

import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"

const position = [-25.42474811725821, -49.27225551560059]
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function App() {
  const [show, setShow] = useState("")
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
      <div className={style.wrapBtns}>
        <button onClick={() => setShow("prod")}>Produtos</button>
        <button onClick={() => setShow("api")}>API</button>
        <button onClick={() => setShow("map")}>Mapa</button>
      </div>
      <div className={style.wrapPage}>
        <h1>Exercícios de manutenção</h1>
        {show === "prod" &&
          <>
            <h2>Showroom de produtos</h2>
            <div className={style.wrapCardProducts}>
              {produtos.map((item) => {
                return (
                  <Card name={item.name} desc={item.desc} value={item.value} image={item.image} key={item.id} category={item.category} status={item.status} />
                )
              })}
            </div>
          </>
        }
        {show === "api" &&
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
        }
        {show === "map" &&
          <>
            <h2>Mapa</h2>
            <div>
              <MapContainer style={{ height: 590, width: 1400}} center={position} zoom={13} scrollWheelZoom={true}>
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                  <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </>
        }
      </div>
    </>
  )
}

export default App
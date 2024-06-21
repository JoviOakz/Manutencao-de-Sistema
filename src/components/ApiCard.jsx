import style from './Card.module.css'

/* eslint-disable react/prop-types */
export const ApiCard = ({name, status, species, type, gender, image}) => {
  return(
      <div className={style.wrapCard}>
          <h1>{name}</h1>
          <h2>{status}</h2>
          <p>{species}</p>
          <p>{type}</p>
          <p>{gender}</p>
          <img src={image} alt={name} width={150} height={"auto"}/>
        </div>
  )
}
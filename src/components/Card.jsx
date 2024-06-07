import cardStyle from './Card.module.css'

/* eslint-disable react/prop-types */
export const Card = (props) => {
  return(
      <div className={cardStyle.wrapCard}>
          <h1>{props.name}</h1>
          <h2>{props.desc}</h2>
          <p>{props.value}</p>
          <img src={props.image} alt={props.name} width={150} height={"auto"}/>
          <h3>{props.category}</h3>
      </div>
  )
}
import { Link } from 'react-router-dom'
import style from '../App.module.css'

export function PageEnveloper({ children }) {
    return (
        <>
            <div className={style.wrapBtns} style={{ position: "fixed", top: "0", backgroundColor: "#fff" }}>
                <Link to="/products">
                    Produtos
                </Link>
                <Link to="/apirick">
                    Rick and Morty API
                </Link>
                <Link to="/map">
                    Mapa
                </Link>
                <Link to="/graphics">
                    Gráficos
                </Link>
            </div>
            {children}
        </>
    )
}
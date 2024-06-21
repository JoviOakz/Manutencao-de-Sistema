import { Card } from '../components/Card'
import produtos from '../constants/produtos.json'
import style from '../App.module.css'

export function ProductsPage() {
    return (
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
    )
}
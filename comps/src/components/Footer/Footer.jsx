import style from "./style.module.css";

export default function Footer() {
    return (<>
        <div className={style["line"]} />
        <div className={style["container"]}>
            <span className={style["content"]}>MendCek Outlet - Al. Dr. Carlos de Carvalho, 603 - Centro - Curitiba / PR</span>
            <span className={style["content"]}> CNPJ: 11.277.524/0001-40-MendCek Comercio de Moda</span>
        </div>
    </>)
}
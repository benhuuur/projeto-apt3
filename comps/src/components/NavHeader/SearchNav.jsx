import style from "./style.module.css";
import search from "../../assets/search.png"


export const SearchNav = () => {
    return(
        <div className={style.serch}>
            <input placeholder="Digite o que você procura" className={style.input}></input>
            <img src={search} className={style.logose}/>
        </div>
    );
}
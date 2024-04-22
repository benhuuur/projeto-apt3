import style from "./style.module.css";
import stars from "../../assets/stars.svg";
import product from "../../assets/product-example.png";

export const CardProduct = () => {
    return(
        <div className={style.body}>
            <div className={style["assessments"]}>
                <img src={stars} className={style["stars"]} alt="Stars" />
                <span className={style["stars-counting"]}>(2)</span>
            </div>
            <div className={style["center"]}>
                <img src={product} alt="product" className={style["product-image"]} />
            </div>
        </div>
    );
};

import style from "./style.module.css";

import SlideDown from "../../assets/SlideDown.svg";
import SlideUp from "../../assets/SlideUp.svg";
import product1 from "../../assets/product1.svg";
import product2 from "../../assets/product2.svg";
import product3 from "../../assets/product3.svg";
import product4 from "../../assets/product4.svg";

export default function ImagesProduct() {
    return (
        <>
            <div className={style["content"]}>
                <div className={style["left-products"]}>
                    <img className={style["left-products-arrow"]} src={SlideUp} />
                    <img className={style["left-imagens"]} src={product1} />
                    <img className={style["left-imagens"]} src={product2} />
                    <img className={style["left-imagens"]} src={product3} />
                    <img className={style["left-products-arrow"]} src={SlideDown} />
                </div>
                <img className={style["main-product"]} src={product4} />
            </div>
        </>
    )
}
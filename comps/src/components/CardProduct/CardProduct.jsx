import style from "./style.module.css";
import stars from "../../assets/stars.svg";

export const CardProduct = (props) => {
    const { productName, productPrice, productPricePromotion, productSizes, productImage, starsCount } = props;

    return (
        <div className={style.body}>
            <div className={style["assessments"]}>
                <img src={stars} className={style["stars"]} alt="Stars" />
                <span className={style["stars-counting"]}>({starsCount})</span>
            </div>
            <div className={style["content"]}>
                <div className={style["product-image-size"]}>
                    <img src={productImage} alt="product" className={style["product-image"]} />
                    <div className={style["product-size"]}>
                        {productSizes.map((size, index) => (
                            <span key={index} className={style["product-size-text"]}>{size}</span>
                        ))}
                    </div>
                </div>
                <span className={style["product-name"]}>
                    {productName}
                </span>
                <div className={productPricePromotion ? style["product-price-texts-promotion"] : style["product-price-texts"]}>
                    <span className={productPricePromotion ? style["product-price-text-with-promotion"] : style["product-price-text"]}>{productPrice}</span>
                    {productPricePromotion && (
                        <span className={style["product-price-text-promotion"]}>{productPricePromotion}</span>
                    )}
                </div>
                {productPricePromotion ? (
                    <span>
                        OU 10X DE {parseFloat(productPricePromotion.replace("R$", "").replace(",", ".")) / 10}
                    </span>
                ) : (
                    <span>
                        OU 10X DE {parseFloat(productPrice.replace("R$", "").replace(",", ".")) / 10}
                    </span>
                )}
            </div>
        </div>
    );
};

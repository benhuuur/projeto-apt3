import { NavPromotion } from "../../components/NavPromotion/NavPromotion";
import { NavHeader } from "../../components/NavHeader/NavHeader";
import { NavItens } from "../../components/NavHeader/NavItens";
import Carousel from "../../components/Carousel/Carousel";
import { CardProduct } from "../../components/CardProduct/CardProduct";

import style from "./style.module.css";

import advertisement from "../../assets/advertisement.gif";
import advertisement2 from "../../assets/advertisement2.gif";
import advertisement3 from "../../assets/advertisement3.gif";
import product from "../../assets/product-example.png";

export default function Home() {
    const images = [
        advertisement,
        advertisement2,
        advertisement3,
    ];

    return (<>
        <NavPromotion />
        <NavHeader />
        <NavItens />
        <Carousel images={images} />
        <div className={style["products"]}>
            <div className={style["products-title-box"]}>
                <span className={style["products-title"]}>TENDÊNCIAS</span>
            </div>
            {/* <div className={style["center"]}> */}
            <div className={style["products-box"]}>
                <CardProduct
                    productName="Jaqueta Lacoste Masculina"
                    productPrice="R$359,00"
                    productPricePromotion="R$305,00"
                    productSizes={["P", "M", "G", "GG"]}
                    productImage={product}
                    starsCount={2}
                />
                <CardProduct
                    productName="Jaqueta Lacoste Masculina"
                    productPrice="R$359,00"
                    productPricePromotion="R$305,00"
                    productSizes={["P", "M", "G", "GG"]}
                    productImage={product}
                    starsCount={2}
                />
                <CardProduct
                    productName="Jaqueta Lacoste Masculina"
                    productPrice="R$359,00"
                    productPricePromotion="R$305,00"
                    productSizes={["P", "M", "G", "GG"]}
                    productImage={product}
                    starsCount={2}
                />
                <CardProduct
                    productName="Jaqueta Lacoste Masculina"
                    productPrice="R$359,00"
                    productPricePromotion="R$305,00"
                    productSizes={["P", "M", "G", "GG"]}
                    productImage={product}
                    starsCount={2}
                />
                <CardProduct
                    productName="Jaqueta Lacoste Masculina"
                    productPrice="R$359,00"
                    productPricePromotion="R$305,00"
                    productSizes={["P", "M", "G", "GG"]}
                    productImage={product}
                    starsCount={2}
                />
                <CardProduct
                    productName="Jaqueta Lacoste Masculina"
                    productPrice="R$359,00"
                    productPricePromotion="R$305,00"
                    productSizes={["P", "M", "G", "GG"]}
                    productImage={product}
                    starsCount={2}
                />
                <CardProduct
                    productName="Jaqueta Lacoste Masculina"
                    productPrice="R$359,00"
                    productPricePromotion="R$305,00"
                    productSizes={["P", "M", "G", "GG"]}
                    productImage={product}
                    starsCount={2}
                />
                <CardProduct
                    productName="Jaqueta Lacoste Masculina"
                    productPrice="R$359,00"
                    productPricePromotion="R$305,00"
                    productSizes={["P", "M", "G", "GG"]}
                    productImage={product}
                    starsCount={2}
                />
            </div>
            {/* </div> */}
        </div>
    </>)
}
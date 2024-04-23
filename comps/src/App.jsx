import style from "./App.module.css";
import { CardProduct } from "./components/CardProduct/CardProduct";
import product from "./assets/product-example.png";
import advertisement from "./assets/advertisement.gif";
import advertisement2 from "./assets/advertisement2.gif";
import advertisement3 from "./assets/advertisement3.gif";

import Carousel from "./components/Carousel/Carousel";

function App() {
  const images = [
    advertisement,
    advertisement2,
    advertisement3,
  ];
  return (
    <>
      <CardProduct
        productName="Jaqueta Lacoste Masculina"
        productPrice="R$359,00"
        productPricePromotion="R$305,00"
        productSizes={["P", "M", "G", "GG"]}
        productImage={product}
        starsCount={2}
      />
      <Carousel images={images} />
    </>
  );
}

export default App;

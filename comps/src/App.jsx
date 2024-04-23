import style from "./App.module.css";
import { NavHeader } from "./components/NavHeader/NavHeader";
import { CardProduct } from "./components/CardProduct/CardProduct";
import product from "./assets/product-example.png";

function App() {
  return (
    <>
      <CardProduct
        productName="Jaqueta Lacoste Masculina"
        productPrice="R$359,00"
        // productPricePromotion="R$305,00"
        productSizes={["P", "M", "G", "GG"]}
        productImage={product}
        starsCount={2}
      />

      <NavHeader></NavHeader>
    </>
  );
}

export default App;

import style from "./App.module.css";
import product from "./assets/product-example.png";
import advertisement from "./assets/advertisement.gif";
import advertisement2 from "./assets/advertisement2.gif";
import advertisement3 from "./assets/advertisement3.gif";
import { ProductPage } from "./Pages/ProductPage/ProductPage"

import Carousel from "./components/Carousel/Carousel";

function App() {
  const images = [
    advertisement,
    advertisement2,
    advertisement3,
  ];
  return (
    <ProductPage/>
  );
}

export default App;

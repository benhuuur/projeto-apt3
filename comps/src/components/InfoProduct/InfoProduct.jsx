import style from "./style.module.css";
import stars from "../../assets/stars.svg";
import cart from "../../assets/cart.png";
import { useState } from "react";

const sizes = ["P", "M", "G", "GG"];

export const InfoProduct = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [count, setCount] = useState(1);

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const decrementCount = () => {
    if (count > 1) setCount(count - 1);
  };

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <>
      <div className={style.promotion}>
        <span className={style.textpromotion}>PROMOÇÃO</span>
      </div>
      <div style={{ marginTop: "1.8rem" }}>
        <span className={style.title}>JAQUETA LACOSTE MASCULINO</span>
      </div>
      <div style={{ display: "flex", marginTop: "1em" }}>
        <img src={stars} className={style.stars} alt="Stars" />
        <span className={style.starsCount}>(2)</span>
      </div>
      <div style={{ marginTop: "1em" }}>
        <span className={style.price}>R$ 305,00</span>
      </div>
      <div style={{ marginTop: "0.8em" }}>
        <span className={style.color}>COR: VERDE</span>
      </div>
      <div className={style.squareColor}></div>
      <div style={{ marginTop: "0.8em" }}>
        <span className={style.color}>TAMANHO:</span>
      </div>
      <div
        style={{
          display: "flex",
          width: "14em",
          justifyContent: "space-between",
          marginTop: "0.8em",
        }}
      >
        {sizes.map((size) => (
          <div
            key={size}
            className={`${style.size} ${
              selectedSize === size ? style.selected : ""
            }`}
            onClick={() => handleSizeSelect(size)}
          >
            <span className={`${style.color} ${
              selectedSize === size ? style.colorblack : ""
            }`}>{size}</span>
          </div>
        ))}
      </div>
      <div className={style.widthajust}>
        <div className={style.qtd}>
          <span
            className={style.color}
            style={{ cursor: "pointer" }}
            onClick={decrementCount}
          >
            -
          </span>
          <span className={style.color}>{count}</span>
          <span
            className={style.color}
            style={{ cursor: "pointer" }}
            onClick={incrementCount}
          >
            +
          </span>
        </div>
        <div className={style.cart}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              width: "58%",
            }}
          >
            <span className={style.color2}>ADICIONAR A SACOLA</span>
            <img src={cart} className={style.imageCart}></img>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1.7em" }}>
        <span className={style.color}>ENTREGA:</span>
      </div>
      <div className={style.widthajust2}>
        <input className={style.delivery} placeholder="DIGITE AQUI SEU CEP" />
        <div className={style.calculate}>
          <span className={style.color2}>CALCULAR</span>
        </div>
      </div>
    </>
  );
};

// import { useState } from 'react';

// // Array de tamanhos disponíveis
// const sizes = ['P', 'M', 'G', 'GG'];

// export const InfoProduct = () => {
//   const [selectedSize, setSelectedSize] = useState(null);

//   // Função para lidar com a seleção do tamanho
//   const handleSizeSelect = (size) => {
//     setSelectedSize(size);
//   };

//   return (
//     <>
//       {/* Código anterior */}
//       <div style={{ marginTop: "0.8em" }}>
//         <span className={style.color}>TAMANHO:</span>
//       </div>
//       <div
//         style={{
//           display: "flex",
//           width: "14em",
//           justifyContent: "space-between",
//           marginTop: "0.8em",
//         }}
//       >
//         {/* Mapeamento dos tamanhos */}
//         {sizes.map((size) => (
//           <div
//             key={size}
//             className={`${style.size} ${selectedSize === size ? style.selected : ''}`}
//             onClick={() => handleSizeSelect(size)}
//           >
//             <span className={style.color}>{size}</span>
//           </div>
//         ))}
//       </div>
//       {/* Código anterior */}
//     </>
//   );
// };

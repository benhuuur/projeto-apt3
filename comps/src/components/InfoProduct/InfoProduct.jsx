import style from "./style.module.css";
import stars from "../../assets/stars.svg";
import cart from "../../assets/cart.png"

export const InfoProduct = () => {
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
        <div className={style.size}>
          <span className={style.color}>P</span>
        </div>
        <div className={style.size}>
          <span className={style.color}>M</span>
        </div>
        <div className={style.size}>
          <span className={style.color}>G</span>
        </div>
        <div className={style.size}>
          <span className={style.color}>GG</span>
        </div>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", marginTop: "2.5em", width: "27.5em"}}>
        <div className={style.qtd}>
            <span className={style.color}>+</span>
            <span className={style.color}>1</span>
            <span className={style.color}>-</span>
        </div>
        <div className={style.cart}>
          <div style={{display: "flex", justifyContent: "center", alignItems: "center", width: "65%"}}>
            <span className={style.color2}>ADICIONAR A SACOLA</span>
            <img src={cart} className={style.imageCart}></img>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "1.7em" }}>
        <span className={style.color}>ENTREGA:</span>
      </div>
      <div style={{display: "flex", justifyContent: "space-between", marginTop: "1em", width: "27.5em" }}>
        <div className={style.delivery}>
          <span className={style.placeholder}>DIGITE AQUI SEU CEP</span>
        </div>
        <div className={style.calculate}>
          <span className={style.color2}>CALCULAR</span>
        </div>
      </div>
    </>
  );
};

import style from "./style.module.css";
import stars from "../../assets/stars.svg";

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
      <div>
        <div className={style.qtd}>
            <span className={style.color}>+</span>
            <span className={style.color}>1</span>
            <span className={style.color}>-</span>
        </div>
      </div>
    </>
  );
};

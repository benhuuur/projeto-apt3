import style from "./style.module.css";
import { NavPromotion } from "../../components/NavPromotion/NavPromotion";
import { NavHeader } from "../../components/NavHeader/NavHeader";
import { Navigation } from "../../components/Navigation/Navigation";
import { InfoProduct } from "../../components/InfoProduct/InfoProduct";
import { Container, Grid } from "@mui/material";
import ImagesProduct from "../../components/ImagesProduct/ImagesProduct";

const array = [
  { path: "/opa", label: "PRODUTOS" },
  { path: "/kk", label: "MARCAS" },
  { path: "/james", label: "LACOSTE" },
];

export const ProductPage = () => {
  return (
    <>
      <NavPromotion/>
      <NavHeader/>
      <Container>
      <Navigation navs={array} margin={"3em"} />
        <Grid style={{display: "flex", alignItems: "baseline", justifyContent: "space-between", marginTop: '1.5em'}}>
          <Grid item xs={7} sm={7}>
            <ImagesProduct/>
          </Grid>
          <Grid item xs={5} sm={5}>
            <InfoProduct />   
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

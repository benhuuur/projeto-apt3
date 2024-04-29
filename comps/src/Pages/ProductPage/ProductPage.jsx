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
      <Container>
      <Navigation navs={array} margin={"2em"} />
        <Grid>
          <Grid item xs={6} sm={6}>
            <ImagesProduct/>
          </Grid>
          <Grid item xs={6} sm={6}>
            <InfoProduct />   
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

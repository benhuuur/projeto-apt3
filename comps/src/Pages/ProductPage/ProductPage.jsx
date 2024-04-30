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
      <NavPromotion />
      <NavHeader />
      <Container>
        <Navigation navs={array} margin={"3em"} />
        <Grid
          container
          spacing={2}
          alignItems="baseline"
          justifyContent="center"
          style={{ marginTop: "1.5em" }}
        >
          <Grid item xs={12} sm={12} md={12} lg={7} style={{display: "flex", justifyContent: "center"}}>
            <div>
              <ImagesProduct />
            </div>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={5} style={{display: "flex", justifyContent: "space-around"}}>
            <div style={{display: "flex", flexDirection: "column"}}>
              <InfoProduct/>
            </div>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

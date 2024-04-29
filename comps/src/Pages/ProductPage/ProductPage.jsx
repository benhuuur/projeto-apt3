import style from "./style.module.css";
import { NavPromotion } from "../../components/NavPromotion/NavPromotion"
import { NavHeader } from "../../components/NavHeader/NavHeader"
import { Navigation } from "../../components/Navigation/Navigation";
import { InfoProduct } from "../../components/InfoProduct/InfoProduct"; 
import { Container } from "@mui/material";

const array = [
    { path: "/opa", label: "PRODUTOS" },
    { path: "/kk", label: "MARCAS" },
    { path: "/james", label: "LACOSTE" }
];

export const ProductPage = () => {
    return(
        <>
            <NavPromotion/>
            <NavHeader/>
            <Container>
                <Navigation navs={array} margin={"2em"}/>
                <InfoProduct/>
            </Container>
        </>
    );
}
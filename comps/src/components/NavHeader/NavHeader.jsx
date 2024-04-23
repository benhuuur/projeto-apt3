import style from "./style.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png"
import { Container } from "@mui/material";
import { SearchNav } from "./SearchNav";

export const NavHeader = () => {
  return (
    <nav>
      <Container sx={{ display: 'flex' }}>
        <Link hrefLang="/">
          <img className={style.logo} src={logo}/>
        </Link>
         
        <SearchNav></SearchNav>
      </Container>
    </nav>  
  );
};

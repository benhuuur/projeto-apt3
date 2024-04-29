import style from "./style.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import user from "../../assets/user.png";
import cart from "../../assets/cart.png";
import { Container, Grid } from "@mui/material";
import { SearchNav } from "./SearchNav";

export const NavHeader = () => {
  return (
    <nav>
      <Container maxWidth="lg" sx={{ mt: 2}}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={2}>
          <Grid item xs={3} sm={2}>
            <Link hrefLang="/">
              <img className={style.logo} src={logo} alt="Logo" />
            </Link>
          </Grid>
          <Grid item xs={6} sm={5}>
            <SearchNav />
          </Grid>
          <Grid item xs={1}>
            <Link to="/user" style={{ textDecoration: 'none' }}>
              <img src={user} className={style.user} alt="User" />
            </Link>
          </Grid>
          <Grid item xs={2}>
            <Link to="/cart" style={{ textDecoration: 'none' }}>
              <div className={style.divcart}>
                <img src={cart} className={style.cart} alt="Cart" />
                <p className={style.products}>0</p>
              </div>
            </Link>
          </Grid>
        </Grid>
      </Container>
    </nav>
  );
};

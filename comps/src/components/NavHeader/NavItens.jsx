import { Container, useMediaQuery } from "@mui/material";
import { Link } from 'react-router-dom';
import React from 'react';
import style from "./style.module.css";

import promo from "../../assets/promo.png";
import roupa from "../../assets/roupa.png";
import marca from "../../assets/veri.png";
import cartei from "../../assets/cartei.png";

const navs = [
  {
    label: "PROMOÇÕES",
    src: promo,
    href: "/promocoes"
  },
  {
    label: "ROUPAS",
    src: roupa,
    href: "/roupas"
  },
  {
    label: "MARCAS",
    src: marca,
    href: "/marcas"
  },
  {
    label: "ACESSÓRIOS",
    src: cartei,
    href: "/acessorios"
  }
];

export const NavItens = () => {
  const isMobile = useMediaQuery('(max-width:600px)');

  return (
    <Container  sx={{ 
      display: "flex", 
      justifyContent: "center", 
      alignItems: 'center', 
      mt: isMobile ? 3 : 5
    }}>
      {navs.map((nav, index) => (
        <React.Fragment key={index}>
          <Link to={nav.href} className={style.groupnav}>
            <img src={nav.src} className={style.navimgs} alt={nav.label} />
            {!isMobile && <p className={style.text}>{nav.label}</p>}
          </Link>
          {index !== navs.length - 1 && <p className={style.bar}>|</p>}
        </React.Fragment>
      ))}
    </Container>
  );
};

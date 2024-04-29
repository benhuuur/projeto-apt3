import React from "react";
import style from "./style.module.css";
import { Link } from "react-router-dom";

export const Navigation = ({ navs, margin }) => {
    return (
        <div className={style.engloba} style={{marginTop:margin}}>
            {navs.map((nav, index) => (
                <React.Fragment key={index}>
                    <Link to={nav.path} className={style.link}>{nav.label}</Link>
                    {index < navs.length - 1 && <span>></span>}
                </React.Fragment>
            ))}
        </div>
    );
}

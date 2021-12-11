import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <Link className={styles.logo} to="/">
                Tiendita
            </Link>
            <div className={styles.items}>
                <Link className={styles.link} to="/registro">
                    Registrar Productos
                </Link>
                <Link className={styles.link} to="/modiproductos">
                    Modificar Productos
                </Link>
                <Link className={styles.link} to="/carrito">
                    Carrito
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;

import React from "react";
import styles from "../styles/Card.module.css";
import { Link } from "react-router-dom";

const Card = ({ producto }) => {
    return (
        <div className={styles.card}>
            <div>
                <Link to={"/detalles/" + producto.id}>
                    <img
                        className={styles.productoImagen}
                        src={producto.imagen}
                        alt={producto.nombre}
                    />
                </Link>
            </div>
            <div className={styles.productPrice}>${producto.precio}</div>
            <div>
                <h3 className={styles.productName}>{producto.nombre}</h3>
            </div>

            <div>
                <button className={styles.boton}>Agregar</button>
            </div>
        </div>
    );
};

export default Card;

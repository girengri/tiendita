import React from "react";
import { useParams } from "react-router-dom";
import styles from "../styles/Details.module.css";

const Details = ({ detalle }) => {
    const { id } = useParams();

    const buscado = detalle.find((producto) => producto.id === Number(id));

    const { nombre, descripcion, imagen, precio } = buscado;

    return (
        <div className={styles.detailsContainer}>
            <img
                className={`${styles.col} ${styles.Image}`}
                src={imagen}
                alt={nombre}
            />
            <div className={`${styles.col} ${styles.productDetails}`}>
                <p className={styles.firstItem}>
                    <strong> {nombre}</strong>
                    <br />
                    <strong> {precio}</strong>
                </p>
                <p className={styles.parrafo}>{descripcion}</p>

                <div>
                    <button className={styles.boton}>Agregar</button>
                </div>
            </div>
        </div>
    );
};

export default Details;

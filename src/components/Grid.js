import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import styles from "../styles/Grid.module.css";
import { url } from "../helpers/url";

const Grid = () => {
    useEffect(() => {
        getData();
    }, []);

    const [productos, guardarProductos] = useState([]);

    const getData = () => {
        axios
            .get(url)
            .then((response) => {
                guardarProductos(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className={styles.productos}>
            {productos.map((producto) => (
                <Card key={producto.id} producto={producto} />
            ))}
        </div>
    );
};

export default Grid;

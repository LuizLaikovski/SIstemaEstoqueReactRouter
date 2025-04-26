import 'react';
import { Link } from 'react-router-dom';

const listProducts = () => {
    return (
        <>
            <h1>PRODUTOS</h1>
            <Link to="/listProducts/1">Pc Gamer Pichau</Link>
            <Link to="/listProducts/2">Teclado Redragon </Link>
        </>
    );
};

export default listProducts;
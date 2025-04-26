import 'react';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <>
            <nav>
                <Link to="/">Home</Link>
                <Link to="listProducts">Lista de Produtos</Link>
            </nav>
        </>
    );
};

export default NavBar;
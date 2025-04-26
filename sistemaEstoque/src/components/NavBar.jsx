import 'react';
import { Link } from 'react-router-dom';
import './css/NavBar.css';

function NavBar() {
    return (
        <>
            <nav className='nav'>
                <ul>
                    <Link to="/" className='nav-routes'>Home</Link>
                    <Link to="/listProducts" className='nav-routes'>Lista de Produtos</Link>
                </ul>
            </nav>
        </>
    );
};

export default NavBar;
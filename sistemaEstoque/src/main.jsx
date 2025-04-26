import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Importanto os métodos para criar as rotas
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx'
import listProducts from './routes/listProducts.jsx';

// Criando as rotas

const routes = createBrowserRouter([
  {
    path: "/", //Caminho principal
    element: <App />, // Pagina que será renderizada
    errorElement: <ErrorPage />,  // Página caso haja algum erro em carregar alguma pagina
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/listProducts",
        element: <listProducts />
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

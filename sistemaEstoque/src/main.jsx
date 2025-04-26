import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client' 
import App from './App.jsx'

// Importanto os métodos para criar as rotas
import { createBrowserRouter , RouterProvider} from 'react-router-dom';
import ErrorPage from './routes/ErrorPage.jsx';
import Home from './routes/Home.jsx'
import listProducts from './routes/listProducts.jsx';
import productDescription from './routes/productDescription.jsx';

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
      },
      {
        path: "/listProducts/:id",
        element : <productDescription />
      }
    ],
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
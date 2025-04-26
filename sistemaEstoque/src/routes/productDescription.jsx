import 'react';
import { use } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function productDescription() {
    const {id} = useParams();

    const navigate = useNavigate();

    const handleHome = () => {
        console.log("Verificção conluida");
        return navigate("/")
    }

    return (
        <>
            <p>Descrição do produto {id}</p>
            <button onClick={handleHome}>Voltar a tela inicial</button>
        </>
    );
};

export default productDescription;
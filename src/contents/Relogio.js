import React from 'react';
import ReactDOM from 'react-dom/client';
import {Link} from 'react-router-dom';
function Relogio() {
    const [date, setDate] = React.useState(new Date());

    React.useEffect(() => {
        const interval = setInterval(() => {
            setDate(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const options = {hour: 'numeric', minute: 'numeric', second: 'numeric'};

    return (
        <>
            <h1>{date.toLocaleString('pt-BR', options)}</h1>
            <Link to='/'>Voltar para a home</Link>
        </>
    );
};
export default Relogio;
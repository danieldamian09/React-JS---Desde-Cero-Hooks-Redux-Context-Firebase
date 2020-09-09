import React, {Fragment, useState} from 'react';

const Lista = () => {

    const [arrayNumero, setarrayNumero] = useState([1,2,3,4,5])

    const [numero, setNumero] = useState(6)

    const agregarElemento = () =>{
        setNumero(numero +1)
        setarrayNumero([...arrayNumero, numero])
    }

    return ( 
        <Fragment>
            <h2>Lista</h2>
            <button onClick={agregarElemento}>Agregar Numero</button>
            {
                arrayNumero.map((item, index) =>
                    <p key={index}>{item} - {index}</p>
                    // siempre debemos pasar una key con el metodo map y esta debe estar como atributo en la etiqueta
                )
            }
        </Fragment>
     );
}
 
export default Lista;
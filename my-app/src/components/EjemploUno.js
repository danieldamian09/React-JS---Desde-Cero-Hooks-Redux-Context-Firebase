import React, {Fragment, useState} from 'react';
import { useForm } from "react-hook-form";

const EjemploUno = () => {
    // para usar useForm
    const {register, errors, handleSubmit} = useForm();

    const [entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas([
            ...entradas,
            data
        ])
        // para limpiar los campos
        e.target.reset();
    }

    


    return ( 
        <Fragment>
            <h1>Ejemplo #1</h1>
            {/* debemos pasar el evento Onsubmit en la formula handleSubmit */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    type="text"
                    name="titulo"
                    placeholder="Ingrese Titulo"
                    className="form-control my-2"
                    ref={
                        register({
                            required: {value: true, message: 'Campo Obligatorio'},
                            minLength: {value: 2, message: 'minimo 2 letras'}
                        })
                    }
                />
                
                {  
                    // para que consiga el error si existe utilizamos &&
                    errors.titulo &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.titulo.message}
                    </span> 
                }

                <input
                    type="text"
                    name="descripcion"
                    placeholder="Ingrese Descripcion"
                    className="form-control my-2"
                    ref={
                        register({
                            required: { value: true, message: 'Campo Obligatorio' },
                            minLength: { value: 2, message: 'minimo 2 letras' }
                        })
                    }
                />
                
                {
                    // para que consiga el error si existe utilizamos &&
                    errors.descripcion &&
                    <span className="text-danger text-small d-block mb-2">
                        {errors.descripcion.message}
                    </span>
                }
                <button className="btn btn-primary">Agregar</button>
            </form>
            <ul>
                {
                    entradas.map(item =>
                    <li>{item.titulo} - {item.descripcion}</li>
                    )
                }
            </ul>
        </Fragment>
    );
}

export default EjemploUno;
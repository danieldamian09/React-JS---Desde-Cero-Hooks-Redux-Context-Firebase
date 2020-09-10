import React, {Fragment, useState} from 'react'

const Formulario = () => {

    // crear el estado con useState

    const [datos, setDatos] = useState({
        // creamos un objeto con los datos
        nombre: '',
        apellido: ''
    })

        // Formula para hacer que el estado reciba los datos cuando haya un cambio en el input

    const cambioDatos = (evento)=>{
        // aca podemos estar pendiente del evento en la consola y los cambios que se producen por eso se debe pasar el evento en los parametros de la funcion flecha
        // console.log(evento.target.value)
        // para agrghar al estado:
        setDatos({
            // utilizamos el operador de propagacion, es importante el nombre del input ya que al comparar el [evento.target.name] lo hace con el nombre de la propiedad del objeto por eso de seben llamar igual
            ...datos, 
            [evento.target.name] : evento.target.value
        })

    }

    const enviarDatos = (evento) =>{
        // para evitar el procesamiento automatico de los datos
        evento.preventDefault();
        console.log(datos.nombre + " " + datos.apellido)

    }

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form action="" className="row" onSubmit={enviarDatos}>

                <div className="col-md-3">
                    <input 
                    type="text"
                    placeholder="Ingrese Nombre"
                    className="form-control"
                    name="nombre"
                    onChange={cambioDatos}
                    />
                </div>
                <div className="col-md-3">
                    <input 
                    type="text"
                    placeholder= "Ingrese Apellido"
                    className="form-control"
                    name="apellido"
                    onChange={cambioDatos}
                    />
                </div>
                <div className="col-md-3">
                    <button className= "btn btn-primary" type="submit">Enviar</button>
                </div>

            </form>

                {/* PARA PINTAR LOS DATOS QUE SE GUARDARON EN EL ESTADO */}
                <br/>

        {/* <h3>{datos.nombre} - {datos.apellido}</h3> */}

        </Fragment>
    );
}
 
export default Formulario;
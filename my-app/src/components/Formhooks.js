import React, { Fragment } from 'react';
import { useForm } from 'react-hook-form';

const Formhooks = () => {


    const { register, errors, handleSubmit } = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        // limpiar los imputs pasamos un evento en la funcion flecha:
        e.target.reset()
    }

    return (
        <Fragment>
            <h1>Formulario con React Hook Form</h1>
            <form action="" onSubmit={handleSubmit(onSubmit)}>
                <div className="container">

                    <div className="col col-md-6">
                        <input
                            type="text"
                            name="nombre"
                            className="form-control my-6"
                            placeholder="Ingrese Nombre"
                            ref={
                                register({
                                    required: { value: true, message: "Por Favor Ingrese Su Nombre" }
                                })
                            }
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.nombre?.message}
                        </span>
                    </div>

                    <div className="col col-md-6">
                        <input
                            type="text"
                            name="apellido"
                            className="form-control my-6"
                            placeholder="Ingrese Apellido"
                            ref={
                                register({
                                    required: { value: true, message: "Por Favor Ingrese Su Apellido" }
                                })
                            }
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.apellido?.message}
                        </span>
                    </div>

                    <div className="col col-md-6">
                        <input
                            type="email"
                            name="correo"
                            className="form-control my-6"
                            placeholder="name@example.com"
                            ref={
                                register({
                                    required: { value: true, message: "Por Favor Ingrese Su Correo" }
                                })
                            }
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.correo?.message}
                        </span>
                    </div>

                    <div className="col col-md-6">
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                name="sexo"
                                className="custom-control-input"
                                id="masculino"
                                placeholder="name@example.com"
                                ref={
                                    register({
                                        required: { value: "", message: "Por Favor Ingresar Campo" }
                                    })
                                }
                            />
                            <label className="custom-control-label" htmlFor="masculino">
                                Masculino
                        </label>
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.masculino?.message}
                            </span>
                        </div>
                        <div className="custom-control custom-radio custom-control-inline">
                            <input
                                type="radio"
                                name="sexo"
                                className="custom-control-input"
                                id="femenino"
                                placeholder="name@example.com"
                                ref={
                                    register({
                                        required: { value: true, message: "Por Favor Ingresar Campo" }
                                    })
                                }
                            />
                            <label className="custom-control-label" htmlFor="femenino">
                                Femenino
                        </label>
                            <span className="text-danger text-small d-block mb-2">
                                {errors?.masculino?.message}
                            </span>
                        </div>
                    </div>
                    <div className="col col-md-6 mb-2 mt-2">
                        <input
                            type="text"
                            name="direccion"
                            className="form-control my-6"
                            placeholder="Ingrese Su Direccion"
                            ref={
                                register({
                                    required: { value: true, message: "Por Favor Ingrese Su Direccion" }
                                })
                            }
                        />
                        <span className="text-danger text-small d-block mb-2">
                            {errors?.direccion?.message}
                        </span>
                    </div>


                    <div className="col col-md-4">
                        <button className="btn btn-primary">Enviar</button>
                    </div>
                </div>


            </form>
        </Fragment>
    );
}

export default Formhooks;
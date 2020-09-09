import React, { Fragment } from 'react';

const Jsx = () => {

    const temperatura = 18;


    return ( 
        <Fragment>
            <h2>Frio o Calor?</h2>
            <h4>
                {
                    (temperatura > 20)
                    ? 'calor'
                    : 'frio'
                }
            </h4>
        </Fragment>
    );
}

export default Jsx;

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Clima = ({result}) => {
    const {main, name,cod}= result;
    if(!cod || cod === '404') return null;
    
    // Grados kelvin
    const kelvin = 273.15;
    return (
        <Fragment>
            <div className="card-panel white col s12">
            <div className="black-text">
                <h2>El clima de {name} es: </h2>
                <p className="temperatura">
                    { parseFloat( main.temp - kelvin, 10 ).toFixed(1) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Máxima:
                    { parseFloat( main.temp_max - kelvin, 10 ).toFixed(1) }  <span> &#x2103; </span>
                </p>
                <p>Temperatura Minima:
                    { parseFloat( main.temp_min - kelvin, 10 ).toFixed(1) }  <span> &#x2103; </span>
                </p>
            </div>
        </div>
        </Fragment>
    );
};

Clima.propTypes = {
    
};

export default Clima;
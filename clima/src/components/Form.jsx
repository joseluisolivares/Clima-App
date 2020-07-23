import React, {Fragment, useState} from 'react';
import Error from './Error';
import PropTypes from 'prop-types';
import ErrorApi from './ErrorApi';

const Form = ({data, handleData,handleValidatedForm,errorApi}) => {

// States and destructuring

   
    const [errorCiudad, handleErrorCiudad] = useState(false);
    const [errorPais, handleErrorPais] = useState(false);
    const {ciudad,pais} = data;

    const handleInput = e => {
        e.preventDefault();
        handleData({
            ...data,
            [e.target.name]:e.target.value
        })

    }
    const handleSubmit = e => {
        e.preventDefault();
        if(ciudad === ''){
            handleErrorCiudad(true);
        }else{
            handleErrorCiudad(false);
        }
        if(pais === ''){
            handleErrorPais(true);
        }else{
            handleErrorPais(false);
        }
        if(ciudad !== '' && pais !== ''){
            handleValidatedForm(true);
        }else{
            handleValidatedForm(false);
        }
    }
    return (
        <Fragment>
           <form
            onSubmit={handleSubmit}
            >
                <div className="input-field col-s12">
                    <input 
                        id="ciudad"
                        type="text"
                        name="ciudad"
                        onChange={handleInput}
                    />
                    <label htmlFor="ciudad">Ciudad: </label>
                    {
                        errorCiudad
                            ?
                                <Error
                                    message='*Campo obligatorio'
                                />
                            :
                                null
                    }
                </div>
                <div className="input-field col s12 no-padding">
                    <select 
                        id="pais"
                        name="pais"
                        onChange={handleInput}
                    >
                        <option value="">-- Seleccione un país --</option>
                        <option value="US">Estados Unidos</option>
                        <option value="MX">México</option>
                        <option value="AR">Argentina</option>
                        <option value="CO">Colombia</option>
                        <option value="CR">Costa Rica</option>
                        <option value="ES">España</option>
                        <option value="PE">Perú</option>
                    </select>
                    <label htmlFor="pais">País:</label>
                    {
                        errorPais
                            ?
                                <Error
                                    message='*Campo obligatorio'
                                />
                            :
                                null
                    }
                </div>
                {
                    errorApi
                        ?
                            <ErrorApi
                                message='Debes introducir una ciudad y país válidos'
                            />
                        :
                            null    
                }
                <div className="input-field col s12">
                        <input 
                            type="submit"
                            className="waves-effect waves-light btn-large btn-block yellow accent-4"
                            value="Buscar"
                        />
                    </div>
            </form>
        </Fragment>
    );
};

Form.propTypes = {
    data:PropTypes.object.isRequired,
    handleData:PropTypes.func.isRequired,
    handleValidatedForm:PropTypes.func.isRequired,
    errorApi:PropTypes.bool.isRequired
};

export default Form;
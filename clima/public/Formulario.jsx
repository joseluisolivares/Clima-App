import React, {Fragment,useState} from 'react';
import Error from './Error';

const Formulario = ({busqueda, guardarBusqueda,guardarSubmit}) => {

// States and destructuring
    const {ciudad,pais} = busqueda;
    const [error, guardarError] = useState(false);

// handles

    const handleChange = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        });
    }
    const handleSubmit = e => {
        e.preventDefault();
        if(ciudad.trim() === '' || pais.trim() === ''){
            guardarError(true);
            return;
        }else{
            guardarError(false);
        }
        guardarSubmit(true);


    }
    return (
        <Fragment>
            { 
                error ? <Error/> : null
            }
            <form
                onSubmit={handleSubmit}
            >
                <div className="input-field col-s12">
                    <input 
                        type="text"
                        name="ciudad"
                        id="ciudad"
                        value={ciudad}
                        onChange={handleChange}
                    />
                    <label htmlFor="ciudad">Ciudad: </label>
                </div>
                <div className="input-field col s12 no-padding">
                    <select 
                        name="pais"
                        id="pais"
                        value={pais}
                        onChange={handleChange}

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
                </div>
                <div className="input-field col s12">
                        <input 
                            type="submit"
                            varlue="Buscar clima"
                            className="waves-effect waves-light btn-large btn-block yellow accent-4"
                        />

                    </div>
            </form>
        </Fragment>
    );
};


export default Formulario;
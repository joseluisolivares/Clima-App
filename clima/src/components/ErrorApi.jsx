import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const ErrorApi = ({message}) => {
    return (
        <Fragment>
            <p className="red darken-4 error mt-100">{message}</p>
        </Fragment>
    );
};

ErrorApi.propTypes = {
    
};

export default ErrorApi;
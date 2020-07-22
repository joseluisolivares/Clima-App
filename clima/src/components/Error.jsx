import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Error = ({message}) => {
    return (
        <Fragment>
            <div className="message">{message}</div>
        </Fragment>
    );
};

Error.propTypes = {
    
};

export default Error;
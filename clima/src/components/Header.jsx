import React, {Fragment} from 'react';
import PropTypes from 'prop-types';

const Header = ({title}) => {
    return (
        <Fragment>
             <nav>
                <div className="nav-wrapper light-blue darken-2">
                    <a className="brand-logo" href="#!">{title}</a>
                </div>
            </nav>
        </Fragment>
    );
};

Header.propTypes = {
    title:PropTypes.string.isRequired
};

export default Header;
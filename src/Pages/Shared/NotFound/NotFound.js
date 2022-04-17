import React from 'react';
import './NotFound.css'
import sleeping from '../../../images/error.jpg'
const NotFound = () => {
    return (
        <div>
            <h2 className='text-center'>Page not found</h2>
            <img className='img-fluid w-50' src={sleeping} alt="" />
        </div>
    );
};

export default NotFound;
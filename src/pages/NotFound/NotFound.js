import React from 'react';
import ghost from '../../img/25.png'

const NotFound = () => {
    return (
        <div className='container'>
            <h1 className='mb-3 text-warning'>This Url is not Found</h1>
            <img className='img-fluid rounded' src={ghost}></img>
        </div>
    );
};

export default NotFound;
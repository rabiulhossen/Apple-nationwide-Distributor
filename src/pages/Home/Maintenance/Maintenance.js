import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Maintenance = ({maintenance}) => {
    const [show,setShow] = useState([]);
    useEffect(() => {
      fetch("http://localhost:5000/inventory")
        .then((res) => res.json())
        .then((data) => setShow(data));
    }, []);
const Navigate = useNavigate();
const details = id =>{
    Navigate(`/maintenance/${id}`)
}

    return (
        <div>
            <h1>Maintain your Products</h1>
            {
                show.map(serve => <div key={serve._id}> <h3> Name:{serve.name}</h3></div>)
            }
        </div>
    );
};

export default Maintenance;
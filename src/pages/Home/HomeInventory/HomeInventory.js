import React, { useEffect, useState } from 'react';
import Inventory from '../inventory/Inventory';
import './homeInventory.css';

const HomeInventory = () => {
    const [show,setShow] = useState([]);
    useEffect(() => {
      fetch('https://mysterious-sands-37320.herokuapp.com/inventory')
        .then((res) => res.json())
        .then((data) => setShow(data?.slice(0,6)));
    }, []);

    return (
        <div className='container'> 
            <h1 className='fw-bold text-primary my-5'>Our New Stock</h1>
        <div className='services-container'>
           
           { show.map(serve => <Inventory 
                    key={serve._id}
                      serve={serve}
                      >
                
                      </Inventory>)
           }
        </div>
        </div>
    );
};

export default HomeInventory;
import React, { useEffect, useState } from "react";
import Inventory from "../inventory/Inventory";
import "./Inventories.css";

const Inventories = () => {
  const [show,setShow] = useState([]);
  useEffect(() => {
    fetch(`https://mysterious-sands-37320.herokuapp.com/inventory`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, []);
  return (
    <div className="container">
      <div className="row">
      <h1 className="text-primary text-center mt-5 pt-5 pb-4">
    
    Our Inventories
  </h1>
  <div className="services-container">
      
        {
             

                show.map(serve => <Inventory 
                    key={serve._id}
                      serve={serve}
                      >
                
                      </Inventory>)
}
                      
        
  </div>
      </div>
    </div>
  );
};

export default Inventories;

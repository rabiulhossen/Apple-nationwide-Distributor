import React, { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate, useParams } from "react-router-dom";
import PageTitle from "../../../common/PageTitle/PageTitle";
import "./DetailInventory.css";

const DetailInventory = () => {
  const { id } = useParams();

  console.log(id);
  const [show, setShow] = useState({});
  const [reload,setReload] =useState(false)
  const { name, price, supplier, Quantity, sold, about, img, _id } = show;
  useEffect(() => {
    fetch(`https://mysterious-sands-37320.herokuapp.com/inventory/${id}`)
      .then((res) => res.json())
      .then((data) => setShow(data));
  }, [reload]);
  // const Navigate = useNavigate();
  // const details = id =>{
  // Navigate(`/maintenance/${id}`)
  // }

  const updateDelivery = (id,q) => {
    if(q>0 ){
      let Quantity = parseInt(q) - 1;
      const data = { Quantity };
      const url = `https://mysterious-sands-37320.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setReload(!reload)
        });
        
    }
    else{
      alert('Minimum Quantity is Zero')
    }
   
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    const {productQuantity }=  data
     
      const data2 ={ Quantity :parseInt(productQuantity)+parseInt( Quantity) };
      const url = `https://mysterious-sands-37320.herokuapp.com/inventory/${id}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data2),
      })
        .then((res) => res.json())
        .then((result) => {
          console.log(result);
          setReload(!reload)
        });

  
  };

  return (
    <div className="container d-md-flex justify-content-around align-items-start con">
      <PageTitle title="Details-inventory"></PageTitle>

      <div className="col-md-4 col-12 col-sm-12">
        <h2 className="text-info fw-bold mt-4 mb-2">Details Information</h2>
        <h4 className="pt-2">Name :{name}</h4>
        <h5>Distributor : {supplier}</h5>
        <h5 className="text-success">Description :{about}</h5>
        <p>
         
          Price :{price} <span> Quantity :{Quantity}</span>
        </p>

        <p>
         Product_Id :{_id}
        </p>

        <img
          className="img-fluid img-thumbnail px-4 py-2 rounded"
          style={{ height: "370px" }}
          src={img}
          alt=""
        />
        <button onClick={()=>updateDelivery(id,Quantity)} className="delivey-btn mx-auto my-3">Deliverd</button>
      </div>
      <div className="col-md-4 col-12 col-sm-12 my-auto border border-warning rounded-3 ">
        <form onSubmit={handleSubmit(onSubmit)}>
         
          <input
            className="rounded"
            placeholder="Product Quantity"
            type="number"
            {...register("productQuantity", { min: 1, max: 1000 })}
            required
          />{" "}
          {errors.Quantity && "Quantity is required"}
          <br />
          <input
            className="my-3 ms-2 addButton"
            type="submit"
            value="Add ITEM"
          />
        </form>
        <Link to="/maintenance" className="text-decoration-none ">
          <button className="button-manager mt-2" role="button">
            Manage Inventories
          </button>
        </Link>
      </div>
    </div>
  );
};

export default DetailInventory;

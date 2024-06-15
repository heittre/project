import React, {Component, useEffect, useState} from 'react';
import axios from 'axios';

export default function BabiesCheckout() {
    const [formData,setFormData] = useState({
        shipping_address :"",
        receiver_name:"",
        Payment_method:"",
        quantity:1
    })
    console.log(formData);
    const handleInputChange = (e) =>{
            setFormData(prevFormData=>{
                return{
                    ...prevFormData,
                    [e.target.name] : e.target.value
                }
            })
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        const id = window.location.pathname.substring(23);

        const {shipping_address,
        receiver_name,
        Payment_method,
        quantity} = formData;

        const data = {
            address:shipping_address,
            quantity:quanity,
            name:receiver_name,
            PaymentMethod:Payment_method,
        }
        console.log(data);
        axios.post(`http://localhost:3000/order/${id}/`,data)
        .then((res)=>{
                    //direct to the payment gateway
        })
        .catch((err)=>{
            alert(` ${err}`)

        })
    }
    
    useEffect(() => {
        const id = window.location.pathname.substring(23);
        axios.get(`http://localhost:3000/babies/checkout/${id}`)
            .then(res => {
                setFormData(res.data.post); // directly set post to res.data.post
            })
            .catch(err => {
                alert(err);
            });
    }, []);

  return (
    <div>
        <div className="row text-center text-black mb-5">
        <div className="col-lg-7 mx-auto">
            <h1 className="display-4">Babies Checkout</h1>

        </div>
        <div class="container mt-5 mb-5 d-flex justify-content-center" >
                <style>{'body{background-color:#FFEBEE}.card{width:400px;background-color:#fff;border:none;border-radius: 12px}label.radio{cursor: pointer;width: 100%}label.radio input{position: absolute;top: 0;left: 0;visibility: hidden;pointer-events: none}label.radio span{padding: 7px 14px;border: 2px solid #eee;display: inline-block;color: #039be5;border-radius: 10px;width: 100%;height: 48px;line-height: 27px}label.radio input:checked+span{border-color: #039BE5;background-color: #81D4FA;color: #fff;border-radius: 9px;height: 48px;line-height: 27px}.form-control{margin-top: 10px;height: 48px;border: 2px solid #eee;border-radius: 10px}.form-control:focus{box-shadow: none;border: 2px solid #039BE5}.agree-text{font-size: 12px}.terms{font-size: 12px;text-decoration: none;color: #039BE5}.confirm-button{height: 50px;border-radius: 10px}'}</style>

            <div class="card px-1 py-4">
            
            <div class="card-body">
                <h1 class='h3 mb-3 font-weight-normal'>Checkout your item</h1>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <textarea>
                            class='form-control'
                            name='shipping_address'
                            placeholder='eg:707/3b, Station road, Pannipitiya'
                            onChange={handleInputChange}
                            </textarea>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type='text'
                            class='form-control'
                            name='receiver_name'
                            placeholder='eg:John Doe'
                            onChange={handleInputChange}/> 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type='radio'
                            class='form-control'
                            name='Payment_method'
                            onChange={handleInputChange}/> 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type=''
                            class='form-control'
                            name='quantity'
                            onChange={handleInputChange}/> 
                        </div>
                    </div>
                </div>
                <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> </div> 
                <button class='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={onSubmit}>
                        <i class='far fa-check-square'></i>
                        &nbsp; Next
                </button>
            </div>
            </div>
        </div>
    </div>
    </div>
  )
}

import React, {Component, useState} from 'react';
import axios from 'axios';


export default function BabiesCreatePost() {
    const [formData,setFormData] = useState({
        topic: "",
            description: "",
            price:"",
            image1:"",
            image2:""
    })
    console.log(formData);
    const handleInputChange = (e) =>{
        setFormData(prevFormData => {
            return{
                ...prevFormData,
                [e.target.name] : e.target.value
            }
        })
    }
    const onSubmit = (e) =>{
        e.preventDefault();
        const {topic,description,price, image1,image2} = formData
        const data = {
            topic:topic,
            description:description,
            price:price,
            image1:image1,
            image2:image2
        }
        console.log(data);

        axios.post('http://localhost:3000/babies/post/save',data)
        .then((res)=>{
            alert(`Created Post Successfully . ${res.data}`)

        })
        .catch((err)=>{
            alert(` ${err}`)

        })
    }
  return (
    <div class="container mt-5 mb-5 d-flex justify-content-center" >
                <style>{'body{background-color:#FFEBEE}.card{width:400px;background-color:#fff;border:none;border-radius: 12px}label.radio{cursor: pointer;width: 100%}label.radio input{position: absolute;top: 0;left: 0;visibility: hidden;pointer-events: none}label.radio span{padding: 7px 14px;border: 2px solid #eee;display: inline-block;color: #039be5;border-radius: 10px;width: 100%;height: 48px;line-height: 27px}label.radio input:checked+span{border-color: #039BE5;background-color: #81D4FA;color: #fff;border-radius: 9px;height: 48px;line-height: 27px}.form-control{margin-top: 10px;height: 48px;border: 2px solid #eee;border-radius: 10px}.form-control:focus{box-shadow: none;border: 2px solid #039BE5}.agree-text{font-size: 12px}.terms{font-size: 12px;text-decoration: none;color: #039BE5}.confirm-button{height: 50px;border-radius: 10px}'}</style>

            <div class="card px-1 py-4">
            
            <div class="card-body">
                <h1 class='h3 mb-3 font-weight-normal'>Add Item</h1>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type='text'
                            class='form-control'
                            name='topic'
                            placeholder='Enter Topic'
                            onChange={handleInputChange}/> 
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="input-group">
                                <input type='text'
                                class='form-control'
                                name='description'
                                placeholder='Enter Description'
                                onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="input-group"> 
                                <input type='text'
                                class='form-control'
                                name='price'
                                placeholder='Enter Price'
                                onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="input-group"> 
                                <input type='text'
                                class='form-control'
                                name='image1'
                                placeholder='Enter Image 1'
                                onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <div class="input-group"> 
                                <input type='text'
                                class='form-control'
                                name='image2'
                                placeholder='Enter Image 2'
                                onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> </div> 
                <button class='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={onSubmit}>
                        <i class='far fa-check-square'></i>
                        &nbsp; Add Item
                </button>
            </div>
        </div>
    </div>
  )
}

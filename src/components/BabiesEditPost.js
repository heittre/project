import React, {Component,useState,useEffect} from 'react'

export default function BabiesEditPost() {
    const [post,setPost] = useState({
        topic:"",
        description:"",
        price:"",
        image1:"",
        image2:'',
    })


    
    const onSubmit = (e) => {
            e.preventDefault();
            //still backend URL is http://localhost:8000/babies/post/${id}
            const id = window.location.pathname.substring(23);
            const { topic, description, price, image1, image2 } = post;

            const data = {
                    
            topic: topic,
            description: description,
            price: price,
            image1: image1,
            image2: image2
            }
            console.log(data);

            axios.put(`http://localhost:3000/babies/post/update/${id}`,data)
            .then(()=>{
                    alert("post updated successfully")
                    setPost({
                        topic: "",
                        description: "",
                        price:"",
                        image1: "",
                        image2: ""
                    })
            })
            .catch(err=>{
                alert(err)
            })
    }
    
    const handleInputChange = (e) => {
                const {name,value} = e.target;
                ...prevFormData,
                [name] : value

                
    }

    useEffect(()=>{
        const id = window.location.pathname.substring(23);
        axios.get(`http://localhost:8000/babies/post/${id}`)
        .then(res=>{
            setPost(() => {
                return{
                    [e.target.name] : e.target.value
                }
            })
        })
        .catch(err=>{})
        
    },[])

  return (
    <div>
            <div class="container mt-5 mb-5 d-flex justify-content-center" >
                <style>{'body{background-color:#FFEBEE}.card{width:400px;background-color:#fff;border:none;border-radius: 12px}label.radio{cursor: pointer;width: 100%}label.radio input{position: absolute;top: 0;left: 0;visibility: hidden;pointer-events: none}label.radio span{padding: 7px 14px;border: 2px solid #eee;display: inline-block;color: #039be5;border-radius: 10px;width: 100%;height: 48px;line-height: 27px}label.radio input:checked+span{border-color: #039BE5;background-color: #81D4FA;color: #fff;border-radius: 9px;height: 48px;line-height: 27px}.form-control{margin-top: 10px;height: 48px;border: 2px solid #eee;border-radius: 10px}.form-control:focus{box-shadow: none;border: 2px solid #039BE5}.agree-text{font-size: 12px}.terms{font-size: 12px;text-decoration: none;color: #039BE5}.confirm-button{height: 50px;border-radius: 10px}'}</style>

            <div class="card px-1 py-4">
            
            <div class="card-body">
                <h1 class='h3 mb-3 font-weight-normal'>Edit Item</h1>
                <div class="row">
                    <div class="col-sm-12">
                        <div class="form-group">
                            <input type='text'
                            class='form-control'
                            name='topic'
                            placeholder='Enter Topic'
                            value={topic}
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
                                value={description}
                                onChange={this.handleInputChange}/>
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
                                value={price}
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
                                value={image1}
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
                                value={image2}
                                onChange={handleInputChange}/>
                            </div>
                        </div>
                    </div>
                </div>
                <div class=" d-flex flex-column text-center px-5 mt-3 mb-3"> </div> 
                <button class='btn btn-success' type='submit' style={{ marginTop: '15px' }} onClick={onSubmit}>
                        <i class='far fa-check-square'></i>
                        &nbsp; Update
                </button>
            </div>
        </div>
    </div>
    </div>
  )
}

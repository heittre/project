import React, {useState,useEffect, Component} from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

import axios from 'axios';

export default function BabiesPostDetails() {
    const [post,setPost] = useState({});

    useEffect(() => {
        const id = window.location.pathname.substring(23);
        axios.get(`http://localhost:3000/babies/post/${id}`)
            .then(res => {
                setPost(res.data.post); // directly set post to res.data.post
            })
            .catch(err => {
                alert(err);
            });
    }, []);
    

    const BuyButton = ({ post }) => {
        const navigate = useNavigate();  // Replace useHistory with useNavigate
    
        const buyNow = () => {
            console.log("button clicked!");
            navigate(`/dashboard/babies/post/${post._id}`); // Use navigate instead of history.push
        };
    
        return (
            <button
                type="button"
                className="btn btn-warning ml-2 mt-4"
                onClick={buyNow}
            >
                Buy now
            </button>
        );
    };
    
    


        
    const { topic, description, price, image1, image2 } = post;

  return (

    <div>

        <div className="row">
            <div className="col-lg-8 mx-auto my-lg-5">
                <ul className="list-group shadow">
                    <li className="list-group-item">
                        <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                            <div className="media-body order-2 order-lg-1">
                            <h5 className="mt-0 font-weight-bold mb-2">
                                    {topic}
                            </h5>
                                <p className="font-italic text-muted mb-0 small">{description}</p>
                                
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                    <h6 className="font-weight-bold my-2">Rs. {price}.00</h6>
                                </div>
                            </div>
                            
                            <img src={image1} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                            <img src={image2} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                        </div>
                        <div class="card-body">
                            <div class="d-flex justify-content-center align-items-center pb-2 mb-1">
                                <a href="../">
                                    <button type="button" class="btn btn-danger mr-2 mt-4">Cancel</button>
                                </a>
                                <BuyButton post={post} />

                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}


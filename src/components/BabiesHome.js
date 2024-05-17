import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';


export default function BabiesHome() {
    const [posts,setPosts] = useState([]);

    useEffect(()=>{
        retrievePosts();
    },[])

    const retrievePosts= () => {
        axios.get("http://localhost:3000/babies/posts")
        .then(res=>{
            
            setPosts(res.data.existingPosts);
        })
        .catch(err=>{
            alert(err);
        })
        console.log(posts);
        
    }
  return (
    <div>
    <div className="row text-center text-black mb-5">
        <div className="col-lg-7 mx-auto">
            <h1 className="display-4">Babies</h1>
        </div>
    </div>
    <div className="col-lg-8 mx-auto my-lg-5">
            <ul className="list-group shadow">
                {posts.map((posts,index)=>(
                         <li className="list-group-item">
                         <div className="media align-items-lg-center flex-column flex-lg-row p-3">
                             <div className="media-body order-2 order-lg-1">
                                 <h5 className="mt-0 font-weight-bold mb-2">
                                <a href={`/dashboard/babies/post/${posts._id}`} style={{textDecoration:'none'}}>
                                    {posts.topic}
                                </a>  
                                </h5>  
                                <p className="font-italic text-muted mb-0 small">{posts.description}</p>
                                <div className="d-flex align-items-center justify-content-between mt-1">
                                <h6 className="font-weight-bold my-2">Rs. {posts.price}.00</h6>
                            </div>
                        </div>
                        
                        <img src={posts.image1} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                        <img src={posts.image2} alt="Generic placeholder image" width="200" class="ml-lg-5 order-1 order-lg-2"/>
                    </div>
                    </li>
                ))}
            </ul>
    </div>
    </div>
  )
}


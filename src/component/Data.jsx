import React,{ useEffect, useState} from "react";
import axios from 'axios'


const Data = () => {
    const [posts, setPosts] =useState([]);
    const fetchPost = async() => {
        const {data} = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setPosts(data)
    }

    useEffect(() => {
        fetchPost()
    },[]);
    return(
        <div>
            <ul>
                {
                    posts.map(post =>(
                        <li key={post.id}>{post.id}--{post.title}</li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Data;
import React, { useState, useEffect } from "react";
import axios from 'axios';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';
const PostList = () => {
    const [posts, setPosts] = useState([]);
    // const [loadApi, setLoadApi] = useState(true)
    useEffect(() => {
        const fetchPosts = async () => {
            // const res = await axios.get('http://localhost:4000/posts');
            const res = await axios.get('http://localhost:4002/posts');
            setPosts(res.data);
        }; fetchPosts()
    }, []);
    // const handleLoadingApi = ()=> {
    //     setLoadApi(true);
    // }
    const postListJSX =
        posts.map((post) => {
            return (
                <div className="card" key={post.id}
                    style={{ width: '30%', marginBottom: '20px' }}>
                    <div className="card-body">
                        <h5 className="card-title">{post.title}</h5>
                        {/* <CommentList postId={post.id} /> */}
                        <CommentList postId={post.id}  comments={post.comments} />
                        <CommentCreate postId={post.id} />
                        
                    </div>
                    
                </div>
            )
        })
    return (
        <div className="d-flex flex-row flex-wrap justify-content-between">
            {postListJSX}
        </div>
    )
};

export default PostList;
import React, { useState, useEffect } from "react";
import axios from 'axios';

const CommentList = ({postId, comments}) => {
    console.log(comments);
    // const [comments, setComments] = useState([]);

    // useEffect(() => {
    //     const fetchPosts = async (postId) => {
    //         const res = await axios.get(`http://localhost:4001/posts/${postId}/comments`);
    //         setComments(res.data);
    //     }; fetchPosts(postId)
    // }, [postId]);

    const commentListJSX =
        comments?.map((commentContent) => {
            return (
                <li key={commentContent.id}>{commentContent.content}</li>
            )
        })
    return (
        <ul>
            {commentListJSX}
        </ul>
    )
};

export default CommentList;
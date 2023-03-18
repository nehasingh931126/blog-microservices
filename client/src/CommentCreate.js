import React, { useState } from "react";
import axios from 'axios';

const CommentCreate = ({postId}) => {
    console.log(postId);
    const [content, setContent] = useState('');
    const handleForm  = async (event) => {
        event.preventDefault();
        await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
            content
        });
        setContent('');
    }
    return (
        <form onSubmit={handleForm}>
            <div className="form-group">
                <label>New Comment</label>
                <input value={content} onChange={e => setContent(e.target.value)} type="text" className="form-control" id="title" placeholder="Enter Title" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default CommentCreate;
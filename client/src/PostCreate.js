import React, {useState} from "react";
import axios from 'axios';

const PostCreate = () => {
    const [title, setTitle] = useState('');
    const handleForm = async (event) => {
        event.preventDefault();
        await axios.post('http://localhost:4000/posts', {
            title
        }) 

        setTitle('');
    }
    return (
        <form onSubmit={handleForm}>
            <div className="form-group">
                <label>Title</label>
                <input value={title} onChange={e=>setTitle(e.target.value)} type="text" className="form-control" id="title" placeholder="Enter Title"/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    )
};

export default PostCreate;
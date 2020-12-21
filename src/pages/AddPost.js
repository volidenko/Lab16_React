import React, { useState } from "react";
import {addPost} from "../action/postActions";
export default function AddPost() {
    const [id, setId]=useState(1);
    const [title,setTitle]=useState("");
    const [author, setAuthor]=useState("");
    const [id, setId]=useState("");


    return (
        <form onSubmit={ }>
            <div className="form-group">
                <label>Id</label>
                <input type="number" value={ } className="form-control" name="id"></input>
            </div>
            <div className="form-group">
                <label>Title</label>
                <input type="text" value={ } className="form-control" name="title"></input>
            </div>            <div className="form-group">
                <label>Author</label>
                <input type="text" value={ } className="form-control" name="author"></input>
            </div>            <div className="form-group">
                <label>Text</label>
                <input type="text" value={ } className="form-control" name="text"></input>
            </div>
            <input type="submit" className="btn-btn-primary"></input>
        </form>
    )
}
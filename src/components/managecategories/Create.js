import React from 'react';
import "./List.css";

function Create() {
    return (<div>
        <form>
            <div className="input-group mb-3">
                <span className="input-group-prepend">
                    <label htmlFor="txtName" className="input-group-text"><i className="fa fa-edit"></i></label>
                </span>
                <input type="text" id="txtName" className="form-control" placeholder="Name" />
            </div>
            <div className="input-group">
                <span className="input-group-prepend">
                    <label htmlFor="txtImage" className="input-group-text"><i className='fa fa-image'></i> </label>
                </span>
                <input type="text" id="txtImage" className="form-control"
                    placeholder="Image Url" />
            </div>
        </form>
    </div>);
}

export default Create;



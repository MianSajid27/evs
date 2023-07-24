import React from 'react';
import "./List.css";

class ListRow extends React.Component {

    // constructor(props){
    //     super(props);
    // }

    handleDelete(){
        console.log("delete");
    }

    handleEdit(){
        console.log("edit");
    }


    render() {
        console.log(this.props.parent);

        let parent = (this.props.parent) ? this.props.parent.name : "none";
        return (
            <div className="row p-1">
                <div className="col-1">
                    <img src={this.props.image} className='tbl-image-icon' alt={this.props.name} />
                </div>
                <div className="col">{this.props.name}</div>
                <div className="col-3">{parent}</div>
                <div className="col-3">
                    <button onClick={this.handleEdit} type="button" className="btn btn-warning"><i className='fa fa-edit'></i></button>&nbsp;
                    <button onClick={this.handleDelete}  type="button" className="btn btn-danger"><i className='fa fa-trash'></i></button>
                </div>
            </div>
        );
    }
}



class List extends React.Component {

    constructor(props) {
        super(props);
        this._Categories = [
            { _id: 1, name: "Mobiles", image: "images/categories/mobile.png" },            
            { _id: 2, name: "Laptops", image: "images/categories/laptop.png" },
            { _id: 3, name: "Cars", image: "images/categories/car.png" } 
        ]
        this._Categories.push({ _id: 4, name: "iPhones", image: "images/categories/car.png", parent:this._Categories[0] })
    }


    render() {

        // let data=[];
        // this._Categories.forEach( c => {
        //     data.push("EVS" + c.name); 
        // });

        //let data = this._Categories.map( c => "EVS " + c.name );

        return (
            <div className="card border-primary">
                <div className="card-header bg-primary text-white">
                    <div className="row">
                        <strong> Manage Categories</strong>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row p-1 text-primary text-bold">
                        <div className="col-1">Image</div>
                        <div className="col">Name</div>
                        <div className="col-3">Parent</div>
                        <div className="col-3">Actions</div>
                    </div>
                    {
                        this._Categories.map(c =>
                            <ListRow key={c._id} _id={c._id} name={c.name} image={c.image} parent={c.parent} />
                        )
                    }
                </div>
            </div>
        );
    }
}

export default List
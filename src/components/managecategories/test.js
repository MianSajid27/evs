import React, { useState } from 'react';
//import "./test.css";

function Test() {

    //let counter = 0;

     let [counter,updateCounter ] =useState(0);

    function handelClick() {
        updateCounter(++counter)
        console.log(counter);
    }
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-5'>
                    <button type='button' className='btn btn-primary' onClick={handelClick}>
                        Increment
                    </button>
                </div>
                <div className='col' >
                    {counter}
                </div>
            </div>
        </div>
    )
}

export default Test;


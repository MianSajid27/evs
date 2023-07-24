import { useState } from "react";


export default function Counter(){

    let [counter,updateCounter]=useState(0);

    function handelClick(){
        updateCounter(++counter)//currentState => { currentState.counter++ } );
    }

    return (
        <div>
            <p>{counter}</p>
            <button type="button" onClick={handelClick} className="btn btn-primary">
                Increment
            </button>
        </div>
    );
}
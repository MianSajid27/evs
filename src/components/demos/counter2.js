import React from "react";


class Counter2 extends React.Component {

    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }

    handelClick() {
        //alert("test");

        this.setState({counter: 5});
        // this.setState(currentState=>{
        //  return  { counter: currentState.counter+1 }
        // }
        // );
        //updateCounter(++counter)//currentState => { currentState.counter++ } );
    }

    render() {
        return (
            <div>
                <p>{this.state.counter}</p>
                <button type="button" onClick={this.handelClick} className="btn btn-danger">
                    Increment
                </button>
            </div >
        );
    }
}

export default Counter2;
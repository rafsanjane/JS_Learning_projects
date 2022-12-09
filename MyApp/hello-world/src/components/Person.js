import React, { Component } from "react";

let Person = (props) => {
    return (
        <div className="right">
            <h1 className="inlineblock">Name: {props.name} Age: {Math.floor(Math.random() * 50) + 10}</h1>
        </div>
    );
}


// class Person extends Component {
//     constructor(props) {
//         super(props);
//     }

//     render() {
//         let props = this.props;
//         return (
//             <div className="right">
//                 <h1 className="inlineblock">Name: {props.name} Age: {Math.floor(Math.random() * 50) + 10}</h1>
//             </div>
//         );
//     }
// }

export default Person;
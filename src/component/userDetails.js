import React, { Component } from "react";

export class UserDetails extends Component {


    render() {
        console.log(this.props.details[0].length);
        let temp = this.props.details;
        let a = []
        for (let j = 1; j < temp.length; j++) {

            // for (let i = 0; i < temp[j].length; i++)
            a.push(<div className="user" key={j}> Name : {temp[j][0]} | Department:{temp[j][1]} | Rating: {temp[j][2]} </div>)
        }

        return (

            <div className="details" >{a}</div>
        );

    }
}
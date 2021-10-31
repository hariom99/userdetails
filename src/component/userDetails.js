import React, { Component } from "react";

export class UserDetails extends Component {



    render() {
        console.log(this.props.details);
        return (
            <div className="details" >


                {this.props.details.map((val, key) => {
                    return <div className="user" key={key} >
                        Name : {val.name} |
                        Department : {val.dep} |
                        Rating : {val.rating}
                    </div>

                })}


            </div>
        );

    }
}



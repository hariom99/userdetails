import React, { Component } from "react";
import { UserDetails } from "./userDetails";
export class UserForm extends Component {
    state = { name: null, dep: null, rating: null };
    data = [[1, 2, 3]];


    getDetails = () => {
        // this.data.push("ip");
        let ip = [];
        // ip[0] = "";
        // ip[1] = "";
        // ip[2] = "";
        // this.data.push(ip);
        ip[0] = document.getElementById("name").value;
        ip[1] = document.getElementById("dep").value;
        ip[2] = document.getElementById("rating").value;
        document.getElementById("name").value = "";
        document.getElementById("dep").value = "";
        document.getElementById("rating").value = "";
        this.data.push(ip);
        // let name = document.getElementById("name").value;
        // let dep = document.getElementById("dep").value;
        // let rating = document.getElementById("rating").value;
        // console.log(ip[0] + " " + ip[1] + " " + ip[2]);
        // console.log(this.data);
        this.setState({ name: "hk" });
        return ip;
    }


    render() {


        return <div>
            <h1 style={{ textAlign: "center" }} >EMPLOYEE FEEDBACK FORM</h1>
            <div className="form-div" >
                <span>Name</span> <input id="name" className="inp" placeholder="   enter name" /><br />
                <span>Department</span><input id="dep" className="inp" placeholder="  enter department" /><br />
                <span>Rating</span><input id="rating" className="inp" placeholder="  enter rating" />
                <br />
                <input className="submit-btn" onClick={this.getDetails} type="submit" />
            </div>
            <div className="ipDetails" >
                <hr className="hr" />
                <UserDetails details={this.data} />
            </div>
        </div>
    }
}
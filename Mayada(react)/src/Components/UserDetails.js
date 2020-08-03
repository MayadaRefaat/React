import React, { Component } from 'react'
import axios from "axios";
 class UserDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            person: {}
        }
        //this.successShow = this.successShow.bind(this);
        //this.errorShow = this.errorShow.bind(this);
    }

    componentDidMount() {
        axios.get('https://reqres.in/api/users/'+this.props.location.userid)
        .then((response) => {
            this.successShow(response);
        })
        .catch((error) => {
            this.successShow(error);
        });
    }

    successShow(response) {
        this.setState({
            person: response.data.data
        });
    }

    render() {
        return (
     <div >
             
        <div style={{margin:20 }} >
              
                 <img  src={this.state.person.avatar} style={{borderRadius:50,width:200}}/>
             <div >
                <h1 style={{ color:" black", fontFamily:" 'Times New Roman', Times, serif",fontSize: 30, fontWeight: "bold"}}>
                    {this.state.person.first_name}{" "}{this.state.person.last_name}
                </h1>
                <h6> Freelancer Web Developer</h6>
             </div>
          
             <p>
               <p style={{fontSize:30,fontStyle:"bold"}}><span style={{color:"red"}}>Email: </span> {this.state.person.email}</p>
           
              </p>
        </div>
        
    </div>
        );
    }
 }


export default UserDetails

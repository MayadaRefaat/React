import React, { Component } from 'react'
import axios from "axios";
import { Link } from 'react-router-dom'
import '../stylesheets/Allusers.css'
 class AllUsers extends Component {
    state = {
        people: []
      };
    
      componentDidMount() {
        axios
          .get("https://reqres.in/api/users")
          .then(response => {
            this.successShow(response);
          })
          .catch(error => {
            this.successShow(error);
          });
      }
    
      successShow(response) {
        this.setState({
          people: response.data.data
        });
      }
    
      render() {
        console.log(this.state.people[0]);
        //this console log prints this:
        //{id: 1, first_name: "George", last_name: "Bluth", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg"}
    
        console.log(this.state.people[1]);
        //this console log prints this:
        //{id: 2, first_name: "Janet", last_name: "Weaver", avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg"}
    
         return(
      <div className="ourteam ">
        <h1>Our Team</h1>
          <div className="container" style={{width:"100%"}}>
            <div className="row">
             <ul style={{display:"inline",width:"100%" , listStyle: "none"}}>
           {this.state.people.map(({id, first_name ,last_name, avatar}) => (
           
           <li key={id} style={{type:"none",width:"100%"}}>
           
             <div className="card" style={{float:"left",width:300,margin:20,alignItems:"center"}}>
                    <img className="card-img-top image-card" src={avatar} style={{}}/>
              <div className="card-body">
        
              <h2 style={{color:"black"}}>{first_name}{" "}{last_name}</h2>
              <h5> Freelancer Web Developer</h5>
              </div>
               
               <p className="send">
                 <Link className="btn btn-success send" to={{pathname:"/UserDetails",userid:[id]}}>Send email</Link>
               </p>
               <p>
               <ul class="follow-us clearfix">
              <li><a href="#"><i style={{color:"#326da8"}} class="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i style={{color:"#0dc6de"}} class="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i style={{color:"#0764ab"}} class="fa fa-linkedin" aria-hidden="true"></i></a></li>
            </ul>
               </p>
           </div>
          </li>))
        }
      </ul>
      </div>
      </div>
      </div>
      
      
      
      




















      );
      }
    }
    export default AllUsers;
    

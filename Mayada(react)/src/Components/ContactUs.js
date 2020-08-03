import React, { Component } from 'react'
import '../contact.css'

 class ContactUs extends Component {
    render() {
        return (
<div>
<section class="login-block">
     <div className="container-fluid">
         <div className="row">
             <div className="col-sm-12">
                 <form className="md-float-material form-material">
                     <div className="auth-box card">
                         <div className="card-block">
                             <div className="row">
                                 <div className="col-md-12">
                                     <h3 className="text-center">
                                         <i className="fa fa-phone-square text-success f-56">
                                             </i></h3>
                                     <h3 className="text-center contact-us">Contact Us</h3>
                                     <h6 className="text-center respond">(we generally respond in 24 hours)</h6>
                                 </div>
                             </div>
                             <div className="row">
                                 <div className="col-md-6">
                                     <div className="form-group form-primary"> 
                                         <input type="text" name="email" className="form-control text-left" placeholder="Name" required=""/> 
                                     </div>
                                 </div>

                                 <div className="col-md-6">
                                     <div className="form-group form-primary"> 
                                         <input type="text" name="email" className="form-control text-left" placeholder="Email" required=""/> 
                                    </div>
                                 </div>
                             </div>
                             <div className="form-group form-primary">
                                  <input type="text" name="email" className="form-control text-left" placeholder="Message" required=""/> 
                            </div>
                             <div className="row">
                                 <div className="col-md-12">
                                     <button type="button" className="btn btn-success btn-md btn-block waves-effect text-center m-b-20">
                                         <i className="fa fa-phone"></i> Contact Now </button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </form>
             </div>
         </div>
     </div>
 </section>

</div>           
        )
    }
}

export default ContactUs

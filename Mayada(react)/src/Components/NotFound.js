import React, { Component } from 'react'
import '../stylesheets/notfound.css'
 class NotFound extends Component {
    render() {
        return (
           <div className="notfound">
              <div className="container">
    <div className="row">
        <div className="col-md-12">
            <div className="error-template op">
                <h1 >
                    Oops!</h1>
                <h2 style={{color:"white"}}>
                    404 Not Found</h2>
                <div className="error-details">
                    Sorry, an error has occured, Requested page not found!
                </div>
                <div className="error-actions">
                    <a href="/" className="btn btn-primary btn-lg">
                    <i class="fas fa-home"></i>
                        Take Me Home 
                    </a>
                    <a href="/Contact" className="btn btn-info btn-lg">
                    <i class="fas fa-envelope"></i> Contact Support
                            
                     </a>
                </div>
            </div>
        </div>
    </div>
</div>
             
</div>
        )
    }
}

export default NotFound

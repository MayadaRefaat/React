import React, { Component } from 'react'

import '../stylesheets/home.css'

 class Home extends Component {
  render() {
   
    return (
     <div> 
        <div className="container-fluid" >
    <div className="row">
        <div className="col-md-12">
            <div className="carousel slide" id="carousel-554496">
                <ol className="carousel-indicators">
                    <li data-slide-to="0" data-target="#carousel-554496"> </li>
                    <li data-slide-to="1" data-target="#carousel-554496"> </li>
                    <li data-slide-to="2" data-target="#carousel-554496" className="active"> </li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item"> 
                  <a href="https://reactjs.org/docs/getting-started.html"> 
                    <img className="d-block w-100 home-image" alt="Carousel Bootstrap First" src="https://miro.medium.com/max/2578/1*4ihBhwd0DygCWHN-Bo24BA.png" />
                  </a> 
                        <div className="carousel-caption">
                            <h4> To learn react.js click the image </h4>
                        </div>
                    </div>
                    <div className="carousel-item">
                      <a href=""> 
                        <img className="d-block w-100 home-image" alt="Carousel Bootstrap Second" src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular.png" />
                      </a>
                        <div className="carousel-caption">
                            <h4> To learn angular.js click the image </h4>
                        </div>
                    </div>
                    <div className="carousel-item active">
                      <a> 
                        <img className="d-block w-100 home-image" alt="Carousel Bootstrap Third" src="https://modernweb.com/wp-content/uploads/2017/03/vue.jpg" />
                        
                      </a>
                        <div className="carousel-caption">
                            <h4>To learn vue.js click the image </h4>
                           
                        </div>
                    </div>
                </div> 
                <a className="carousel-control-prev" href="#carousel-554496" data-slide="prev">
                  <span className="carousel-control-prev-icon"></span> 
                  <span className="sr-only">Previous</span>
                </a>
             <a className="carousel-control-next" href="#carousel-554496" data-slide="next">
               <span className="carousel-control-next-icon"></span>
                <span className="sr-only">Next</span>
            </a>
            </div>
        </div>
    </div>
</div>





    <div className="container" style={{marginBottom:20}}>
    <div >
      <img style={{width:200,height:180,borderRadius:5}} src='../me.jpg'/> 
      </div>    
     <div >
     <p><span style={{color:"red"}}>Name: </span>Mayada Refaat</p>
     <p><span style={{color:"red"}}>Email: </span>mayadarefaat7595@gmail.com</p>
     <p><span style={{color:"red"}}>Phone: </span>0025893582</p>
     <p><span style={{color:"red"}}>Address: </span>Assiut/Aboutig</p>

     </div>
     
     
    </div> 
    </div>    )
  }
}

export default Home

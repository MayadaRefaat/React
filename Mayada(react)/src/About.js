import React, { Component } from 'react'
import Footer from './Components/Footer'

class About extends Component {
    render() {
        return (
            <div>



<div className="about-us py-5 " id="about-us">
    <div className="container mt-5">
	<div className="row">
		<div class="col-md-6">
		    <h1 className='text-success'>Welcome!</h1>
		    <h2>Know More About Us</h2>
		   
		    <p>Become a leading reference for development the cadres and young professional leaders in information and 
                communication technology sector.
            </p>
		    <p>Excellence in developing human cadres and providing specialized consultation services for individuals and 
                entities in the information and communication technology domain. Support designing and developing models
                 and prototypes to meet the socioeconomic technological development requirements. Continuously
                 focusing on staff development and commitment to uphold responsibility toward applying the social values.
            </p>
		   <a href="http://www.iti.gov.eg/"> 
               <button  type="button" className="btn btn-success">Let's Know More</button>
            </a>
		</div>
		<div className="col-md-6">
		    <img src="http://themebubble.com/demo/marketingpro/wp-content/uploads/2016/10/seo-slide.png "alt=""/>
		</div>
	</div>
</div>
</div>









{/*                
               <p style={{fontSize:40,color:"darkred",textAlign:"left",margin:10,fontFamily:"Times New Roman"}}>About<b>ITI</b></p>
               <div style={{fontSize:20,color:"darkred",textAlign:"left",margin:10,fontFamily:"Times New Roman"}}>
               Information Technology Institute is a pioneering national institute with a regional influence and international
               linkage. Since it was established in 1993, ITI has been devoted to provide a large pool of promising youth with
               world-class human capacity building programs and empirical learning approach to profoundly scale up the impact
              of the aspiring Egyptian youth in the ICT workplace. While moving to a future where everyone is acquainted 
              with technology and is capable to contribute in shaping the future of the ICT industry,
              the ITI provides Egyptians from 12 year olds till 60 year olds with the needed support.
              It offers Egyptians free scholarships and training in the different areas of the market.
                   </div> 
                   <pre style={{fontSize:20,color:"darkred",margin:10,textAlign:"center",fontFamily:"Times New Roman"}}>_________________________________________________________________________________________________________________________________</pre>
            <div style={{float:"left",width:600,margin:20}}>
                <p style={{fontSize:40,textAlign:"left",margin:10,fontFamily:"Times New Roman"}}>Our<b>Vision</b></p>
                <div  style={{fontSize:20,textAlign:"left",margin:10,fontFamily:"Times New Roman"}}>
                Become a leading reference for development the cadres and young professional leaders in information
                 and communication technology sector.
                </div>
            </div>
          
            <div style={{float:"left",width:600,margin:20}}>
                <p style={{fontSize:40,textAlign:"left",margin:10,fontFamily:"Times New Roman"}}>Our<b>Mission</b></p>
                <div  style={{fontSize:20,textAlign:"left",margin:10,fontFamily:"Times New Roman"}}>
                Excellence in developing human cadres and providing specialized consultation services for individuals and 
                entities in the information and communication technology domain. Support designing and developing models
                 and prototypes to meet the socioeconomic technological development requirements. Continuously 
                focusing on staff development and commitment to uphold responsibility toward applying the social values.
                </div>
                </div>
                
                  <div  style={{textAlign:"center",clear:"both"}}>
                    <p style={{border:3,color:"darkred",fontSize:40,textAlign:"center",margin:10,fontFamily:"Times New Roman",backgroundColor:"gray"}}>Our<b>Values</b></p>
                    <table className="table table-striped table-hover" style={{alignContent:"center"}} >
                        <tr>
                            <td style={{float:"left",width:500,margin:40}}>
                                <p >
                                    <h3 style={{color:"darkred",textAlign:"center",margin:10,fontFamily:"Times New Roman"}}>Professionalism</h3>
                            We build-up a highly professional, effective, dynamic work environment,
                             whereby we are mindful of creating value while embracing the profession standards.
                            </p>
                            </td>
                            <td style={{float:"left",width:500,margin:40}}>
                               <p>
                               <h3 style={{color:"darkred",textAlign:"center",margin:10,fontFamily:"Times New Roman"}}>Endurance</h3>
                               We work in a highly demanding industry and a vibrant work environment.
                                We are consistently challenged and motivated to fulfill and excel beyond our 
                                capabilities and allocated resources.
                               </p> 
                                
                                </td>
                        </tr>

                        <tr>
                            <td style={{float:"left",width:500,margin:40}}>
                                <p>
                                    <h3 style={{color:"darkred",textAlign:"center",margin:10,fontFamily:"Times New Roman"}}>Openness</h3>
                                    We believe in a world with no borders where ideas and knowledge have no limits.
                                     We believe in the power of a diversified group of people united by one vision.
                                      We adopt an open window to all possibilities and anticipations.
                                </p>
                            </td>
                            <td style={{float:"left",width:500,margin:40}}>
                                <p>
                                    <h3 style={{color:"darkred",textAlign:"center",margin:10,fontFamily:"Times New Roman"}}>Passion</h3>
                                    We are driven by passion, committed in heart and mind. We do what we love and we love what we do.
                                     Self satisfaction and elation embrace our life with ITI as interns, staff, as well as, graduates and partners.
                                </p>
                            </td>
                        </tr>

                        <tr>
                            <td style={{float:"left",width:500,margin:40}}>
                                <p>
                                    <h3 style={{color:"darkred",textAlign:"center",margin:10,fontFamily:"Times New Roman"}}>Loyalty</h3>
                                    We are loyal to our identity, community, industry and country.
                                     We are committed by the ITI’s heritage to create a valuable impact enabling 
                                    and empowering our beneficiaries, partners and the ICT ecosystem in Egypt and the world.


                                   </p>
                            </td>
                            <td style={{float:"left",width:500,margin:40}}>
                                <p>
                                    <h3 style={{color:"darkred",textAlign:"center",margin:10,fontFamily:"Times New Roman"}}>Extra Mile</h3>
                                    We believe in going the extra mile stamping our work with excellence, leaving our figure-prints flavoring our work.
                                     We believe in the magic created when everyone brings along their personal flavor to the table.
                                </p>
                            </td>
                        </tr>
                    </table>
               
                </div>

                <div  style={{margin:20,fontWeight:"bold",fontStyle:"italic",alignItems:"center",clear:"both",backgroundColor:"lightgray"}}>
                    <p style={{fontSize:25,color:"darkred",textAlign:"left"}}>ITI<b>Affiliation</b></p>
                    <img style={{float:"left",margin:20 }} src="data:image/jpeg;base64,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"/>
               
                    The Information Technology Institute (ITI), first established in 1993 under the affiliation of the Egyptian 
                    Cabinet's Information and Decision Support Center, with a mission to develop IT caliber to cater for the
                     government's decision support functions, as well as the development of the ICT industry in Egypt.
                      Camping on its success throughout the years, in 2005 the affiliation of the ITI moved to the Ministry 
                      of Communications and Information Technology as one of its main arms for ICT capacity building and industry
                       development in Egypt. The MCIT strategy is to develop the ICT infrastructure and industry, transforming 
                       Egypt into a global digital hub. Information Technology Institute works to empower Egypt’s youth with the 
                       tools and skills needed to develop and live in a knowledge-based society, while using the ICT tools to 
                       boost the country’s competiveness, productivity and the national, regional and international development.
                
                        <p style={{color:"red",fontSize:25}}>
                            Dr. Amr Talaat<br></br>
                                Minister Of Communications And Information Technology, Egypt
                                </p>
                
                </div>


                <div style={{margin:20,fontWeight:"bold",fontStyle:"italic",alignItems:"center"}}>
                    <p style={{fontSize:25,textAlign:"left"}}>A word from the <b>ITI Chairwoman</b></p>
                   
                    <img style={{float:"left",margin:20 }} src="data:image/jpeg;base64,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"></img>
               
                 <p>   With sincere hopes, we welcome you to join our ITI family,
While we are on the vantage of embracing the new group of intake 37 of the 9-Month Professional Scholarship
 Program, we are all looking ahead for a prosperous new year to bring out future generations determined and
  capable of crossing difficulties and borders to achieve their dreams. Learning for acquiring academic certificates 
  in information technology is not anymore the final output interns aspire for when joining the ITI. It is learning to create, learning to innovate, and learning to produce coupled with our core values that stress on sincerity, integrity, creativity and giving back to our beloved Egypt. ITI generations in the previous intakes were able to contribute actively to the development of the ICT industry and to produce powerful impact on the quality of life of the Egyptian citizen using ICT. We encourage you to use the knowledge, challenge your thinking and capabilities and add to this continuum wealth of business professionalism, solution innovation, and entrepreneurial skills. We vow to make your stay at ITI a successful
 trip within your journey towards a successful career and life... Welcome on board!!
                        
 </p>
                </div> */}
              
            </div>


           
          
        )
    }
    
}

export default About

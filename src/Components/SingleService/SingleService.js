import React, { useEffect, useState } from "react";
import { useParams, withRouter } from "react-router";
import axios from "axios";

import Spinner from '../Spinner/Spinner';
import ContactInfo from '../ContactInfo/ContactInfo';
import Header from '../Header/Header';
import MainFunction from '../MainFunction/MainFunction';
import './SingleService.css'


const SingleService = (props) => {
	const params = useParams();
	const [SingleService, setSingleService] = useState({});

    //const [SingleServicesBenefits, setSingleServicesBenefits] = useState({});


const editURL = (pathString)=>{
   
            let slashPathString=pathString.replace("images/","images//");
            return slashPathString
}


	//console.log(params);
	useEffect(() => {
		async function fetchData() {
			const res = await axios(
				`https://backend.mo3ts.com/services/${params.service_id}/${params.id}`
			);
			
			setSingleService(res.data);
           // setSingleServicesBenefits(res.data.ServicesBenefits)

            console.log(res.data.ServicesBenefits)
            console.log(SingleService)
		}
		fetchData();

       
	}, [params.id]); 




    let aboutUsContent =  Object.keys(SingleService).length === 0 ?  <Spinner/> : <>
    <div className='container details-wrapper'>
      
      
  
      {/* <MainFunction/> */}
      <div className='row mt-5'>

      <div className="col-sm-2 col-lg-3 thumbnail-wrapper">
      <div className="thumbnail3 t-one">
          <img className='thumbnail2-img' src='/assets/pump-jack.svg'/>
      </div>
      
      </div>

      <div className="col-sm-10 col-lg-9">

      <div className="main-text">
              <h3 className="section-title">{SingleService.serviceName}</h3>
              <p>
                  {SingleService.serviceDescription}
              </p>
            
             
          </div>

      </div>

  
      </div>



      <div className='row mt-5'>


      <div className="col-sm-12 col-lg-6">

<div className="main-text">
        {/* <ContactInfo/> */}

        <div className="row mt-5">
        {!SingleService.images ||
    <>
      {
          
          SingleService.images.map((image)=>(

            

            <>
        
           <div className="row justify-content-center mb-5"><img className="service-img" src={editURL(`https://backend.mo3ts.com/services/${image.image}`)}/></div>
            </>
        ))
      }
    </>
  }
            {/* <div className="row justify-content-center mb-5"><img className="service-img" src="/assets/img1.png"/></div>
            <div className="row justify-content-center mb-5"><img className="service-img" src="/assets/img2.png"/></div> */}
        
        
        </div>
    
    
    </div>

</div>



          <div className="col-sm-12 col-lg-6 ">
          <div className="main-text">
              <div className="we-do-sec">
             


                  <div>
 
  {!SingleService.lists ||
    <>
      {
          SingleService.lists.map((list)=>(
            <>
            <div className="mb-5">
            <div className="row"> <h3 className="section-title single-do-sec">{list.listTitle}</h3></div>

            {
                list.content.map((bnft)=>(
                    <>
                    <div className="row mb-3">
                            <div className="col-sm-1 col-1"> <i className="fa fa-check single-check"></i> </div>
                            <div className="col-sm-10 col-10">{bnft} </div>
                        </div> 

                    </>
                ))
            }
           </div>
            </>
        ))
      }
    </>
  }
</div>          
     


                  

              </div>
                 
              
              
              </div>
          </div>

       


          </div>


     
      </div>
    </>
    
    

	return (
        
       

        <>
        <Header page={SingleService.serviceName}/>

        {aboutUsContent}
          
  
        </>

	
	);
};

export default SingleService;
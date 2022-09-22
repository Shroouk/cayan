import React, { Component } from 'react';
import axios from '../../axios-data';
import CareerIntro from '../CareerIntro/CareerIntro';
import Header from '../Header/Header';
import JobCard from '../JobCard/JobCard';
import Spinner from '../Spinner/Spinner';
import './Careers.css'

class Careers extends Component {

  state= {
    careersTexts: [],
    loading: true
}
componentDidMount(){
    axios.get('/career/vacancies')
         .then( res =>{
           
             
             const fetchedcareersTexts = [];
             for(let key in res.data){
                 fetchedcareersTexts.push({
                    ...res.data[key],
                    id:key
                })
             }
             console.log(fetchedcareersTexts)

             
             this.setState({loading:false, careersTexts:fetchedcareersTexts})

            


             
         })
         .catch(err =>{
            this.setState({loading:false})
         })

         
}


  render() {
    
    let careerTxtContent = <Spinner/>

    if(this.state.careersTexts.length!=0){
      careerTxtContent  =  <>
 
 <main className="container career-wrapper">
           
        <CareerIntro/>

      
<div className="job-listings">
	
	<div className="listing-title page-title">Current Openings</div>


  { 
   this.state.careersTexts.reverse().map((careerTxt)=>(
       <>
       <JobCard careerId={careerTxt.id} careerTitle={careerTxt.title} careerYears={careerTxt.experienceInYears} careerLevel={careerTxt.careerLevel} careerAt={careerTxt.updatedAt}/>
       
        
       </>
   ))

}
	
    
	
	
    </div>
      
    </main>

                      </>
      
      
    }

    return (
      <>
      <Header page="Careers"/>

      { careerTxtContent}

      </>
    )
  }
}

export default Careers;

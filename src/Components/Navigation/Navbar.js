/* import React, { Component } from 'react';
import axios from '../../axios-data';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'




class Navbar extends Component {

    

    state= {
        mainServicesTexts: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/services')
             .then( res =>{
               
                 
                 const fetchedmainServicesTexts = [];
                 for(let key in res.data){
                     fetchedmainServicesTexts.push({
                        ...res.data[key],
                        id:key
                    })
                 }
                 
                 this.setState({loading:false, mainServicesTexts:fetchedmainServicesTexts})

                


                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })

             
    }



  render() {


    let activeClassName = "is-active";
    
  

    return(
        <>
           <div className="header header-fixed">
           <div className="navbar container">
               <div className="logo"><a href="#home"><img className='logo-img' src='/assets/logo.jpg' alt='cayan-logo-img'/></a></div>
               <input type="checkbox" id="navbar-toggle" />
               <label htmlFor="navbar-toggle"><i></i></label>
              
   
   
   <nav className="menu">
                   <ul className=''>

                   <li><NavLink exact to='/' className="nav-link" >Home</NavLink></li>
                       
                   <li><NavLink  to='/about' className="nav-link" >About US</NavLink></li>
                      
                       <li className="nav-item dropdown">
                       <a className="nav-link dropdown-toggle" data-toggle="dropdown" href="#" id="navbarDropdownMenuLink" role="button" data-mdb-toggle="dropdown" aria-expanded="false">Services</a>
                       <div className="dropdown-menu main-dropdown">


                       {
                           this.state.mainServicesTexts.map((serviceTxt)=>(
                               <>
                                 <Link className="dropdown-item nested-dropdown" to="#">
                       
                                
                                        {serviceTxt.serviceMainName} &raquo;
                                        
                                        <ul className="dropdown-menu dropdown-submenu" key={serviceTxt.id}>

                                            {
                                            serviceTxt.Services.map((subServicesTxt)=>(
                                                <>
                                                <li key={subServicesTxt.id}>
                                                    <Link className="dropdown-item" to={`/single-service/${+serviceTxt.id+1}/${subServicesTxt.id}`}>{subServicesTxt.serviceName} </Link>
                                                </li>
                                                </>
                                            ))
                                            }
                                        
                                        </ul>
                        
                                </Link>
                               </>
                           ))
                       }
   
                       
                       </div>
                   </li> 
   
   
   
   
   
                       <li><NavLink  to='/careers' className="nav-link" >Careers</NavLink></li>
                       <li><NavLink  to='/contact' className="nav-link" >Contact Us</NavLink></li>
   
   
                                        
                  
                  
                   </ul>
               </nav> 
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
           </div>
       </div>
   
   
   
             
        </>
       )
      }
    }
    


export default Navbar; */




import React, { Component } from 'react';
import axios from '../../axios-data';
import { Link, NavLink } from 'react-router-dom';

import './Navbar.css'




class Navbar extends Component {

    

    state= {
        mainServicesTexts: [],
        loading: true
    }
    componentDidMount(){
        axios.get('/services')
             .then( res =>{
               
                 
                 const fetchedmainServicesTexts = [];
                 for(let key in res.data){
                     fetchedmainServicesTexts.push({
                        ...res.data[key],
                        id:key
                    })
                 }
                 
                 this.setState({loading:false, mainServicesTexts:fetchedmainServicesTexts})

                


                 
             })
             .catch(err =>{
                this.setState({loading:false})
             })

             
    }



  render() {


    let activeClassName = "is-active";
    
    let navItem=[];
    this.state.mainServicesTexts.map((serviceTxt)=>{
        if(!serviceTxt.Services){
            navItem.push(<>
            <li><Link to="#">{serviceTxt.serviceMainName}</Link></li>
            </>)
        }else{
            navItem.push(<>
              <li> 
                            
                            <label for={`drop-${serviceTxt.id}`} class="toggle">{serviceTxt.serviceMainName} </label>
                            <a href="#">{serviceTxt.serviceMainName}</a>
                            <input type="checkbox" id={`drop-${serviceTxt.id}`}/>
                            <ul>
                            {
                                            serviceTxt.Services.map((subServicesTxt)=>(
                                                <>
                                                <li><a href={`/single-service/${+serviceTxt.id+1}/${subServicesTxt.id}`}>{subServicesTxt.serviceName}</a></li>
                                               
                                                </>
                                            ))
                                            }
                              
                            </ul>
                            </li>
            </>)
        }
    })
  

    return(
        <>
           <div className="header header-fixed">
           <div className="navbar container">

           <div className="logo"><Link to="/"><img className='logo-img' src='/assets/logo.png' alt='cayan-logo-img'/></Link></div>


              {/*  
               <input type="checkbox" id="navbar-toggle" />
               <label htmlFor="navbar-toggle"><i></i></label> */}
              
   
   
               <nav>
                    <label for="drop" class="toggle">&#8801; Menu</label>
                    <input type="checkbox" id="drop" />
                    <ul class="menu">
                        <li><a  exact href='/' className="nav-link" >Home</a></li>

                        <li><a   href='/about' className="nav-link" >About US</a></li>

                        
                        <li> 
                        
                       
                        {/* <label for="drop-2" class="toggle">Portfolio +</label>
                        <Link to="#">Portfolio</Link>
                        <input type="checkbox" id="drop-2"/>
                        <ul>
                            <li><a href="#">Portfolio 1</a></li>
                            <li><a href="#">Portfolio 2</a></li>
                            <li> 
                            


                           
                            <label for="drop-3" class="toggle">Works +</label>
                            <a href="#">Works</a>
                            <input type="checkbox" id="drop-3"/>
                            <ul>
                                <li><a href="#">HTML/CSS</a></li>
                                <li><a href="#">jQuery</a></li>
                                <li><a href="#">Python</a></li>
                            </ul>
                            </li>
                        </ul> */}



                        <label for="drop-200" class="toggle">Services +</label>
                        <a href="#">Services</a>
                        <input type="checkbox" id="drop-200"/>
                        <ul>
                       {navItem}
                        </ul>

                        


                        </li>

                        <li><a   href='/careers' className="nav-link" >Careers</a></li>
                       <li><a   href='/contact' className="nav-link" >Contact Us</a></li>
                    </ul>
                    </nav>
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
   
           </div>
       </div>
   
   
   
             
        </>
       )
      }
    }
    


export default Navbar;
import React, { useContext } from 'react'
import './About.css'
import im from '../img/about-1.jpg'
import inn from '../img/about-2.jpg'
import ig from '../img/about-3.jpg'
import { Link } from 'react-router-dom'
import Footer from './Footer'
import { MyContext } from './ProjectContext'
export default function Home() {
    const {InputUserName} =useContext(MyContext);
    return (
        <div>
          {InputUserName}
        {/* {/* <link href="css/About.css" rel="stylesheet"></link>
    <div class="container-fluid p-0"> */}
        <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
            <a href="" class="navbar-brand d-block d-lg-none">
                <h1 class="m-0 display-5 text-capitalize font-italic text-white"><span class="text-primary">Safety</span>First</h1>
            </a>
            <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                <div class="navbar-nav mr-auto py-0">
                    <Link to='/home' class="nav-item nav-link">Home</Link>
                    {/* <Link to='/about'class="nav-item nav-link active">About </Link> */}
                    <Link to='/adop' class="nav-item nav-link">Adop Pet</Link>
                    <Link to='/ser' class="nav-item nav-link">Service</Link>
                
                    <Link to='/con' class="nav-item nav-link">Contact</Link>
                    <div className='hlo'>
                    <Link to='/' class="nav-item nav-link">Login</Link>

                    </div>
                      
                </div>
                </div>
        </nav>
    {/* </div> */}

        <div class="container py-5">
        <div class="row py-5">
            <div class="col-lg-7 pb-5 pb-lg-0 px-3 px-lg-5">
                <h1 class="text-secondary mb-3">Rehome and Adopt Pet</h1>
                <h5 >Welcome to Adopt a Pet, a web platform, established by Mars Petcare to connect pet lovers, who would like to adopt pets from registered animal shelters in their region.  </h5>

                  <h5> We have passionate belief that every dog and a cat are deserve a loving home and aspire to help the re-home homeless pets across a India.    </h5>
                    
                 <h5>   Our objectives are simple yet challenging enough to… </h5>
            
                    
                   <h5>Encourage adoption to give pets a second chance while giving shelters the opportunity to take and care for other homeless and stray dogs and cats </h5>
                 <h5>   Help pet owners fulfil their lifetime commitment to their pets </h5>
                  <h5>  Encourage pet owners to act responsibly so both them and their pets are welcomed as good neighbors within community </h5>

                {/* <h5>    Make a difference, give a pet a forever home today! </h5> */}
                
                
            
               
        
            </div>
            <div class="col-lg-5">
                <div class="row px-3">
                    <div class="col-12 p-0">
                        <img class="img-fluid w-100" src={im} width="120" height="150" alt=""></img>
                    </div>
                    <div class="col-6 p-0">
                        <img class="img-fluid w-100" src={inn} width="120" height="150"alt=""></img>
                    </div>
                    <div class="col-6 p-0">
                        <img class="img-fluid w-100" src={ig} width="120" height="150" alt=""></img>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Footer></Footer>
   </div>


    )
}

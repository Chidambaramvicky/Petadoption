import React from 'react'
import { Link } from 'react-router-dom'

export default function Service() {
    return (
        <div>

            <div class="container-fluid p-0">
                <nav class="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-lg-5">
                    <a href="" class="navbar-brand d-block d-lg-none">
                        <h1 class="m-0 display-5 text-capitalize font-italic text-white"></h1>
                    </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">

                    </button>
                    <div class="collapse navbar-collapse justify-content-between px-3" id="navbarCollapse">
                        <div class="navbar-nav mr-auto py-0">
                            <Link to='/home' class="nav-item nav-link">Home</Link>
                            {/* <Link to='/about' class="nav-item nav-link active">About us</Link> */}
                            <Link to='/adop' class="nav-item nav-link">Adop Pet</Link>
                            <Link to='/ser' class="nav-item nav-link">Service</Link>

                            <div class="nav-item dropdown">
                                <div class="dropdown-menu rounded-0 m-0">
                                    <a href="blog.html" class="dropdown-item">Blog Grid</a>

                                </div>
                            </div>
                            <Link to='/con' class="nav-item nav-link">Contact</Link>
                        </div>

                    </div>
                </nav>
            </div>

            <div class="container-fluid bg-light pt-5">
                <div class="container py-5">
                    <div class="d-flex flex-column text-center mb-5">
                        {/* <h4 class="text-secondary mb-3">Our Services</h4> */}
                    </div>
                    <div class="row pb-3">
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 class="flaticon-house display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Pet Boarding</h3>
                                <p> Our team comprises passionate animal lovers who prioritize the well-being and happiness of your pets. They receive personalized attention, ensuring they feel loved and cared for during their stay.</p>
                                <a class="text-uppercase font-weight-bold" href="">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 class="flaticon-food display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Pet Feeding</h3>
                                <p> We recommend consulting our experienced team for personalized diet recommendations tailored to your pet's specific needs. Whether its special diet for weight management,health conditions.</p>
                                <a class="text-uppercase font-weight-bold" href="">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 class="flaticon-grooming display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Pet Grooming</h3>
                                <p>Regular grooming helps to remove dirt, debris, and loose fur, promoting a healthier skin and coat for your pet. Our grooming sessions include baths, brushing, and from mats or tangles.</p>
                                <a class="text-uppercase font-weight-bold" href="">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 class="flaticon-cat display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Per Training</h3>
                                <p>Lay the foundation for good behavior and socialization in your puppy. Our trainers focus on basic commands, housebreaking, and social skills crucial for their development.These fundamental skills form the basis of good behavior and control.</p>
                                <a class="text-uppercase font-weight-bold" href="">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 class="flaticon-dog display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Pet Exercise</h3>
                                <p>Exercise helps pets maintain a healthy weight, strengthen muscles, and improve cardiovascular health. It also aids in preventing obesity-related issues such as diabetes and joint problems.Offer a mix of activities to prevent boredom .</p>
                                <a class="text-uppercase font-weight-bold" href="">Read More</a>
                            </div>
                        </div>
                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="d-flex flex-column text-center bg-white mb-2 p-3 p-sm-5">
                                <h3 class="flaticon-vaccine display-3 font-weight-normal text-secondary mb-3"></h3>
                                <h3 class="mb-3">Pet Treatment</h3>
                                <p>egular veterinary care and prompt treatment are essential for maintaining your pet's health and preventing potential illnesses. Routine check-ups, vaccinations, and timely treatment of any health concerns are crucial for a happy and healthy pet.</p>
                                <a class="text-uppercase font-weight-bold" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

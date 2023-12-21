    import React from 'react'
    import './About.css'
    import { Link } from 'react-router-dom'
    export default function Adop() {
        return (
            <div>
                <div class="container-fluid p-0">
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
                                {/* <Link to='/about' class="nav-item nav-link active">About us</Link> */}
                                <Link to='/adop' class="nav-item nav-link">Adop Pet</Link>
                                <Link to='/ser' class="nav-item nav-link">Service</Link>

                                <div class="nav-item dropdown">

                                    <div class="dropdown-menu rounded-0 m-0">
                                        <a href="blog.html" class="dropdown-item">Blog Grid</a>
                                        <a href="single.html" class="dropdown-item">Blog Detail</a>
                                    </div>
                                </div>
                                <Link to='/con' class="nav-item nav-link">Contact</Link>
                            </div>

                        </div>
                    </nav>
                </div>




                <div class="container-fluid bg-light pt-5 pb-4">
                    <div class="container py-5">
                        <div class="d-flex flex-column text-center mb-5">
                            {/* <h4 class="text-secondary mb-3">Pricing Plan</h4> */}
                            {/* <h1 class="display-4 m-0">Find A <span class="text-primary">Pet</span></h1> */}
                        </div>
                        <div class="row">
                            <div class="col-lg-4 mb-4">
                                <div class="card border-0">
                                    <div class="card-header position-relative border-0 p-0 mb-4">
                                        <img class="card-img-top" src="https://nativepet.com/cdn/shop/articles/close-up-shot-of-a-Pug_s-face_x1000.jpg?v=1658137622" alt="vic"></img>

                                    </div>
                                    <div class="card-body text-center p-0">
                                        <ul class="list-group list-group-flush mb-4">
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Pug</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Puppy (0 to 5month)</li>
                                            <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Male</li>
                                          <center> <div class='but'>
                                               <a href="https://adopt-a-pet.in/user/login?destination=/node/add/appointment?petid=517" alt='vic'>Adopt me</a>
                                            </div>
                                               </center>
                                            {/* <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Veterinary Medicine</li> */}
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <div class="card border-0">
                                    <div class="card-header position-relative border-0 p-0 mb-4">
                                        <img class="card-img-top" src="https://www.hepper.com/wp-content/uploads/2022/12/doberman-dog-in-late-autumn_elis_aksenova_Shutterstock.jpg" alt=""></img>

                                    </div>
                                    <div class="card-body text-center p-0">
                                        <ul class="list-group list-group-flush mb-4">
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Doberman</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Adult (13 to 24 months)</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Male</li>
                                            {/* <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Veterinary Medicine</li> */}
                                          <center> <div class='but'>
                                               <a href="https://adopt-a-pet.in/user/login?destination=/node/add/appointment?petid=517" alt='vic'>Adopt me</a>
                                            </div>
                                               </center>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <div class="card border-0">
                                    <div class="card-header position-relative border-0 p-0 mb-4">
                                        <img class="card-img-top" src="https://cf.ltkcdn.net/dogs/dog-breeds/images/std-xs/324775-340x227-labrador-retriever-breed.jpg" alt="bic"></img>

                                    </div>
                                    <div class="card-body text-center p-0">
                                        <ul class="list-group list-group-flush mb-4">
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Labrador</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Juvenile (6 to12 months)</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Female</li>
                                            {/* <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Veterinary Medicine</li> */}
                                          <center> <div class='but'>
                                               <a href="https://adopt-a-pet.in/user/login?destination=/node/add/appointment?petid=517" alt='vic'>Adopt me</a>
                                            </div>
                                               </center>
                                        </ul>
                                    </div>
                                    {/* <div class="card-footer border-0 p-0"> */}
                                    {/* <a href="" class="btn btn-primary btn-block p-3" style="border-radius: 0;">Signup Now</a> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="container-fluid bg-light pt-5 pb-4">
                    <div class="container py-5">

                        <div class="row">
                            <div class="col-lg-4 mb-4">
                                <div class="card border-0">
                                    <div class="card-header position-relative border-0 p-0 mb-4">
                                        <img class="card-img-top" src="https://img.freepik.com/free-photo/cute-domestic-kitten-sits-window-staring-outside-generative-ai_188544-12519.jpg" alt="vic"></img>

                                    </div>
                                    <div class="card-body text-center p-0">
                                        <ul class="list-group list-group-flush mb-4">
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Russian White</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Puppy (0 to 5month)</li>
                                            <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Male</li>
                                            {/* <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Veterinary Medicine</li> */}
                                          <center> <div class='but'>
                                               <a href="https://adopt-a-pet.in/user/login?destination=/node/add/appointment?petid=517" alt='vic'>Adopt me</a>
                                            </div>
                                               </center>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <div class="card border-0">
                                    <div class="card-header position-relative border-0 p-0 mb-4">
                                        <img class="card-img-top" src="https://www.caw.ac.uk/wp-content/uploads/2020/10/Black-Cat-Day-Image-1-624x326.jpg" alt=""></img>

                                    </div>
                                    <div class="card-body text-center p-0">
                                        <ul class="list-group list-group-flush mb-4">
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Black</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Adult (13 to 24 months)</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Male</li>
                                            {/* <li class="list-group-item p-2"><i class="fa fa-times text-danger mr-2"></i>Veterinary Medicine</li> */}
                                          <center> <div class='but'>
                                               <a href="https://www.petfather.in/wp-content/uploads/2022/07/Best-cat-breeds-in-India-most-popular-cat-breeds-in-India-1024x576.jpg.webp" alt='vic'>Adopt me</a>
                                            </div>
                                               </center>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                            <div class="col-lg-4 mb-4">
                                <div class="card border-0">
                                    <div class="card-header position-relative border-0 p-0 mb-4">
                                        <img class="card-img-top" src="https://www.petfather.in/wp-content/uploads/2022/07/Best-cat-breeds-in-India-most-popular-cat-breeds-in-India-1024x576.jpg.webp" alt="bic"></img>

                                    </div>
                                    <div class="card-body text-center p-0">
                                        <ul class="list-group list-group-flush mb-4">
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Tabby</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Juvenile (6 to12 months)</li>
                                            <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Female</li>
                                            {/* <li class="list-group-item p-2"><i class="fa fa-check text-secondary mr-2"></i>Veterinary Medicine</li> */}
                                          <center> <div class='but'>
                                               <a href="https://adopt-a-pet.in/user/login?destination=/node/add/appointment?petid=517" alt='vic'>Adopt me</a>
                                            </div>
                                               </center>
                                        </ul>
                                    </div>
                                    {/* <div class="card-footer border-0 p-0"> */}
                                    {/* <a href="" class="btn btn-primary btn-block p-3" style="border-radius: 0;">Signup Now</a> */}
                                    {/* </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

import React from 'react'
import '../Project/Footer.css'
import PlaceIcon from '@mui/icons-material/Place';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { red } from '@mui/material/colors';

export default function Footer() {
    return (
        <div>
            <footer>
                <div class="row1 primary">
                    <div class="column1 about">
                        <h3 id='top'>Connect</h3>
                        <p>
                            <PlaceIcon />
                           Pudukkottai,TamilNadu,India
                        </p>
                        <div class="social" style={{ width: "60%" }}>
                            <FacebookRoundedIcon fontSize='large' />
                            <TwitterIcon fontSize='large' />
                            <YouTubeIcon fontSize='large' />
                            <InstagramIcon fontSize='large' />
                            <LinkedInIcon fontSize='large' />
                        </div>
                    </div>

                    <div class="column1">
                        <h3 style={{color:'white'}}>Made in India</h3>
                        All our products are made in India.
                    </div>

                    <div class="column1">
                        <h3 style={{color:'white'}}>Newsletter</h3>
                      
                        <div>
                            <input id='em' type="email" placeholder="Your email id here" />
                            <br/><br/>
                            <button id='subs'>Subscribe</button>
                        </div>
                    </div>
                </div>

            </footer>
        </div>
    )
}
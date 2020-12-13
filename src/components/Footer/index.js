import React from 'react';
import './style.css';

export default function Header () {
    return(
        <footer className="container-fluid text-center main-footer">

                    <p className="nav-item"> Connect with me:</p>
                    
                     {/* Social Icons */}
                    <p>

                    <a href="https://github.com/ashhunt07" target="_blank" rel="noreferrer">
                    <img 
                    class="mr-3" 
                    src={process.env.PUBLIC_URL + "/images/github.png" || "/images/github.png"} 
                    width="35"
                    height="35" 
                    alt="GitHug Logo Link to Profile"
                    />
                    </a>

                    <a href="https://www.linkedin.com/in/huntashley/" target="_blank" rel="noreferrer">
                    <img 
                    class="mr-3" 
                    src={process.env.PUBLIC_URL + "/images/linkedin.png" || "/images/linkedin.png"} 
                    width="35"
                    height="35" 
                    alt="LinkedIn Logo Link to Profile"
                    />
                    </a>

                    <a href="https://www.pinterest.com/ashtastic11/" target="_blank" rel="noreferrer">
                    <img 
                    class="mr-3" 
                    src={process.env.PUBLIC_URL + "/images/pinterest.png" || "/images/pinterest.png"} 
                    width="35"
                    height="35" 
                    alt="Pinterest Logo Link to Profile"
                    />
                    </a>
                    </p>


    </footer>
    )
};
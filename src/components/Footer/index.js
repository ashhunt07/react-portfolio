import React from 'react';
import './style.css';

export default function Header () {
    return(
        <footer className="container-fluid text-center main-footer">
            {/* <small>Copyright &copy; Ashley's Portfolio</small> */}
            <ul className="navbar-nav list-inline">
                    <li className="nav-item"> Connect with me:
                    </li>
                    <li class="nav-item list-inline-item">
                        <a className="nav-link" href="https://github.com/ashhunt07" target="_blank" rel="noreferrer">LinkedIn</a>
                    </li>
                    <li class="nav-item list-inline-item">
                        <a className="nav-link" href="https://github.com/ashhunt07" target="_blank" rel="noreferrer">GitHub</a>
                    </li>
                </ul>
    </footer>
    )
};
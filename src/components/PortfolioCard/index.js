import React from "react";
import "./style.css";


function PortfolioCard(props) {
    return (
    <div className="card">

        <div className="img-container">

            <img alt={props.title} src={props.image} />


            {/* <img src="process.env.PUBLIC_URL + {props.image} || { props.image }"
            alt="Ashley logo" /> */}
        </div>
        <div className="title-container">
            <h2 className="text-center mt-2">
                {props.title}
            </h2>
        </div>

    <div className="content">
    <ul>
        <li>
            <span>{props.description}</span>
        </li>
        <li>
            <a href={props.live} target="_blank" rel="noreferrer" className="btn mr-3 mt-2">View Project</a>
            <a href={props.repo} target="_blank" rel="noreferrer" className="btn mt-2">View Repo</a>
        </li>
        </ul>
    </div>

    </div>
    );
}

export default PortfolioCard;

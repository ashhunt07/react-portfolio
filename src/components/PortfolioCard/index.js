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
            <h3 className="text-center mt-2">
                {props.title}
            </h3>
        </div>

    <div className="content">
    <ul>
        <li>
            <span>{props.description}</span>
        </li>
        <li>
            <span>{props.live}</span>
        </li>
        <li>
            <span>{props.repo}</span>
        </li>
        <li>
            <span>{props.phone}</span>
        </li>
        </ul>
    </div>

    </div>
    );
}

export default PortfolioCard;

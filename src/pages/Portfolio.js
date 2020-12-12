import React from "react";
import Wrapper from "../components/Wrapper";
import PortfolioCard from "../components/PortfolioCard";
import CardWrapper from "../components/CardWrapper";

// employee info
import portfolio from "../portfolio.json";

export default function Portfolio () {
    return(
        <Wrapper>
        <CardWrapper>
            {portfolio.map(e => (
                <PortfolioCard
                    key={e.id}
                    title={e.title}
                    image={e.image}
                    description={e.description}
                    live= {e.live}
                    repo= {e.repo}
                />
            ))}
        </CardWrapper>  
    </Wrapper>
    );
}

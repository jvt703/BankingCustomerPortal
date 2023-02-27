import React from "react";


const HeaderComponent = ({pageName, pageDescription})=>{
    return(
        <header>
            <h1 className="Header-banner">{pageName}</h1>
            <p className="Header-banner-description">{pageDescription}</p>
        </header>
    )

}

export default HeaderComponent;
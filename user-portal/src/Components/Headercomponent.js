import React from "react";

const HeaderComponent = ({pageName, pageDescription})=>{
    return (
        <header className=" Header py-4 ">
        <div className="banner-container container">
          <h1 className="Header-banner ">{pageName}</h1>
          <h4 className="Header-banner-description">{pageDescription}</h4>
        </div>
        </header>
    );

}

export default HeaderComponent;